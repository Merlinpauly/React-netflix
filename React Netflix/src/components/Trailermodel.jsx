import "../styles/Dashboard.css";
function Trailermodel({ onClose, show }) {
    if (!show) {
        return null;
    }

    return (
        <div>
            <div className="trailer-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✕
                </button>

                <iframe
                    src="https://www.youtube.com/embed/Mzw2ttJD2qQ?autoplay=1&rel=0"
                    title="Trailer"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>

            </div>
        </div>
    );

}
export default Trailermodel;