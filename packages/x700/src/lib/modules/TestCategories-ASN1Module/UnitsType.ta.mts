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
 * @summary UnitsType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitsType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type UnitsType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_UnitsType = $._decodeObjectIdentifier;


export const _encode_UnitsType = $._encodeObjectIdentifier;


/* eslint-enable */
