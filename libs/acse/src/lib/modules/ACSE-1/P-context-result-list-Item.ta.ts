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
  Result,
  Result_acceptance /* IMPORTED_LONG_NAMED_INTEGER */,
  acceptance /* IMPORTED_SHORT_NAMED_INTEGER */,
  Result_user_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
  user_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
  Result_provider_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
  provider_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Result,
  _encode_Result,
} from '../ACSE-1/Result.ta';
export {
  Result,
  Result_acceptance /* IMPORTED_LONG_NAMED_INTEGER */,
  acceptance /* IMPORTED_SHORT_NAMED_INTEGER */,
  Result_user_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
  user_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
  Result_provider_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
  provider_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Result,
  _encode_Result,
} from '../ACSE-1/Result.ta';
import {
  Concrete_syntax_name,
  _decode_Concrete_syntax_name,
  _encode_Concrete_syntax_name,
} from '../ACSE-1/Concrete-syntax-name.ta';
export {
  Concrete_syntax_name,
  _decode_Concrete_syntax_name,
  _encode_Concrete_syntax_name,
} from '../ACSE-1/Concrete-syntax-name.ta';
import {
  P_context_result_list_Item_provider_reason,
  P_context_result_list_Item_provider_reason_reason_not_specified /* IMPORTED_LONG_NAMED_INTEGER */,
  reason_not_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
  P_context_result_list_Item_provider_reason_abstract_syntax_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
  abstract_syntax_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
  P_context_result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
  proposed_transfer_syntaxes_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
  P_context_result_list_Item_provider_reason_local_limit_on_DCS_exceeded /* IMPORTED_LONG_NAMED_INTEGER */,
  local_limit_on_DCS_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_P_context_result_list_Item_provider_reason,
  _encode_P_context_result_list_Item_provider_reason,
} from '../ACSE-1/P-context-result-list-Item-provider-reason.ta';
export {
  P_context_result_list_Item_provider_reason,
  P_context_result_list_Item_provider_reason_reason_not_specified /* IMPORTED_LONG_NAMED_INTEGER */,
  reason_not_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
  P_context_result_list_Item_provider_reason_abstract_syntax_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
  abstract_syntax_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
  P_context_result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
  proposed_transfer_syntaxes_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
  P_context_result_list_Item_provider_reason_local_limit_on_DCS_exceeded /* IMPORTED_LONG_NAMED_INTEGER */,
  local_limit_on_DCS_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_P_context_result_list_Item_provider_reason,
  _encode_P_context_result_list_Item_provider_reason,
} from '../ACSE-1/P-context-result-list-Item-provider-reason.ta';

/* START_OF_SYMBOL_DEFINITION P_context_result_list_Item */
/**
 * @summary P_context_result_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * P-context-result-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class P_context_result_list_Item {
  constructor(
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: Result,
    /**
     * @summary `concrete_syntax_name`.
     * @public
     * @readonly
     */
    readonly concrete_syntax_name: OPTIONAL<Concrete_syntax_name>,
    /**
     * @summary `provider_reason`.
     * @public
     * @readonly
     */
    readonly provider_reason: OPTIONAL<P_context_result_list_Item_provider_reason>
  ) {}

  /**
   * @summary Restructures an object into a P_context_result_list_Item
   * @description
   *
   * This takes an `object` and converts it to a `P_context_result_list_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `P_context_result_list_Item`.
   * @returns {P_context_result_list_Item}
   */
  public static _from_object(
    _o: {
      [_K in keyof P_context_result_list_Item]: P_context_result_list_Item[_K];
    }
  ): P_context_result_list_Item {
    return new P_context_result_list_Item(
      _o.result,
      _o.concrete_syntax_name,
      _o.provider_reason
    );
  }
}
/* END_OF_SYMBOL_DEFINITION P_context_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_P_context_result_list_Item */
/**
 * @summary The Leading Root Component Types of P_context_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_P_context_result_list_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'result',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'concrete-syntax-name',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'provider-reason',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_P_context_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_P_context_result_list_Item */
/**
 * @summary The Trailing Root Component Types of P_context_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_P_context_result_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_P_context_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_P_context_result_list_Item */
/**
 * @summary The Extension Addition Component Types of P_context_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_P_context_result_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_P_context_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_P_context_result_list_Item */
let _cached_decoder_for_P_context_result_list_Item: $.ASN1Decoder<P_context_result_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_P_context_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _decode_P_context_result_list_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) P_context_result_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {P_context_result_list_Item} The decoded data structure.
 */
export function _decode_P_context_result_list_Item(el: _Element) {
  if (!_cached_decoder_for_P_context_result_list_Item) {
    _cached_decoder_for_P_context_result_list_Item = function (
      el: _Element
    ): P_context_result_list_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let result!: Result;
      let concrete_syntax_name: OPTIONAL<Concrete_syntax_name>;
      let provider_reason: OPTIONAL<P_context_result_list_Item_provider_reason>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        result: (_el: _Element): void => {
          result = $._decode_implicit<Result>(() => _decode_Result)(_el);
        },
        'concrete-syntax-name': (_el: _Element): void => {
          concrete_syntax_name = $._decode_implicit<Concrete_syntax_name>(
            () => _decode_Concrete_syntax_name
          )(_el);
        },
        'provider-reason': (_el: _Element): void => {
          provider_reason = $._decode_implicit<P_context_result_list_Item_provider_reason>(
            () => _decode_P_context_result_list_Item_provider_reason
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_P_context_result_list_Item,
        _extension_additions_list_spec_for_P_context_result_list_Item,
        _root_component_type_list_2_spec_for_P_context_result_list_Item,
        undefined
      );
      return new P_context_result_list_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        result,
        concrete_syntax_name,
        provider_reason
      );
    };
  }
  return _cached_decoder_for_P_context_result_list_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_P_context_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_P_context_result_list_Item */
let _cached_encoder_for_P_context_result_list_Item: $.ASN1Encoder<P_context_result_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_P_context_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _encode_P_context_result_list_Item */
/**
 * @summary Encodes a(n) P_context_result_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The P_context_result_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_P_context_result_list_Item(
  value: P_context_result_list_Item,
  elGetter: $.ASN1Encoder<P_context_result_list_Item>
) {
  if (!_cached_encoder_for_P_context_result_list_Item) {
    _cached_encoder_for_P_context_result_list_Item = function (
      value: P_context_result_list_Item,
      elGetter: $.ASN1Encoder<P_context_result_list_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Result,
              $.BER
            )(value.result, $.BER),
            /* IF_ABSENT  */ value.concrete_syntax_name === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => _encode_Concrete_syntax_name,
                  $.BER
                )(value.concrete_syntax_name, $.BER),
            /* IF_ABSENT  */ value.provider_reason === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_P_context_result_list_Item_provider_reason,
                  $.BER
                )(value.provider_reason, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_P_context_result_list_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_P_context_result_list_Item */

/* eslint-enable */
