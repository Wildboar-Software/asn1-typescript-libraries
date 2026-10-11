/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEISV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEISV  ::=  NumericString (SIZE(16))
 * ```
 */
export
type IMEISV = NumericString; // NumericString

export function _decode_IMEISV (el: _Element): IMEISV {
    const value = $._decodeNumericString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("IMEISV violates the SIZE constraint");
    }
    return value;
}

export const _encode_IMEISV: $.ASN1Encoder<IMEISV> = $._encodeNumericString;


/* eslint-enable */
