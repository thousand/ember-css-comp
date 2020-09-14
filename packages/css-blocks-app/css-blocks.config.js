const sass = require( 'sass' );
const eyeglass = require( 'eyeglass' );
const path = require( 'path' );
const { adaptAll: scssProcessor, DirectoryScopedPreprocessor } = require( '@css-blocks/eyeglass' );

const BLOCKS_DIR = path.join( __dirname, 'app', 'styles' );

class Preprocessor extends DirectoryScopedPreprocessor {
  setupOptions ( options ) {
    return Object.assign( {}, options );
  }
}

const cssBlocksSassPreprocessor = new Preprocessor( BLOCKS_DIR );
const scss = scssProcessor( [ cssBlocksSassPreprocessor ], sass, eyeglass );

module.exports = {
  preprocessors: { scss },
};
