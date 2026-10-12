/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NonLocalID {
    local = 1,
    nonLocal = 2,
}

/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NonLocalID = _enum_for_NonLocalID;

/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NonLocalID = _enum_for_NonLocalID;

/**
 * @summary NonLocalID_local
 * @constant
 * @type {number}
 */
export
const NonLocalID_local: NonLocalID = NonLocalID.local; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local
 * @constant
 * @type {number}
 */
export
const local: NonLocalID = NonLocalID.local; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NonLocalID_nonLocal
 * @constant
 * @type {number}
 */
export
const NonLocalID_nonLocal: NonLocalID = NonLocalID.nonLocal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonLocal
 * @constant
 * @type {number}
 */
export
const nonLocal: NonLocalID = NonLocalID.nonLocal; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NonLocalID: $.ASN1Decoder<NonLocalID> = $._decodeEnumerated;
export const _encode_NonLocalID: $.ASN1Encoder<NonLocalID> = $._encodeEnumerated;


/* eslint-enable */
