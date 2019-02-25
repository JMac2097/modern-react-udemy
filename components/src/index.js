import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author = "Derek" 
                    timeAgo="Today at 6:45AM" 
                    comment="Nice work man!" 
                    imageSrc={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author = "Arnold" 
                    timeAgo="Today at 08:00PM" 
                    comment="Hasta la vista etc..!" 
                    imageSrc={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author = "Blernard" 
                    timeAgo="Yesterday at 09:05PM" 
                    comment="YARP!!" 
                    imageSrc={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));