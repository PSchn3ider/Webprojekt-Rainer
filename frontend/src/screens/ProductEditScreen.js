import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

export default function ProductEditScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;
  const [name, setName] = useState('');
  const [bild, setBild] = useState('');
  const [preis, setPreis] = useState('');
  const [beschreibung, setBeschreibung] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      navigate('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setBild(product.bild);
      setPreis(product.preis);
      setBeschreibung(product.beschreibung);
    }
  }, [product, dispatch, productId, successUpdate, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        bild,
        preis,
        beschreibung,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setBild(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Produkt Bearbeiten {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
       
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name eingeben"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="preis">Preis</label>
              <input
                id="preis"
                type="text"
                placeholder="Preis eingeben"
                value={preis}
                onChange={(e) => setPreis(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="bild">Bild</label>
              <input
                id="bild"
                type="text"
                placeholder="Bild hochladen"
                value={bild}
                onChange={(e) => setBild(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Bilddatei</label>
              <input
                type="file"
                id="imageFile"
                label="Bild auswählen"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="beschreibung">Beschreibung</label>
              <textarea
                id="beschreibung"
                rows="3"
                type="text"
                placeholder="Produktbeschreibung"
                value={beschreibung}
                onChange={(e) => setBeschreibung(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Aktualisieren
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}