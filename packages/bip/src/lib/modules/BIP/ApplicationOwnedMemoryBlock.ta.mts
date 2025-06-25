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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';

/**
 * @summary ApplicationOwnedMemoryBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationOwnedMemoryBlock ::= SEQUENCE {address  MemoryAddress
 * }
 * ```
 *
 * @class
 */
export class ApplicationOwnedMemoryBlock {
  constructor(
    /**
     * @summary `address`.
     * @public
     * @readonly
     */
    readonly address: MemoryAddress
  ) {}

  /**
   * @summary Restructures an object into a ApplicationOwnedMemoryBlock
   * @description
   *
   * This takes an `object` and converts it to a `ApplicationOwnedMemoryBlock`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ApplicationOwnedMemoryBlock`.
   * @returns {ApplicationOwnedMemoryBlock}
   */
  public static _from_object(
    _o: {
      [_K in keyof ApplicationOwnedMemoryBlock]: ApplicationOwnedMemoryBlock[_K];
    }
  ): ApplicationOwnedMemoryBlock {
    return new ApplicationOwnedMemoryBlock(_o.address);
  }
}


/**
 * @summary The Leading Root Component Types of ApplicationOwnedMemoryBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ApplicationOwnedMemoryBlock: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'address',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of ApplicationOwnedMemoryBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ApplicationOwnedMemoryBlock: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ApplicationOwnedMemoryBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ApplicationOwnedMemoryBlock: $.ComponentSpec[] = [];


let _cached_decoder_for_ApplicationOwnedMemoryBlock: $.ASN1Decoder<ApplicationOwnedMemoryBlock> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationOwnedMemoryBlock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationOwnedMemoryBlock} The decoded data structure.
 */
export function _decode_ApplicationOwnedMemoryBlock(el: _Element): ApplicationOwnedMemoryBlock {
  if (!_cached_decoder_for_ApplicationOwnedMemoryBlock) {
    _cached_decoder_for_ApplicationOwnedMemoryBlock = function (
      el: _Element
    ): ApplicationOwnedMemoryBlock {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'ApplicationOwnedMemoryBlock contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'address';
      let address!: MemoryAddress;
      address = _decode_MemoryAddress(sequence[0]);
      return new ApplicationOwnedMemoryBlock(address);
    };
  }
  return _cached_decoder_for_ApplicationOwnedMemoryBlock(el);
}


let _cached_encoder_for_ApplicationOwnedMemoryBlock: $.ASN1Encoder<ApplicationOwnedMemoryBlock> | null = null;


/**
 * @summary Encodes a(n) ApplicationOwnedMemoryBlock into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationOwnedMemoryBlock, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationOwnedMemoryBlock(
  value: ApplicationOwnedMemoryBlock,
  elGetter: $.ASN1Encoder<ApplicationOwnedMemoryBlock>
): _Element {
  if (!_cached_encoder_for_ApplicationOwnedMemoryBlock) {
    _cached_encoder_for_ApplicationOwnedMemoryBlock = function (
      value: ApplicationOwnedMemoryBlock    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_MemoryAddress(value.address, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ApplicationOwnedMemoryBlock(value, elGetter);
}


/* eslint-enable */
