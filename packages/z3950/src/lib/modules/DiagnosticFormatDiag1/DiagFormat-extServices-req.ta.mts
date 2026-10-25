/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_req
 * @description
 * 
 * The extended-services request was rejected (diag-1): name in use (218), no
 * such package (219), quota (220), or unsupported type (221). DIAG.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-req ::= INTEGER {
 *     -- bad request
 *     nameInUse (1),
 *     -- package name already in use
 *     noSuchName (2),
 *     -- no such package, on
 *     -- modify/delete
 *     quota (3),
 *     -- quota exceeded
 *     type (4)
 * }
 * ```
 */
export
type DiagFormat_extServices_req = INTEGER;

/**
 * @summary DiagFormat_extServices_req_nameInUse
 * @description
 * 
 * Package name already in use (DIAG.1 condition 218). Addinfo is the name.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_nameInUse: 1 = 1 satisfies DiagFormat_extServices_req; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_nameInUse
 * @description
 * 
 * Package name already in use (DIAG.1 condition 218). Addinfo is the name.
 * 
 * @constant
 * @type {number}
 */
export
const nameInUse: 1 = DiagFormat_extServices_req_nameInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_noSuchName
 * @description
 * 
 * No such package, on modify or delete (DIAG.1 condition 219). Addinfo is the
 * name.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_noSuchName: 2 = 2 satisfies DiagFormat_extServices_req; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_noSuchName
 * @description
 * 
 * No such package, on modify or delete (DIAG.1 condition 219). Addinfo is the
 * name.
 * 
 * @constant
 * @type {number}
 */
export
const noSuchName: 2 = DiagFormat_extServices_req_noSuchName; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_quota
 * @description
 * 
 * Extended-services quota exceeded (DIAG.1 condition 220).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_quota: 3 = 3 satisfies DiagFormat_extServices_req; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_quota
 * @description
 * 
 * Extended-services quota exceeded (DIAG.1 condition 220).
 * 
 * @constant
 * @type {number}
 */
export
const quota: 3 = DiagFormat_extServices_req_quota; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_type_
 * @description
 * 
 * Extended service type not supported (DIAG.1 condition 221). Addinfo is the
 * type.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_type_: 4 = 4 satisfies DiagFormat_extServices_req; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_type_
 * @description
 * 
 * Extended service type not supported (DIAG.1 condition 221). Addinfo is the
 * type.
 * 
 * @constant
 * @type {number}
 */
export
const type_: 4 = DiagFormat_extServices_req_type_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_extServices_req: $.ASN1Decoder<DiagFormat_extServices_req> = $._decodeInteger;
export const _encode_DiagFormat_extServices_req: $.ASN1Encoder<DiagFormat_extServices_req> = $._encodeInteger;


/* eslint-enable */
