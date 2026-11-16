export const services = [
  { icon: '◈', title: 'Webアプリ開発', text: '目的や使う人に合わせて、必要な機能を整理しながらWebアプリを形にします。' },
  { icon: '⌘', title: '業務効率化・自動化', text: '日々の繰り返し作業を見直し、ツールや小さな自動化で負担を減らします。' },
  { icon: '▤', title: 'Webサイト制作', text: '情報が伝わりやすく、スマートフォンでも使いやすいWebサイトを制作します。' },
  { icon: '⌁', title: 'システム改善', text: '既存のWebサイトやツールの課題を確認し、段階的な改善をお手伝いします。' },
];
export const products: { name: string; description: string; status: '公開中' | '準備中'; url?: string }[] = [];
export const works: { title: string; description: string; url?: string; approved: boolean }[] = [];
export const prices = [
  ['1ページWebサイト', '5,000円〜'], ['3ページWebサイト', '15,000円〜'], ['CSV整理ツール', '5,000円〜'],
  ['業務自動化', '8,000円〜'], ['Webアプリ開発', '個別見積もり'], ['軽微な修正', '1,000円〜'],
];
export const process = ['お問い合わせ', '内容確認', 'お見積もり', '開発', '動作確認', '納品'];
