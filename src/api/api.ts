import axios from "axios";

const SERVER_ADDR = "http://localhost:3000"

export function getAPI(context: Vue, route: string, payload: any = {}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        let headers: any = {}
        if (context.$store.state.accessToken != null) {
            headers["Access-Token"] = context.$store.state.accessToken;
        }
        if (payload != null && payload.legnth != 0) route = route + "?" + new URLSearchParams(payload).toString();

        axios.get(SERVER_ADDR + route).catch((error) => {
            reject(error);
        }).then(response => {
            if (response == null) return;
            resolve(response);
        })
    })
    //new URLSearchParams(obj).toString()


}