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
} from '@wildboar/x500/AuthenticationFramework';
import {
  KeyAgreePublicKey,
  _decode_KeyAgreePublicKey,
  _encode_KeyAgreePublicKey,
} from '../SCVP-2009/KeyAgreePublicKey.ta.mjs';

/**
 * @summary ValPolResponse
 * @description
 *
 * Signed description of an SCVP server's configuration and
 * supported policies ([RFC 5055 §6](https://datatracker.ietf.org/doc/html/rfc5055#section-6)). MUST be signed; may be cached
 * and reused for multiple requests.
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
 */
export class ValPolResponse {
  constructor(
    /**
     * @summary `vpResponseVersion`.
     * @description
     *
     * Policy response version ([RFC 5055 §6.1](https://datatracker.ietf.org/doc/html/rfc5055#section-6.1)).
     *
     * @public
     * @readonly
     */
    readonly vpResponseVersion: INTEGER,
    /**
     * @summary `maxCVRequestVersion`.
     * @description
     *
     * Maximum supported `CVRequest` version ([RFC 5055 §6.2](https://datatracker.ietf.org/doc/html/rfc5055#section-6.2)).
     *
     * @public
     * @readonly
     */
    readonly maxCVRequestVersion: INTEGER,
    /**
     * @summary `maxVPRequestVersion`.
     * @description
     *
     * Maximum supported `ValPolRequest` version ([RFC 5055 §6.3](https://datatracker.ietf.org/doc/html/rfc5055#section-6.3)).
     *
     * @public
     * @readonly
     */
    readonly maxVPRequestVersion: INTEGER,
    /**
     * @summary `serverConfigurationID`.
     * @description
     *
     * Unique ID for this server configuration; MUST change when
     * listed policy-related fields change ([RFC 5055 §6.4](https://datatracker.ietf.org/doc/html/rfc5055#section-6.4)).
     *
     * @public
     * @readonly
     */
    readonly serverConfigurationID: INTEGER,
    /**
     * @summary `thisUpdate`.
     * @description
     *
     * Signing date/time of this policy response ([RFC 5055 §6.5](https://datatracker.ietf.org/doc/html/rfc5055#section-6.5)).
     *
     * @public
     * @readonly
     */
    readonly thisUpdate: GeneralizedTime,
    /**
     * @summary `nextUpdate`.
     * @description
     *
     * If present, cached response freshness bound; if absent, response
     * is request-specific and `requestNonce` MUST be present
     * ([RFC 5055 §6.6](https://datatracker.ietf.org/doc/html/rfc5055#section-6.6)).
     *
     * @public
     * @readonly
     */
    readonly nextUpdate: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `supportedChecks`.
     * @description
     *
     * Check OIDs this server supports ([RFC 5055 §6.7](https://datatracker.ietf.org/doc/html/rfc5055#section-6.7)).
     *
     * @public
     * @readonly
     */
    readonly supportedChecks: CertChecks,
    /**
     * @summary `supportedWantBacks`.
     * @description
     *
     * WantBack OIDs this server supports ([RFC 5055 §6.8](https://datatracker.ietf.org/doc/html/rfc5055#section-6.8)).
     *
     * @public
     * @readonly
     */
    readonly supportedWantBacks: WantBack,
    /**
     * @summary `validationPolicies`.
     * @description
     *
     * Validation policy OIDs supported; omit
     * `id-svp-defaultValPolicy` if the default policy is not offered
     * ([RFC 5055 §6.9](https://datatracker.ietf.org/doc/html/rfc5055#section-6.9)).
     *
     * @public
     * @readonly
     */
    readonly validationPolicies: OBJECT_IDENTIFIER[],
    /**
     * @summary `validationAlgs`.
     * @description
     *
     * Validation algorithm OIDs supported ([RFC 5055 §6.10](https://datatracker.ietf.org/doc/html/rfc5055#section-6.10)).
     *
     * @public
     * @readonly
     */
    readonly validationAlgs: OBJECT_IDENTIFIER[],
    /**
     * @summary `authPolicies`.
     * @description
     *
     * Authentication policy OIDs documenting whether/how clients
     * authenticate ([RFC 5055 §6.11](https://datatracker.ietf.org/doc/html/rfc5055#section-6.11)).
     *
     * @public
     * @readonly
     */
    readonly authPolicies: AuthPolicy[],
    /**
     * @summary `responseTypes`.
     * @description
     *
     * Whether the server returns cached, non-cached, or both CV
     * response types ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
     *
     * @public
     * @readonly
     */
    readonly responseTypes: ResponseTypes,
    /**
     * @summary `defaultPolicyValues`.
     * @description
     *
     * Fully populated default `RespValidationPolicy` values
     * ([RFC 5055 §6.14](https://datatracker.ietf.org/doc/html/rfc5055#section-6.14)).
     *
     * @public
     * @readonly
     */
    readonly defaultPolicyValues: RespValidationPolicy,
    /**
     * @summary `revocationInfoTypes`.
     * @description
     *
     * Bit string of revocation info sources the server can process
     * ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
     *
     * @public
     * @readonly
     */
    readonly revocationInfoTypes: RevocationInfoTypes,
    /**
     * @summary `signatureGeneration`.
     * @description
     *
     * Signature algorithms the server can use to sign `CVResponse`
     * messages (ordered; first is default). Empty if the server
     * cannot sign ([RFC 5055 §6.15](https://datatracker.ietf.org/doc/html/rfc5055#section-6.15)).
     *
     * @public
     * @readonly
     */
    readonly signatureGeneration: AlgorithmIdentifier[],
    /**
     * @summary `signatureVerification`.
     * @description
     *
     * Signature algorithms the server can verify on requests. Empty
     * if it does not verify ([RFC 5055 §6.16](https://datatracker.ietf.org/doc/html/rfc5055#section-6.16)).
     *
     * @public
     * @readonly
     */
    readonly signatureVerification: AlgorithmIdentifier[],
    /**
     * @summary `hashAlgorithms`.
     * @description
     *
     * Hash algorithms the server supports ([RFC 5055 §6.17](https://datatracker.ietf.org/doc/html/rfc5055#section-6.17)).
     *
     * @public
     * @readonly
     */
    readonly hashAlgorithms: OBJECT_IDENTIFIER[],
    /**
     * @summary `serverPublicKeys`.
     * @description
     *
     * Optional key-agreement public keys for `AuthenticatedData`
     * responses ([RFC 5055 §6.18](https://datatracker.ietf.org/doc/html/rfc5055#section-6.18)).
     *
     * @public
     * @readonly
     */
    readonly serverPublicKeys?: OPTIONAL<KeyAgreePublicKey[]>,
    /**
     * @summary `clockSkew`.
     * @description
     *
     * Clock skew in seconds (DEFAULT 10) ([RFC 5055 §6.19](https://datatracker.ietf.org/doc/html/rfc5055#section-6.19)).
     *
     * @public
     * @readonly
     */
    readonly clockSkew?: OPTIONAL<INTEGER>,
    /**
     * @summary `requestNonce`.
     * @description
     *
     * Nonce from the request for non-cached policy responses
     * ([RFC 5055 §6.6](https://datatracker.ietf.org/doc/html/rfc5055#section-6.6)).
     *
     * @public
     * @readonly
     */
    readonly requestNonce?: OPTIONAL<OCTET_STRING>
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
  public static get _default_value_for_clockSkew(): INTEGER {
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
export function _decode_ValPolResponse(el: _Element): ValPolResponse {
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
): _Element {
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
