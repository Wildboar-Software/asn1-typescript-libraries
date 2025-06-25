/* eslint-disable */
import {
  OPTIONAL,
  GeneralizedTime,
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
  PKIStatus,
  _decode_PKIStatus,
  _encode_PKIStatus,
} from '../PKIXCMP-2009/PKIStatus.ta.mjs';
import {
  CertId,
  _decode_CertId,
  _encode_CertId,
} from '@wildboar/crmf/src/lib/modules/PKIXCRMF-2009/CertId.ta.mjs';
import {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs';


/**
 * @summary RevAnnContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevAnnContent ::= SEQUENCE {
 *     status              PKIStatus,
 *     certId              CertId,
 *     willBeRevokedAt     GeneralizedTime,
 *     badSinceDate        GeneralizedTime,
 *     crlDetails          Extensions{{...}}  OPTIONAL
 *     -- extra CRL details (e.g., crl number, reason, location, etc.)
 * }
 * ```
 *
 * @class
 */
export class RevAnnContent {
  constructor(
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: PKIStatus,
    /**
     * @summary `certId`.
     * @public
     * @readonly
     */
    readonly certId: CertId,
    /**
     * @summary `willBeRevokedAt`.
     * @public
     * @readonly
     */
    readonly willBeRevokedAt: GeneralizedTime,
    /**
     * @summary `badSinceDate`.
     * @public
     * @readonly
     */
    readonly badSinceDate: GeneralizedTime,
    /**
     * @summary `crlDetails`.
     * @public
     * @readonly
     */
    readonly crlDetails: OPTIONAL<Extensions>
  ) {}

  /**
   * @summary Restructures an object into a RevAnnContent
   * @description
   *
   * This takes an `object` and converts it to a `RevAnnContent`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RevAnnContent`.
   * @returns {RevAnnContent}
   */
  public static _from_object(
    _o: { [_K in keyof RevAnnContent]: RevAnnContent[_K] }
  ): RevAnnContent {
    return new RevAnnContent(
      _o.status,
      _o.certId,
      _o.willBeRevokedAt,
      _o.badSinceDate,
      _o.crlDetails
    );
  }
}


/**
 * @summary The Leading Root Component Types of RevAnnContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevAnnContent: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'status',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'certId',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'willBeRevokedAt',
    false,
    $.hasTag(_TagClass.universal, 24)
  ),
  new $.ComponentSpec(
    'badSinceDate',
    false,
    $.hasTag(_TagClass.universal, 24)
  ),
  new $.ComponentSpec(
    'crlDetails',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of RevAnnContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevAnnContent: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RevAnnContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevAnnContent: $.ComponentSpec[] = [];


let _cached_decoder_for_RevAnnContent: $.ASN1Decoder<RevAnnContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RevAnnContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevAnnContent} The decoded data structure.
 */
export function _decode_RevAnnContent(el: _Element): RevAnnContent {
  if (!_cached_decoder_for_RevAnnContent) {
    _cached_decoder_for_RevAnnContent = function (el: _Element): RevAnnContent {
      let status!: PKIStatus;
      let certId!: CertId;
      let willBeRevokedAt!: GeneralizedTime;
      let badSinceDate!: GeneralizedTime;
      let crlDetails: OPTIONAL<Extensions>;
      const callbacks: $.DecodingMap = {
        status: (_el: _Element): void => {
          status = _decode_PKIStatus(_el);
        },
        certId: (_el: _Element): void => {
          certId = _decode_CertId(_el);
        },
        willBeRevokedAt: (_el: _Element): void => {
          willBeRevokedAt = $._decodeGeneralizedTime(_el);
        },
        badSinceDate: (_el: _Element): void => {
          badSinceDate = $._decodeGeneralizedTime(_el);
        },
        crlDetails: (_el: _Element): void => {
          crlDetails = _decode_Extensions(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RevAnnContent,
        _extension_additions_list_spec_for_RevAnnContent,
        _root_component_type_list_2_spec_for_RevAnnContent,
        undefined
      );
      return new RevAnnContent (
        status,
        certId,
        willBeRevokedAt,
        badSinceDate,
        crlDetails
      );
    };
  }
  return _cached_decoder_for_RevAnnContent(el);
}


let _cached_encoder_for_RevAnnContent: $.ASN1Encoder<RevAnnContent> | null = null;


/**
 * @summary Encodes a(n) RevAnnContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevAnnContent, encoded as an ASN.1 Element.
 */
export function _encode_RevAnnContent(
  value: RevAnnContent,
  elGetter: $.ASN1Encoder<RevAnnContent>
): _Element {
  if (!_cached_encoder_for_RevAnnContent) {
    _cached_encoder_for_RevAnnContent = function (
      value: RevAnnContent    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIStatus(value.status, $.BER),
            /* REQUIRED   */ _encode_CertId(value.certId, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(
              value.willBeRevokedAt,
              $.BER
            ),
            /* REQUIRED   */ $._encodeGeneralizedTime(
              value.badSinceDate,
              $.BER
            ),
            /* IF_ABSENT  */ value.crlDetails === undefined
              ? undefined
              : _encode_Extensions(value.crlDetails, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RevAnnContent(value, elGetter);
}


/* eslint-enable */
