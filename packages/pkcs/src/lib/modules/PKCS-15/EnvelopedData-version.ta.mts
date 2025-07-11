/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EnvelopedData_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EnvelopedData_version = INTEGER;


/**
 * @summary EnvelopedData_version_v0
 * @constant
 * @type {number}
 */
export const EnvelopedData_version_v0: EnvelopedData_version = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v0
 * @constant
 * @type {number}
 */
export const v0: EnvelopedData_version = EnvelopedData_version_v0; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v1
 * @constant
 * @type {number}
 */
export const EnvelopedData_version_v1: EnvelopedData_version = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v1
 * @constant
 * @type {number}
 */
export const v1: EnvelopedData_version = EnvelopedData_version_v1; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v2
 * @constant
 * @type {number}
 */
export const EnvelopedData_version_v2: EnvelopedData_version = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v2
 * @constant
 * @type {number}
 */
export const v2: EnvelopedData_version = EnvelopedData_version_v2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v3
 * @constant
 * @type {number}
 */
export const EnvelopedData_version_v3: EnvelopedData_version = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v3
 * @constant
 * @type {number}
 */
export const v3: EnvelopedData_version = EnvelopedData_version_v3; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v4
 * @constant
 * @type {number}
 */
export const EnvelopedData_version_v4: EnvelopedData_version = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary EnvelopedData_version_v4
 * @constant
 * @type {number}
 */
export const v4: EnvelopedData_version = EnvelopedData_version_v4; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) EnvelopedData_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_EnvelopedData_version<Type>(
    _decode_Type: $.ASN1Decoder<Type>
): $.ASN1Decoder<EnvelopedData_version> {
    return $._decodeInteger;
}


/**
 * @summary Returns a function that will encode a(n) EnvelopedData_version into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) EnvelopedData_version as an ASN.1 element.
 */
export function _get_encoder_for_EnvelopedData_version<Type>(
    _encode_Type: $.ASN1Encoder<Type>
): $.ASN1Encoder<EnvelopedData_version> {
    return $._encodeInteger;
}

/* eslint-enable */
