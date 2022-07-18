/**
 * status of the filtering
 */
export type filterMode = 'find' | 'bookmark'

/**
 * next and previous to set the page
 */
export type pageSet = 'prev' | 'next';


/**
 * @implements for list to have a ready made identifier
 */
export interface Record {
    id: number;
    [prop: string]: any;
}
