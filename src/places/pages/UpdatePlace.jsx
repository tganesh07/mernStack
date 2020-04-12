import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_REQUIRE} from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import "./PlaceForm.css";
import { useForm } from '../../shared/hooks/form-hooks';

const DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Famous Skyscrappers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: 'New York',
        location: {
            lat: 0.0,
            lng: 1.0
        },
        creatorId: 'u1'
    },
    {
        id: 'p2',
        title: ' State Building',
        description: 'Famous Skyscrappers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: 'New York',
        location: {
            lat: 0.0,
            lng: 1.0
        },
        creatorId: 'u2'
    }
]

const UpdatePlace = () => {

    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_DATA.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm({
        title : {
        value : identifiedPlace.title,
        isValid : true
      },
      description : {
        value : identifiedPlace.description,
        isValid : true
      },
      address : {
        valid : '',
        isValid : false
      }},
    false);

    if(!identifiedPlace)
    return( <div className="center"><h2>Could not find place!</h2></div>)
    
    const onUpdateHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    return(
            <form className="place-form" onSubmit={onUpdateHandler}>
                <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]}
                    errotText="Please enter a valid title."
                    onInput={ inputHandler}
                    initialValue={formState.inputs.title.value}
                    initialValidity={formState.inputs.title.isValid}
                />
                <Input id="description" 
                    element="textarea"  
                    label="description" 
                    validators={[VALIDATOR_REQUIRE()]}
                    errotText="Please enter a valid description."
                    onInput={ inputHandler}
                    initialValue={formState.inputs.description.value}
                    initialValidity={formState.inputs.description.isValid}
                />
                <Button type="submit" disabled={formState.isValid}Update>Update Place</Button>
            </form>
    );
};

export default UpdatePlace;