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
 * @summary AttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AttributeType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_AttributeType = $._decodeObjectIdentifier;


export const _encode_AttributeType = $._encodeObjectIdentifier;


/* eslint-enable */
