/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { notification } from "../UsefulDefinitions/notification.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { notification } from "../UsefulDefinitions/notification.va.js";

/* START_OF_SYMBOL_DEFINITION id_not */
/**
 * @summary id_not
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not                                   ID ::= notification
 * ```
 *
 * @constant
 */
export const id_not: ID = notification;
/* END_OF_SYMBOL_DEFINITION id_not */

/* eslint-enable */
