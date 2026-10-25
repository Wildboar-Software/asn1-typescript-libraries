/* eslint-disable */
import {
    type GraphicString,
    type ASN1Element as _Element,
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
 * @summary AdditionalText
 * @description
 * 
 * Free-form graphic string in notifications. MATCHES FOR EQUALITY, SUBSTRINGS.
 * Semantics: Additional Text of ITU-T Rec. X.733 | ISO/IEC 10164-4.
 * `{smi2AttributeID 7}`. ITU-T Rec. X.721 (02/92) §8.2, §10.7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalText  ::=  GraphicString
 * ```
 */
export
type AdditionalText = GraphicString; // GraphicString


export const _decode_AdditionalText: $.ASN1Decoder<string> = $._decodeGraphicString;


export const _encode_AdditionalText: $.ASN1Encoder<string> = $._encodeGraphicString;


/* eslint-enable */
