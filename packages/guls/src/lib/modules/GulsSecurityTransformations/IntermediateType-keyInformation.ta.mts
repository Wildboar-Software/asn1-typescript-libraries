/* eslint-disable */
import {
  INTEGER,
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

/**
 * @summary IntermediateType_keyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateType-keyInformation ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class IntermediateType_keyInformation {
  constructor(
    /**
     * @summary `kiClass`.
     * @public
     * @readonly
     */
    readonly kiClass: { local: INTEGER } | { global: OBJECT_IDENTIFIER },
    /**
     * @summary `keyInfo`.
     * @public
     * @readonly
     */
    readonly keyInfo: _Element
  ) {}

  /**
   * @summary Restructures an object into a IntermediateType_keyInformation
   * @description
   *
   * This takes an `object` and converts it to a `IntermediateType_keyInformation`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `IntermediateType_keyInformation`.
   * @returns {IntermediateType_keyInformation}
   */
  public static _from_object(
    _o: {
      [_K in keyof IntermediateType_keyInformation]: IntermediateType_keyInformation[_K];
    }
  ): IntermediateType_keyInformation {
    return new IntermediateType_keyInformation(_o.kiClass, _o.keyInfo);
  }
}


/**
 * @summary The Leading Root Component Types of IntermediateType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IntermediateType_keyInformation: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'kiClass',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyInfo',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of IntermediateType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IntermediateType_keyInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IntermediateType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IntermediateType_keyInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_IntermediateType_keyInformation: $.ASN1Decoder<IntermediateType_keyInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IntermediateType_keyInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntermediateType_keyInformation} The decoded data structure.
 */
export function _decode_IntermediateType_keyInformation(el: _Element) {
  if (!_cached_decoder_for_IntermediateType_keyInformation) {
    _cached_decoder_for_IntermediateType_keyInformation = function (
      el: _Element
    ): IntermediateType_keyInformation {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'IntermediateType-keyInformation contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'kiClass';
      sequence[1].name = 'keyInfo';
      let kiClass!: { local: INTEGER } | { global: OBJECT_IDENTIFIER };
      let keyInfo!: _Element;
      kiClass = $._decode_inextensible_choice<typeof kiClass>({
        'UNIVERSAL 2': ['local', $._decodeInteger],
        'UNIVERSAL 6': ['global', $._decodeObjectIdentifier],
      })(sequence[0]);
      keyInfo = $._decodeAny(sequence[1]);
      return new IntermediateType_keyInformation(kiClass, keyInfo);
    };
  }
  return _cached_decoder_for_IntermediateType_keyInformation(el);
}


let _cached_encoder_for_IntermediateType_keyInformation: $.ASN1Encoder<IntermediateType_keyInformation> | null = null;


/**
 * @summary Encodes a(n) IntermediateType_keyInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntermediateType_keyInformation, encoded as an ASN.1 Element.
 */
export function _encode_IntermediateType_keyInformation(
  value: IntermediateType_keyInformation,
  elGetter: $.ASN1Encoder<IntermediateType_keyInformation>
) {
  if (!_cached_encoder_for_IntermediateType_keyInformation) {
    _cached_encoder_for_IntermediateType_keyInformation = function (
      value: IntermediateType_keyInformation    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            ("local" in value.kiClass)
              ? $._encodeInteger(value.kiClass.local, $.DER)
              : $._encodeObjectIdentifier(value.kiClass.global, $.DER),
            $._encodeAny(
              value.keyInfo,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_IntermediateType_keyInformation(value, elGetter);
}


/* eslint-enable */
