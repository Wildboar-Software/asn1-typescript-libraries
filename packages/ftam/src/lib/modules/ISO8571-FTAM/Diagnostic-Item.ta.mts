/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
  GraphicString,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  Diagnostic_Item_diagnostic_type,
  _decode_Diagnostic_Item_diagnostic_type,
  _encode_Diagnostic_Item_diagnostic_type,
} from '../ISO8571-FTAM/Diagnostic-Item-diagnostic-type.ta.mjs';
import {
  Entity_Reference,
  _decode_Entity_Reference,
  _encode_Entity_Reference,
} from '../ISO8571-FTAM/Entity-Reference.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'error-identifier',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'error-observer',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'error-Source',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'suggested-delay',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'further-details',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of Diagnostic_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Diagnostic_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Diagnostic_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Diagnostic_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_Diagnostic_Item: $.ASN1Decoder<Diagnostic_Item> | null = null;


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
      let diagnostic_type!: Diagnostic_Item_diagnostic_type;
      let error_identifier!: INTEGER;
      let error_observer!: Entity_Reference;
      let error_Source!: Entity_Reference;
      let suggested_delay: OPTIONAL<INTEGER>;
      let further_details: OPTIONAL<GraphicString>;
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Diagnostic_Item,
        _extension_additions_list_spec_for_Diagnostic_Item,
        _root_component_type_list_2_spec_for_Diagnostic_Item,
        undefined
      );
      return new Diagnostic_Item (
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


let _cached_encoder_for_Diagnostic_Item: $.ASN1Encoder<Diagnostic_Item> | null = null;


/**
 * @summary Encodes a(n) Diagnostic_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diagnostic_Item, encoded as an ASN.1 Element.
 */
export function _encode_Diagnostic_Item(
  value: Diagnostic_Item,
  elGetter: $.ASN1Encoder<Diagnostic_Item>
) {
  if (!_cached_encoder_for_Diagnostic_Item) {
    _cached_encoder_for_Diagnostic_Item = function (
      value: Diagnostic_Item    ): _Element {
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


/* eslint-enable */
