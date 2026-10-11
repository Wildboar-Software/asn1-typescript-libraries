/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet4
 * @description
 * 
 * Four octets. `DeviceInfo.tac` is a Type Allocation Code in telephony BCD
 * (3GPP TS 23.003 / TS 29.002). SGP.22 v3.1 §4.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet4  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type Octet4 = OCTET_STRING; // OctetStringType
export function _decode_Octet4 (el: _Element): Octet4 {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("Octet4 violates SIZE constraint");
    }
    return value;
}
export const _encode_Octet4 = $._encodeOctetString;


/* eslint-enable */
