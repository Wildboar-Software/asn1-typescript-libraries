/* eslint-disable */
import {
  joint_iso_itu_t,
  ABSTRACT_SYNTAX,
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
    ACSE_apdu,
    _decode_ACSE_apdu,
    _encode_ACSE_apdu,
} from '@wildboar/acse/src/lib/modules/ACSE-1/ACSE-apdu.ta.mjs';

/* START_OF_SYMBOL_DEFINITION acse_abstract_syntax */
/**
 * @summary acse_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acse-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   ACSE-apdu
 *   IDENTIFIED BY
 *     {joint-iso-itu-t association-control(2) abstract-syntax(1) apdus(0)
 *      version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<ACSE_apdu>}
 * @implements {ABSTRACT_SYNTAX<ACSE_apdu>}
 */
export const acse_abstract_syntax: ABSTRACT_SYNTAX<ACSE_apdu> = {
  class: 'ABSTRACT-SYNTAX',
  decoderFor: {
    '&Type': _decode_ACSE_apdu,
  },
  encoderFor: {
    '&Type': _encode_ACSE_apdu,
  },
  '&id': new _OID(
    [
      /* association-control */ 2,
      /* abstract-syntax */ 1,
      /* apdus */ 0,
      /* version1 */ 1,
    ],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION acse_abstract_syntax */

/* eslint-enable */
