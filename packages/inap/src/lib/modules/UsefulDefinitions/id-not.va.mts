/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { notification } from "../UsefulDefinitions/notification.va.mjs";
// export { notification } from "../UsefulDefinitions/notification.va.mjs";


/**
 * @summary id_not
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-not ID ::= notification
 * ```
 * 
 * @constant
 */
export
const id_not: ID = notification;

/* eslint-enable */
