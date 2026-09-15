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
 * @summary AChBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AChBillingChargingCharacteristics  ::=  OCTET STRING (SIZE (minAChBillingChargingLength .. maxAChBillingChargingLength))
 * ```
 */
export
type AChBillingChargingCharacteristics = OCTET_STRING; // OctetStringType
export const _decode_AChBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_AChBillingChargingCharacteristics = $._encodeOctetString;


/* eslint-enable */
