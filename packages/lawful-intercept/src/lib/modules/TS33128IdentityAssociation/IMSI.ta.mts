/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI  ::=  NumericString (SIZE(6..15))
 * ```
 */
export
type IMSI = NumericString; // NumericString

export function _decode_IMSI (el: _Element): IMSI {
    const value = $._decodeNumericString(el);
    if (value.length < 6 || value.length > 15) {
        throw new ASN1SizeError("IMSI violates the SIZE constraint");
    }
    return value;
}

export const _encode_IMSI: $.ASN1Encoder<IMSI> = $._encodeNumericString;


/* eslint-enable */
