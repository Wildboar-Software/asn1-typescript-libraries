/* eslint-disable */
import {
  type BOOLEAN,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EncryptionOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionOptions  ::=  BOOLEAN
 * ```
 */
export type EncryptionOptions = BOOLEAN; // BooleanType

export const _decode_EncryptionOptions: $.ASN1Decoder<boolean> = $._decodeBoolean;

export const _encode_EncryptionOptions: $.ASN1Encoder<boolean> = $._encodeBoolean;

/* eslint-enable */
