/* eslint-disable */
import {
  ENUMERATED,
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


export enum _enum_for_ModifyRequest_changes_change_operation {
  add = 0,
  delete_ = 1,
  replace = 2,
}


/**
 * @summary ModifyRequest_changes_change_operation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest-changes-change-operation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type ModifyRequest_changes_change_operation =
  | _enum_for_ModifyRequest_changes_change_operation
  | ENUMERATED;


/**
 * @summary ModifyRequest_changes_change_operation_add
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_add: ModifyRequest_changes_change_operation = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary add
 * @constant
 * @type {number}
 */
export const add: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_add; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyRequest_changes_change_operation_delete_
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_delete_: ModifyRequest_changes_change_operation = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export const delete_: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyRequest_changes_change_operation_replace
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_replace: ModifyRequest_changes_change_operation = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary replace
 * @constant
 * @type {number}
 */
export const replace: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_replace; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest_changes_change_operation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest_changes_change_operation} The decoded data structure.
 */
export function _decode_ModifyRequest_changes_change_operation(el: _Element) {
  return $._decodeEnumerated(el);
}


/**
 * @summary Encodes a(n) ModifyRequest_changes_change_operation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest_changes_change_operation, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest_changes_change_operation(
  value: ModifyRequest_changes_change_operation,
  elGetter: $.ASN1Encoder<ModifyRequest_changes_change_operation>
) {
  return $._encodeEnumerated(value, elGetter);
}


/* eslint-enable */
