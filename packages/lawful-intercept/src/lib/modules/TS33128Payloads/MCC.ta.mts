/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC  ::=  NumericString (SIZE(3))
 * ```
 */
export
type MCC = NumericString; // NumericString

export function _decode_MCC (el: _Element): MCC {
    const value = $._decodeNumericString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("MCC violates the SIZE constraint");
    }
    return value;
}

export const _encode_MCC: $.ASN1Encoder<MCC> = $._encodeNumericString;


/* eslint-enable */
