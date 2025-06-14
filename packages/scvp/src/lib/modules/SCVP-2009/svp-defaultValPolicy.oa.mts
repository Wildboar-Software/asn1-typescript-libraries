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
import { id_svp_defaultValPolicy } from '../SCVP-2009/id-svp-defaultValPolicy.va.mjs';
import { POLICY } from '../SCVP-2009/POLICY.oca.mjs';
/* START_OF_SYMBOL_DEFINITION svp_defaultValPolicy */
/**
 * @summary svp_defaultValPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * svp-defaultValPolicy POLICY ::= { IDENTIFIED BY id-svp-defaultValPolicy }
 * ```
 *
 * @constant
 * @type {POLICY}
 * @implements {POLICY}
 */
export const svp_defaultValPolicy: POLICY = {
  class: 'ATTRIBUTE',
  decoderFor: {
    '&Type': undefined,
  },
  encoderFor: {
    '&Type': undefined,
  },
  '&id': id_svp_defaultValPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
//   '&minCount': 1 /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION svp_defaultValPolicy */

/* eslint-enable */
