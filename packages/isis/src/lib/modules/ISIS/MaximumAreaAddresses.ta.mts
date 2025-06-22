/* eslint-disable */
import {
  INTEGER,
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
 * @summary MaximumAreaAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumAreaAddresses  ::=  INTEGER(0..254)
 * ```
 */
export type MaximumAreaAddresses = INTEGER;


export const _decode_MaximumAreaAddresses = $._decodeInteger;


export const _encode_MaximumAreaAddresses = $._encodeInteger;


/* eslint-enable */
