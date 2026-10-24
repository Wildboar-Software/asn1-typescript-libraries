/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberingPlan
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberingPlan  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type NumberingPlan = OCTET_STRING; // OctetStringType

export
function _decode_NumberingPlan (el: _Element): NumberingPlan {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("NumberingPlan violates SIZE constraint");
    }
    return value;
}

export
const _encode_NumberingPlan: $.ASN1Encoder<NumberingPlan> = $._encodeOctetString;

/* eslint-enable */
