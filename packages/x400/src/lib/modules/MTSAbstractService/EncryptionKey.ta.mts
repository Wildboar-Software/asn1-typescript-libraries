/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary EncryptionKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionKey  ::=  BIT STRING
 * ```
 */
export type EncryptionKey = BIT_STRING;


export const _decode_EncryptionKey = $._decodeBitString;


export const _encode_EncryptionKey = $._encodeBitString;


/* eslint-enable */
