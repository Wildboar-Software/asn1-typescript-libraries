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
 * @summary PersonFax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonFax  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonFax = GraphicString; // GraphicString




export const _decode_PersonFax = $._decodeGraphicString;




export const _encode_PersonFax = $._encodeGraphicString;


/* eslint-enable */
