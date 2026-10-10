/* eslint-disable */
import {
    ASN1Element as _Element,
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
export const _decode_TariffSwitchoverTime = $._decodeOctetString;
export const _encode_TariffSwitchoverTime = $._encodeOctetString;


/* eslint-enable */
