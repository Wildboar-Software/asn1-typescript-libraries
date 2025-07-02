/* eslint-disable */
import {
  INTEGER,
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


/**
 * @summary PollReqContent_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollReqContent-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class PollReqContent_Item {
  constructor(
    /**
     * @summary `certReqId`.
     * @public
     * @readonly
     */
    readonly certReqId: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a PollReqContent_Item
   * @description
   *
   * This takes an `object` and converts it to a `PollReqContent_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PollReqContent_Item`.
   * @returns {PollReqContent_Item}
   */
  public static _from_object(
    _o: { [_K in keyof PollReqContent_Item]: PollReqContent_Item[_K] }
  ): PollReqContent_Item {
    return new PollReqContent_Item(_o.certReqId);
  }
}


/**
 * @summary The Leading Root Component Types of PollReqContent_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PollReqContent_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'certReqId',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of PollReqContent_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PollReqContent_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PollReqContent_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PollReqContent_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_PollReqContent_Item: $.ASN1Decoder<PollReqContent_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PollReqContent_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PollReqContent_Item} The decoded data structure.
 */
export function _decode_PollReqContent_Item(el: _Element): PollReqContent_Item {
  if (!_cached_decoder_for_PollReqContent_Item) {
    _cached_decoder_for_PollReqContent_Item = function (
      el: _Element
    ): PollReqContent_Item {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'PollReqContent-Item contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'certReqId';
      let certReqId!: INTEGER;
      certReqId = $._decodeInteger(sequence[0]);
      return new PollReqContent_Item(certReqId);
    };
  }
  return _cached_decoder_for_PollReqContent_Item(el);
}


let _cached_encoder_for_PollReqContent_Item: $.ASN1Encoder<PollReqContent_Item> | null = null;


/**
 * @summary Encodes a(n) PollReqContent_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PollReqContent_Item, encoded as an ASN.1 Element.
 */
export function _encode_PollReqContent_Item(
  value: PollReqContent_Item,
  elGetter: $.ASN1Encoder<PollReqContent_Item>
): _Element {
  if (!_cached_encoder_for_PollReqContent_Item) {
    _cached_encoder_for_PollReqContent_Item = function (
      value: PollReqContent_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([/* REQUIRED   */ $._encodeInteger(value.certReqId, $.BER)])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PollReqContent_Item(value, elGetter);
}


/* eslint-enable */
