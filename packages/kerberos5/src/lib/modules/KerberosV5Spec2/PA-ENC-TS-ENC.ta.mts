/* eslint-disable */
import {
  OPTIONAL,
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
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.mjs';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.mjs';

/**
 * @summary PA_ENC_TS_ENC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PA-ENC-TS-ENC ::= SEQUENCE {
 *         patimestamp     [0] KerberosTime -- client's time --,
 *         pausec          [1] Microseconds OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PA_ENC_TS_ENC {
  constructor(
    /**
     * @summary `patimestamp`.
     * @public
     * @readonly
     */
    readonly patimestamp: KerberosTime,
    /**
     * @summary `pausec`.
     * @public
     * @readonly
     */
    readonly pausec: OPTIONAL<Microseconds>
  ) {}

  /**
   * @summary Restructures an object into a PA_ENC_TS_ENC
   * @description
   *
   * This takes an `object` and converts it to a `PA_ENC_TS_ENC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PA_ENC_TS_ENC`.
   * @returns {PA_ENC_TS_ENC}
   */
  public static _from_object(
    _o: { [_K in keyof PA_ENC_TS_ENC]: PA_ENC_TS_ENC[_K] }
  ): PA_ENC_TS_ENC {
    return new PA_ENC_TS_ENC(_o.patimestamp, _o.pausec);
  }
}


/**
 * @summary The Leading Root Component Types of PA_ENC_TS_ENC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PA_ENC_TS_ENC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'patimestamp',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'pausec',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of PA_ENC_TS_ENC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PA_ENC_TS_ENC: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PA_ENC_TS_ENC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PA_ENC_TS_ENC: $.ComponentSpec[] = [];


let _cached_decoder_for_PA_ENC_TS_ENC: $.ASN1Decoder<PA_ENC_TS_ENC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PA_ENC_TS_ENC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PA_ENC_TS_ENC} The decoded data structure.
 */
export function _decode_PA_ENC_TS_ENC(el: _Element) {
  if (!_cached_decoder_for_PA_ENC_TS_ENC) {
    _cached_decoder_for_PA_ENC_TS_ENC = function (el: _Element): PA_ENC_TS_ENC {
      let patimestamp!: KerberosTime;
      let pausec: OPTIONAL<Microseconds>;
      const callbacks: $.DecodingMap = {
        patimestamp: (_el: _Element): void => {
          patimestamp = $._decode_explicit<KerberosTime>(
            () => _decode_KerberosTime
          )(_el);
        },
        pausec: (_el: _Element): void => {
          pausec = $._decode_explicit<Microseconds>(() => _decode_Microseconds)(
            _el
          );
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PA_ENC_TS_ENC,
        _extension_additions_list_spec_for_PA_ENC_TS_ENC,
        _root_component_type_list_2_spec_for_PA_ENC_TS_ENC,
        undefined
      );
      return new PA_ENC_TS_ENC (
        patimestamp,
        pausec
      );
    };
  }
  return _cached_decoder_for_PA_ENC_TS_ENC(el);
}


let _cached_encoder_for_PA_ENC_TS_ENC: $.ASN1Encoder<PA_ENC_TS_ENC> | null = null;


/**
 * @summary Encodes a(n) PA_ENC_TS_ENC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_ENC_TS_ENC, encoded as an ASN.1 Element.
 */
export function _encode_PA_ENC_TS_ENC(
  value: PA_ENC_TS_ENC,
  elGetter: $.ASN1Encoder<PA_ENC_TS_ENC>
) {
  if (!_cached_encoder_for_PA_ENC_TS_ENC) {
    _cached_encoder_for_PA_ENC_TS_ENC = function (
      value: PA_ENC_TS_ENC    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_KerberosTime,
              $.DER
            )(value.patimestamp, $.DER),
            /* IF_ABSENT  */ value.pausec === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Microseconds,
                  $.DER
                )(value.pausec, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_PA_ENC_TS_ENC(value, elGetter);
}


/* eslint-enable */
