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
  SNPAAddresses,
  _decode_SNPAAddresses,
  _encode_SNPAAddresses,
} from '../ISIS/SNPAAddresses.ta.mjs';
import {
  _decode_SNPAAddress,
  _encode_SNPAAddress,
} from '@wildboar/nlm';

/**
 * @summary sNPAAddresses_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sNPAAddresses-Default SNPAAddresses ::= {}
 * ```
 *
 * @constant
 */
export const sNPAAddresses_Default: SNPAAddresses = [];

/* eslint-enable */
