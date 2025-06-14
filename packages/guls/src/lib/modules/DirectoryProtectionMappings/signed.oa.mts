/* eslint-disable */
import {
  joint_iso_itu_t,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { dirSignedTransformation } from '../GulsSecurityTransformations/dirSignedTransformation.oa.mjs';
import { PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.mjs';
/* START_OF_SYMBOL_DEFINITION signed */
/**
 * @summary signed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signed PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION  {dirSignedTransformation}
 * }
 * ```
 *
 * @constant
 * @type {PROTECTION_MAPPING}
 * @implements {PROTECTION_MAPPING}
 */
export const signed: PROTECTION_MAPPING = {
  class: 'PROTECTION-MAPPING',
  decoderFor: {},
  encoderFor: {},
  '&SecurityTransformation': [
    dirSignedTransformation,
  ] /* OBJECT_FIELD_SETTING */,
  '&protTransferSyntax': new _OID(
    [/* genericULS */ 20, /* generalTransferSyntax */ 2],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&bypassPermitted': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signed */

/* eslint-enable */
