# CTA GTM Auto (Standalone + Review Gate)

目的：
GTM計測が未設定のCTA（a / button / Next Link）候補を自動抽出し、
**変更前に必ず確認（承認）を挟んでから**、
- 親CTAに gtm-id（class/className）と data-gtm-element-id を追加
-（任意）一括計測用 mcv-trigger を追加
- 子要素クリック問題（img/div/svg/span等で計測漏れ）を pointer-events-none で必ず解消
までを1回で実行する。

---

## 重要（このコマンドの制約）
- 設定ファイル作成/参照は禁止（gtm.config.ts 等）
- import禁止（GTM_IDS 等は禁止）
- 付与するIDは **文字列直書き**で付与する
- このコマンドは **承認されるまでコードを変更しない**

---

## 実行前に必ず確認（MANDATORY）
### Q1. 全CTAを一括計測しますか？（mcv-trigger を付けますか？）
- YES：親CTA（a/button/Link）に `mcv-trigger` を付ける
- NO ：`mcv-trigger` は付けない（gtm-id + data属性のみ）

※ユーザーの回答を待ってから次に進む。

---

## 背景（今回の計測漏れを前提にする）
CTAが `<a>` の中に `<img>/<div>` 等を含むと、
ユーザーは子要素をクリックしがち。
GTM側が「実際にクリックされた要素」を参照していると、
親 `<a>` の gtm-id が拾われず計測漏れになることがある。

対策：
- 子要素（img/svg/div/span等）に `pointer-events-none` を付け、
  クリックを親CTAに必ず「すり抜け」させる。

---

## 絶対ルール（事故防止）
1) GTMタグ（gtm-id / data-gtm-element-id / mcv-trigger）は **親のクリック要素だけ**に付ける  
2) 1クリック要素 = gtm-id は1つ（同一要素に複数の gtm- を混在させない）  
3) 巨大A禁止：`<a>/<Link>` の中に `<a>/<Link>/<button>` を入れない  
4) 子要素クリック対策：CTA配下の img/svg/div/span 等は `pointer-events-none`  

---

## CTA候補の抽出方針（文言縛りではなくUI文脈ベース）
CTA候補とは、主に「目立つ主要アクション」。
以下の複合判断で候補を抽出する（単一条件に依存しない）：

- 見た目がボタン/CTAっぽい（例：rounded, bg/gradient, shadow, h-12/h-14, w-full, font-bold, text-white 等）
- 画像CTAっぽい（リンクが画像を包む／CTA画像）
- 画面上で目立つ配置（ヒーロー、セクション末尾、固定フッター、カード内の主ボタン等）
- formの送信ボタン（type=submit）や、主導線ボタン

ナビっぽい小リンク群（ヘッダー/フッターのメニュー列・規約リンク等）は
「CTAとして明らかでない限り」候補から外す。

---

## gtm-id の自動生成ルール（文字列直書き）
`gtm-{type}-{context}-{action}` を生成する。重複は末尾 `-2`, `-3` で回避。

- type：button / link（a, Link は link）
- action：文脈から推定（trial/contact/tel/line/submit/more/cta 等）
- context：ファイル名/コンポーネント名/配置から推定（hero/gallery/fixed-footer/cta-section/section 等）

例：
- gtm-link-gallery-trial
- gtm-button-hero-cta
- gtm-link-fixed-footer-trial
- gtm-button-section-cta-2

---

## ✅ Review Gate（ここが追加ポイント：必ず承認を挟む）

### Pass 1：候補抽出（まだ変更しない）
1) 対象範囲を走査（優先：`app/**/*.(tsx|jsx)`, `src/**/*.(tsx|jsx)`, `**/*.html`）
2) a/button/Link を抽出し、CTA候補を選定
3) 各候補について「提案変更」を作る（この時点ではコード変更しない）
   - 付与する gtm-id（文字列）
   - data-gtm-element-id（同一文字列）
   - Q1=YESなら mcv-trigger を親に付与
   - 子要素への pointer-events-none 追加案
   - 巨大Aや入れ子クリックがあれば修正案

### Pass 1.5：候補一覧の提示（ここで必ず停止）
候補を番号付きで一覧表示し、ユーザーに承認を求める。
表示形式は必ず以下を含める：

- [番号] ファイルパス
- 要素種別（a / button / Link）
- その要素の役割（AI推定の“CTA理由”を短く）
- 現在の属性（href / type / onClick 有無、class/className の有無）
- 提案する gtm-id（例：gtm-link-gallery-trial）
- 追加する属性（data-gtm-element-id、必要なら mcv-trigger）
- pointer-events-none を追加する子要素（img/svg/div/span 等）
- 入れ子クリック（巨大A）がある場合、その修正方針

そして必ず質問して停止：
- 「どれに適用しますか？」
  - A) 全部適用
  - S) 番号指定（例：1,3,7）
  - N) 何もしない
  - R) 再抽出（抽出条件を少し変えてやり直し）

※ユーザーの回答を待ってから次へ進む（この時点で勝手に編集しない）。

---

## Pass 2：承認されたものだけ実際に編集（付与 + 不具合対策）
ユーザー承認に従って、選ばれた候補だけを編集する。

### 親CTAに付与（必須）
- className/class に gtm-id を追加（既存があれば末尾または先頭に追記）
- data-gtm-element-id="同じgtm-id" を追加
- Q1=YES の場合のみ className/class に mcv-trigger を追加（親のみ）

### 子要素クリック問題の解消（必須）
- CTA配下の img/svg/div/span 等に pointer-events-none を追加
- 背景画像overlay（absolute）も pointer-events-none

### 事故修正（見つけたら必ず直す）
- 巨大A（入れ子クリック）を解消：クリック要素を分離
- 子要素に gtm-/mcv-trigger/data-gtm-element-id が付いていたら除去（親に集約）
- 1要素に gtm- が複数混在していたら統一（必要なら要素分割）

---

## 完了レポート（短く）
- 変更ファイル一覧
- 適用した候補番号と、付与した gtm-id（mcv-trigger有無）
- pointer-events-none を付与した子要素の種類
- 巨大A修正があれば要約
- 適用しなかった候補があれば理由
