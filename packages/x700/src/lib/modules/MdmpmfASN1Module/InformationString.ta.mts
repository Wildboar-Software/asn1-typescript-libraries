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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary InformationString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationString  ::=  GeneralString
 * ```
 */
export type InformationString = GeneralString; // GeneralString


export const _decode_InformationString = $._decodeGeneralString;


export const _encode_InformationString = $._encodeGeneralString;


/* eslint-enable */
