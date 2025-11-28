# Excel Site Guide

サイト構成ガイドのExcelファイルを生成します（クライアント向け修正指示用）。

## Context Files

- `pentagon/README (3).md`
- `pentagon/generate_site_guide (5).py`
- `pentagon/config_sample (2).yaml`
- `memories/excel_guide_workflow.yaml`

## Instructions

**🚨 重要: サイトのコンポーネントを読み込んで config.yaml を作成し、Excelファイルを生成します。**

1. **pentagon ディレクトリの3つのファイルを読み込む:**
   - `pentagon/README (3).md` （ツールの使い方）
   - `pentagon/generate_site_guide (5).py` （生成スクリプト）
   - `pentagon/config_sample (2).yaml` （config.yamlの書き方）

2. **サイト構造を把握:**
   - `app/components/shared/Header.tsx` → ナビゲーション順でページ順を決定
   - `app/components/shared/Footer.tsx` → フッター内容を把握

3. **各ページの構造を確認:**
   - 各ページの `page.tsx` を読み、コンポーネントの並び順を把握
   - 各コンポーネント `.tsx` を読み、テキスト要素を抽出

4. **config.yaml を作成:**
   - `pentagon/config.yaml` として保存
   - config_sample の形式に従う

5. **Excelファイルを生成:**
   - コマンド実行: `cd pentagon && python "generate_site_guide (5).py" config.yaml output`

## Config.yaml の作成ルール

- `site_name`: 英数字のみ（ファイル名に使用）
- `common_sections`: ヘッダー・フッター（全ページ共通）
- `pages`: 各ページの定義（Header.tsx のナビ順に従う）
  - `name`: ページ名
  - `sections`: セクション一覧（page.tsx の並び順に従う）
    - `name`: セクション名
    - `content`: 内容（テキスト）

## Content の記載ルール

- 【セクション名】で始める
- 見出し、説明文、ボタンを改行区切りで記載
- ボタン・リンクは ► を先頭につける
- 箇条書きは ・ を使用
- サブセクションは ■ を使用

## Execution Example

**User:** `/excel-guide`

**AI Action:**
```
[Step 1] pentagon ディレクトリのファイルを読み込み
  ✅ README、スクリプト、サンプル確認

[Step 2] サイト構造を把握
  ✅ Header.tsx → ナビ順確認
  ✅ Footer.tsx → フッター内容確認

[Step 3] 各ページの構造を確認
  ✅ home/page.tsx → セクション順確認
  ✅ 各コンポーネント → テキスト抽出

[Step 4] config.yaml を作成
  ✅ pentagon/config.yaml 生成

[Step 5] Excelファイルを生成
  ✅ コマンド実行
  ✅ pentagon/output/ にExcelファイル保存

✅ サイト構成ガイドのExcel生成が完了しました！
```

