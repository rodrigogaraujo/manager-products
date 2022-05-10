export interface SignInCredentials {
  email: string
  password: string
}

export interface User {
  name: string,
  email: string,
  password: string,
}

export interface Category {
  name: string,
  id: string,
}

export interface Product {
  name: string,
  id: string,
  description: string,
  value: string,
  category: Category
}

export interface ProductForm {
  name: string,
  description: string,
  value: string,
  category: Category
}

export interface CategoryForm {
  name: string,
}
