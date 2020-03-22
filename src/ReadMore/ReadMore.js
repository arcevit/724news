import React, { useContext, useState } from 'react';
import { ArticleContext } from '../Context';
import Loading from '../Loading';
import Default from '../Defaut';

export default function ReadMore(props) {
  const [articleParams] = useState(props.match.params.publishedAt);
  const { handleDetails } = useContext(ArticleContext);
  const thearticle = handleDetails(articleParams);
  if (articleParams === '!') {
    return <Default />;
  }
  if (!thearticle) {
    return <Loading />;
  }
  return (
    <div className='container'>
      <section className='my-5'>
        <div className='row'>
          <div className='col-lg-3 col-sm-12 pt-3 card-header border-0 font-weight-bold'>
            <div className='media-body'>
              <h3 className='font-weight-bold mt-0'>
                <span className='text-primary'>{thearticle.author}</span>

                <ul className='list-unstyled list-inline pt-3 d-flex justify-content-around'>
                  <li className='list-inline-item'>
                    <a className='text-secondary mr-1' href='!#'>
                      <i className='fa fa-lg fa-facebook'> </i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='text-secondary mr-1' href='!#'>
                      <i className='fa fa-lg fa-twitter'> </i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='text-secondary mr-1' href='!#'>
                      <i className='fa fa-lg fa-google-plus'> </i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='text-secondary mr-1' href='!#'>
                      <i className='fa fa-lg fa-linkedin'> </i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='text-secondary mr-1' href='!#'>
                      <i className='fa fa-lg fa-instagram'> </i>
                    </a>
                  </li>
                </ul>
              </h3>
              <h3>
                <div className='card-header border-0 font-weight-bold d-flex justify-content-between'>
                  <ul className='list-unstyled d-flex flex-column  align-item-between mb-0'>
                    <li className='list-inline-item'>
                      <a className='text-default mr-3' href='!#'>
                        <i className='fa fa-envelope mt-2'></i> Send message
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a className='text-default mr-3' href='!#'>
                        <i className='fa fa-user mt-3'></i> See profile
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a className='text-default mr-3' href='!#'>
                        <i className='fa fa-rss mt-3'></i> Follow
                      </a>
                    </li>
                  </ul>
                </div>
              </h3>
            </div>
          </div>

          <div className='col-lg-9 col-sm-12'>
            <div className='card border-0'>
              <img
                className='card-img-top img-fluid px-5'
                src={thearticle.urlToImage}
                alt='...'
              />
              <div className='card-block'>
                <h5 className='text-muted pt-3'>{thearticle.publishedAt}</h5>
                <h3 className='card-title py-3 font-weight-bolder'>
                  {thearticle.title}
                </h3>
                <p className='card-text'>{thearticle.description}</p>
                <p className='card-text'>{thearticle.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
