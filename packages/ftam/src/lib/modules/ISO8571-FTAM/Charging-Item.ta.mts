/* eslint-disable */
import {
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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Charging_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Charging-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Charging_Item {
  constructor(
    /**
     * @summary `resource_identifier`.
     * @public
     * @readonly
     */
    readonly resource_identifier: GraphicString,
    /**
     * @summary `charging_unit`.
     * @public
     * @readonly
     */
    readonly charging_unit: GraphicString,
    /**
     * @summary `charging_value`.
     * @public
     * @readonly
     */
    readonly charging_value: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a Charging_Item
   * @description
   *
   * This takes an `object` and converts it to a `Charging_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Charging_Item`.
   * @returns {Charging_Item}
   */
  public static _from_object(
    _o: { [_K in keyof Charging_Item]: Charging_Item[_K] }
  ): Charging_Item {
    return new Charging_Item(
      _o.resource_identifier,
      _o.charging_unit,
      _o.charging_value
    );
  }
}


/**
 * @summary The Leading Root Component Types of Charging_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Charging_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'resource-identifier',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'charging-unit',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'charging-value',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of Charging_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Charging_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Charging_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Charging_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_Charging_Item: $.ASN1Decoder<Charging_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Charging_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Charging_Item} The decoded data structure.
 */
export function _decode_Charging_Item(el: _Element) {
  if (!_cached_decoder_for_Charging_Item) {
    _cached_decoder_for_Charging_Item = function (el: _Element): Charging_Item {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'Charging-Item contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'resource-identifier';
      sequence[1].name = 'charging-unit';
      sequence[2].name = 'charging-value';
      let resource_identifier!: GraphicString;
      let charging_unit!: GraphicString;
      let charging_value!: INTEGER;
      resource_identifier = $._decode_implicit<GraphicString>(
        () => $._decodeGraphicString
      )(sequence[0]);
      charging_unit = $._decode_implicit<GraphicString>(
        () => $._decodeGraphicString
      )(sequence[1]);
      charging_value = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
        sequence[2]
      );
      return new Charging_Item(
        resource_identifier,
        charging_unit,
        charging_value
      );
    };
  }
  return _cached_decoder_for_Charging_Item(el);
}


let _cached_encoder_for_Charging_Item: $.ASN1Encoder<Charging_Item> | null = null;


/**
 * @summary Encodes a(n) Charging_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Charging_Item, encoded as an ASN.1 Element.
 */
export function _encode_Charging_Item(
  value: Charging_Item,
  elGetter: $.ASN1Encoder<Charging_Item>
) {
  if (!_cached_encoder_for_Charging_Item) {
    _cached_encoder_for_Charging_Item = function (
      value: Charging_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeGraphicString,
              $.BER
            )(value.resource_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeGraphicString,
              $.BER
            )(value.charging_unit, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              2,
              () => $._encodeInteger,
              $.BER
            )(value.charging_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Charging_Item(value, elGetter);
}


/* eslint-enable */
