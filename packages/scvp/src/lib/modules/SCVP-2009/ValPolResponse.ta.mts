/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
  OCTET_STRING,
  OBJECT_IDENTIFIER,
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
  AuthPolicy,
  _decode_AuthPolicy,
  _encode_AuthPolicy,
} from '../SCVP-2009/AuthPolicy.ta.mjs';
import {
  ResponseTypes,
  _enum_for_ResponseTypes,
  _decode_ResponseTypes,
  _encode_ResponseTypes,
} from '../SCVP-2009/ResponseTypes.ta.mjs';
import {
  RespValidationPolicy,
  _decode_RespValidationPolicy,
  _encode_RespValidationPolicy,
} from '../SCVP-2009/RespValidationPolicy.ta.mjs';
import {
  RevocationInfoTypes,
  _decode_RevocationInfoTypes,
  _encode_RevocationInfoTypes,
} from '../SCVP-2009/RevocationInfoTypes.ta.mjs';
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import {
  KeyAgreePublicKey,
  _decode_KeyAgreePublicKey,
  _encode_KeyAgreePublicKey,
} from '../SCVP-2009/KeyAgreePublicKey.ta.mjs';

/**
 * @summary ValPolResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValPolResponse ::= SEQUENCE {
 *     vpResponseVersion       INTEGER,
 *     maxCVRequestVersion     INTEGER,
 *     maxVPRequestVersion     INTEGER,
 *     serverConfigurationID   INTEGER,
 *     thisUpdate              GeneralizedTime,
 *     nextUpdate              GeneralizedTime OPTIONAL,
 *     supportedChecks         CertChecks,
 *     supportedWantBacks      WantBack,
 *     validationPolicies      SEQUENCE OF OBJECT IDENTIFIER,
 *     validationAlgs          SEQUENCE OF OBJECT IDENTIFIER,
 *     authPolicies            SEQUENCE OF AuthPolicy,
 *     responseTypes           ResponseTypes,
 *     defaultPolicyValues     RespValidationPolicy,
 *     revocationInfoTypes     RevocationInfoTypes,
 *     signatureGeneration     SEQUENCE OF AlgorithmIdentifier
 *                                 {SIGNATURE-ALGORITHM,
 *                                     {SignatureAlgorithms}},
 *     signatureVerification   SEQUENCE OF AlgorithmIdentifier
 *                                 {SIGNATURE-ALGORITHM,
 *                                     {SignatureAlgorithms}},
 *     hashAlgorithms          SEQUENCE SIZE (1..MAX) OF
 *                                 OBJECT IDENTIFIER,
 *     serverPublicKeys        SEQUENCE OF KeyAgreePublicKey
 *                                 OPTIONAL,
 *     clockSkew               INTEGER DEFAULT 10,
 *     requestNonce            OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ValPolResponse {
  constructor(
    /**
     * @summary `vpResponseVersion`.
     * @public
     * @readonly
     */
    readonly vpResponseVersion: INTEGER,
    /**
     * @summary `maxCVRequestVersion`.
     * @public
     * @readonly
     */
    readonly maxCVRequestVersion: INTEGER,
    /**
     * @summary `maxVPRequestVersion`.
     * @public
     * @readonly
     */
    readonly maxVPRequestVersion: INTEGER,
    /**
     * @summary `serverConfigurationID`.
     * @public
     * @readonly
     */
    readonly serverConfigurationID: INTEGER,
    /**
     * @summary `thisUpdate`.
     * @public
     * @readonly
     */
    readonly thisUpdate: GeneralizedTime,
    /**
     * @summary `nextUpdate`.
     * @public
     * @readonly
     */
    readonly nextUpdate: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `supportedChecks`.
     * @public
     * @readonly
     */
    readonly supportedChecks: CertChecks,
    /**
     * @summary `supportedWantBacks`.
     * @public
     * @readonly
     */
    readonly supportedWantBacks: WantBack,
    /**
     * @summary `validationPolicies`.
     * @public
     * @readonly
     */
    readonly validationPolicies: OBJECT_IDENTIFIER[],
    /**
     * @summary `validationAlgs`.
     * @public
     * @readonly
     */
    readonly validationAlgs: OBJECT_IDENTIFIER[],
    /**
     * @summary `authPolicies`.
     * @public
     * @readonly
     */
    readonly authPolicies: AuthPolicy[],
    /**
     * @summary `responseTypes`.
     * @public
     * @readonly
     */
    readonly responseTypes: ResponseTypes,
    /**
     * @summary `defaultPolicyValues`.
     * @public
     * @readonly
     */
    readonly defaultPolicyValues: RespValidationPolicy,
    /**
     * @summary `revocationInfoTypes`.
     * @public
     * @readonly
     */
    readonly revocationInfoTypes: RevocationInfoTypes,
    /**
     * @summary `signatureGeneration`.
     * @public
     * @readonly
     */
    readonly signatureGeneration: AlgorithmIdentifier[],
    /**
     * @summary `signatureVerification`.
     * @public
     * @readonly
     */
    readonly signatureVerification: AlgorithmIdentifier[],
    /**
     * @summary `hashAlgorithms`.
     * @public
     * @readonly
     */
    readonly hashAlgorithms: OBJECT_IDENTIFIER[],
    /**
     * @summary `serverPublicKeys`.
     * @public
     * @readonly
     */
    readonly serverPublicKeys: OPTIONAL<KeyAgreePublicKey[]>,
    /**
     * @summary `clockSkew`.
     * @public
     * @readonly
     */
    readonly clockSkew: OPTIONAL<INTEGER>,
    /**
     * @summary `requestNonce`.
     * @public
     * @readonly
     */
    readonly requestNonce: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a ValPolResponse
   * @description
   *
   * This takes an `object` and converts it to a `ValPolResponse`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ValPolResponse`.
   * @returns {ValPolResponse}
   */
  public static _from_object(
    _o: { [_K in keyof ValPolResponse]: ValPolResponse[_K] }
  ): ValPolResponse {
    return new ValPolResponse(
      _o.vpResponseVersion,
      _o.maxCVRequestVersion,
      _o.maxVPRequestVersion,
      _o.serverConfigurationID,
      _o.thisUpdate,
      _o.nextUpdate,
      _o.supportedChecks,
      _o.supportedWantBacks,
      _o.validationPolicies,
      _o.validationAlgs,
      _o.authPolicies,
      _o.responseTypes,
      _o.defaultPolicyValues,
      _o.revocationInfoTypes,
      _o.signatureGeneration,
      _o.signatureVerification,
      _o.hashAlgorithms,
      _o.serverPublicKeys,
      _o.clockSkew,
      _o.requestNonce
    );
  }

  /**
   * @summary Getter that returns the default value for `clockSkew`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_clockSkew() {
    return 10;
  }
  /**
   * @summary The enum used as the type of the component `responseTypes`
   * @public
   * @static
   */

  public static _enum_for_responseTypes = _enum_for_ResponseTypes;
}

/**
 * @summary The Leading Root Component Types of ValPolResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValPolResponse: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'vpResponseVersion',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'maxCVRequestVersion',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'maxVPRequestVersion',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'serverConfigurationID',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'thisUpdate',
    false,
    $.hasTag(_TagClass.universal, 24)
  ),
  new $.ComponentSpec(
    'nextUpdate',
    true,
    $.hasTag(_TagClass.universal, 24)
  ),
  new $.ComponentSpec(
    'supportedChecks',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'supportedWantBacks',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'validationPolicies',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'validationAlgs',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'authPolicies',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'responseTypes',
    false,
    $.hasTag(_TagClass.universal, 10)
  ),
  new $.ComponentSpec(
    'defaultPolicyValues',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'revocationInfoTypes',
    false,
    $.hasTag(_TagClass.universal, 3)
  ),
  new $.ComponentSpec(
    'signatureGeneration',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'signatureVerification',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'hashAlgorithms',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'serverPublicKeys',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'clockSkew',
    true,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'requestNonce',
    true,
    $.hasTag(_TagClass.universal, 4)
  ),
];

/**
 * @summary The Trailing Root Component Types of ValPolResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValPolResponse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ValPolResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValPolResponse: $.ComponentSpec[] = [];

let _cached_decoder_for_ValPolResponse: $.ASN1Decoder<ValPolResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValPolResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValPolResponse} The decoded data structure.
 */
export function _decode_ValPolResponse(el: _Element) {
  if (!_cached_decoder_for_ValPolResponse) {
    _cached_decoder_for_ValPolResponse = function (
      el: _Element
    ): ValPolResponse {
      let vpResponseVersion!: INTEGER;
      let maxCVRequestVersion!: INTEGER;
      let maxVPRequestVersion!: INTEGER;
      let serverConfigurationID!: INTEGER;
      let thisUpdate!: GeneralizedTime;
      let nextUpdate: OPTIONAL<GeneralizedTime>;
      let supportedChecks!: CertChecks;
      let supportedWantBacks!: WantBack;
      let validationPolicies!: OBJECT_IDENTIFIER[];
      let validationAlgs!: OBJECT_IDENTIFIER[];
      let authPolicies!: AuthPolicy[];
      let responseTypes!: ResponseTypes;
      let defaultPolicyValues!: RespValidationPolicy;
      let revocationInfoTypes!: RevocationInfoTypes;
      let signatureGeneration!: AlgorithmIdentifier[];
      let signatureVerification!: AlgorithmIdentifier[];
      let hashAlgorithms!: OBJECT_IDENTIFIER[];
      let serverPublicKeys: OPTIONAL<KeyAgreePublicKey[]>;
      let clockSkew: OPTIONAL<INTEGER> =
        ValPolResponse._default_value_for_clockSkew;
      let requestNonce: OPTIONAL<OCTET_STRING>;
      const callbacks: $.DecodingMap = {
        vpResponseVersion: (_el: _Element): void => {
          vpResponseVersion = $._decodeInteger(_el);
        },
        maxCVRequestVersion: (_el: _Element): void => {
          maxCVRequestVersion = $._decodeInteger(_el);
        },
        maxVPRequestVersion: (_el: _Element): void => {
          maxVPRequestVersion = $._decodeInteger(_el);
        },
        serverConfigurationID: (_el: _Element): void => {
          serverConfigurationID = $._decodeInteger(_el);
        },
        thisUpdate: (_el: _Element): void => {
          thisUpdate = $._decodeGeneralizedTime(_el);
        },
        nextUpdate: (_el: _Element): void => {
          nextUpdate = $._decodeGeneralizedTime(_el);
        },
        supportedChecks: (_el: _Element): void => {
          supportedChecks = _decode_CertChecks(_el);
        },
        supportedWantBacks: (_el: _Element): void => {
          supportedWantBacks = _decode_WantBack(_el);
        },
        validationPolicies: (_el: _Element): void => {
          validationPolicies = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          )(_el);
        },
        validationAlgs: (_el: _Element): void => {
          validationAlgs = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          )(_el);
        },
        authPolicies: (_el: _Element): void => {
          authPolicies = $._decodeSequenceOf<AuthPolicy>(
            () => _decode_AuthPolicy
          )(_el);
        },
        responseTypes: (_el: _Element): void => {
          responseTypes = _decode_ResponseTypes(_el);
        },
        defaultPolicyValues: (_el: _Element): void => {
          defaultPolicyValues = _decode_RespValidationPolicy(_el);
        },
        revocationInfoTypes: (_el: _Element): void => {
          revocationInfoTypes = _decode_RevocationInfoTypes(_el);
        },
        signatureGeneration: (_el: _Element): void => {
          signatureGeneration = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
          )(_el);
        },
        signatureVerification: (_el: _Element): void => {
          signatureVerification = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
          )(_el);
        },
        hashAlgorithms: (_el: _Element): void => {
          hashAlgorithms = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          )(_el);
        },
        serverPublicKeys: (_el: _Element): void => {
          serverPublicKeys = $._decodeSequenceOf<KeyAgreePublicKey>(
            () => _decode_KeyAgreePublicKey
          )(_el);
        },
        clockSkew: (_el: _Element): void => {
          clockSkew = $._decodeInteger(_el);
        },
        requestNonce: (_el: _Element): void => {
          requestNonce = $._decodeOctetString(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ValPolResponse,
        _extension_additions_list_spec_for_ValPolResponse,
        _root_component_type_list_2_spec_for_ValPolResponse,
        undefined
      );
      return new ValPolResponse (
        vpResponseVersion,
        maxCVRequestVersion,
        maxVPRequestVersion,
        serverConfigurationID,
        thisUpdate,
        nextUpdate,
        supportedChecks,
        supportedWantBacks,
        validationPolicies,
        validationAlgs,
        authPolicies,
        responseTypes,
        defaultPolicyValues,
        revocationInfoTypes,
        signatureGeneration,
        signatureVerification,
        hashAlgorithms,
        serverPublicKeys,
        clockSkew,
        requestNonce
      );
    };
  }
  return _cached_decoder_for_ValPolResponse(el);
}

let _cached_encoder_for_ValPolResponse: $.ASN1Encoder<ValPolResponse> | null = null;

/**
 * @summary Encodes a(n) ValPolResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValPolResponse, encoded as an ASN.1 Element.
 */
export function _encode_ValPolResponse(
  value: ValPolResponse,
  elGetter: $.ASN1Encoder<ValPolResponse>
) {
  if (!_cached_encoder_for_ValPolResponse) {
    _cached_encoder_for_ValPolResponse = function (
      value: ValPolResponse    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.vpResponseVersion, $.DER),
            /* REQUIRED   */ $._encodeInteger(value.maxCVRequestVersion, $.DER),
            /* REQUIRED   */ $._encodeInteger(value.maxVPRequestVersion, $.DER),
            /* REQUIRED   */ $._encodeInteger(
              value.serverConfigurationID,
              $.DER
            ),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.thisUpdate, $.DER),
            /* IF_ABSENT  */ value.nextUpdate === undefined
              ? undefined
              : $._encodeGeneralizedTime(value.nextUpdate, $.DER),
            /* REQUIRED   */ _encode_CertChecks(value.supportedChecks, $.DER),
            /* REQUIRED   */ _encode_WantBack(value.supportedWantBacks, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<OBJECT_IDENTIFIER>(
              () => $._encodeObjectIdentifier,
              $.DER
            )(value.validationPolicies, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<OBJECT_IDENTIFIER>(
              () => $._encodeObjectIdentifier,
              $.DER
            )(value.validationAlgs, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<AuthPolicy>(
              () => _encode_AuthPolicy,
              $.DER
            )(value.authPolicies, $.DER),
            /* REQUIRED   */ _encode_ResponseTypes(value.responseTypes, $.DER),
            /* REQUIRED   */ _encode_RespValidationPolicy(
              value.defaultPolicyValues,
              $.DER
            ),
            /* REQUIRED   */ _encode_RevocationInfoTypes(
              value.revocationInfoTypes,
              $.DER
            ),
            /* REQUIRED   */ $._encodeSequenceOf<AlgorithmIdentifier>(
              () => _encode_AlgorithmIdentifier,
              $.DER
            )(value.signatureGeneration, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<AlgorithmIdentifier>(
              () => _encode_AlgorithmIdentifier,
              $.DER
            )(value.signatureVerification, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<OBJECT_IDENTIFIER>(
              () => $._encodeObjectIdentifier,
              $.DER
            )(value.hashAlgorithms, $.DER),
            /* IF_ABSENT  */ value.serverPublicKeys === undefined
              ? undefined
              : $._encodeSequenceOf<KeyAgreePublicKey>(
                  () => _encode_KeyAgreePublicKey,
                  $.DER
                )(value.serverPublicKeys, $.DER),
            /* IF_DEFAULT */ value.clockSkew === undefined ||
            $.deepEq(
              value.clockSkew,
              ValPolResponse._default_value_for_clockSkew
            )
              ? undefined
              : $._encodeInteger(value.clockSkew, $.DER),
            /* IF_ABSENT  */ value.requestNonce === undefined
              ? undefined
              : $._encodeOctetString(value.requestNonce, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_ValPolResponse(value, elGetter);
}


/* eslint-enable */
