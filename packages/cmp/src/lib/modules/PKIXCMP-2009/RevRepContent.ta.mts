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
  CertId,
  _decode_CertId,
  _encode_CertId,
} from '@wildboar/crmf/src/lib/modules/PKIXCRMF-2009/CertId.ta.mjs';
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateList.ta.mjs';


/**
 * @summary RevRepContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevRepContent ::= SEQUENCE {
 *     status       SEQUENCE SIZE (1..MAX) OF PKIStatusInfo,
 *     -- in same order as was sent in RevReqContent
 *     revCerts [0] SEQUENCE SIZE (1..MAX) OF CertId OPTIONAL,
 *     -- IDs for which revocation was requested
 *     -- (same order as status)
 *     crls     [1] SEQUENCE SIZE (1..MAX) OF CertificateList OPTIONAL
 *     -- the resulting CRLs (there may be more than one)
 * }
 * ```
 *
 * @class
 */
export class RevRepContent {
  constructor(
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: PKIStatusInfo[],
    /**
     * @summary `revCerts`.
     * @public
     * @readonly
     */
    readonly revCerts: OPTIONAL<CertId[]>,
    /**
     * @summary `crls`.
     * @public
     * @readonly
     */
    readonly crls: OPTIONAL<CertificateList[]>
  ) {}

  /**
   * @summary Restructures an object into a RevRepContent
   * @description
   *
   * This takes an `object` and converts it to a `RevRepContent`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RevRepContent`.
   * @returns {RevRepContent}
   */
  public static _from_object(
    _o: { [_K in keyof RevRepContent]: RevRepContent[_K] }
  ): RevRepContent {
    return new RevRepContent(_o.status, _o.revCerts, _o.crls);
  }
}


/**
 * @summary The Leading Root Component Types of RevRepContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevRepContent: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'status',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'revCerts',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'crls',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of RevRepContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevRepContent: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RevRepContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevRepContent: $.ComponentSpec[] = [];


let _cached_decoder_for_RevRepContent: $.ASN1Decoder<RevRepContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RevRepContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevRepContent} The decoded data structure.
 */
export function _decode_RevRepContent(el: _Element) {
  if (!_cached_decoder_for_RevRepContent) {
    _cached_decoder_for_RevRepContent = function (el: _Element): RevRepContent {
      let status!: PKIStatusInfo[];
      let revCerts: OPTIONAL<CertId[]>;
      let crls: OPTIONAL<CertificateList[]>;
      const callbacks: $.DecodingMap = {
        status: (_el: _Element): void => {
          status = $._decodeSequenceOf<PKIStatusInfo>(
            () => _decode_PKIStatusInfo
          )(_el);
        },
        revCerts: (_el: _Element): void => {
          revCerts = $._decode_explicit<CertId[]>(() =>
            $._decodeSequenceOf<CertId>(() => _decode_CertId)
          )(_el);
        },
        crls: (_el: _Element): void => {
          crls = $._decode_explicit<CertificateList[]>(() =>
            $._decodeSequenceOf<CertificateList>(() => _decode_CertificateList)
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RevRepContent,
        _extension_additions_list_spec_for_RevRepContent,
        _root_component_type_list_2_spec_for_RevRepContent,
        undefined
      );
      return new RevRepContent (
        status,
        revCerts,
        crls
      );
    };
  }
  return _cached_decoder_for_RevRepContent(el);
}


let _cached_encoder_for_RevRepContent: $.ASN1Encoder<RevRepContent> | null = null;


/**
 * @summary Encodes a(n) RevRepContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevRepContent, encoded as an ASN.1 Element.
 */
export function _encode_RevRepContent(
  value: RevRepContent,
  elGetter: $.ASN1Encoder<RevRepContent>
) {
  if (!_cached_encoder_for_RevRepContent) {
    _cached_encoder_for_RevRepContent = function (
      value: RevRepContent    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<PKIStatusInfo>(
              () => _encode_PKIStatusInfo,
              $.BER
            )(value.status, $.BER),
            /* IF_ABSENT  */ value.revCerts === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  0,
                  () =>
                    $._encodeSequenceOf<CertId>(() => _encode_CertId, $.BER),
                  $.BER
                )(value.revCerts, $.BER),
            /* IF_ABSENT  */ value.crls === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () =>
                    $._encodeSequenceOf<CertificateList>(
                      () => _encode_CertificateList,
                      $.BER
                    ),
                  $.BER
                )(value.crls, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RevRepContent(value, elGetter);
}


/* eslint-enable */
