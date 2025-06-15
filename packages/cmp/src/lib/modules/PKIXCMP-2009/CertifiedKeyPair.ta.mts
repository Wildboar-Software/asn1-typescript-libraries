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
  CertOrEncCert,
  _decode_CertOrEncCert,
  _encode_CertOrEncCert,
} from '../PKIXCMP-2009/CertOrEncCert.ta.mjs';
import {
  EncryptedValue,
  _decode_EncryptedValue,
  _encode_EncryptedValue,
} from '@wildboar/crmf/src/lib/modules/PKIXCRMF-2009/EncryptedValue.ta.mjs';
import {
  PKIPublicationInfo,
  _decode_PKIPublicationInfo,
  _encode_PKIPublicationInfo,
} from '@wildboar/crmf/src/lib/modules/PKIXCRMF-2009/PKIPublicationInfo.ta.mjs';


/**
 * @summary CertifiedKeyPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertifiedKeyPair ::= SEQUENCE {
 *     certOrEncCert       CertOrEncCert,
 *     privateKey      [0] EncryptedValue      OPTIONAL,
 *     -- see [RFC4211] for comment on encoding
 *     publicationInfo [1] PKIPublicationInfo  OPTIONAL }
 * ```
 *
 * @class
 */
export class CertifiedKeyPair {
  constructor(
    /**
     * @summary `certOrEncCert`.
     * @public
     * @readonly
     */
    readonly certOrEncCert: CertOrEncCert,
    /**
     * @summary `privateKey`.
     * @public
     * @readonly
     */
    readonly privateKey: OPTIONAL<EncryptedValue>,
    /**
     * @summary `publicationInfo`.
     * @public
     * @readonly
     */
    readonly publicationInfo: OPTIONAL<PKIPublicationInfo>
  ) {}

  /**
   * @summary Restructures an object into a CertifiedKeyPair
   * @description
   *
   * This takes an `object` and converts it to a `CertifiedKeyPair`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CertifiedKeyPair`.
   * @returns {CertifiedKeyPair}
   */
  public static _from_object(
    _o: { [_K in keyof CertifiedKeyPair]: CertifiedKeyPair[_K] }
  ): CertifiedKeyPair {
    return new CertifiedKeyPair(
      _o.certOrEncCert,
      _o.privateKey,
      _o.publicationInfo
    );
  }
}


/**
 * @summary The Leading Root Component Types of CertifiedKeyPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertifiedKeyPair: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'certOrEncCert',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'privateKey',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'publicationInfo',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of CertifiedKeyPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertifiedKeyPair: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertifiedKeyPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertifiedKeyPair: $.ComponentSpec[] = [];


let _cached_decoder_for_CertifiedKeyPair: $.ASN1Decoder<CertifiedKeyPair> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertifiedKeyPair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertifiedKeyPair} The decoded data structure.
 */
export function _decode_CertifiedKeyPair(el: _Element) {
  if (!_cached_decoder_for_CertifiedKeyPair) {
    _cached_decoder_for_CertifiedKeyPair = function (
      el: _Element
    ): CertifiedKeyPair {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let certOrEncCert!: CertOrEncCert;
      let privateKey: OPTIONAL<EncryptedValue>;
      let publicationInfo: OPTIONAL<PKIPublicationInfo>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        certOrEncCert: (_el: _Element): void => {
          certOrEncCert = _decode_CertOrEncCert(_el);
        },
        privateKey: (_el: _Element): void => {
          privateKey = $._decode_explicit<EncryptedValue>(
            () => _decode_EncryptedValue
          )(_el);
        },
        publicationInfo: (_el: _Element): void => {
          publicationInfo = $._decode_explicit<PKIPublicationInfo>(
            () => _decode_PKIPublicationInfo
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertifiedKeyPair,
        _extension_additions_list_spec_for_CertifiedKeyPair,
        _root_component_type_list_2_spec_for_CertifiedKeyPair,
        undefined
      );
      return new CertifiedKeyPair /* SEQUENCE_CONSTRUCTOR_CALL */(
        certOrEncCert,
        privateKey,
        publicationInfo
      );
    };
  }
  return _cached_decoder_for_CertifiedKeyPair(el);
}


let _cached_encoder_for_CertifiedKeyPair: $.ASN1Encoder<CertifiedKeyPair> | null = null;


/**
 * @summary Encodes a(n) CertifiedKeyPair into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertifiedKeyPair, encoded as an ASN.1 Element.
 */
export function _encode_CertifiedKeyPair(
  value: CertifiedKeyPair,
  elGetter: $.ASN1Encoder<CertifiedKeyPair>
) {
  if (!_cached_encoder_for_CertifiedKeyPair) {
    _cached_encoder_for_CertifiedKeyPair = function (
      value: CertifiedKeyPair    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CertOrEncCert(value.certOrEncCert, $.BER),
            /* IF_ABSENT  */ value.privateKey === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_EncryptedValue,
                  $.BER
                )(value.privateKey, $.BER),
            /* IF_ABSENT  */ value.publicationInfo === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_PKIPublicationInfo,
                  $.BER
                )(value.publicationInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CertifiedKeyPair(value, elGetter);
}


/* eslint-enable */
