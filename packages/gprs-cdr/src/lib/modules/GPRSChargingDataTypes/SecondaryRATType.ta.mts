/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecondaryRATType
 * @description
 *
 * Holds the value of Secondary RAT Type, as provided by the RAN. The field
 * is provided by the RAN and transferred to the S-GW/P-GW in the RAN Traffic
 * Volume element.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.56A.
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
const SecondaryRATType_nR: 0 = 0 satisfies SecondaryRATType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecondaryRATType_nR
 * @constant
 * @type {number}
 */
export
const nR: 0 = SecondaryRATType_nR; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SecondaryRATType: $.ASN1Decoder<SecondaryRATType> = $._decodeInteger;

export
const _encode_SecondaryRATType: $.ASN1Encoder<SecondaryRATType> = $._encodeInteger;

/* eslint-enable */
