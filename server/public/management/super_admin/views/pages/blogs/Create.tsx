import React, { useEffect, useState } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../store';
import { store } from './config/store/async_actions/store';
import Input from './components/management_data_page/Input';
import InputImage from './components/management_data_page/InputImage';
import { anyObject } from '../../../common_types/object';
import DropDown from './components/dropdown/DropDown';
import DateEl from '../../components/DateEl';
import storeSlice from './config/store';
import { useParams } from 'react-router-dom';
import { details } from './config/store/async_actions/details';
import Select from 'react-select';
import { initialState } from './config/store/inital_state';
import { useSelector } from 'react-redux';
import CategoryDropDown from "../blog_category/components/dropdown/DropDown";

export interface Props { }


const Create: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const [data, setData] = useState<anyObject>({});

    async function handle_submit(e) {
        e.preventDefault();
        let form_data = new FormData(e.target);
        // console.log('data', data.getData())
        form_data.append('full_description', data.getData());

        const response = await dispatch(store(form_data) as any);
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
            e.target.reset();
            // init_nominee();
        }
    }

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
    }, []);



    function get_value(key) {
        try {
            if (state.item[key]) return state.item[key];
            if (state.item?.info[key]) return state.item?.info[key];
        } catch (error) {
            return '';
        }
        return '';
    }

    /* CKEDITOR RICH TEXT*/
    useEffect(() => {
        let editor = CKEDITOR.replace('full_description');
        setData(editor);
    }, [])

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.create_page_title}></Header>
                    <div className="content_body custom_scroll">
                        <form
                            onSubmit={(e) => handle_submit(e)}
                            className="mx-auto pt-3"
                        >
                            <div>


                                <h5 className="mb-4">Blogs Informations</h5>
                                <div className="row">
                                    <div className='col-8'>
                                        <label> Full Description</label>
                                        <div id='full_description'>

                                        </div>
                                        <div className="form-group">
                                            <label>Short Description</label>
                                            <textarea className="form-control" name='short_description' id="short_description" rows={3}></textarea>
                                        </div>

                                        {[
                                            'title',
                                            'slug',
                                            'seo_title',
                                            'seo_keyword',
                                            'seo_description',
                                        ].map((i) => (
                                            <div className="form-group form-vertical">
                                                <Input name={i} />
                                            </div>
                                        ))}

                                    </div>

                                    <div className='col-4'>

                                        <div className="form_auto_fit">


                                            <div className="form-group form-vertical">
                                                <label>Blog Categories</label>
                                                <CategoryDropDown name="blog_categories"
                                                    multiple={true}
                                                    get_selected_data={(data) => {
                                                        console.log(data)
                                                    }}
                                                />
                                            </div>

                                            {/* RADIO OPTIONS */}
                                            <label>Is Published?</label>
                                            <div style={{
                                                paddingBottom: 10
                                            }}>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="is_published"
                                                        value="publish"
                                                        checked={get_value('status') === 'publish'}
                                                        onChange={(e) => {
                                                            const formData = new FormData();
                                                            formData.set('status', e.target.value);
                                                            dispatch(
                                                                storeSlice.actions.set_item({
                                                                    ...state.item,
                                                                    status: e.target.value,
                                                                })
                                                            );
                                                        }}
                                                    />
                                                    Publish
                                                </label>
                                                <br/>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="is_published"
                                                        value="draft"
                                                        checked={get_value('status') === 'draft'}
                                                        onChange={(e) => {
                                                            const formData = new FormData();
                                                            formData.set('status', e.target.value);
                                                            dispatch(
                                                                storeSlice.actions.set_item({
                                                                    ...state.item,
                                                                    status: e.target.value,
                                                                })
                                                            );
                                                        }}
                                                    />
                                                    Draft
                                                </label>
                                            </div>



                                            <div className="form-group grid_full_width form-vertical">
                                                <label>Publish Date</label>
                                                <DateEl
                                                    value={''}
                                                    name={'publish_date'}
                                                    handler={() => { console.log('arguments') }}
                                                ></DateEl>
                                            </div>

                                            <div className="form-group grid_full_width form-vertical">
                                                <InputImage
                                                    label={'Cover Image'}
                                                    name={'cover_image'}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div
                                    className='row'
                                >
                                    <div className='col-12'>
                                        {/* {[
                                            'title',
                                            'short_description',
                                        ].map((i) => (
                                            <div className="form-group form-vertical">
                                                <Input name={i} />
                                            </div>
                                        ))} */}

                                    </div>



                                </div>
                            </div>

                            <div className="form-group form-vertical">
                                <label></label>
                                <div className="form_elements">
                                    <button className="btn btn_1 btn-outline-info">
                                        submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Create;