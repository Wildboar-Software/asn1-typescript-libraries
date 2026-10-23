/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxSFBillingChargingLength } from "./maxSFBillingChargingLength.va.mjs";
import { minSFBillingChargingLength } from "./minSFBillingChargingLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SFBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SFBillingChargingCharacteristics  ::= 
 *   OCTET STRING(SIZE (minSFBillingChargingLength..maxSFBillingChargingLength))
 * ```
 */
export
type SFBillingChargingCharacteristics = OCTET_STRING; // OctetStringType

export
function _decode_SFBillingChargingCharacteristics (el: _Element): SFBillingChargingCharacteristics {
    const value = $._decodeOctetString(el);
    if (value.length < minSFBillingChargingLength || value.length > maxSFBillingChargingLength) {
        throw new ASN1SizeError("SFBillingChargingCharacteristics violates SIZE constraint");
    }
    return value;
}

export
const _encode_SFBillingChargingCharacteristics: $.ASN1Encoder<SFBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
