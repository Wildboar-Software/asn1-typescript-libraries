/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ValidityPeriodSemi
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriodSemi  ::=  OCTET STRING (SIZE(3))
 * ```
 */
export
type ValidityPeriodSemi = OCTET_STRING; // OctetStringType

export
const _decode_ValidityPeriodSemi = (el: _Element): ValidityPeriodSemi => {
    const value = $._decodeOctetString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("ValidityPeriodSemi violates SIZE constraint");
    }
    return value;
};

export
const _encode_ValidityPeriodSemi: $.ASN1Encoder<ValidityPeriodSemi> = $._encodeOctetString;

/* eslint-enable */
