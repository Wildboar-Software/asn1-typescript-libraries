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
  Checksum,
  _decode_Checksum,
  _encode_Checksum,
} from '../KerberosV5Spec2/Checksum.ta.mjs';
import {
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta.mjs';
import {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta.mjs';
import {
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary AD_KDCIssued
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AD-KDCIssued ::= SEQUENCE {
 *         ad-checksum     [0] Checksum,
 *         i-realm         [1] Realm OPTIONAL,
 *         i-sname         [2] PrincipalName OPTIONAL,
 *         elements        [3] AuthorizationData
 * }
 * ```
 *
 * @class
 */
export class AD_KDCIssued {
  constructor(
    /**
     * @summary `ad_checksum`.
     * @public
     * @readonly
     */
    readonly ad_checksum: Checksum,
    /**
     * @summary `i_realm`.
     * @public
     * @readonly
     */
    readonly i_realm: OPTIONAL<Realm>,
    /**
     * @summary `i_sname`.
     * @public
     * @readonly
     */
    readonly i_sname: OPTIONAL<PrincipalName>,
    /**
     * @summary `elements`.
     * @public
     * @readonly
     */
    readonly elements: AuthorizationData
  ) {}

  /**
   * @summary Restructures an object into a AD_KDCIssued
   * @description
   *
   * This takes an `object` and converts it to a `AD_KDCIssued`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AD_KDCIssued`.
   * @returns {AD_KDCIssued}
   */
  public static _from_object(
    _o: { [_K in keyof AD_KDCIssued]: AD_KDCIssued[_K] }
  ): AD_KDCIssued {
    return new AD_KDCIssued(
      _o.ad_checksum,
      _o.i_realm,
      _o.i_sname,
      _o.elements
    );
  }
}


/**
 * @summary The Leading Root Component Types of AD_KDCIssued
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AD_KDCIssued: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'ad-checksum',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'i-realm',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'i-sname',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'elements',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of AD_KDCIssued
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AD_KDCIssued: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AD_KDCIssued
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AD_KDCIssued: $.ComponentSpec[] = [];


let _cached_decoder_for_AD_KDCIssued: $.ASN1Decoder<AD_KDCIssued> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AD_KDCIssued
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_KDCIssued} The decoded data structure.
 */
export function _decode_AD_KDCIssued(el: _Element) {
  if (!_cached_decoder_for_AD_KDCIssued) {
    _cached_decoder_for_AD_KDCIssued = function (el: _Element): AD_KDCIssued {
      let ad_checksum!: Checksum;
      let i_realm: OPTIONAL<Realm>;
      let i_sname: OPTIONAL<PrincipalName>;
      let elements!: AuthorizationData;
      const callbacks: $.DecodingMap = {
        'ad-checksum': (_el: _Element): void => {
          ad_checksum = $._decode_explicit<Checksum>(() => _decode_Checksum)(
            _el
          );
        },
        'i-realm': (_el: _Element): void => {
          i_realm = $._decode_explicit<Realm>(() => _decode_Realm)(_el);
        },
        'i-sname': (_el: _Element): void => {
          i_sname = $._decode_explicit<PrincipalName>(
            () => _decode_PrincipalName
          )(_el);
        },
        elements: (_el: _Element): void => {
          elements = $._decode_explicit<AuthorizationData>(
            () => _decode_AuthorizationData
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AD_KDCIssued,
        _extension_additions_list_spec_for_AD_KDCIssued,
        _root_component_type_list_2_spec_for_AD_KDCIssued,
        undefined
      );
      return new AD_KDCIssued (
        ad_checksum,
        i_realm,
        i_sname,
        elements
      );
    };
  }
  return _cached_decoder_for_AD_KDCIssued(el);
}


let _cached_encoder_for_AD_KDCIssued: $.ASN1Encoder<AD_KDCIssued> | null = null;


/**
 * @summary Encodes a(n) AD_KDCIssued into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_KDCIssued, encoded as an ASN.1 Element.
 */
export function _encode_AD_KDCIssued(
  value: AD_KDCIssued,
  elGetter: $.ASN1Encoder<AD_KDCIssued>
) {
  if (!_cached_encoder_for_AD_KDCIssued) {
    _cached_encoder_for_AD_KDCIssued = function (
      value: AD_KDCIssued    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Checksum,
              $.DER
            )(value.ad_checksum, $.DER),
            /* IF_ABSENT  */ value.i_realm === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Realm,
                  $.DER
                )(value.i_realm, $.DER),
            /* IF_ABSENT  */ value.i_sname === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_PrincipalName,
                  $.DER
                )(value.i_sname, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              3,
              () => _encode_AuthorizationData,
              $.DER
            )(value.elements, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_AD_KDCIssued(value, elGetter);
}


/* eslint-enable */
