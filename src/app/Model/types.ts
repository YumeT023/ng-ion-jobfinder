/**
 * status of the filtering
 */
export type filterMode = 'find' | 'bookmark'

/**
 * @implements for list to have a ready made identifier
 */
export interface Record {
    id: number;
    [prop: string]: any;
}