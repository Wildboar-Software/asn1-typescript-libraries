/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeUnitTimeInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeUnitTimeInterval  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type ChargeUnitTimeInterval = OCTET_STRING; // OctetStringType
export const _decode_ChargeUnitTimeInterval = (el: _Element): ChargeUnitTimeInterval => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("ChargeUnitTimeInterval violates SIZE constraint");
    }
    return value;
};
export const _encode_ChargeUnitTimeInterval = $._encodeOctetString;


/* eslint-enable */
