/* eslint-disable */
import {
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
import {
  BIPMessage_nature,
  _decode_BIPMessage_nature,
  _encode_BIPMessage_nature,
} from '../BIP/BIPMessage-nature.ta.mjs';

/**
 * @summary BIPMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPMessage ::= SEQUENCE {
 *   nature
 *     CHOICE {request          BIPRequest,
 *             response         BIPResponse,
 *             notification     BIPNotification,
 *             acknowledgement  BIPAcknowledgement},
 *   ...
 * }
 * ```
 *
 * @class
 */
export class BIPMessage {
  constructor(
    /**
     * @summary `nature`.
     * @public
     * @readonly
     */
    readonly nature: BIPMessage_nature,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a BIPMessage
   * @description
   *
   * This takes an `object` and converts it to a `BIPMessage`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BIPMessage`.
   * @returns {BIPMessage}
   */
  public static _from_object(
    _o: { [_K in keyof BIPMessage]: BIPMessage[_K] }
  ): BIPMessage {
    return new BIPMessage(_o.nature, _o._unrecognizedExtensionsList);
  }
}


/**
 * @summary The Leading Root Component Types of BIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BIPMessage: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'nature',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of BIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BIPMessage: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BIPMessage: $.ComponentSpec[] = [];


let _cached_decoder_for_BIPMessage: $.ASN1Decoder<BIPMessage> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPMessage} The decoded data structure.
 */
export function _decode_BIPMessage(el: _Element) {
  if (!_cached_decoder_for_BIPMessage) {
    _cached_decoder_for_BIPMessage = function (el: _Element): BIPMessage {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BIPMessage contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'nature';
      let nature!: BIPMessage_nature;
      nature = _decode_BIPMessage_nature(sequence[0]);
      return new BIPMessage(nature, sequence.slice(1));
    };
  }
  return _cached_decoder_for_BIPMessage(el);
}


let _cached_encoder_for_BIPMessage: $.ASN1Encoder<BIPMessage> | null = null;


/**
 * @summary Encodes a(n) BIPMessage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPMessage, encoded as an ASN.1 Element.
 */
export function _encode_BIPMessage(
  value: BIPMessage,
  elGetter: $.ASN1Encoder<BIPMessage>
) {
  if (!_cached_encoder_for_BIPMessage) {
    _cached_encoder_for_BIPMessage = function (
      value: BIPMessage    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [/* REQUIRED   */ _encode_BIPMessage_nature(value.nature, $.BER)],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BIPMessage(value, elGetter);
}


/* eslint-enable */
