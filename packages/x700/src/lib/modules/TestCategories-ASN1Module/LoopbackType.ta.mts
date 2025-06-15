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
 * @summary LoopbackType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type LoopbackType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_LoopbackType = $._decodeObjectIdentifier;


export const _encode_LoopbackType = $._encodeObjectIdentifier;


/* eslint-enable */
