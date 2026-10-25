/* eslint-disable */
import {
    type EXTERNAL,
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
 * @summary BindTokenEncryptedData
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindTokenEncryptedData  ::=  EXTERNAL
 * ```
 */
export type BindTokenEncryptedData = EXTERNAL; // ExternalType


export const _decode_BindTokenEncryptedData: $.ASN1Decoder<_External> = $._decodeExternal;


export const _encode_BindTokenEncryptedData: $.ASN1Encoder<_External> = $._encodeExternal;


/* eslint-enable */
