/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
/**
 * @summary NationallyDefinedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NationallyDefinedBodyPart  ::=  NATIONAL-BODY-PARTS.&Type
 * ```
 */
export type NationallyDefinedBodyPart = _Element; // ObjectClassFieldType


export const _decode_NationallyDefinedBodyPart = $._decodeAny;


export const _encode_NationallyDefinedBodyPart = $._encodeAny;


/* eslint-enable */
