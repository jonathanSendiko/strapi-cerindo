import React, { memo } from 'react';

import { Block, Container } from './components';
import Image from '../../assets/images/logo-strapi.png'
import './index.css';
import {hideMe} from './hideMeScript.js';

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const [openMe, setOpenMe] = React.useState(false);
  const onClick = () => setOpenMe(true);
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={Image} className="logo" alt="logo Cerindo"/> 
            <Block>
              <div className="header font">
                User Manual CMS Website Cerindo
              </div>
              <div className="subHeader">
                Apa saja tipe konten dari CMS Website Cerindo?
              </div>
              <div className="body bodyTextOnly">
                CMS Website Cerindo ini terdiri dari <i>Collection Types</i> dan <i>Single Types</i>. <i>Collection Types</i> merupakan tipe konten yang dapat dipakai berulang-ulang formatnya dan <i>Single Types</i> adalah konten sekali pakai (statis).
              </div>
              <div className="subHeader">
                Apa saja isi dari <i>Collection Types</i> dan <i>Single Types</i>?
              </div>
              <div className="body">
                <ul>
                  <li className="paddingText italic subSubHeader">Collection Types</li>
                    <ul className="italic">
                      <li className="item">Announcements</li>
                      <li className="item">Businesses</li>
                      <li className="item">Career Contents</li>
                      <li className="item">Community Activities</li>
                      <li className="item">Phases</li>
                      <li className="item">Photos Galleries</li>
                      <li className="item">Press News</li>
                      <li className="item">Users</li>
                      <li className="item">Video Galleries</li>
                    </ul>
                  <li className="paddingText italic subSubHeader">Single Types</li>
                    <ul>
                      <li className="italic item">About Us</li>
                      <li className="italic item ">Career</li>
                      <li className="italic item">Global Sustainibility</li>
                      <li className="italic item">Homepage</li>
                    </ul>
                </ul>
              </div>
              <div className="subHeader">
                Jika ingin meng-update salah satu<i> Collection Types</i> :
              </div>
              <div className="body">
                <ol>
                  <li className="item">Ke bagian <i>"Collection Types"</i>. Pilih salah satu untuk diubah atau ditambah.</li>
                  <li className="item">Jika ingin mengubah, klik kontent yang sesuai dan lakukan perubahan.</li>
                  <li className="item">Jika ingin menambah konten, pilih di kanan atas <i>"Add New ---"</i></li>
                  <li className="item">Jangan lupa untuk mempublish</li>
                </ol>
              </div>
              <div className="subHeader">
                Jika ingin mengubah atau meng-update salah satu<i> Single Types</i> :
              </div>
              <div className="body">
                <ol>
                  <li className="item">Pilih ke bagian <i>"Single Types"</i>. Pilh salah satu untuk diedit</li>
                  <li className="item">Jika ingin mengubah, klik kontent yang sesuai dan lakukan perubahan.</li>
                  <li className="item">Jangan lupa untuk men-save!</li>
                </ol>
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);