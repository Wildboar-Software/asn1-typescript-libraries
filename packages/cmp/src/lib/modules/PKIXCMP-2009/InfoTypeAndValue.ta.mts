/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
/* START_OF_SYMBOL_DEFINITION InfoTypeAndValue */
/**
 * @summary InfoTypeAndValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InfoTypeAndValue ::= SEQUENCE {
 *     infoType    INFO-TYPE-AND-VALUE.
 *                     &id({SupportedInfoSet}),
 *     infoValue   INFO-TYPE-AND-VALUE.
 *                     &Type({SupportedInfoSet}{@infoType}) }
 * ```
 *
 * @class
 */
export class InfoTypeAndValue {
  constructor(
    /**
     * @summary `infoType`.
     * @public
     * @readonly
     */
    readonly infoType: OBJECT_IDENTIFIER,
    /**
     * @summary `infoValue`.
     * @public
     * @readonly
     */
    readonly infoValue: _Element
  ) {}

  /**
   * @summary Restructures an object into a InfoTypeAndValue
   * @description
   *
   * This takes an `object` and converts it to a `InfoTypeAndValue`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `InfoTypeAndValue`.
   * @returns {InfoTypeAndValue}
   */
  public static _from_object(
    _o: { [_K in keyof InfoTypeAndValue]: InfoTypeAndValue[_K] }
  ): InfoTypeAndValue {
    return new InfoTypeAndValue(_o.infoType, _o.infoValue);
  }
}
/* END_OF_SYMBOL_DEFINITION InfoTypeAndValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InfoTypeAndValue */
/**
 * @summary The Leading Root Component Types of InfoTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InfoTypeAndValue: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'infoType',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec('infoValue', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InfoTypeAndValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InfoTypeAndValue */
/**
 * @summary The Trailing Root Component Types of InfoTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InfoTypeAndValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InfoTypeAndValue */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InfoTypeAndValue */
/**
 * @summary The Extension Addition Component Types of InfoTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InfoTypeAndValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InfoTypeAndValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InfoTypeAndValue */
let _cached_decoder_for_InfoTypeAndValue: $.ASN1Decoder<InfoTypeAndValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InfoTypeAndValue */

/* START_OF_SYMBOL_DEFINITION _decode_InfoTypeAndValue */
/**
 * @summary Decodes an ASN.1 element into a(n) InfoTypeAndValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InfoTypeAndValue} The decoded data structure.
 */
export function _decode_InfoTypeAndValue(el: _Element) {
  if (!_cached_decoder_for_InfoTypeAndValue) {
    _cached_decoder_for_InfoTypeAndValue = function (
      el: _Element
    ): InfoTypeAndValue {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'InfoTypeAndValue contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'infoType';
      sequence[1].name = 'infoValue';
      let infoType!: OBJECT_IDENTIFIER;
      let infoValue!: _Element;
      infoType = $._decodeObjectIdentifier(sequence[0]);
      infoValue = $._decodeAny(sequence[1]);
      return new InfoTypeAndValue(infoType, infoValue);
    };
  }
  return _cached_decoder_for_InfoTypeAndValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InfoTypeAndValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InfoTypeAndValue */
let _cached_encoder_for_InfoTypeAndValue: $.ASN1Encoder<InfoTypeAndValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InfoTypeAndValue */

/* START_OF_SYMBOL_DEFINITION _encode_InfoTypeAndValue */
/**
 * @summary Encodes a(n) InfoTypeAndValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoTypeAndValue, encoded as an ASN.1 Element.
 */
export function _encode_InfoTypeAndValue(
  value: InfoTypeAndValue,
  elGetter: $.ASN1Encoder<InfoTypeAndValue>
) {
  if (!_cached_encoder_for_InfoTypeAndValue) {
    _cached_encoder_for_InfoTypeAndValue = function (
      value: InfoTypeAndValue    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.infoType, $.BER),
            /* REQUIRED   */ $._encodeAny(value.infoValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_InfoTypeAndValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InfoTypeAndValue */

/* eslint-enable */
