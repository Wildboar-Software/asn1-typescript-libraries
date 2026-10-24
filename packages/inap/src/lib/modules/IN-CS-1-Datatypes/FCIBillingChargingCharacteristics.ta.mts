/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxFCIBillingChargingLength } from "./maxFCIBillingChargingLength.va.mjs";
import { minFCIBillingChargingLength } from "./minFCIBillingChargingLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FCIBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FCIBillingChargingCharacteristics  ::= 
 *   OCTET STRING(SIZE (minFCIBillingChargingLength..maxFCIBillingChargingLength))
 * ```
 */
export
type FCIBillingChargingCharacteristics = OCTET_STRING; // OctetStringType

export
function _decode_FCIBillingChargingCharacteristics (el: _Element): FCIBillingChargingCharacteristics {
    const value = $._decodeOctetString(el);
    if (value.length < minFCIBillingChargingLength || value.length > maxFCIBillingChargingLength) {
        throw new ASN1SizeError("FCIBillingChargingCharacteristics violates SIZE constraint");
    }
    return value;
}

export
const _encode_FCIBillingChargingCharacteristics: $.ASN1Encoder<FCIBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
