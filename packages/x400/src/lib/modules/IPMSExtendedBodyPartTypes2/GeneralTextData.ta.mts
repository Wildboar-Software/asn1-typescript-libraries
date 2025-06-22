/* eslint-disable */
import {
    GeneralString,
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
 * @summary GeneralTextData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralTextData  ::=  GeneralString
 * ```
 */
export type GeneralTextData = GeneralString; // GeneralString


export const _decode_GeneralTextData = $._decodeGeneralString;


export const _encode_GeneralTextData = $._encodeGeneralString;


/* eslint-enable */
