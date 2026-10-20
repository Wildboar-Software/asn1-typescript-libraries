/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecondaryRATType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecondaryRATType  ::=  INTEGER {
 *    nR          ( 0 )}
 * ```
 */
export
type SecondaryRATType = INTEGER;

/**
 * @summary SecondaryRATType_nR
 * @constant
 * @type {number}
 */
export
const SecondaryRATType_nR: SecondaryRATType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecondaryRATType_nR
 * @constant
 * @type {number}
 */
export
const nR: SecondaryRATType = SecondaryRATType_nR; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SecondaryRATType: $.ASN1Decoder<SecondaryRATType> = $._decodeInteger;

export
const _encode_SecondaryRATType: $.ASN1Encoder<SecondaryRATType> = $._encodeInteger;

/* eslint-enable */
