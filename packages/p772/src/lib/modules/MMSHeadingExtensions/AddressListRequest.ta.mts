/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AddressListRequest
 * @description
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
 * @constant
 * @type {number}
 */
export
const AddressListRequest_action: AddressListRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_action
 * @constant
 * @type {number}
 */
export
const action: AddressListRequest = AddressListRequest_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_info
 * @constant
 * @type {number}
 */
export
const AddressListRequest_info: AddressListRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_info
 * @constant
 * @type {number}
 */
export
const info: AddressListRequest = AddressListRequest_info; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_both
 * @constant
 * @type {number}
 */
export
const AddressListRequest_both: AddressListRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_both
 * @constant
 * @type {number}
 */
export
const both: AddressListRequest = AddressListRequest_both; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AddressListRequest = $._decodeInteger;
export const _encode_AddressListRequest = $._encodeInteger;

/* eslint-enable */
