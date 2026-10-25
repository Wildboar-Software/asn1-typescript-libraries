/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type ASN1Element as _Element,
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
 * @summary GenericConversion
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericConversion  ::=  OBJECT IDENTIFIER
 * ```
 */
export type GenericConversion = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_GenericConversion: $.ASN1Decoder<_OID> = $._decodeObjectIdentifier;


export const _encode_GenericConversion: $.ASN1Encoder<_OID> = $._encodeObjectIdentifier;


/* eslint-enable */
