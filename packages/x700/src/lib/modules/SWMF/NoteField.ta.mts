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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary NoteField
 * @description
 *
 * Syntax of `noteField`: comments associated with the managed
 * object, including installation instructions, startup parameters,
 * and information needed to activate features. ITU-T Rec. X.744
 * (10/96)
 * [§8.2.20](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.3.20.
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
