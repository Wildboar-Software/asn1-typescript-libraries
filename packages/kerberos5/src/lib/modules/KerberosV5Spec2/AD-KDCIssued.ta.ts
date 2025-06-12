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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Checksum,
  _decode_Checksum,
  _encode_Checksum,
} from '../KerberosV5Spec2/Checksum.ta.js';
export {
  Checksum,
  _decode_Checksum,
  _encode_Checksum,
} from '../KerberosV5Spec2/Checksum.ta.js';
import {
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta.js';
export {
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta.js';
import {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta.js';
export {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta.js';
import {
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.js';
export {
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.js';

/* START_OF_SYMBOL_DEFINITION AD_KDCIssued */
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
/* END_OF_SYMBOL_DEFINITION AD_KDCIssued */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AD_KDCIssued */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'i-realm',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'i-sname',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'elements',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AD_KDCIssued */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AD_KDCIssued */
/**
 * @summary The Trailing Root Component Types of AD_KDCIssued
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AD_KDCIssued: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AD_KDCIssued */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AD_KDCIssued */
/**
 * @summary The Extension Addition Component Types of AD_KDCIssued
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AD_KDCIssued: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AD_KDCIssued */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AD_KDCIssued */
let _cached_decoder_for_AD_KDCIssued: $.ASN1Decoder<AD_KDCIssued> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AD_KDCIssued */

/* START_OF_SYMBOL_DEFINITION _decode_AD_KDCIssued */
/**
 * @summary Decodes an ASN.1 element into a(n) AD_KDCIssued
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_KDCIssued} The decoded data structure.
 */
export function _decode_AD_KDCIssued(el: _Element) {
  if (!_cached_decoder_for_AD_KDCIssued) {
    _cached_decoder_for_AD_KDCIssued = function (el: _Element): AD_KDCIssued {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let ad_checksum!: Checksum;
      let i_realm: OPTIONAL<Realm>;
      let i_sname: OPTIONAL<PrincipalName>;
      let elements!: AuthorizationData;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AD_KDCIssued,
        _extension_additions_list_spec_for_AD_KDCIssued,
        _root_component_type_list_2_spec_for_AD_KDCIssued,
        undefined
      );
      return new AD_KDCIssued /* SEQUENCE_CONSTRUCTOR_CALL */(
        ad_checksum,
        i_realm,
        i_sname,
        elements
      );
    };
  }
  return _cached_decoder_for_AD_KDCIssued(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AD_KDCIssued */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AD_KDCIssued */
let _cached_encoder_for_AD_KDCIssued: $.ASN1Encoder<AD_KDCIssued> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AD_KDCIssued */

/* START_OF_SYMBOL_DEFINITION _encode_AD_KDCIssued */
/**
 * @summary Encodes a(n) AD_KDCIssued into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_KDCIssued, encoded as an ASN.1 Element.
 */
export function _encode_AD_KDCIssued(
  value: AD_KDCIssued,
  elGetter: $.ASN1Encoder<AD_KDCIssued>
) {
  if (!_cached_encoder_for_AD_KDCIssued) {
    _cached_encoder_for_AD_KDCIssued = function (
      value: AD_KDCIssued,
      elGetter: $.ASN1Encoder<AD_KDCIssued>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Checksum,
              $.BER
            )(value.ad_checksum, $.BER),
            /* IF_ABSENT  */ value.i_realm === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Realm,
                  $.BER
                )(value.i_realm, $.BER),
            /* IF_ABSENT  */ value.i_sname === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_PrincipalName,
                  $.BER
                )(value.i_sname, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              3,
              () => _encode_AuthorizationData,
              $.BER
            )(value.elements, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AD_KDCIssued(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AD_KDCIssued */

/* eslint-enable */
