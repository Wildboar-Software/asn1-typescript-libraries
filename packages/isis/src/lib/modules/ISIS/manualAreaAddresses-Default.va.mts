/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
  AreaAddresses,
  _decode_AreaAddresses,
  _encode_AreaAddresses,
} from '../ISIS/AreaAddresses.ta.mjs';
import {
  _decode_AreaAddress,
  _encode_AreaAddress,
} from '../ISIS/AreaAddress.ta.mjs';
/**
 * @summary manualAreaAddresses_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * manualAreaAddresses-Default AreaAddresses ::= {}
 * ```
 *
 * @constant
 */
export const manualAreaAddresses_Default: AreaAddresses = [];

/* eslint-enable */
