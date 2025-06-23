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
  PKIStatusInfo,
  _decode_PKIStatusInfo,
  _encode_PKIStatusInfo,
} from '../PKIXCMP-2009/PKIStatusInfo.ta.mjs';
import {
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';
import {
  CertifiedKeyPair,
  _decode_CertifiedKeyPair,
  _encode_CertifiedKeyPair,
} from '../PKIXCMP-2009/CertifiedKeyPair.ta.mjs';

/**
 * @summary KeyRecRepContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyRecRepContent ::= SEQUENCE {
 *     status                  PKIStatusInfo,
 *     newSigCert          [0] CMPCertificate OPTIONAL,
 *     caCerts             [1] SEQUENCE SIZE (1..MAX) OF
 *                                     CMPCertificate OPTIONAL,
 *     keyPairHist         [2] SEQUENCE SIZE (1..MAX) OF
 *                                     CertifiedKeyPair OPTIONAL }
 * ```
 *
 * @class
 */
export class KeyRecRepContent {
  constructor(
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: PKIStatusInfo,
    /**
     * @summary `newSigCert`.
     * @public
     * @readonly
     */
    readonly newSigCert: OPTIONAL<CMPCertificate>,
    /**
     * @summary `caCerts`.
     * @public
     * @readonly
     */
    readonly caCerts: OPTIONAL<CMPCertificate[]>,
    /**
     * @summary `keyPairHist`.
     * @public
     * @readonly
     */
    readonly keyPairHist: OPTIONAL<CertifiedKeyPair[]>
  ) {}

  /**
   * @summary Restructures an object into a KeyRecRepContent
   * @description
   *
   * This takes an `object` and converts it to a `KeyRecRepContent`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KeyRecRepContent`.
   * @returns {KeyRecRepContent}
   */
  public static _from_object(
    _o: { [_K in keyof KeyRecRepContent]: KeyRecRepContent[_K] }
  ): KeyRecRepContent {
    return new KeyRecRepContent(
      _o.status,
      _o.newSigCert,
      _o.caCerts,
      _o.keyPairHist
    );
  }
}


/**
 * @summary The Leading Root Component Types of KeyRecRepContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyRecRepContent: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'status',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'newSigCert',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'caCerts',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'keyPairHist',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of KeyRecRepContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyRecRepContent: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyRecRepContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyRecRepContent: $.ComponentSpec[] = [];


let _cached_decoder_for_KeyRecRepContent: $.ASN1Decoder<KeyRecRepContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyRecRepContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyRecRepContent} The decoded data structure.
 */
export function _decode_KeyRecRepContent(el: _Element) {
  if (!_cached_decoder_for_KeyRecRepContent) {
    _cached_decoder_for_KeyRecRepContent = function (
      el: _Element
    ): KeyRecRepContent {
      let status!: PKIStatusInfo;
      let newSigCert: OPTIONAL<CMPCertificate>;
      let caCerts: OPTIONAL<CMPCertificate[]>;
      let keyPairHist: OPTIONAL<CertifiedKeyPair[]>;
      const callbacks: $.DecodingMap = {
        status: (_el: _Element): void => {
          status = _decode_PKIStatusInfo(_el);
        },
        newSigCert: (_el: _Element): void => {
          newSigCert = $._decode_explicit<CMPCertificate>(
            () => _decode_CMPCertificate
          )(_el);
        },
        caCerts: (_el: _Element): void => {
          caCerts = $._decode_explicit<CMPCertificate[]>(() =>
            $._decodeSequenceOf<CMPCertificate>(() => _decode_CMPCertificate)
          )(_el);
        },
        keyPairHist: (_el: _Element): void => {
          keyPairHist = $._decode_explicit<CertifiedKeyPair[]>(() =>
            $._decodeSequenceOf<CertifiedKeyPair>(
              () => _decode_CertifiedKeyPair
            )
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KeyRecRepContent,
        _extension_additions_list_spec_for_KeyRecRepContent,
        _root_component_type_list_2_spec_for_KeyRecRepContent,
        undefined
      );
      return new KeyRecRepContent (
        status,
        newSigCert,
        caCerts,
        keyPairHist
      );
    };
  }
  return _cached_decoder_for_KeyRecRepContent(el);
}


let _cached_encoder_for_KeyRecRepContent: $.ASN1Encoder<KeyRecRepContent> | null = null;


/**
 * @summary Encodes a(n) KeyRecRepContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyRecRepContent, encoded as an ASN.1 Element.
 */
export function _encode_KeyRecRepContent(
  value: KeyRecRepContent,
  elGetter: $.ASN1Encoder<KeyRecRepContent>
) {
  if (!_cached_encoder_for_KeyRecRepContent) {
    _cached_encoder_for_KeyRecRepContent = function (
      value: KeyRecRepContent    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIStatusInfo(value.status, $.BER),
            /* IF_ABSENT  */ value.newSigCert === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_CMPCertificate,
                  $.BER
                )(value.newSigCert, $.BER),
            /* IF_ABSENT  */ value.caCerts === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () =>
                    $._encodeSequenceOf<CMPCertificate>(
                      () => _encode_CMPCertificate,
                      $.BER
                    ),
                  $.BER
                )(value.caCerts, $.BER),
            /* IF_ABSENT  */ value.keyPairHist === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () =>
                    $._encodeSequenceOf<CertifiedKeyPair>(
                      () => _encode_CertifiedKeyPair,
                      $.BER
                    ),
                  $.BER
                )(value.keyPairHist, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_KeyRecRepContent(value, elGetter);
}


/* eslint-enable */
