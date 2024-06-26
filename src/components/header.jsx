import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby'
import {resolveI18nPath} from '../i18n';
import logo from '../assets/EF_WHT-OR_png.png';
import jkubeLogo from '../assets/jkube-logo-horizontal-white.svg';

const cClass = 'eclipse-jkube__header';

const TM = () => (
  <span className={`${cClass}-trade-mark`}>&trade;</span>
);

export const Header = ({locale}) => {
  const resolvePath = resolveI18nPath(locale);
  return (
    <header className={cClass}>
      <div className={`${cClass}-container`}>
        <Link to={resolvePath('/')} className={`${cClass}-logo`}>
          <div className={`${cClass}-logo-eclipse-image`}><img src={logo} alt='Eclipse Foundation' /></div>
          <div className={`${cClass}-logo-jkube`}>
            <img className={`${cClass}-logo-jkube-image`} src={jkubeLogo} alt='JKube' /><TM/>
          </div>
        </Link>
        <div className={`${cClass}-content`}>
          <ul>
            <li><Link to={resolvePath('/docs')}>Docs</Link></li>
            <li><Link to={resolvePath('/demos')}>Demos</Link></li>
            <li><Link to={resolvePath('/community')}>Community</Link></li>
            <li><Link to={resolvePath('/contributing')}>Contributing</Link></li>
            <li>
              <a
                className={`${cClass}-stars`}
                href='https://github.com/eclipse-jkube/jkube' title='eclipse-jkube/jkube'
                target='_blank' rel='noopener'
              >
                <img src='https://img.shields.io/github/stars/eclipse-jkube/jkube?style=social' alt='eclipse-jkube/jkube stargazers' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  locale: PropTypes.string.isRequired,
};
