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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  RevocationInfos,
  _decode_RevocationInfos,
  _encode_RevocationInfos,
} from '../SCVP-2009/RevocationInfos.ta.mjs';
import {
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta.mjs';
/**
 * @summary RevInfoWantBack
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevInfoWantBack ::= SEQUENCE {
 *     revocationInfo             RevocationInfos,
 *     extraCerts                 CertBundle OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RevInfoWantBack {
  constructor(
    /**
     * @summary `revocationInfo`.
     * @public
     * @readonly
     */
    readonly revocationInfo: RevocationInfos,
    /**
     * @summary `extraCerts`.
     * @public
     * @readonly
     */
    readonly extraCerts: OPTIONAL<CertBundle>
  ) {}

  /**
   * @summary Restructures an object into a RevInfoWantBack
   * @description
   *
   * This takes an `object` and converts it to a `RevInfoWantBack`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RevInfoWantBack`.
   * @returns {RevInfoWantBack}
   */
  public static _from_object(
    _o: { [_K in keyof RevInfoWantBack]: RevInfoWantBack[_K] }
  ): RevInfoWantBack {
    return new RevInfoWantBack(_o.revocationInfo, _o.extraCerts);
  }
}

/**
 * @summary The Leading Root Component Types of RevInfoWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevInfoWantBack: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'revocationInfo',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'extraCerts',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
];

/**
 * @summary The Trailing Root Component Types of RevInfoWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevInfoWantBack: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RevInfoWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevInfoWantBack: $.ComponentSpec[] = [];

let _cached_decoder_for_RevInfoWantBack: $.ASN1Decoder<RevInfoWantBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevInfoWantBack
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevInfoWantBack} The decoded data structure.
 */
export function _decode_RevInfoWantBack(el: _Element) {
  if (!_cached_decoder_for_RevInfoWantBack) {
    _cached_decoder_for_RevInfoWantBack = function (
      el: _Element
    ): RevInfoWantBack {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let revocationInfo!: RevocationInfos;
      let extraCerts: OPTIONAL<CertBundle>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        revocationInfo: (_el: _Element): void => {
          revocationInfo = _decode_RevocationInfos(_el);
        },
        extraCerts: (_el: _Element): void => {
          extraCerts = _decode_CertBundle(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RevInfoWantBack,
        _extension_additions_list_spec_for_RevInfoWantBack,
        _root_component_type_list_2_spec_for_RevInfoWantBack,
        undefined
      );
      return new RevInfoWantBack /* SEQUENCE_CONSTRUCTOR_CALL */(
        revocationInfo,
        extraCerts
      );
    };
  }
  return _cached_decoder_for_RevInfoWantBack(el);
}

let _cached_encoder_for_RevInfoWantBack: $.ASN1Encoder<RevInfoWantBack> | null = null;

/**
 * @summary Encodes a(n) RevInfoWantBack into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevInfoWantBack, encoded as an ASN.1 Element.
 */
export function _encode_RevInfoWantBack(
  value: RevInfoWantBack,
  elGetter: $.ASN1Encoder<RevInfoWantBack>
) {
  if (!_cached_encoder_for_RevInfoWantBack) {
    _cached_encoder_for_RevInfoWantBack = function (
      value: RevInfoWantBack    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_RevocationInfos(
              value.revocationInfo,
              $.DER
            ),
            /* IF_ABSENT  */ value.extraCerts === undefined
              ? undefined
              : _encode_CertBundle(value.extraCerts, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_RevInfoWantBack(value, elGetter);
}


/* eslint-enable */
