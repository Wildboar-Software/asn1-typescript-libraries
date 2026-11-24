/* eslint-disable */
import {
  type BOOLEAN,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IntegrityOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntegrityOptions  ::=  BOOLEAN
 * ```
 */
export type IntegrityOptions = BOOLEAN; // BooleanType

export const _decode_IntegrityOptions: $.ASN1Decoder<boolean> = $._decodeBoolean;

export const _encode_IntegrityOptions: $.ASN1Encoder<boolean> = $._encodeBoolean;

/* eslint-enable */
