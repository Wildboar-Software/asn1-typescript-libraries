/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
  OCTET_STRING,
  OBJECT_IDENTIFIER,
  UTF8String,
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
import { Query, _decode_Query, _encode_Query } from '../SCVP-2009/Query.ta.mjs';
import {
  GeneralNames,
  _decode_GeneralNames,
  _encode_GeneralNames,
} from '@wildboar/x500/CertificateExtensions';
import {
  GeneralName,
  _decode_GeneralName,
  _encode_GeneralName,
} from '@wildboar/x500/CertificateExtensions';
import {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/AuthenticationFramework';
import {
  AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary CVRequest
 * @description
 *
 * SCVP certificate validation request ([RFC 5055 §3](https://datatracker.ietf.org/doc/html/rfc5055#section-3)).
 * A client request MUST be a single `CVRequest` (MIME type
 * `application/scvp-cv-request` when carried as a MIME body part).
 * May be unprotected (`ContentInfo` with `id-ct-scvp-certValRequest`)
 * or protected (CMS `SignedData` / `AuthenticatedData` encapsulating
 * DER-encoded `CVRequest`).
 *
 * Conforming servers MUST parse requests that contain any or all
 * optional items.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CVRequest ::= SEQUENCE {
 *     cvRequestVersion           INTEGER DEFAULT 1,
 *
 *     query                      Query,
 *     requestorRef           [0] GeneralNames OPTIONAL,
 *     requestNonce           [1] OCTET STRING OPTIONAL,
 *     requestorName          [2] GeneralName OPTIONAL,
 *     responderName          [3] GeneralName OPTIONAL,
 *     requestExtensions      [4] Extensions{{RequestExtensions}}
 *                                     OPTIONAL,
 *     signatureAlg           [5] AlgorithmIdentifier
 *                                     {SIGNATURE-ALGORITHM,
 *                                         {SignatureAlgorithms}}
 *                                     OPTIONAL,
 *     hashAlg                [6] OBJECT IDENTIFIER OPTIONAL,
 *     requestorText          [7] UTF8String (SIZE (1..256)) OPTIONAL
 * }
 * ```
 *
 */
export class CVRequest {
  constructor(
    /**
     * @summary `cvRequestVersion`.
     * @description
     *
     * Version of this `CVRequest`. DEFAULT 1. Clients SHOULD use 1;
     * servers that do not support the requested version return
     * `unsupportedVersion` ([RFC 5055 §3.1](https://datatracker.ietf.org/doc/html/rfc5055#section-3.1)).
     *
     * @public
     * @readonly
     */
    readonly cvRequestVersion: OPTIONAL<INTEGER>,
    /**
     * @summary `query`.
     * @description
     *
     * The validation query: certificates, checks, wantBacks, and
     * validation policy ([RFC 5055 §3.2](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2)).
     *
     * @public
     * @readonly
     */
    readonly query: Query,
    /**
     * @summary `requestorRef`.
     * @description
     *
     * Optional names identifying the requestor, typically for servers
     * that relay requests. Relaying servers MAY add a name; clients
     * need not set this ([RFC 5055 §3.3](https://datatracker.ietf.org/doc/html/rfc5055#section-3.3)).
     *
     * @public
     * @readonly
     */
    readonly requestorRef?: OPTIONAL<GeneralNames>,
    /**
     * @summary `requestNonce`.
     * @description
     *
     * Client-generated nonce binding request to response. If present
     * and the server returns a non-cached response, the same value MUST
     * appear in `respNonce`. Cached responses omit `respNonce`
     * ([RFC 5055 §3.4](https://datatracker.ietf.org/doc/html/rfc5055#section-3.4)).
     *
     * @public
     * @readonly
     */
    readonly requestNonce?: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `requestorName`.
     * @description
     *
     * Optional name of the requestor; used when authenticating the
     * request (e.g., matching a certificate subject) ([RFC 5055 §3.5](https://datatracker.ietf.org/doc/html/rfc5055#section-3.5)).
     *
     * @public
     * @readonly
     */
    readonly requestorName?: OPTIONAL<GeneralName>,
    /**
     * @summary `responderName`.
     * @description
     *
     * Optional name of the SCVP server expected to answer. Servers
     * without a matching certificate return
     * `unrecognizedResponderName` ([RFC 5055 §3.6](https://datatracker.ietf.org/doc/html/rfc5055#section-3.6)).
     *
     * @public
     * @readonly
     */
    readonly responderName?: OPTIONAL<GeneralName>,
    /**
     * @summary `requestExtensions`.
     * @description
     *
     * Optional request-level extensions (`RequestExtensions` object
     * set). Unrecognized critical extensions yield
     * `unrecognizedCritRequestExt` ([RFC 5055 §3.7](https://datatracker.ietf.org/doc/html/rfc5055#section-3.7)).
     *
     * @public
     * @readonly
     */
    readonly requestExtensions?: OPTIONAL<Extensions>,
    /**
     * @summary `signatureAlg`.
     * @description
     *
     * Optional signature algorithm the client wants the server to use
     * when protecting the response ([RFC 5055 §3.8](https://datatracker.ietf.org/doc/html/rfc5055#section-3.8)).
     *
     * @public
     * @readonly
     */
    readonly signatureAlg?: OPTIONAL<AlgorithmIdentifier>,
    /**
     * @summary `hashAlg`.
     * @description
     *
     * Optional hash algorithm OID the client wants used when computing
     * `requestHash` in `RequestReference` ([RFC 5055 §3.9](https://datatracker.ietf.org/doc/html/rfc5055#section-3.9)).
     *
     * @public
     * @readonly
     */
    readonly hashAlg?: OPTIONAL<OBJECT_IDENTIFIER>,
    /**
     * @summary `requestorText`.
     * @description
     *
     * Optional UTF-8 text (1..256) supplied by the client. Echoed in
     * non-cached responses; omitted from cached responses
     * ([RFC 5055 §3.10](https://datatracker.ietf.org/doc/html/rfc5055#section-3.10)).
     *
     * @public
     * @readonly
     */
    readonly requestorText?: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a CVRequest
   * @description
   *
   * This takes an `object` and converts it to a `CVRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CVRequest`.
   * @returns {CVRequest}
   */
  public static _from_object(
    _o: { [_K in keyof CVRequest]: CVRequest[_K] }
  ): CVRequest {
    return new CVRequest(
      _o.cvRequestVersion,
      _o.query,
      _o.requestorRef,
      _o.requestNonce,
      _o.requestorName,
      _o.responderName,
      _o.requestExtensions,
      _o.signatureAlg,
      _o.hashAlg,
      _o.requestorText
    );
  }

  /**
   * @summary Getter that returns the default value for `cvRequestVersion`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_cvRequestVersion(): INTEGER {
    return 1;
  }
}

/**
 * @summary The Leading Root Component Types of CVRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CVRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'cvRequestVersion',
    true,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'query',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'requestorRef',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'requestNonce',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'requestorName',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'responderName',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'requestExtensions',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'signatureAlg',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'hashAlg',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'requestorText',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
];

/**
 * @summary The Trailing Root Component Types of CVRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CVRequest: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CVRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CVRequest: $.ComponentSpec[] = [];

let _cached_decoder_for_CVRequest: $.ASN1Decoder<CVRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CVRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CVRequest} The decoded data structure.
 */
export function _decode_CVRequest(el: _Element): CVRequest {
  if (!_cached_decoder_for_CVRequest) {
    _cached_decoder_for_CVRequest = function (el: _Element): CVRequest {
      let cvRequestVersion: OPTIONAL<INTEGER> =
        CVRequest._default_value_for_cvRequestVersion;
      let query!: Query;
      let requestorRef: OPTIONAL<GeneralNames>;
      let requestNonce: OPTIONAL<OCTET_STRING>;
      let requestorName: OPTIONAL<GeneralName>;
      let responderName: OPTIONAL<GeneralName>;
      let requestExtensions: OPTIONAL<Extensions>;
      let signatureAlg: OPTIONAL<AlgorithmIdentifier>;
      let hashAlg: OPTIONAL<OBJECT_IDENTIFIER>;
      let requestorText: OPTIONAL<UTF8String>;
      const callbacks: $.DecodingMap = {
        cvRequestVersion: (_el: _Element): void => {
          cvRequestVersion = $._decodeInteger(_el);
        },
        query: (_el: _Element): void => {
          query = _decode_Query(_el);
        },
        requestorRef: (_el: _Element): void => {
          requestorRef = $._decode_implicit<GeneralNames>(
            () => _decode_GeneralNames
          )(_el);
        },
        requestNonce: (_el: _Element): void => {
          requestNonce = $._decode_implicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
        requestorName: (_el: _Element): void => {
          requestorName = $._decode_explicit<GeneralName>(
            () => _decode_GeneralName
          )(_el);
        },
        responderName: (_el: _Element): void => {
          responderName = $._decode_explicit<GeneralName>(
            () => _decode_GeneralName
          )(_el);
        },
        requestExtensions: (_el: _Element): void => {
          requestExtensions = $._decode_implicit<Extensions>(
            () => _decode_Extensions
          )(_el);
        },
        signatureAlg: (_el: _Element): void => {
          signatureAlg = $._decode_implicit<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
          )(_el);
        },
        hashAlg: (_el: _Element): void => {
          hashAlg = $._decode_implicit<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          )(_el);
        },
        requestorText: (_el: _Element): void => {
          requestorText = $._decode_implicit<UTF8String>(
            () => $._decodeUTF8String
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CVRequest,
        _extension_additions_list_spec_for_CVRequest,
        _root_component_type_list_2_spec_for_CVRequest,
        undefined
      );
      return new CVRequest (
        cvRequestVersion,
        query,
        requestorRef,
        requestNonce,
        requestorName,
        responderName,
        requestExtensions,
        signatureAlg,
        hashAlg,
        requestorText
      );
    };
  }
  return _cached_decoder_for_CVRequest(el);
}

let _cached_encoder_for_CVRequest: $.ASN1Encoder<CVRequest> | null = null;

/**
 * @summary Encodes a(n) CVRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CVRequest, encoded as an ASN.1 Element.
 */
export function _encode_CVRequest(
  value: CVRequest,
  elGetter: $.ASN1Encoder<CVRequest>
): _Element {
  if (!_cached_encoder_for_CVRequest) {
    _cached_encoder_for_CVRequest = function (
      value: CVRequest    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.cvRequestVersion === undefined ||
            $.deepEq(
              value.cvRequestVersion,
              CVRequest._default_value_for_cvRequestVersion
            )
              ? undefined
              : $._encodeInteger(value.cvRequestVersion, $.DER),
            /* REQUIRED   */ _encode_Query(value.query, $.DER),
            /* IF_ABSENT  */ value.requestorRef === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_GeneralNames,
                  $.DER
                )(value.requestorRef, $.DER),
            /* IF_ABSENT  */ value.requestNonce === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeOctetString,
                  $.DER
                )(value.requestNonce, $.DER),
            /* IF_ABSENT  */ value.requestorName === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_GeneralName,
                  $.DER
                )(value.requestorName, $.DER),
            /* IF_ABSENT  */ value.responderName === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_GeneralName,
                  $.DER
                )(value.responderName, $.DER),
            /* IF_ABSENT  */ value.requestExtensions === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => _encode_Extensions,
                  $.DER
                )(value.requestExtensions, $.DER),
            /* IF_ABSENT  */ value.signatureAlg === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  5,
                  () => _encode_AlgorithmIdentifier,
                  $.DER
                )(value.signatureAlg, $.DER),
            /* IF_ABSENT  */ value.hashAlg === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  6,
                  () => $._encodeObjectIdentifier,
                  $.DER
                )(value.hashAlg, $.DER),
            /* IF_ABSENT  */ value.requestorText === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  7,
                  () => $._encodeUTF8String,
                  $.DER
                )(value.requestorText, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_CVRequest(value, elGetter);
}


/* eslint-enable */
