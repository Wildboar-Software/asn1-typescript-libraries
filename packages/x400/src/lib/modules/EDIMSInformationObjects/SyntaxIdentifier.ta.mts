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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SyntaxIdentifier
 * @description
 *
 * Indicates the syntax used. This is semantically identical to the "Syntax identifier" of
 * the EDIFACT UNB segment. See ITU-T X.435 (1999), §8.2.15.
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
