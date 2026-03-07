/**
 * themes.js — Shared theme configuration for 대화 카드 (Conversation Card App)
 *
 * Each theme defines:
 *   id          — machine-readable identifier
 *   name        — Korean display name
 *   nameEn      — English subtitle / label
 *   desc        — short description shown on deck-select screen
 *   icon        — emoji icon representing the theme
 *   color       — primary accent color (hex)
 *   colorLight  — light background tint (hex)
 *   colorRgb    — RGB values of primary color for rgba() usage
 */

const THEMES = [
  {
    id: 'friend',
    name: '친구',
    nameEn: 'Friends',
    desc: '서로를 더 깊이 알아가는 질문들',
    icon: '🧡',
    color: '#f97316',       // warm orange
    colorLight: '#fff3ec',
    colorRgb: '249, 115, 22',
  },
  {
    id: 'daily',
    name: '일상',
    nameEn: 'Daily Life',
    desc: '소소한 일상에서 발견하는 이야기',
    icon: '🌿',
    color: '#10b981',       // emerald
    colorLight: '#ecfdf5',
    colorRgb: '16, 185, 129',
  },
  {
    id: 'life',
    name: '인생',
    nameEn: 'Life',
    desc: '삶의 방향과 가치를 탐색하는 질문들',
    icon: '✨',
    color: '#8b5cf6',       // violet
    colorLight: '#f5f3ff',
    colorRgb: '139, 92, 246',
  },
  {
    id: 'career',
    name: '진로',
    nameEn: 'Career',
    desc: '일과 커리어에 대한 진지한 탐색',
    icon: '🔵',
    color: '#3b82f6',       // blue
    colorLight: '#eff6ff',
    colorRgb: '59, 130, 246',
  },
  {
    id: 'mind',
    name: '마음',
    nameEn: 'Inner Mind',
    desc: '내면의 감정과 심리를 들여다보는 질문',
    icon: '🌸',
    color: '#f43f5e',       // rose
    colorLight: '#fff1f2',
    colorRgb: '244, 63, 94',
  },
  {
    id: 'couple',
    name: '연인',
    nameEn: 'Couple',
    desc: '사랑과 관계를 더 깊이 이해하는 질문들',
    icon: '💕',
    color: '#ec4899',       // pink
    colorLight: '#fdf2f8',
    colorRgb: '236, 72, 153',
  },
  {
    id: 'family',
    name: '가족',
    nameEn: 'Family',
    desc: '가장 가까운 사람들과 나누는 진솔한 대화',
    icon: '🏡',
    color: '#f59e0b',       // amber
    colorLight: '#fffbeb',
    colorRgb: '245, 158, 11',
  },
  {
    id: 'teambuilding',
    name: '팀빌딩',
    nameEn: 'Team Building',
    desc: '동료와 함께 성장하는 팀워크 질문들',
    icon: '🤝',
    color: '#06b6d4',       // cyan
    colorLight: '#ecfeff',
    colorRgb: '6, 182, 212',
  },
  {
    id: 'yearend',
    name: '신년/송년',
    nameEn: 'Year Reflection',
    desc: '한 해를 돌아보고 새해를 맞이하는 질문들',
    icon: '🎊',
    color: '#eab308',       // yellow
    colorLight: '#fefce8',
    colorRgb: '234, 179, 8',
  },
  {
    id: 'blinddate',
    name: '소개팅',
    nameEn: 'First Meeting',
    desc: '처음 만난 사람과 자연스럽게 대화하는 질문들',
    icon: '💜',
    color: '#a855f7',       // purple
    colorLight: '#faf5ff',
    colorRgb: '168, 85, 247',
  },
];

// Convenience lookup: getTheme('friend') → theme object
function getTheme(id) {
  return THEMES.find(t => t.id === id) || null;
}

// Export for environments that support ES modules;
// in plain <script> tags the globals THEMES / getTheme are available directly.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { THEMES, getTheme };
}
