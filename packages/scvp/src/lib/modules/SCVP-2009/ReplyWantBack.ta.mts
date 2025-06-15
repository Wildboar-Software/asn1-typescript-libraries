/* eslint-disable */
import {
  OCTET_STRING,
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
 * @summary ReplyWantBack
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyWantBack ::= SEQUENCE {
 *     wb     WANT-BACK.&id({AllWantBacks}),
 *     value  OCTET STRING
 *                 (CONTAINING WANT-BACK.&Type({AllWantBacks}{@wb}))
 * }
 * ```
 *
 * @class
 */
export class ReplyWantBack {
  constructor(
    /**
     * @summary `wb`.
     * @public
     * @readonly
     */
    readonly wb: OBJECT_IDENTIFIER,
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a ReplyWantBack
   * @description
   *
   * This takes an `object` and converts it to a `ReplyWantBack`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReplyWantBack`.
   * @returns {ReplyWantBack}
   */
  public static _from_object(
    _o: { [_K in keyof ReplyWantBack]: ReplyWantBack[_K] }
  ): ReplyWantBack {
    return new ReplyWantBack(_o.wb, _o.value);
  }
}

/**
 * @summary The Leading Root Component Types of ReplyWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplyWantBack: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'wb',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'value',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of ReplyWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplyWantBack: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ReplyWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplyWantBack: $.ComponentSpec[] = [];

let _cached_decoder_for_ReplyWantBack: $.ASN1Decoder<ReplyWantBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyWantBack
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyWantBack} The decoded data structure.
 */
export function _decode_ReplyWantBack(el: _Element) {
  if (!_cached_decoder_for_ReplyWantBack) {
    _cached_decoder_for_ReplyWantBack = function (el: _Element): ReplyWantBack {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ReplyWantBack contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'wb';
      sequence[1].name = 'value';
      let wb!: OBJECT_IDENTIFIER;
      let value!: OCTET_STRING;
      wb = $._decodeObjectIdentifier(sequence[0]);
      value = $._decodeOctetString(sequence[1]);
      return new ReplyWantBack(wb, value);
    };
  }
  return _cached_decoder_for_ReplyWantBack(el);
}

let _cached_encoder_for_ReplyWantBack: $.ASN1Encoder<ReplyWantBack> | null = null;

/**
 * @summary Encodes a(n) ReplyWantBack into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyWantBack, encoded as an ASN.1 Element.
 */
export function _encode_ReplyWantBack(
  value: ReplyWantBack,
  elGetter: $.ASN1Encoder<ReplyWantBack>
) {
  if (!_cached_encoder_for_ReplyWantBack) {
    _cached_encoder_for_ReplyWantBack = function (
      value: ReplyWantBack    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.wb, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReplyWantBack(value, elGetter);
}


/* eslint-enable */
