/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxSCIBillingChargingLength } from "./maxSCIBillingChargingLength.va.mjs";
import { minSCIBillingChargingLength } from "./minSCIBillingChargingLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCIBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCIBillingChargingCharacteristics  ::= 
 *   OCTET STRING(SIZE (minSCIBillingChargingLength..maxSCIBillingChargingLength))
 * ```
 */
export
type SCIBillingChargingCharacteristics = OCTET_STRING; // OctetStringType

export
function _decode_SCIBillingChargingCharacteristics (el: _Element): SCIBillingChargingCharacteristics {
    const value = $._decodeOctetString(el);
    if (value.length < minSCIBillingChargingLength || value.length > maxSCIBillingChargingLength) {
        throw new ASN1SizeError("SCIBillingChargingCharacteristics violates SIZE constraint");
    }
    return value;
}

export
const _encode_SCIBillingChargingCharacteristics: $.ASN1Encoder<SCIBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
