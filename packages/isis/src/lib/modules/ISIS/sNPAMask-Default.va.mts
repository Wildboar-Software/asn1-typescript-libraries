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
  NAddress,
  _decode_NAddress,
  _encode_NAddress,
} from '@wildboar/nlm/src/lib/modules/NLM/NAddress.ta.mjs';

/**
 * @summary sNPAMask_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sNPAMask-Default NAddress ::= ''B
 * ```
 *
 * @constant
 */
export const sNPAMask_Default: NAddress = new Uint8Array(0);

/* eslint-enable */
