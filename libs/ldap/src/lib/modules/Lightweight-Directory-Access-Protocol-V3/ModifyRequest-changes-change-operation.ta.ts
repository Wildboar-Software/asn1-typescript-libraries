/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION _enum_for_ModifyRequest_changes_change_operation */
export enum _enum_for_ModifyRequest_changes_change_operation {
  add = 0,
  delete_ = 1,
  replace = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ModifyRequest_changes_change_operation */

/* START_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation */
/**
 * @summary ModifyRequest_changes_change_operation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest-changes-change-operation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type ModifyRequest_changes_change_operation =
  | _enum_for_ModifyRequest_changes_change_operation
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation */

/* START_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation_add */
/**
 * @summary ModifyRequest_changes_change_operation_add
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_add: ModifyRequest_changes_change_operation = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation_add */

/* START_OF_SYMBOL_DEFINITION add */
/**
 * @summary add
 * @constant
 * @type {number}
 */
export const add: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_add; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION add */

/* START_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation_delete_ */
/**
 * @summary ModifyRequest_changes_change_operation_delete_
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_delete_: ModifyRequest_changes_change_operation = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation_delete_ */

/* START_OF_SYMBOL_DEFINITION delete_ */
/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export const delete_: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_ */

/* START_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation_replace */
/**
 * @summary ModifyRequest_changes_change_operation_replace
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_replace: ModifyRequest_changes_change_operation = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyRequest_changes_change_operation_replace */

/* START_OF_SYMBOL_DEFINITION replace */
/**
 * @summary replace
 * @constant
 * @type {number}
 */
export const replace: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_replace; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION replace */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyRequest_changes_change_operation */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest_changes_change_operation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest_changes_change_operation} The decoded data structure.
 */
export function _decode_ModifyRequest_changes_change_operation(el: _Element) {
  return $._decodeEnumerated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyRequest_changes_change_operation */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyRequest_changes_change_operation */
/**
 * @summary Encodes a(n) ModifyRequest_changes_change_operation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest_changes_change_operation, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest_changes_change_operation(
  value: ModifyRequest_changes_change_operation,
  elGetter: $.ASN1Encoder<ModifyRequest_changes_change_operation>
) {
  return $._encodeEnumerated(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyRequest_changes_change_operation */

/* eslint-enable */
