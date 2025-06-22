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
  AP_title,
  _decode_AP_title,
  _encode_AP_title,
} from '../ISO8571-FTAM/AP-title.ta.mjs';
import {
  AE_qualifier,
  _decode_AE_qualifier,
  _encode_AE_qualifier,
} from '../ISO8571-FTAM/AE-qualifier.ta.mjs';

/**
 * @summary AE_title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-title ::= SEQUENCE {ap  AP-title,
 *                        ae  AE-qualifier
 * }
 * ```
 *
 * @class
 */
export class AE_title {
  constructor(
    /**
     * @summary `ap`.
     * @public
     * @readonly
     */
    readonly ap: AP_title,
    /**
     * @summary `ae`.
     * @public
     * @readonly
     */
    readonly ae: AE_qualifier
  ) {}

  /**
   * @summary Restructures an object into a AE_title
   * @description
   *
   * This takes an `object` and converts it to a `AE_title`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AE_title`.
   * @returns {AE_title}
   */
  public static _from_object(
    _o: { [_K in keyof AE_title]: AE_title[_K] }
  ): AE_title {
    return new AE_title(_o.ap, _o.ae);
  }
}


/**
 * @summary The Leading Root Component Types of AE_title
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AE_title: $.ComponentSpec[] = [
  new $.ComponentSpec('ap', false, $.hasAnyTag),
  new $.ComponentSpec('ae', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of AE_title
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AE_title: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AE_title
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AE_title: $.ComponentSpec[] = [];


let _cached_decoder_for_AE_title: $.ASN1Decoder<AE_title> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AE_title
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_title} The decoded data structure.
 */
export function _decode_AE_title(el: _Element) {
  if (!_cached_decoder_for_AE_title) {
    _cached_decoder_for_AE_title = function (el: _Element): AE_title {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'AE-title contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'ap';
      sequence[1].name = 'ae';
      let ap!: AP_title;
      let ae!: AE_qualifier;
      ap = _decode_AP_title(sequence[0]);
      ae = _decode_AE_qualifier(sequence[1]);
      return new AE_title(ap, ae);
    };
  }
  return _cached_decoder_for_AE_title(el);
}


let _cached_encoder_for_AE_title: $.ASN1Encoder<AE_title> | null = null;


/**
 * @summary Encodes a(n) AE_title into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_title, encoded as an ASN.1 Element.
 */
export function _encode_AE_title(
  value: AE_title,
  elGetter: $.ASN1Encoder<AE_title>
) {
  if (!_cached_encoder_for_AE_title) {
    _cached_encoder_for_AE_title = function (
      value: AE_title    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AP_title(value.ap, $.BER),
            /* REQUIRED   */ _encode_AE_qualifier(value.ae, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AE_title(value, elGetter);
}


/* eslint-enable */
