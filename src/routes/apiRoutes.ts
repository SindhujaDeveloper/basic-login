const enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export const API = {
  login: { apiPath: '', action: HttpMethods.POST }
}
