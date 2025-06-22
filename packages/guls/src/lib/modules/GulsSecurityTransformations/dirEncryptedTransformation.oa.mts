/* eslint-disable */
import {
  joint_iso_itu_t,
  BIT_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.mjs';
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';

/**
 * @summary dirEncryptedTransformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirEncryptedTransformation SECURITY-TRANSFORMATION ::= {
 *   IDENTIFIER              {securityTransformations dir-encrypted(1)}
 *   -- This transformation transforms a string of octets to a
 *   -- new bit string using an encipherment process.
 *   INITIAL-ENCODING-RULES  {joint-iso-itu-t asn1(1) ber(1)}
 *   XFORMED-DATA-TYPE       BIT STRING
 * }
 * ```
 *
 * @constant
 * @type {SECURITY_TRANSFORMATION<BIT_STRING>}
 * @implements {SECURITY_TRANSFORMATION<BIT_STRING>}
 */
export const dirEncryptedTransformation: SECURITY_TRANSFORMATION<BIT_STRING> = {
  class: 'SECURITY-TRANSFORMATION',
  decoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': $._decodeBitString,
    '&QualifierType': undefined,
  },
  encoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': $._encodeBitString,
    '&QualifierType': undefined,
  },
  '&sT-Identifier': _OID.fromParts(
    [/* dir-encrypted */ 1],
    securityTransformations
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&initialEncodingRules': _OID.fromParts(
    [/* asn1 */ 1, /* ber */ 1],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */,
  '&StaticUnprotectedParm': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&DynamicUnprotectedParm': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&XformedDataType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&QualifierType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
