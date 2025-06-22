/* eslint-disable */
import {
    TeletexString,
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
 * @summary DocumentRelease
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentRelease  ::=  TeletexString(SIZE (1..ub-edi-document-release))
 * ```
 */
export type DocumentRelease = TeletexString; // TeletexString


export const _decode_DocumentRelease = $._decodeTeletexString;


export const _encode_DocumentRelease = $._encodeTeletexString;


/* eslint-enable */
