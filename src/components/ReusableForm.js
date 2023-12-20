import React from 'react';
import PropTypes from 'prop-types';

const ReusableForm = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <label htmlFor='name'></label>
                <input name='name' placeholder='name of your quiz'></input>
                <br />

                <label htmlFor="question1">{props.question1} </label>
                <textarea rows="5" cols="33"
                    type="text"
                    name="question1"
                    placeholder='First question' />
                <br />
                <input type="text" placeholder="Answers" id='answer1a' name="answer1"/>
                <input type="text" id='answer1b' name="answer1" />
                <input type="text" id='answer1c' name="answer1" />
                <input type="text" id='answer1d' name="answer1" />
                <input type="text" placeholder="Correct Answer" id='correctanswer1' name="answer1"/>
                <br />

                <label htmlFor="question2">{props.question2} </label>
                <textarea rows="5" cols="33"
                    type="text"
                    name="question2"
                    placeholder='second question' />
                <br />

                <label htmlFor="answer2">{props.answer2} </label>
                <input type="text" placeholder="Answers" id='answer2a' name="answer2" />
                <input type="text" id='answer2b' name="answer2" />
                <input type="text" id='answer2c' name="answer2" />
                <input type="text" id='answer2d' name="answer2" />
                <input type="text" placeholder="Correct Answer" id='correctanswer2' name="answer2"/>
                <br />

                <label htmlFor="question3">{props.question3} </label>
                <textarea rows="5" cols="33"
                    type="text"
                    name="question3"
                    placeholder='third question' />
                <br />
                <label htmlFor="answer3">{props.answer3} </label>
                <input type="text" placeholder="Answers" id='answer3a' name="answer3" />
                <input type="text" id='answer3b' name="answer3" />
                <input type="text" id='answer3c' name="answer3" />
                <input type="text" id='answer3d' name="answer3" />

                <input type="text" placeholder="Correct Answer" id='correctanswer3' name="answer3"/>
                
                <br />
                <label htmlFor="question4">{props.question4} </label>
                <textarea rows="5" cols="33"
                    type="text"
                    name="question4"
                    placeholder='forth question' />
                <br />

                <label htmlFor="answer4">{props.answer4} </label>
                <input type="text"placeholder="Answers" id='answer4a' name="answer4" />
                <input type="text" id='answer4b' name="answer4" />
                <input type="text" id='answer4c' name="answer4" />
                <input type="text" id='answer4d' name="answer4" />
                <input type="text" placeholder="Correct Answer" id='correctanswer4' name="answer4"/>
                <br />
                <label htmlFor="question5">{props.question5} </label>
                <textarea rows="5" cols="33"
                    type="text"
                    name="question5"
                    placeholder='fifth question' />
                <br />
                <label htmlFor="answer5">{props.answer5} </label>
                <input type="text" placeholder="Answers" id='answer5a' name="answer5" />
                <input type="text" id='answer5b' name="answer5" />
                <input type="text" id='answer5c' name="answer5" />
                <input type="text" id='answer5d' name="answer5" />
                <input type="text" placeholder="Correct Answer" id='correctanswer5' name="answer5"/>
                <br />
                <button type="submit">{props.buttonText}</button>
            </form>
        </React.Fragment>
    )
}
ReusableForm.propTypes = {
    buttonText: PropTypes.string,
    question5: PropTypes.string,
    question4: PropTypes.string,
    question3: PropTypes.string,
    question2: PropTypes.string,
    question1: PropTypes.string,
    formSubmissionHandler: PropTypes.func
};

export default ReusableForm;