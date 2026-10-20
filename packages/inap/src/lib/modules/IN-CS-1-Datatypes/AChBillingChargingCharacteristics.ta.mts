/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
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
const _decode_AChBillingChargingCharacteristics: $.ASN1Decoder<AChBillingChargingCharacteristics> = $._decodeOctetString;

export
const _encode_AChBillingChargingCharacteristics: $.ASN1Encoder<AChBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
