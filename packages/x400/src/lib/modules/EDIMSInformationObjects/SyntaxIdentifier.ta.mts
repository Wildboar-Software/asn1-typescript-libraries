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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary SyntaxIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SyntaxIdentifier  ::=  TeletexString(SIZE (1..ub-syntax-identifier))
 * ```
 */
export type SyntaxIdentifier = TeletexString; // TeletexString


export const _decode_SyntaxIdentifier = $._decodeTeletexString;


export const _encode_SyntaxIdentifier = $._encodeTeletexString;


/* eslint-enable */
