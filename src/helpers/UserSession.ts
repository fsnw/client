export default class UserSession
{
    private static key = "rolling in the deep";

    static get()
    {
        return sessionStorage.getItem(this.key);
    }

    static set(token: any)
    {
        sessionStorage.setItem(this.key, JSON.stringify(token))
    }
}