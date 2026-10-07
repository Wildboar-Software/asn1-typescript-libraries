/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_req
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-req ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_extServices_req = INTEGER;

/**
 * @summary DiagFormat_extServices_req_nameInUse
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_nameInUse: DiagFormat_extServices_req = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_nameInUse
 * @constant
 * @type {number}
 */
export
const nameInUse: DiagFormat_extServices_req = DiagFormat_extServices_req_nameInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_noSuchName
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_noSuchName: DiagFormat_extServices_req = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_noSuchName
 * @constant
 * @type {number}
 */
export
const noSuchName: DiagFormat_extServices_req = DiagFormat_extServices_req_noSuchName; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_quota
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_quota: DiagFormat_extServices_req = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_quota
 * @constant
 * @type {number}
 */
export
const quota: DiagFormat_extServices_req = DiagFormat_extServices_req_quota; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_type_
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_type_: DiagFormat_extServices_req = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_type_
 * @constant
 * @type {number}
 */
export
const type_: DiagFormat_extServices_req = DiagFormat_extServices_req_type_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_extServices_req = $._decodeInteger;
export const _encode_DiagFormat_extServices_req = $._encodeInteger;


/* eslint-enable */
