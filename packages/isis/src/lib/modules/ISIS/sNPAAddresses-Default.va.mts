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
} from 'asn1-ts';
import {
  SNPAAddresses,
  _decode_SNPAAddresses,
  _encode_SNPAAddresses,
} from '../ISIS/SNPAAddresses.ta.mjs';
import {
  _decode_SNPAAddress,
  _encode_SNPAAddress,
} from '@wildboar/nlm/src/lib/modules/NLM/SNPAAddress.ta.mjs';

/* START_OF_SYMBOL_DEFINITION sNPAAddresses_Default */
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
/* END_OF_SYMBOL_DEFINITION sNPAAddresses_Default */

/* eslint-enable */
