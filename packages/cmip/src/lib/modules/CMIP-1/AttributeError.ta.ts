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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  AttributeError_errorStatus,
  _enum_for_AttributeError_errorStatus,
  AttributeError_errorStatus_accessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_noSuchAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noSuchAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_invalidAttributeValue /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidAttributeValue /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_invalidOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_invalidOperator /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidOperator /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeError_errorStatus,
  _encode_AttributeError_errorStatus,
} from '../CMIP-1/AttributeError-errorStatus.ta.js';
export {
  AttributeError_errorStatus,
  _enum_for_AttributeError_errorStatus,
  AttributeError_errorStatus_accessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_noSuchAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noSuchAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_invalidAttributeValue /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidAttributeValue /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_invalidOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeError_errorStatus_invalidOperator /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidOperator /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeError_errorStatus,
  _encode_AttributeError_errorStatus,
} from '../CMIP-1/AttributeError-errorStatus.ta.js';
import {
  ModifyOperator,
  ModifyOperator_replace /* IMPORTED_LONG_NAMED_INTEGER */,
  replace /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_addValues /* IMPORTED_LONG_NAMED_INTEGER */,
  addValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_removeValues /* IMPORTED_LONG_NAMED_INTEGER */,
  removeValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_setToDefault /* IMPORTED_LONG_NAMED_INTEGER */,
  setToDefault /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ModifyOperator,
  _encode_ModifyOperator,
} from '../CMIP-1/ModifyOperator.ta.js';
export {
  ModifyOperator,
  ModifyOperator_replace /* IMPORTED_LONG_NAMED_INTEGER */,
  replace /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_addValues /* IMPORTED_LONG_NAMED_INTEGER */,
  addValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_removeValues /* IMPORTED_LONG_NAMED_INTEGER */,
  removeValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_setToDefault /* IMPORTED_LONG_NAMED_INTEGER */,
  setToDefault /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ModifyOperator,
  _encode_ModifyOperator,
} from '../CMIP-1/ModifyOperator.ta.js';
import { CMIP_ATTRIBUTE } from '../CMIP-1/CMIP-ATTRIBUTE.oca.js';
export { CMIP_ATTRIBUTE } from '../CMIP-1/CMIP-ATTRIBUTE.oca.js';
import { AttributeSet } from '../CMIP-1/AttributeSet.osa.js';
export { AttributeSet } from '../CMIP-1/AttributeSet.osa.js';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.js';

/* START_OF_SYMBOL_DEFINITION AttributeError */
/**
 * @summary AttributeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeError ::= SEQUENCE {
 *   errorStatus
 *     ENUMERATED {accessDenied(2), noSuchAttribute(5), invalidAttributeValue(6),
 *                 invalidOperation(24), invalidOperator(25), ...
 *                 },
 *   modifyOperator  [2] IMPLICIT ModifyOperator OPTIONAL, -- present for invalidOperator
 *
 *   -- and invalidOperation
 *   attributeId     CMIP-ATTRIBUTE.&id({AttributeSet}),
 *   attributeValue
 *     CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeId}) OPTIONAL
 *   -- value is absent for setToDefault
 * }
 * ```
 *
 * @class
 */
export class AttributeError {
  constructor(
    /**
     * @summary `errorStatus`.
     * @public
     * @readonly
     */
    readonly errorStatus: AttributeError_errorStatus,
    /**
     * @summary `modifyOperator`.
     * @public
     * @readonly
     */
    readonly modifyOperator: OPTIONAL<ModifyOperator>,
    /**
     * @summary `attributeId`.
     * @public
     * @readonly
     */
    readonly attributeId: AttributeId,
    /**
     * @summary `attributeValue`.
     * @public
     * @readonly
     */
    readonly attributeValue: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a AttributeError
   * @description
   *
   * This takes an `object` and converts it to a `AttributeError`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AttributeError`.
   * @returns {AttributeError}
   */
  public static _from_object(
    _o: { [_K in keyof AttributeError]: AttributeError[_K] }
  ): AttributeError {
    return new AttributeError(
      _o.errorStatus,
      _o.modifyOperator,
      _o.attributeId,
      _o.attributeValue
    );
  }

  /**
   * @summary The enum used as the type of the component `errorStatus`
   * @public
   * @static
   */

  public static _enum_for_errorStatus = _enum_for_AttributeError_errorStatus;
}
/* END_OF_SYMBOL_DEFINITION AttributeError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeError */
/**
 * @summary The Leading Root Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeError: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'errorStatus',
    false,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'modifyOperator',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec('attributeId', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'attributeValue',
    true,
    $.hasAnyTag,
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeError */
/**
 * @summary The Trailing Root Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeError */
/**
 * @summary The Extension Addition Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError */
let _cached_decoder_for_AttributeError: $.ASN1Decoder<AttributeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeError */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeError} The decoded data structure.
 */
export function _decode_AttributeError(el: _Element) {
  if (!_cached_decoder_for_AttributeError) {
    _cached_decoder_for_AttributeError = function (
      el: _Element
    ): AttributeError {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let errorStatus!: AttributeError_errorStatus;
      let modifyOperator: OPTIONAL<ModifyOperator>;
      let attributeId!: AttributeId;
      let attributeValue: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        errorStatus: (_el: _Element): void => {
          errorStatus = _decode_AttributeError_errorStatus(_el);
        },
        modifyOperator: (_el: _Element): void => {
          modifyOperator = $._decode_implicit<ModifyOperator>(
            () => _decode_ModifyOperator
          )(_el);
        },
        attributeId: (_el: _Element): void => {
          attributeId = _decode_AttributeId(_el);
        },
        attributeValue: (_el: _Element): void => {
          attributeValue = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AttributeError,
        _extension_additions_list_spec_for_AttributeError,
        _root_component_type_list_2_spec_for_AttributeError,
        undefined
      );
      return new AttributeError /* SEQUENCE_CONSTRUCTOR_CALL */(
        errorStatus,
        modifyOperator,
        attributeId,
        attributeValue
      );
    };
  }
  return _cached_decoder_for_AttributeError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError */
let _cached_encoder_for_AttributeError: $.ASN1Encoder<AttributeError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeError */
/**
 * @summary Encodes a(n) AttributeError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeError, encoded as an ASN.1 Element.
 */
export function _encode_AttributeError(
  value: AttributeError,
  elGetter: $.ASN1Encoder<AttributeError>
) {
  if (!_cached_encoder_for_AttributeError) {
    _cached_encoder_for_AttributeError = function (
      value: AttributeError,
      elGetter: $.ASN1Encoder<AttributeError>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AttributeError_errorStatus(
              value.errorStatus,
              $.BER
            ),
            /* IF_ABSENT  */ value.modifyOperator === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_ModifyOperator,
                  $.BER
                )(value.modifyOperator, $.BER),
            /* REQUIRED   */ _encode_AttributeId(value.attributeId, $.BER),
            /* IF_ABSENT  */ value.attributeValue === undefined
              ? undefined
              : $._encodeAny(value.attributeValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AttributeError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeError */

/* eslint-enable */
