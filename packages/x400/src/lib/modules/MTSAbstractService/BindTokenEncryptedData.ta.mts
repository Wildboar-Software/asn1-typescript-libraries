/* eslint-disable */
import {
    EXTERNAL,
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
 * @summary BindTokenEncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindTokenEncryptedData  ::=  EXTERNAL
 * ```
 */
export type BindTokenEncryptedData = EXTERNAL; // ExternalType


export const _decode_BindTokenEncryptedData = $._decodeExternal;


export const _encode_BindTokenEncryptedData = $._encodeExternal;


/* eslint-enable */
