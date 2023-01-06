
    export const UpdateInbox = (Inbox)=>{
        return (dispatch)=>{
            dispatch({
                type:'inboxMassages',
                payload:Inbox,
            })
        }
    }
    
    export const DeletMail = (Key)=>{
        return (dispatch)=>{
            dispatch({
                type:'DeleteMail',
                payload:Key,
            })
        }
    }

    export const UpdateKey = ()=>{
        return (dispatch)=>{
            dispatch({
                type:'UpdateKey',
            })
        }
    }