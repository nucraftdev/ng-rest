export interface Userfile {
    UserID: string;
    Name: string;
    EMailAddress: string;
    SecurityMgr: boolean;
    UserDisabled: boolean;
    PasswordEmail: string;
}

// https://centralusdtadtl03.epicorsaas.com/SaaS506Third/api/v1/Ice.BO.UserFileSvc/UserFiles?$select=UserID%2C%20Name%2C%20EMailAddress%2C%20SecurityMgr%2C%20UserDisabled%2C%20PasswordEmail