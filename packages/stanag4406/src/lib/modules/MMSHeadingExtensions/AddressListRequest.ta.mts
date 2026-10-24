/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddressListRequest
 * @description
 * 
 * Which members of an address list are asked for a notification or a reply:
 * action, information, or both. STANAG 4406 (Ed. 2), Annex A, A1.11 and B.104.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListRequest  ::=  INTEGER {action(0), info(1), both(2)}
 * ```
 */
export
type AddressListRequest = INTEGER;

/**
 * @summary AddressListRequest_action
 * @description
 *
 * Ask only the action (primary) members of the address list. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const AddressListRequest_action: AddressListRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_action
 * @description
 *
 * Ask only the action (primary) members of the address list. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const action: AddressListRequest = AddressListRequest_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_info
 * @description
 *
 * Ask only the information (copy) members of the address list. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const AddressListRequest_info: AddressListRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_info
 * @description
 *
 * Ask only the information (copy) members of the address list. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const info: AddressListRequest = AddressListRequest_info; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_both
 * @description
 *
 * Ask both the action and information members of the address list. STANAG 4406
 * (Ed. 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const AddressListRequest_both: AddressListRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_both
 * @description
 *
 * Ask both the action and information members of the address list. STANAG 4406
 * (Ed. 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const both: AddressListRequest = AddressListRequest_both; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AddressListRequest: $.ASN1Decoder<AddressListRequest> = $._decodeInteger;
export const _encode_AddressListRequest: $.ASN1Encoder<AddressListRequest> = $._encodeInteger;


/* eslint-enable */
