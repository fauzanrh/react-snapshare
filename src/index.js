import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class Snapshare extends React.Component {
  componentDidMount() {
    (function(d, s, id) {
      let js;
      let sjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://sdk.snapkit.com/js/v1/create.js';
      sjs.parentNode.insertBefore(js, sjs);
    })(document, 'script', 'snapkit-creative-kit-sdk');
  }

  render() {
    const {
      dataShareUrl,
      dataTheme,
      dataSize,
      dataText,
      siteName,
      sitetitle,
      stickerAssetURL,
      publisherID
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>Testing</title>
          <meta content={siteName} property='og:site_name' />
          <meta content={sitetitle} property='og:title' />
          <meta content={stickerAssetURL} property='snapchat:sticker' />
          <meta content={publisherID} property='snapchat:publisher' />
        </Helmet>
        <div
          className='snapchat-creative-kit-share'
          data-share-url={dataShareUrl}
          data-theme={dataTheme}
          data-size={dataSize}
          data-text={dataText}
        >
          Share on Snapchat
        </div>
      </div>
    );
  }
}

class SnapshareCustom extends React.Component {
  componentDidMount() {
    (function(d, s, id) {
      let js;
      let sjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://sdk.snapkit.com/js/v1/create.js';
      sjs.parentNode.insertBefore(js, sjs);
    })(document, 'script', 'snapkit-creative-kit-sdk');

    window.snapKitInit = function() {
      snap.creativekit.initalizeShareButtons(
        document.getElementsByClassName('snapchat-share-button')
      );
    };
  }

  render() {
    const {
      customButtonStyles,
      customButtonClass,
      dataShareUrl,
      siteName,
      sitetitle,
      stickerAssetURL,
      publisherID
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>Testing</title>
          <meta content={siteName} property='og:site_name' />
          <meta content={sitetitle} property='og:title' />
          <meta content={stickerAssetURL} property='snapchat:sticker' />
          <meta content={publisherID} property='snapchat:publisher' />
        </Helmet>
        <button
          style={customButtonStyles}
          className={'snapchat-share-button' + customButtonClass}
          data-share-url={dataShareUrl}
        >
          Share on Snapchat
        </button>
      </div>
    );
  }
}

Snapshare.propTypes = {
  dataShareUrl: PropTypes.string,
  dataTheme: PropTypes.string,
  dataSize: PropTypes.string,
  dataText: PropTypes.string,
  siteName: PropTypes.string,
  sitetitle: PropTypes.string,
  stickerAssetURL: PropTypes.string,
  publisherID: PropTypes.string
};

Snapshare.defaultProps = {
  dataShareUrl: 'https://kit.snapchat.com/',
  dataTheme: 'light',
  dataSize: 'large',
  dataText: 'true',
  siteName: 'Snapchat',
  sitetitle: 'The Fastest Way to Share a Moment!',
  stickerAssetURL: 'https://kit.snapchat.com/ckweb/test/image.png',
  publisherID: ''
};

SnapshareCustom.propTypes = {
  customButtonStyles: PropTypes.object,
  customButtonClass: PropTypes.string,
  dataShareUrl: PropTypes.string,
  siteName: PropTypes.string,
  sitetitle: PropTypes.string,
  stickerAssetURL: PropTypes.string,
  publisherID: PropTypes.string
};

SnapshareCustom.defaultProps = {
  customButtonStyles: {},
  customButtonClass: '',
  dataShareUrl: 'https://kit.snapchat.com/',
  siteName: 'Snapchat',
  sitetitle: 'The Fastest Way to Share a Moment!',
  stickerAssetURL: 'https://kit.snapchat.com/ckweb/test/image.png',
  publisherID: ''
};

export { Snapshare, SnapshareCustom };
