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
 * @summary BiometricInformationTemplateGroup
 * @description
 * 
 * OCTET STRING wrapping an ISO/IEC 7816-11 BIT group template. ISO/IEC
 * 7816-15:2016 §8.9.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricInformationTemplateGroup  ::=  OCTET STRING
 * ```
 */
export
type BiometricInformationTemplateGroup = OCTET_STRING; // OctetStringType
export const _decode_BiometricInformationTemplateGroup = $._decodeOctetString;
export const _encode_BiometricInformationTemplateGroup = $._encodeOctetString;


/* eslint-enable */
