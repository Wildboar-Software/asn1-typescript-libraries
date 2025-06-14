/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
  GeneralizedTime,
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
  CertReferences,
  _decode_CertReferences,
  _encode_CertReferences,
} from '../SCVP-2009/CertReferences.ta.mjs';
import {
  CertChecks,
  _decode_CertChecks,
  _encode_CertChecks,
} from '../SCVP-2009/CertChecks.ta.mjs';
import {
  WantBack,
  _decode_WantBack,
  _encode_WantBack,
} from '../SCVP-2009/WantBack.ta.mjs';
import {
  ValidationPolicy,
  _decode_ValidationPolicy,
  _encode_ValidationPolicy,
} from '../SCVP-2009/ValidationPolicy.ta.mjs';
import {
  ResponseFlags,
  _decode_ResponseFlags,
  _encode_ResponseFlags,
} from '../SCVP-2009/ResponseFlags.ta.mjs';
import {
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta.mjs';
import {
  RevocationInfos,
  _decode_RevocationInfos,
  _encode_RevocationInfos,
} from '../SCVP-2009/RevocationInfos.ta.mjs';
import {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs';
/**
 * @summary Query
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Query ::= SEQUENCE {
 *     queriedCerts             CertReferences,
 *     checks                   CertChecks,
 *     wantBack             [1] WantBack OPTIONAL,
 *     validationPolicy         ValidationPolicy,
 *     responseFlags            ResponseFlags OPTIONAL,
 *     serverContextInfo    [2] OCTET STRING OPTIONAL,
 *     validationTime       [3] GeneralizedTime OPTIONAL,
 *     intermediateCerts    [4] CertBundle OPTIONAL,
 *     revInfos             [5] RevocationInfos OPTIONAL,
 *     producedAt           [6] GeneralizedTime OPTIONAL,
 *     queryExtensions      [7] Extensions{{QueryExtensions}} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Query {
  constructor(
    /**
     * @summary `queriedCerts`.
     * @public
     * @readonly
     */
    readonly queriedCerts: CertReferences,
    /**
     * @summary `checks`.
     * @public
     * @readonly
     */
    readonly checks: CertChecks,
    /**
     * @summary `wantBack`.
     * @public
     * @readonly
     */
    readonly wantBack: OPTIONAL<WantBack>,
    /**
     * @summary `validationPolicy`.
     * @public
     * @readonly
     */
    readonly validationPolicy: ValidationPolicy,
    /**
     * @summary `responseFlags`.
     * @public
     * @readonly
     */
    readonly responseFlags: OPTIONAL<ResponseFlags>,
    /**
     * @summary `serverContextInfo`.
     * @public
     * @readonly
     */
    readonly serverContextInfo: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `validationTime`.
     * @public
     * @readonly
     */
    readonly validationTime: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `intermediateCerts`.
     * @public
     * @readonly
     */
    readonly intermediateCerts: OPTIONAL<CertBundle>,
    /**
     * @summary `revInfos`.
     * @public
     * @readonly
     */
    readonly revInfos: OPTIONAL<RevocationInfos>,
    /**
     * @summary `producedAt`.
     * @public
     * @readonly
     */
    readonly producedAt: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `queryExtensions`.
     * @public
     * @readonly
     */
    readonly queryExtensions: OPTIONAL<Extensions>
  ) {}

  /**
   * @summary Restructures an object into a Query
   * @description
   *
   * This takes an `object` and converts it to a `Query`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Query`.
   * @returns {Query}
   */
  public static _from_object(_o: { [_K in keyof Query]: Query[_K] }): Query {
    return new Query(
      _o.queriedCerts,
      _o.checks,
      _o.wantBack,
      _o.validationPolicy,
      _o.responseFlags,
      _o.serverContextInfo,
      _o.validationTime,
      _o.intermediateCerts,
      _o.revInfos,
      _o.producedAt,
      _o.queryExtensions
    );
  }
}

/**
 * @summary The Leading Root Component Types of Query
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Query: $.ComponentSpec[] = [
  new $.ComponentSpec('queriedCerts', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'checks',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'wantBack',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'validationPolicy',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responseFlags',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'serverContextInfo',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'validationTime',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'intermediateCerts',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'revInfos',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'producedAt',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'queryExtensions',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of Query
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Query: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Query
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Query: $.ComponentSpec[] = [];

let _cached_decoder_for_Query: $.ASN1Decoder<Query> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Query
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Query} The decoded data structure.
 */
export function _decode_Query(el: _Element) {
  if (!_cached_decoder_for_Query) {
    _cached_decoder_for_Query = function (el: _Element): Query {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let queriedCerts!: CertReferences;
      let checks!: CertChecks;
      let wantBack: OPTIONAL<WantBack>;
      let validationPolicy!: ValidationPolicy;
      let responseFlags: OPTIONAL<ResponseFlags>;
      let serverContextInfo: OPTIONAL<OCTET_STRING>;
      let validationTime: OPTIONAL<GeneralizedTime>;
      let intermediateCerts: OPTIONAL<CertBundle>;
      let revInfos: OPTIONAL<RevocationInfos>;
      let producedAt: OPTIONAL<GeneralizedTime>;
      let queryExtensions: OPTIONAL<Extensions>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        queriedCerts: (_el: _Element): void => {
          queriedCerts = _decode_CertReferences(_el);
        },
        checks: (_el: _Element): void => {
          checks = _decode_CertChecks(_el);
        },
        wantBack: (_el: _Element): void => {
          wantBack = $._decode_implicit<WantBack>(() => _decode_WantBack)(_el);
        },
        validationPolicy: (_el: _Element): void => {
          validationPolicy = _decode_ValidationPolicy(_el);
        },
        responseFlags: (_el: _Element): void => {
          responseFlags = _decode_ResponseFlags(_el);
        },
        serverContextInfo: (_el: _Element): void => {
          serverContextInfo = $._decode_implicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
        validationTime: (_el: _Element): void => {
          validationTime = $._decode_implicit<GeneralizedTime>(
            () => $._decodeGeneralizedTime
          )(_el);
        },
        intermediateCerts: (_el: _Element): void => {
          intermediateCerts = $._decode_implicit<CertBundle>(
            () => _decode_CertBundle
          )(_el);
        },
        revInfos: (_el: _Element): void => {
          revInfos = $._decode_implicit<RevocationInfos>(
            () => _decode_RevocationInfos
          )(_el);
        },
        producedAt: (_el: _Element): void => {
          producedAt = $._decode_implicit<GeneralizedTime>(
            () => $._decodeGeneralizedTime
          )(_el);
        },
        queryExtensions: (_el: _Element): void => {
          queryExtensions = $._decode_implicit<Extensions>(
            () => _decode_Extensions
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Query,
        _extension_additions_list_spec_for_Query,
        _root_component_type_list_2_spec_for_Query,
        undefined
      );
      return new Query /* SEQUENCE_CONSTRUCTOR_CALL */(
        queriedCerts,
        checks,
        wantBack,
        validationPolicy,
        responseFlags,
        serverContextInfo,
        validationTime,
        intermediateCerts,
        revInfos,
        producedAt,
        queryExtensions
      );
    };
  }
  return _cached_decoder_for_Query(el);
}

let _cached_encoder_for_Query: $.ASN1Encoder<Query> | null = null;

/**
 * @summary Encodes a(n) Query into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Query, encoded as an ASN.1 Element.
 */
export function _encode_Query(value: Query, elGetter: $.ASN1Encoder<Query>) {
  if (!_cached_encoder_for_Query) {
    _cached_encoder_for_Query = function (
      value: Query    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CertReferences(value.queriedCerts, $.BER),
            /* REQUIRED   */ _encode_CertChecks(value.checks, $.BER),
            /* IF_ABSENT  */ value.wantBack === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => _encode_WantBack,
                  $.BER
                )(value.wantBack, $.BER),
            /* REQUIRED   */ _encode_ValidationPolicy(
              value.validationPolicy,
              $.BER
            ),
            /* IF_ABSENT  */ value.responseFlags === undefined
              ? undefined
              : _encode_ResponseFlags(value.responseFlags, $.BER),
            /* IF_ABSENT  */ value.serverContextInfo === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeOctetString,
                  $.BER
                )(value.serverContextInfo, $.BER),
            /* IF_ABSENT  */ value.validationTime === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => $._encodeGeneralizedTime,
                  $.BER
                )(value.validationTime, $.BER),
            /* IF_ABSENT  */ value.intermediateCerts === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => _encode_CertBundle,
                  $.BER
                )(value.intermediateCerts, $.BER),
            /* IF_ABSENT  */ value.revInfos === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  5,
                  () => _encode_RevocationInfos,
                  $.BER
                )(value.revInfos, $.BER),
            /* IF_ABSENT  */ value.producedAt === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  6,
                  () => $._encodeGeneralizedTime,
                  $.BER
                )(value.producedAt, $.BER),
            /* IF_ABSENT  */ value.queryExtensions === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  7,
                  () => _encode_Extensions,
                  $.BER
                )(value.queryExtensions, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Query(value, elGetter);
}


/* eslint-enable */
