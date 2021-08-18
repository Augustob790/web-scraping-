import GetToken from '../../localStorage/GetToken';
import { headerAxiosAutorization } from '../../../types/headerAxiosAutorization';

const headerAxios = (): headerAxiosAutorization => {
  const getToken = new GetToken();
  const token = getToken.get();

  const bearerToken: headerAxiosAutorization = {
    headers: {
      Authorization: token,
    },
  };

  return bearerToken;
};

export default headerAxios;
