/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary MS_EIT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MS-EIT  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MS_EIT = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_MS_EIT = $._decodeObjectIdentifier;


export const _encode_MS_EIT = $._encodeObjectIdentifier;


/* eslint-enable */
