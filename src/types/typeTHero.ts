export type THero = {
    id: number;
    name: string;
    count_of_issue_appearances: number;
    image: {
        medium_url: string;
    }
    publisher:{
        name:string;
    }
    gender:number;
    real_name:string;
    deck:string;
    date_last_updated:string;
}