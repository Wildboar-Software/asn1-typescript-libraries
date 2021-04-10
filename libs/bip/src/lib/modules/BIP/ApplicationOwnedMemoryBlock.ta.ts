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
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta';
export {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta';

/* START_OF_SYMBOL_DEFINITION ApplicationOwnedMemoryBlock */
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
/* END_OF_SYMBOL_DEFINITION ApplicationOwnedMemoryBlock */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ApplicationOwnedMemoryBlock */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ApplicationOwnedMemoryBlock */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ApplicationOwnedMemoryBlock */
/**
 * @summary The Trailing Root Component Types of ApplicationOwnedMemoryBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ApplicationOwnedMemoryBlock: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ApplicationOwnedMemoryBlock */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ApplicationOwnedMemoryBlock */
/**
 * @summary The Extension Addition Component Types of ApplicationOwnedMemoryBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ApplicationOwnedMemoryBlock: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ApplicationOwnedMemoryBlock */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationOwnedMemoryBlock */
let _cached_decoder_for_ApplicationOwnedMemoryBlock: $.ASN1Decoder<ApplicationOwnedMemoryBlock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationOwnedMemoryBlock */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationOwnedMemoryBlock */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationOwnedMemoryBlock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationOwnedMemoryBlock} The decoded data structure.
 */
export function _decode_ApplicationOwnedMemoryBlock(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationOwnedMemoryBlock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationOwnedMemoryBlock */
let _cached_encoder_for_ApplicationOwnedMemoryBlock: $.ASN1Encoder<ApplicationOwnedMemoryBlock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationOwnedMemoryBlock */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationOwnedMemoryBlock */
/**
 * @summary Encodes a(n) ApplicationOwnedMemoryBlock into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationOwnedMemoryBlock, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationOwnedMemoryBlock(
  value: ApplicationOwnedMemoryBlock,
  elGetter: $.ASN1Encoder<ApplicationOwnedMemoryBlock>
) {
  if (!_cached_encoder_for_ApplicationOwnedMemoryBlock) {
    _cached_encoder_for_ApplicationOwnedMemoryBlock = function (
      value: ApplicationOwnedMemoryBlock,
      elGetter: $.ASN1Encoder<ApplicationOwnedMemoryBlock>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationOwnedMemoryBlock */

/* eslint-enable */
