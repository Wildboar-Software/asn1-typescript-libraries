/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ICE_type {
    mMSC = 1,
    mMSProxyRelay = 2,
}

/**
 * @summary ICE_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ICE-type  ::=  ENUMERATED
 * {
 *     mMSC (1),
 *     mMSProxyRelay    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ICE_type = _enum_for_ICE_type | ENUMERATED;

/**
 * @summary ICE_type_mMSC
 * @constant
 * @type {number}
 */
export
const ICE_type_mMSC: ICE_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSC
 * @constant
 * @type {number}
 */
export
const mMSC: ICE_type = ICE_type_mMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_mMSProxyRelay
 * @constant
 * @type {number}
 */
export
const ICE_type_mMSProxyRelay: ICE_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSProxyRelay
 * @constant
 * @type {number}
 */
export
const mMSProxyRelay: ICE_type = ICE_type_mMSProxyRelay; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_ICE_type: $.ASN1Decoder<ICE_type> = $._decodeEnumerated;

export const _encode_ICE_type: $.ASN1Encoder<ICE_type> = $._encodeEnumerated;


/* eslint-enable */
