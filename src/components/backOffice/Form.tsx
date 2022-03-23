import * as RB from 'react-bootstrap'
import { useState } from 'react'
import { Storage, API, graphqlOperation } from 'aws-amplify'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState, productState } from '../atoms'
import { createProduct } from '../../graphql/mutations'
import awsExports from '../../aws-exports'
import './styles.scss'


export default function Form() {

    const initialState = {
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        file: {
            bucket: '',
            region: '',
            key: ''
        }
    }

    const [newProduct, updateNewProduct] = useState(initialState)
    const [product, updateProduct] = useRecoilState(productState)
    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    function updateInput(key: string, value: string) {
        updateNewProduct({ ...newProduct, [key]: value });
    }

    function target(e: any) {
        if (e.target && e.target.files[0]) {
            const file = e.target.files[0]
            console.log('This is the file', file)

            Storage.put(file.name, file, {
                contentType: 'image/png|image/jpeg|image/jpg'
            }).then((response) => {
                const image = {
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: 'public/' + file.name
                }
                updateNewProduct({ ...newProduct, file: image })
                console.log('Sucessfully uploaded', image)
            })
        }
    }

    async function createProd() {
        try {
            const newItem = { ...newProduct }

            if (newProduct.image === null || undefined) {
                const imageFilePath = newProduct.file.key.split('/').slice(-1).join()

                const imageUrl = await Storage.get(imageFilePath, { expires: 10080 })
                newItem.image = imageUrl
            }

            updateProduct([...product, newItem]);
            updateNewProduct(initialState);

            await API.graphql(graphqlOperation(createProduct, { input: newItem }));
        } catch (error) {
            console.log("Error creating product:", error);
        }
    }

    return (
        <RB.Form id='form'>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.name}
                    type='text'
                    onChange={(e) => updateInput('name', e.target.value)}
                    placeholder='name' />
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.description}
                    type='text'
                    onChange={(e) => updateInput('description', e.target.value)}
                    placeholder='description' />
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    type='text'
                    onChange={(e) => updateInput('image', e.target.value)}
                    placeholder='image url' />
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    type='file'
                    onChange={(e) => target(e)}
                    placeholder='image url' />
            </RB.FormGroup>
            <RB.FormGroup className='position-relative'>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.price}
                    type='text'
                    onChange={(e) => updateInput('price', e.target.value)}
                    placeholder='price' />

                <select className={check ? 'select' : 'select-dark'}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.category}
                    type='text'
                    onChange={(e) => updateInput('category', e.target.value)}
                    placeholder='category' />
            </RB.FormGroup>
            <div className='d-flex justify-content-center mt-5'>
                {!newProduct.category ?
                    <RB.Button
                        disabled
                        onClick={createProd}
                        className={check ? 'addProdBtn' : 'addProdBtn-dark'}
                        variant='success'>
                        <span className='btn-span'>Add product</span>
                    </RB.Button>
                    :
                    <RB.Button
                        onClick={createProd}
                        className={check ? 'addProdBtn' : 'addProdBtn-dark'}
                        variant='success'>
                        <span className='btn-span'>Add product</span>
                    </RB.Button>
                }
            </div>

        </RB.Form>
    )
}

export function UpdateForm() {
    const initialState = {
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        file: {
            bucket: '',
            region: '',
            key: ''
        }
    }

    const [newProduct, updateNewProduct] = useState(initialState)
    const [products, updateProducts] = useRecoilState(productState)
    const [selected, updateSelected] = useState(0)
    const index = products.findIndex((p, idx) => idx === selected)

    const productToUpdate = products[index]
    console.log('Product to update', productToUpdate)

    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    function updateInput(key: string, value: string) {
        updateNewProduct({ ...newProduct, [key]: value });
    }

    function target(e: any) {
        if (e.target && e.target.files[0]) {
            const file = e.target.files[0]
            console.log('This is the file', file)

            Storage.put(file.name, file, {
                contentType: 'image/png|image/jpeg|image/jpg'
            }).then((response) => {
                const image = {
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: 'public/' + file.name
                }
                updateNewProduct({ ...newProduct, file: image })
                console.log('Sucessfully uploaded', image)
            })
        }
    }

    async function update() {
        try {
            
        } catch (error) {
            console.log('Unable to update product', error)
        }
    }

    return (
        <RB.Form id='form'>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.name}
                    type='text'
                    onChange={(e) => updateInput('name', e.target.value)}
                    placeholder='name' />
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.description}
                    type='text'
                    onChange={(e) => updateInput('description', e.target.value)}
                    placeholder='description' />
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    type='text'
                    onChange={(e) => updateInput('image', e.target.value)}
                    placeholder='image url' />
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    type='file'
                    onChange={(e) => target(e)}
                    placeholder='image url' />
            </RB.FormGroup>
            <RB.FormGroup className='position-relative'>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.price}
                    type='text'
                    onChange={(e) => updateInput('price', e.target.value)}
                    placeholder='price' />

                <select className={check ? 'select' : 'select-dark'}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </RB.FormGroup>
            <RB.FormGroup>
                <RB.FormControl
                    className={check ? 'formControl' : 'formControl-Dark'}
                    value={newProduct.category}
                    type='text'
                    onChange={(e) => updateInput('category', e.target.value)}
                    placeholder='category' />
            </RB.FormGroup>
            <div className='d-flex justify-content-center mt-5'>
                {!newProduct.category ?
                    <RB.Button
                        disabled
                        onClick={update}
                        className={check ? 'addProdBtn' : 'addProdBtn-dark'}
                        variant='success'>
                        <span className='btn-span'>Add product</span>
                    </RB.Button>
                    :
                    <RB.Button
                        onClick={update}
                        className={check ? 'addProdBtn' : 'addProdBtn-dark'}
                        variant='success'>
                        <span className='btn-span'>Add product</span>
                    </RB.Button>
                }
            </div>

        </RB.Form>
    )
}
