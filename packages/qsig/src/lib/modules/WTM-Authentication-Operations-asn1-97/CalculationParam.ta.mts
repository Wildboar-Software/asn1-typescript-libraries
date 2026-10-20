/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalculationParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalculationParam  ::=  OCTET STRING (SIZE(1..8))
 * ```
 */
export
type CalculationParam = OCTET_STRING; // OctetStringType

export
const _decode_CalculationParam = (el: _Element): CalculationParam => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("CalculationParam violates SIZE constraint");
    }
    return value;
};

export
const _encode_CalculationParam: $.ASN1Encoder<CalculationParam> = $._encodeOctetString;

/* eslint-enable */
