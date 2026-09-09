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
 * @summary NumberingPlan
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberingPlan  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type NumberingPlan = OCTET_STRING; // OctetStringType
export const _decode_NumberingPlan = $._decodeOctetString;
export const _encode_NumberingPlan = $._encodeOctetString;


/* eslint-enable */
