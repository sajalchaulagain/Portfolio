// ============================================================
// COMPONENT: FloatingShapes
// ============================================================
// Decorative animated background shapes that float around.
// Pure CSS animation — no JS needed.
//
// ANIMATION SETTINGS: Edit .shape-N styles in global.css
// TO REMOVE: delete <FloatingShapes /> from App.jsx
// ============================================================

export default function FloatingShapes() {
  return (
    <div className="floating-shapes" aria-hidden="true">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
      <div className="shape shape-5"></div>
    </div>
  );
}
