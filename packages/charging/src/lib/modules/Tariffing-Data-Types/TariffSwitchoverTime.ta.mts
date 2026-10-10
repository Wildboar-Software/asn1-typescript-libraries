/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffSwitchoverTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSwitchoverTime  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type TariffSwitchoverTime = OCTET_STRING; // OctetStringType
export const _decode_TariffSwitchoverTime = (el: _Element): TariffSwitchoverTime => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("TariffSwitchoverTime violates SIZE constraint");
    }
    return value;
};
export const _encode_TariffSwitchoverTime = $._encodeOctetString;


/* eslint-enable */
