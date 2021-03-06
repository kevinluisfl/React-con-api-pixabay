import React from 'react'

const Imagen = ({imagen}) => {

    //extraer las variables
    // downloads, comments, user
    const {largeImageURL, likes, previewURL, tags, views, favorites, downloads} = imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <p className="card-text">{favorites} Favoritos</p>
                </div>

                <div className="card-footer">
                <a
                    href={largeImageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                >Ver Imagen</a>
                <p className="card-text">{downloads} Descargas</p>
                </div>
            </div>
        </div>
     );
}

export default Imagen;