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
 * @summary DocumentVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentVersion  ::=  TeletexString(SIZE (1..ub-edi-document-version))
 * ```
 */
export type DocumentVersion = TeletexString; // TeletexString


export const _decode_DocumentVersion = $._decodeTeletexString;


export const _encode_DocumentVersion = $._encodeTeletexString;


/* eslint-enable */
