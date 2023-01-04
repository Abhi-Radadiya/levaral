    export const UpdateEmail = (Email)=>{
        return (dispatch)=>{
            dispatch({
                type:'Email',
                payload:Email,
            })
        }
    }
    export const UpdateSubject = (Subject)=>{
        return (dispatch)=>{
            dispatch({
                type:'Subject',
                payload:Subject,
            })
        }
    }
    export const UpdateMassage = (Massage)=>{
        return (dispatch)=>{
            dispatch({
                type:'Massage',
                payload:Massage,
            })
        }
    }

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