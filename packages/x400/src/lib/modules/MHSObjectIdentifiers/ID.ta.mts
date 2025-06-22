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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ID = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ID = $._decodeObjectIdentifier;


export const _encode_ID = $._encodeObjectIdentifier;


/* eslint-enable */
