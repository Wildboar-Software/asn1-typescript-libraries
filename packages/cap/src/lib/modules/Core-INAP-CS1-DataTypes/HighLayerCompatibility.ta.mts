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
 * @summary HighLayerCompatibility
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HighLayerCompatibility      ::=  OCTET STRING (SIZE(highLayerCompatibilityLength))
 * ```
 */
export
type HighLayerCompatibility = OCTET_STRING; // OctetStringType
export const _decode_HighLayerCompatibility = $._decodeOctetString;
export const _encode_HighLayerCompatibility = $._encodeOctetString;


/* eslint-enable */
