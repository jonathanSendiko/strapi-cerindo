import React, { memo } from 'react';

import { Block, Container } from './components';
import Image from '../../assets/images/logo-strapi.png'
import './index.css';
import {Explanatory, Content, Collection, Single} from './hideMeScript.js';

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const [explanatory, setExplanatory] = React.useState(false);
  const [content, setContent] = React.useState(false);
  const [collection, setCollection] = React.useState(false);
  const [single, setSingle] = React.useState(false);
  const onClickExp = () => setExplanatory(!explanatory);
  const onClickContent = () => setContent(!content);
  const onClickCollection = () => setCollection(!collection);
  const onClickSingle = () => setSingle(!single);

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
                Apa saja tipe konten dari CMS Website Cerindo? <button className="button" onClick={onClickExp}>Click me</button>
              </div>
              
              <div className="body bodyTextOnly">
                {explanatory ? <Explanatory/> : null}
              </div>
              <div className="subHeader">
                Apa saja isi dari <i>Collection Types</i> dan <i>Single Types</i>? <button className="button" onClick={onClickContent}>Click me</button>
              </div>
              <div className="body">
                {content ? <Content/> : null}
              </div>
              <div className="subHeader">
                Jika ingin meng-update salah satu<i> Collection Types</i> : <button className="button" onClick={onClickCollection}>Click me</button>
              </div>
              <div className="body">
                {collection? <Collection/> : null}
              </div>
              <div className="subHeader">
                Jika ingin mengubah atau meng-update salah satu<i> Single Types</i> : <button className="button" onClick={onClickSingle}>Click me</button>
              </div>
              <div className="body">
                {single? <Single/> : null}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);