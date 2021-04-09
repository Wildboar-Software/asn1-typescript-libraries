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
import {
  CancelProblem,
  _enum_for_CancelProblem,
  CancelProblem_unknownOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unknownOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CancelProblem_tooLate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  tooLate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CancelProblem_operationNotCancellable /* IMPORTED_LONG_ENUMERATION_ITEM */,
  operationNotCancellable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CancelProblem,
  _encode_CancelProblem,
} from '../Remote-Operations-Useful-Definitions/CancelProblem.ta';
export {
  CancelProblem,
  _enum_for_CancelProblem,
  CancelProblem_unknownOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unknownOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CancelProblem_tooLate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  tooLate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CancelProblem_operationNotCancellable /* IMPORTED_LONG_ENUMERATION_ITEM */,
  operationNotCancellable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CancelProblem,
  _encode_CancelProblem,
} from '../Remote-Operations-Useful-Definitions/CancelProblem.ta';
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
export {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';

/* START_OF_SYMBOL_DEFINITION cancelFailed_ParameterType */
/**
 * @summary cancelFailed_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancelFailed-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class cancelFailed_ParameterType {
  constructor(
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: CancelProblem,
    /**
     * @summary `operation`.
     * @public
     * @readonly
     */
    readonly operation: InvokeId
  ) {}

  /**
   * @summary Restructures an object into a cancelFailed_ParameterType
   * @description
   *
   * This takes an `object` and converts it to a `cancelFailed_ParameterType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `cancelFailed_ParameterType`.
   * @returns {cancelFailed_ParameterType}
   */
  public static _from_object(
    _o: {
      [_K in keyof cancelFailed_ParameterType]: cancelFailed_ParameterType[_K];
    }
  ): cancelFailed_ParameterType {
    return new cancelFailed_ParameterType(_o.problem, _o.operation);
  }

  /**
   * @summary The enum used as the type of the component `problem`
   * @public
   * @static
   */

  public static _enum_for_problem = _enum_for_CancelProblem;
}
/* END_OF_SYMBOL_DEFINITION cancelFailed_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_cancelFailed_ParameterType */
/**
 * @summary The Leading Root Component Types of cancelFailed_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'problem',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_cancelFailed_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_cancelFailed_ParameterType */
/**
 * @summary The Trailing Root Component Types of cancelFailed_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_cancelFailed_ParameterType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_cancelFailed_ParameterType */
/**
 * @summary The Extension Addition Component Types of cancelFailed_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_cancelFailed_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_cancelFailed_ParameterType */
let _cached_decoder_for_cancelFailed_ParameterType: $.ASN1Decoder<cancelFailed_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_cancelFailed_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_cancelFailed_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) cancelFailed_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {cancelFailed_ParameterType} The decoded data structure.
 */
export function _decode_cancelFailed_ParameterType(el: _Element) {
  if (!_cached_decoder_for_cancelFailed_ParameterType) {
    _cached_decoder_for_cancelFailed_ParameterType = function (
      el: _Element
    ): cancelFailed_ParameterType {
      /* START_OF_SET_COMPONENT_DECLARATIONS */
      let problem!: CancelProblem;
      let operation!: InvokeId;
      /* END_OF_SET_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        problem: (_el: _Element): void => {
          problem = $._decode_implicit<CancelProblem>(
            () => _decode_CancelProblem
          )(_el);
        },
        operation: (_el: _Element): void => {
          operation = $._decode_explicit<InvokeId>(() => _decode_InvokeId)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_set(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_cancelFailed_ParameterType,
        _extension_additions_list_spec_for_cancelFailed_ParameterType,
        _root_component_type_list_2_spec_for_cancelFailed_ParameterType,
        undefined
      );
      return new cancelFailed_ParameterType /* SET_CONSTRUCTOR_CALL */(
        problem,
        operation
      );
    };
  }
  return _cached_decoder_for_cancelFailed_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_cancelFailed_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_cancelFailed_ParameterType */
let _cached_encoder_for_cancelFailed_ParameterType: $.ASN1Encoder<cancelFailed_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_cancelFailed_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_cancelFailed_ParameterType */
/**
 * @summary Encodes a(n) cancelFailed_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The cancelFailed_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_cancelFailed_ParameterType(
  value: cancelFailed_ParameterType,
  elGetter: $.ASN1Encoder<cancelFailed_ParameterType>
) {
  if (!_cached_encoder_for_cancelFailed_ParameterType) {
    _cached_encoder_for_cancelFailed_ParameterType = function (
      value: cancelFailed_ParameterType,
      elGetter: $.ASN1Encoder<cancelFailed_ParameterType>
    ): _Element {
      return $._encodeSet(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_CancelProblem,
              $.BER
            )(value.problem, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_InvokeId,
              $.BER
            )(value.operation, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_cancelFailed_ParameterType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_cancelFailed_ParameterType */

/* eslint-enable */
