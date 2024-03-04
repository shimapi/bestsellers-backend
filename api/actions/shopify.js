import '@shopify/shopify-api/adapters/node';
import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';
import { restResources } from '@shopify/shopify-api/rest/admin/2023-10';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const API_ADMIN_ACCESS_TOKEN = process.env.API_ADMIN_ACCESS_TOKEN;
const API_HOSTNAME = process.env.API_HOSTNAME;
const API_CUSTOM_APP_SESSION = process.env.API_CUSTOM_APP_SESSION;

const shopify = shopifyApi({
  apiKey: API_KEY,
  apiSecretKey: API_SECRET,
  adminApiAccessToken: API_ADMIN_ACCESS_TOKEN,
  apiVersion: LATEST_API_VERSION,
  scopes: ['read_products', 'read_online_store_pages', 'read_product_listings', 'read_product_feeds'],
  hostName: API_HOSTNAME, // ngrok url
  isEmbeddedApp: false,
  isCustomStoreApp: true,
  restResources,
});

const session = shopify.session.customAppSession(API_CUSTOM_APP_SESSION)
const client = new shopify.clients.Rest({ session });


export const getProductAction = async (productID) => {
  try {
    const data = await client.get({
      path: `products/${productID}`,
    });

    if (!data) {
      console.log(data);
      return null;
    }

    return data;
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.",
    });
  }
};

export const getProductsAction = async () => {
  try {
    const data = await client.get({
      path: 'products',
    });
    if (!data) {
      console.log(data);
      return null;
    }
    return data;

  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.",
    });
  }
}

export const getCollectionAction = async () => {
  try {
    const data = await client.get({
      path: 'collections/470605005093',
    });
    console.log('data', data.body.collections); // obtengo colecciones
    if (!data) {
      console.log(data);
      return null;
    }
    return data;
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.",
    });
  }
}

export const getPagesAction = async () => {


  try {
    const pages = await client.get({
      path: 'pages',
    });
    console.log('pages', pages); // obtengo paginas
    if (!pages) {
      console.log(pages);
      return null;
    }
    return pages;
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.",
    });
  }
}