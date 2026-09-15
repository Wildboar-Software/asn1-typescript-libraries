/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FCIBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FCIBillingChargingCharacteristics{PARAMETERS-BOUND:bound}  ::= 
 *   OCTET STRING
 *     (SIZE (bound.&minFCIBillingChargingLength..
 *              bound.&maxFCIBillingChargingLength))
 * ```
 */
export
type FCIBillingChargingCharacteristics = OCTET_STRING; // OctetStringType
export const _decode_FCIBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_FCIBillingChargingCharacteristics = $._encodeOctetString;


/* eslint-enable */
