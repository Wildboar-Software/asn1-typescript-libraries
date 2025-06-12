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
  Diagnostic_Item_diagnostic_type,
  Diagnostic_Item_diagnostic_type_informative /* IMPORTED_LONG_NAMED_INTEGER */,
  informative /* IMPORTED_SHORT_NAMED_INTEGER */,
  Diagnostic_Item_diagnostic_type_transient /* IMPORTED_LONG_NAMED_INTEGER */,
  transient /* IMPORTED_SHORT_NAMED_INTEGER */,
  Diagnostic_Item_diagnostic_type_permanent /* IMPORTED_LONG_NAMED_INTEGER */,
  permanent /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Diagnostic_Item_diagnostic_type,
  _encode_Diagnostic_Item_diagnostic_type,
} from '../ISO8571-FTAM/Diagnostic-Item-diagnostic-type.ta.js';
export {
  Diagnostic_Item_diagnostic_type,
  Diagnostic_Item_diagnostic_type_informative /* IMPORTED_LONG_NAMED_INTEGER */,
  informative /* IMPORTED_SHORT_NAMED_INTEGER */,
  Diagnostic_Item_diagnostic_type_transient /* IMPORTED_LONG_NAMED_INTEGER */,
  transient /* IMPORTED_SHORT_NAMED_INTEGER */,
  Diagnostic_Item_diagnostic_type_permanent /* IMPORTED_LONG_NAMED_INTEGER */,
  permanent /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Diagnostic_Item_diagnostic_type,
  _encode_Diagnostic_Item_diagnostic_type,
} from '../ISO8571-FTAM/Diagnostic-Item-diagnostic-type.ta.js';
import {
  Entity_Reference,
  Entity_Reference_no_categorization_possible /* IMPORTED_LONG_NAMED_INTEGER */,
  no_categorization_possible /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_initiating_file_service_user /* IMPORTED_LONG_NAMED_INTEGER */,
  initiating_file_service_user /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_initiating_file_protocol_machine /* IMPORTED_LONG_NAMED_INTEGER */,
  initiating_file_protocol_machine /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_service_supporting_the_file_protocol_machine /* IMPORTED_LONG_NAMED_INTEGER */,
  service_supporting_the_file_protocol_machine /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_responding_file_protocol_machine /* IMPORTED_LONG_NAMED_INTEGER */,
  responding_file_protocol_machine /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_responding_file_service_user /* IMPORTED_LONG_NAMED_INTEGER */,
  responding_file_service_user /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Entity_Reference,
  _encode_Entity_Reference,
} from '../ISO8571-FTAM/Entity-Reference.ta.js';
export {
  Entity_Reference,
  Entity_Reference_no_categorization_possible /* IMPORTED_LONG_NAMED_INTEGER */,
  no_categorization_possible /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_initiating_file_service_user /* IMPORTED_LONG_NAMED_INTEGER */,
  initiating_file_service_user /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_initiating_file_protocol_machine /* IMPORTED_LONG_NAMED_INTEGER */,
  initiating_file_protocol_machine /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_service_supporting_the_file_protocol_machine /* IMPORTED_LONG_NAMED_INTEGER */,
  service_supporting_the_file_protocol_machine /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_responding_file_protocol_machine /* IMPORTED_LONG_NAMED_INTEGER */,
  responding_file_protocol_machine /* IMPORTED_SHORT_NAMED_INTEGER */,
  Entity_Reference_responding_file_service_user /* IMPORTED_LONG_NAMED_INTEGER */,
  responding_file_service_user /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Entity_Reference,
  _encode_Entity_Reference,
} from '../ISO8571-FTAM/Entity-Reference.ta.js';

/* START_OF_SYMBOL_DEFINITION Diagnostic_Item */
/**
 * @summary Diagnostic_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Diagnostic-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Diagnostic_Item {
  constructor(
    /**
     * @summary `diagnostic_type`.
     * @public
     * @readonly
     */
    readonly diagnostic_type: Diagnostic_Item_diagnostic_type,
    /**
     * @summary `error_identifier`.
     * @public
     * @readonly
     */
    readonly error_identifier: INTEGER,
    /**
     * @summary `error_observer`.
     * @public
     * @readonly
     */
    readonly error_observer: Entity_Reference,
    /**
     * @summary `error_Source`.
     * @public
     * @readonly
     */
    readonly error_Source: Entity_Reference,
    /**
     * @summary `suggested_delay`.
     * @public
     * @readonly
     */
    readonly suggested_delay: OPTIONAL<INTEGER>,
    /**
     * @summary `further_details`.
     * @public
     * @readonly
     */
    readonly further_details: OPTIONAL<GraphicString>
  ) {}

  /**
   * @summary Restructures an object into a Diagnostic_Item
   * @description
   *
   * This takes an `object` and converts it to a `Diagnostic_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Diagnostic_Item`.
   * @returns {Diagnostic_Item}
   */
  public static _from_object(
    _o: { [_K in keyof Diagnostic_Item]: Diagnostic_Item[_K] }
  ): Diagnostic_Item {
    return new Diagnostic_Item(
      _o.diagnostic_type,
      _o.error_identifier,
      _o.error_observer,
      _o.error_Source,
      _o.suggested_delay,
      _o.further_details
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Diagnostic_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Diagnostic_Item */
/**
 * @summary The Leading Root Component Types of Diagnostic_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Diagnostic_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'diagnostic-type',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'error-identifier',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'error-observer',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'error-Source',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'suggested-delay',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'further-details',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Diagnostic_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Diagnostic_Item */
/**
 * @summary The Trailing Root Component Types of Diagnostic_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Diagnostic_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Diagnostic_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Diagnostic_Item */
/**
 * @summary The Extension Addition Component Types of Diagnostic_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Diagnostic_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Diagnostic_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Diagnostic_Item */
let _cached_decoder_for_Diagnostic_Item: $.ASN1Decoder<Diagnostic_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Diagnostic_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Diagnostic_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Diagnostic_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Diagnostic_Item} The decoded data structure.
 */
export function _decode_Diagnostic_Item(el: _Element) {
  if (!_cached_decoder_for_Diagnostic_Item) {
    _cached_decoder_for_Diagnostic_Item = function (
      el: _Element
    ): Diagnostic_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let diagnostic_type!: Diagnostic_Item_diagnostic_type;
      let error_identifier!: INTEGER;
      let error_observer!: Entity_Reference;
      let error_Source!: Entity_Reference;
      let suggested_delay: OPTIONAL<INTEGER>;
      let further_details: OPTIONAL<GraphicString>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'diagnostic-type': (_el: _Element): void => {
          diagnostic_type = $._decode_implicit<Diagnostic_Item_diagnostic_type>(
            () => _decode_Diagnostic_Item_diagnostic_type
          )(_el);
        },
        'error-identifier': (_el: _Element): void => {
          error_identifier = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
        'error-observer': (_el: _Element): void => {
          error_observer = $._decode_implicit<Entity_Reference>(
            () => _decode_Entity_Reference
          )(_el);
        },
        'error-Source': (_el: _Element): void => {
          error_Source = $._decode_implicit<Entity_Reference>(
            () => _decode_Entity_Reference
          )(_el);
        },
        'suggested-delay': (_el: _Element): void => {
          suggested_delay = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
        'further-details': (_el: _Element): void => {
          further_details = $._decode_implicit<GraphicString>(
            () => $._decodeGraphicString
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Diagnostic_Item,
        _extension_additions_list_spec_for_Diagnostic_Item,
        _root_component_type_list_2_spec_for_Diagnostic_Item,
        undefined
      );
      return new Diagnostic_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        diagnostic_type,
        error_identifier,
        error_observer,
        error_Source,
        suggested_delay,
        further_details
      );
    };
  }
  return _cached_decoder_for_Diagnostic_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Diagnostic_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Diagnostic_Item */
let _cached_encoder_for_Diagnostic_Item: $.ASN1Encoder<Diagnostic_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Diagnostic_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Diagnostic_Item */
/**
 * @summary Encodes a(n) Diagnostic_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diagnostic_Item, encoded as an ASN.1 Element.
 */
export function _encode_Diagnostic_Item(
  value: Diagnostic_Item,
  elGetter: $.ASN1Encoder<Diagnostic_Item>
) {
  if (!_cached_encoder_for_Diagnostic_Item) {
    _cached_encoder_for_Diagnostic_Item = function (
      value: Diagnostic_Item,
      elGetter: $.ASN1Encoder<Diagnostic_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Diagnostic_Item_diagnostic_type,
              $.BER
            )(value.diagnostic_type, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeInteger,
              $.BER
            )(value.error_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              2,
              () => _encode_Entity_Reference,
              $.BER
            )(value.error_observer, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              3,
              () => _encode_Entity_Reference,
              $.BER
            )(value.error_Source, $.BER),
            /* IF_ABSENT  */ value.suggested_delay === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => $._encodeInteger,
                  $.BER
                )(value.suggested_delay, $.BER),
            /* IF_ABSENT  */ value.further_details === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  5,
                  () => $._encodeGraphicString,
                  $.BER
                )(value.further_details, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Diagnostic_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Diagnostic_Item */

/* eslint-enable */
