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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AlgorithmIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_AlgorithmIdentifier = $._decodeObjectIdentifier;


export const _encode_AlgorithmIdentifier = $._encodeObjectIdentifier;


/* eslint-enable */
