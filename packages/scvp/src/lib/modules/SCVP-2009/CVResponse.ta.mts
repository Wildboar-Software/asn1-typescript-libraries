/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
  OCTET_STRING,
  UTF8String,
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
import * as $ from '@wildboar/asn1/functional';
import {
  ResponseStatus,
  _decode_ResponseStatus,
  _encode_ResponseStatus,
} from '../SCVP-2009/ResponseStatus.ta.mjs';
import {
  RespValidationPolicy,
  _decode_RespValidationPolicy,
  _encode_RespValidationPolicy,
} from '../SCVP-2009/RespValidationPolicy.ta.mjs';
import {
  RequestReference,
  _decode_RequestReference,
  _encode_RequestReference,
} from '../SCVP-2009/RequestReference.ta.mjs';
import {
  GeneralNames,
  _decode_GeneralNames,
  _encode_GeneralNames,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs';
import {
  ReplyObjects,
  _decode_ReplyObjects,
  _encode_ReplyObjects,
} from '../SCVP-2009/ReplyObjects.ta.mjs';
import {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs';

/**
 * @summary CVResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CVResponse ::= SEQUENCE {
 *     cvResponseVersion          INTEGER,
 *     serverConfigurationID      INTEGER,
 *     producedAt                 GeneralizedTime,
 *     responseStatus             ResponseStatus,
 *     respValidationPolicy   [0] RespValidationPolicy OPTIONAL,
 *     requestRef             [1] RequestReference OPTIONAL,
 *     requestorRef           [2] GeneralNames OPTIONAL,
 *     requestorName          [3] GeneralNames OPTIONAL,
 *     replyObjects           [4] ReplyObjects OPTIONAL,
 *     respNonce              [5] OCTET STRING OPTIONAL,
 *     serverContextInfo      [6] OCTET STRING OPTIONAL,
 *     cvResponseExtensions   [7] Extensions{{CVResponseExtensions}}
 *                                     OPTIONAL,
 *     requestorText          [8] UTF8String (SIZE (1..256)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CVResponse {
  constructor(
    /**
     * @summary `cvResponseVersion`.
     * @public
     * @readonly
     */
    readonly cvResponseVersion: INTEGER,
    /**
     * @summary `serverConfigurationID`.
     * @public
     * @readonly
     */
    readonly serverConfigurationID: INTEGER,
    /**
     * @summary `producedAt`.
     * @public
     * @readonly
     */
    readonly producedAt: GeneralizedTime,
    /**
     * @summary `responseStatus`.
     * @public
     * @readonly
     */
    readonly responseStatus: ResponseStatus,
    /**
     * @summary `respValidationPolicy`.
     * @public
     * @readonly
     */
    readonly respValidationPolicy: OPTIONAL<RespValidationPolicy>,
    /**
     * @summary `requestRef`.
     * @public
     * @readonly
     */
    readonly requestRef: OPTIONAL<RequestReference>,
    /**
     * @summary `requestorRef`.
     * @public
     * @readonly
     */
    readonly requestorRef: OPTIONAL<GeneralNames>,
    /**
     * @summary `requestorName`.
     * @public
     * @readonly
     */
    readonly requestorName: OPTIONAL<GeneralNames>,
    /**
     * @summary `replyObjects`.
     * @public
     * @readonly
     */
    readonly replyObjects: OPTIONAL<ReplyObjects>,
    /**
     * @summary `respNonce`.
     * @public
     * @readonly
     */
    readonly respNonce: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `serverContextInfo`.
     * @public
     * @readonly
     */
    readonly serverContextInfo: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `cvResponseExtensions`.
     * @public
     * @readonly
     */
    readonly cvResponseExtensions: OPTIONAL<Extensions>,
    /**
     * @summary `requestorText`.
     * @public
     * @readonly
     */
    readonly requestorText: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a CVResponse
   * @description
   *
   * This takes an `object` and converts it to a `CVResponse`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CVResponse`.
   * @returns {CVResponse}
   */
  public static _from_object(
    _o: { [_K in keyof CVResponse]: CVResponse[_K] }
  ): CVResponse {
    return new CVResponse(
      _o.cvResponseVersion,
      _o.serverConfigurationID,
      _o.producedAt,
      _o.responseStatus,
      _o.respValidationPolicy,
      _o.requestRef,
      _o.requestorRef,
      _o.requestorName,
      _o.replyObjects,
      _o.respNonce,
      _o.serverContextInfo,
      _o.cvResponseExtensions,
      _o.requestorText
    );
  }
}

/**
 * @summary The Leading Root Component Types of CVResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CVResponse: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'cvResponseVersion',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'serverConfigurationID',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'producedAt',
    false,
    $.hasTag(_TagClass.universal, 24)
  ),
  new $.ComponentSpec(
    'responseStatus',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'respValidationPolicy',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'requestRef',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'requestorRef',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'requestorName',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'replyObjects',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'respNonce',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'serverContextInfo',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'cvResponseExtensions',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'requestorText',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
];

/**
 * @summary The Trailing Root Component Types of CVResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CVResponse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CVResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CVResponse: $.ComponentSpec[] = [];

let _cached_decoder_for_CVResponse: $.ASN1Decoder<CVResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CVResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CVResponse} The decoded data structure.
 */
export function _decode_CVResponse(el: _Element) {
  if (!_cached_decoder_for_CVResponse) {
    _cached_decoder_for_CVResponse = function (el: _Element): CVResponse {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let cvResponseVersion!: INTEGER;
      let serverConfigurationID!: INTEGER;
      let producedAt!: GeneralizedTime;
      let responseStatus!: ResponseStatus;
      let respValidationPolicy: OPTIONAL<RespValidationPolicy>;
      let requestRef: OPTIONAL<RequestReference>;
      let requestorRef: OPTIONAL<GeneralNames>;
      let requestorName: OPTIONAL<GeneralNames>;
      let replyObjects: OPTIONAL<ReplyObjects>;
      let respNonce: OPTIONAL<OCTET_STRING>;
      let serverContextInfo: OPTIONAL<OCTET_STRING>;
      let cvResponseExtensions: OPTIONAL<Extensions>;
      let requestorText: OPTIONAL<UTF8String>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        cvResponseVersion: (_el: _Element): void => {
          cvResponseVersion = $._decodeInteger(_el);
        },
        serverConfigurationID: (_el: _Element): void => {
          serverConfigurationID = $._decodeInteger(_el);
        },
        producedAt: (_el: _Element): void => {
          producedAt = $._decodeGeneralizedTime(_el);
        },
        responseStatus: (_el: _Element): void => {
          responseStatus = _decode_ResponseStatus(_el);
        },
        respValidationPolicy: (_el: _Element): void => {
          respValidationPolicy = $._decode_implicit<RespValidationPolicy>(
            () => _decode_RespValidationPolicy
          )(_el);
        },
        requestRef: (_el: _Element): void => {
          requestRef = $._decode_explicit<RequestReference>(
            () => _decode_RequestReference
          )(_el);
        },
        requestorRef: (_el: _Element): void => {
          requestorRef = $._decode_implicit<GeneralNames>(
            () => _decode_GeneralNames
          )(_el);
        },
        requestorName: (_el: _Element): void => {
          requestorName = $._decode_implicit<GeneralNames>(
            () => _decode_GeneralNames
          )(_el);
        },
        replyObjects: (_el: _Element): void => {
          replyObjects = $._decode_implicit<ReplyObjects>(
            () => _decode_ReplyObjects
          )(_el);
        },
        respNonce: (_el: _Element): void => {
          respNonce = $._decode_implicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
        serverContextInfo: (_el: _Element): void => {
          serverContextInfo = $._decode_implicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
        cvResponseExtensions: (_el: _Element): void => {
          cvResponseExtensions = $._decode_implicit<Extensions>(
            () => _decode_Extensions
          )(_el);
        },
        requestorText: (_el: _Element): void => {
          requestorText = $._decode_implicit<UTF8String>(
            () => $._decodeUTF8String
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CVResponse,
        _extension_additions_list_spec_for_CVResponse,
        _root_component_type_list_2_spec_for_CVResponse,
        undefined
      );
      return new CVResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
        cvResponseVersion,
        serverConfigurationID,
        producedAt,
        responseStatus,
        respValidationPolicy,
        requestRef,
        requestorRef,
        requestorName,
        replyObjects,
        respNonce,
        serverContextInfo,
        cvResponseExtensions,
        requestorText
      );
    };
  }
  return _cached_decoder_for_CVResponse(el);
}

let _cached_encoder_for_CVResponse: $.ASN1Encoder<CVResponse> | null = null;

/**
 * @summary Encodes a(n) CVResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CVResponse, encoded as an ASN.1 Element.
 */
export function _encode_CVResponse(
  value: CVResponse,
  elGetter: $.ASN1Encoder<CVResponse>
) {
  if (!_cached_encoder_for_CVResponse) {
    _cached_encoder_for_CVResponse = function (
      value: CVResponse    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.cvResponseVersion, $.DER),
            /* REQUIRED   */ $._encodeInteger(
              value.serverConfigurationID,
              $.DER
            ),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.producedAt, $.DER),
            /* REQUIRED   */ _encode_ResponseStatus(
              value.responseStatus,
              $.DER
            ),
            /* IF_ABSENT  */ value.respValidationPolicy === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_RespValidationPolicy,
                  $.DER
                )(value.respValidationPolicy, $.DER),
            /* IF_ABSENT  */ value.requestRef === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_RequestReference,
                  $.DER
                )(value.requestRef, $.DER),
            /* IF_ABSENT  */ value.requestorRef === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_GeneralNames,
                  $.DER
                )(value.requestorRef, $.DER),
            /* IF_ABSENT  */ value.requestorName === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => _encode_GeneralNames,
                  $.DER
                )(value.requestorName, $.DER),
            /* IF_ABSENT  */ value.replyObjects === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => _encode_ReplyObjects,
                  $.DER
                )(value.replyObjects, $.DER),
            /* IF_ABSENT  */ value.respNonce === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  5,
                  () => $._encodeOctetString,
                  $.DER
                )(value.respNonce, $.DER),
            /* IF_ABSENT  */ value.serverContextInfo === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  6,
                  () => $._encodeOctetString,
                  $.DER
                )(value.serverContextInfo, $.DER),
            /* IF_ABSENT  */ value.cvResponseExtensions === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  7,
                  () => _encode_Extensions,
                  $.DER
                )(value.cvResponseExtensions, $.DER),
            /* IF_ABSENT  */ value.requestorText === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  8,
                  () => $._encodeUTF8String,
                  $.DER
                )(value.requestorText, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_CVResponse(value, elGetter);
}


/* eslint-enable */
