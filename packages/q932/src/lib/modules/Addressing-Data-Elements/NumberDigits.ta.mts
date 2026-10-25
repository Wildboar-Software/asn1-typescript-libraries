/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberDigits
 * @description
 * 
 * Digit string of a party number or subaddress-related number: 1 to 20 numeric
 * characters.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberDigits  ::=  NumericString(SIZE (1..20))
 * ```
 */
export
type NumberDigits = NumericString; // NumericString

export function _decode_NumberDigits (el: _Element): NumberDigits {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("NumberDigits violates SIZE (1..20) constraint");
    }
    return value;
}

export const _encode_NumberDigits: $.ASN1Encoder<NumberDigits> = $._encodeNumericString;


/* eslint-enable */
