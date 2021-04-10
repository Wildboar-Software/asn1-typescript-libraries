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
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../Uds/Attribute.ta';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../Uds/Attribute.ta';

/* START_OF_SYMBOL_DEFINITION CommsAddress */
/**
 * @summary CommsAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommsAddress ::= SEQUENCE {attribute  SEQUENCE (SIZE (1..MAX)) OF Attribute
 * }
 * ```
 *
 * @class
 */
export class CommsAddress {
  constructor(
    /**
     * @summary `attribute`.
     * @public
     * @readonly
     */
    readonly attribute: Attribute[]
  ) {}

  /**
   * @summary Restructures an object into a CommsAddress
   * @description
   *
   * This takes an `object` and converts it to a `CommsAddress`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CommsAddress`.
   * @returns {CommsAddress}
   */
  public static _from_object(
    _o: { [_K in keyof CommsAddress]: CommsAddress[_K] }
  ): CommsAddress {
    return new CommsAddress(_o.attribute);
  }
}
/* END_OF_SYMBOL_DEFINITION CommsAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommsAddress */
/**
 * @summary The Leading Root Component Types of CommsAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommsAddress: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attribute',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommsAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommsAddress */
/**
 * @summary The Trailing Root Component Types of CommsAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommsAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommsAddress */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommsAddress */
/**
 * @summary The Extension Addition Component Types of CommsAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommsAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommsAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommsAddress */
let _cached_decoder_for_CommsAddress: $.ASN1Decoder<CommsAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommsAddress */

/* START_OF_SYMBOL_DEFINITION _decode_CommsAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) CommsAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommsAddress} The decoded data structure.
 */
export function _decode_CommsAddress(el: _Element) {
  if (!_cached_decoder_for_CommsAddress) {
    _cached_decoder_for_CommsAddress = function (el: _Element): CommsAddress {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'CommsAddress contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'attribute';
      let attribute!: Attribute[];
      attribute = $._decodeSequenceOf<Attribute>(() => _decode_Attribute)(
        sequence[0]
      );
      return new CommsAddress(attribute);
    };
  }
  return _cached_decoder_for_CommsAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommsAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommsAddress */
let _cached_encoder_for_CommsAddress: $.ASN1Encoder<CommsAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommsAddress */

/* START_OF_SYMBOL_DEFINITION _encode_CommsAddress */
/**
 * @summary Encodes a(n) CommsAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommsAddress, encoded as an ASN.1 Element.
 */
export function _encode_CommsAddress(
  value: CommsAddress,
  elGetter: $.ASN1Encoder<CommsAddress>
) {
  if (!_cached_encoder_for_CommsAddress) {
    _cached_encoder_for_CommsAddress = function (
      value: CommsAddress,
      elGetter: $.ASN1Encoder<CommsAddress>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<Attribute>(
              () => _encode_Attribute,
              $.BER
            )(value.attribute, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CommsAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommsAddress */

/* eslint-enable */
