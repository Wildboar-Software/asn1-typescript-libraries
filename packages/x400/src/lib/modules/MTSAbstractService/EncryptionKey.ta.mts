/* eslint-disable */
import {
    type BIT_STRING,
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
 * @summary EncryptionKey
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionKey  ::=  BIT STRING
 * ```
 */
export type EncryptionKey = BIT_STRING;


export const _decode_EncryptionKey: $.ASN1Decoder<BIT_STRING> = $._decodeBitString;


export const _encode_EncryptionKey: $.ASN1Encoder<BIT_STRING> = $._encodeBitString;


/* eslint-enable */
