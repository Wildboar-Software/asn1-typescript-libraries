/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary NoteField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoteField  ::=  GraphicString
 * ```
 */
export type NoteField = GraphicString; // GraphicString


export const _decode_NoteField = $._decodeGraphicString;


export const _encode_NoteField = $._encodeGraphicString;


/* eslint-enable */
