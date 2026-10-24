/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxAChBillingChargingLength } from "./maxAChBillingChargingLength.va.mjs";
import { minAChBillingChargingLength } from "./minAChBillingChargingLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AChBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AChBillingChargingCharacteristics  ::= 
 *   OCTET STRING(SIZE (minAChBillingChargingLength..maxAChBillingChargingLength))
 * ```
 */
export
type AChBillingChargingCharacteristics = OCTET_STRING; // OctetStringType

export
function _decode_AChBillingChargingCharacteristics (el: _Element): AChBillingChargingCharacteristics {
    const value = $._decodeOctetString(el);
    if (value.length < minAChBillingChargingLength || value.length > maxAChBillingChargingLength) {
        throw new ASN1SizeError("AChBillingChargingCharacteristics violates SIZE constraint");
    }
    return value;
}

export
const _encode_AChBillingChargingCharacteristics: $.ASN1Encoder<AChBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
