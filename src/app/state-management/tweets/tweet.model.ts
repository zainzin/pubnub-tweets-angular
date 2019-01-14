export interface Tweet {
    created_at?: string;
    id?: number;
    id_str?: string;
    text?: string;
    display_text_range?: number[];
    source?: string;
    truncated?: boolean;
    in_reply_to_status_id?: any;
    in_reply_to_status_id_str?: any;
    in_reply_to_user_id?: any;
    in_reply_to_user_id_str?: any;
    in_reply_to_screen_name?: any;
    user?: any;
    geo?: any;
    coordinates?: any;
    place?: any;
    contributors?: any;
    is_quote_status?: boolean;
    quote_count?: number;
    reply_count?: number;
    retweet_count?: number;
    favorite_count?: number;
    entities?: any;
    extended_entities?: any;
    favorited?: boolean;
    retweeted?: boolean;
    possibly_sensitive?: boolean;
    filter_level?: string;
    lang?: string;
    timestamp_ms?: string;
}