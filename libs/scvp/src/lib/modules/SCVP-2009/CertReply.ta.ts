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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  CertReference,
  _decode_CertReference,
  _encode_CertReference,
} from '../SCVP-2009/CertReference.ta';
export {
  CertReference,
  _decode_CertReference,
  _encode_CertReference,
} from '../SCVP-2009/CertReference.ta';
import {
  ReplyStatus,
  _enum_for_ReplyStatus,
  ReplyStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */,
  success /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_malformedPKC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  malformedPKC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_malformedAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  malformedAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_unavailableValidationTime /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unavailableValidationTime /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_referenceCertHashFail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  referenceCertHashFail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_certPathConstructFail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  certPathConstructFail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_certPathNotValid /* IMPORTED_LONG_ENUMERATION_ITEM */,
  certPathNotValid /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_certPathNotValidNow /* IMPORTED_LONG_ENUMERATION_ITEM */,
  certPathNotValidNow /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_wantBackUnsatisfied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  wantBackUnsatisfied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ReplyStatus,
  _encode_ReplyStatus,
} from '../SCVP-2009/ReplyStatus.ta';
export {
  ReplyStatus,
  _enum_for_ReplyStatus,
  ReplyStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */,
  success /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_malformedPKC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  malformedPKC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_malformedAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  malformedAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_unavailableValidationTime /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unavailableValidationTime /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_referenceCertHashFail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  referenceCertHashFail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_certPathConstructFail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  certPathConstructFail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_certPathNotValid /* IMPORTED_LONG_ENUMERATION_ITEM */,
  certPathNotValid /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_certPathNotValidNow /* IMPORTED_LONG_ENUMERATION_ITEM */,
  certPathNotValidNow /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReplyStatus_wantBackUnsatisfied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  wantBackUnsatisfied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ReplyStatus,
  _encode_ReplyStatus,
} from '../SCVP-2009/ReplyStatus.ta';
import {
  ReplyChecks,
  _decode_ReplyChecks,
  _encode_ReplyChecks,
} from '../SCVP-2009/ReplyChecks.ta';
export {
  ReplyChecks,
  _decode_ReplyChecks,
  _encode_ReplyChecks,
} from '../SCVP-2009/ReplyChecks.ta';
import {
  ReplyWantBacks,
  _decode_ReplyWantBacks,
  _encode_ReplyWantBacks,
} from '../SCVP-2009/ReplyWantBacks.ta';
export {
  ReplyWantBacks,
  _decode_ReplyWantBacks,
  _encode_ReplyWantBacks,
} from '../SCVP-2009/ReplyWantBacks.ta';
import {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta';
export {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta';

/* START_OF_SYMBOL_DEFINITION CertReply */
/**
 * @summary CertReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReply ::= SEQUENCE {
 *     cert                       CertReference,
 *     replyStatus                ReplyStatus DEFAULT success,
 *     replyValTime               GeneralizedTime,
 *     replyChecks                ReplyChecks,
 *     replyWantBacks             ReplyWantBacks,
 *     validationErrors       [0] SEQUENCE SIZE (1..MAX) OF
 *         OBJECT IDENTIFIER ( BasicValidationErrorSet |
 *                             NameValidationErrorSet,
 *                             ... ) OPTIONAL,
 *     nextUpdate             [1] GeneralizedTime OPTIONAL,
 *     certReplyExtensions    [2] Extensions{{...}} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CertReply {
  constructor(
    /**
     * @summary `cert`.
     * @public
     * @readonly
     */
    readonly cert: CertReference,
    /**
     * @summary `replyStatus`.
     * @public
     * @readonly
     */
    readonly replyStatus: OPTIONAL<ReplyStatus>,
    /**
     * @summary `replyValTime`.
     * @public
     * @readonly
     */
    readonly replyValTime: GeneralizedTime,
    /**
     * @summary `replyChecks`.
     * @public
     * @readonly
     */
    readonly replyChecks: ReplyChecks,
    /**
     * @summary `replyWantBacks`.
     * @public
     * @readonly
     */
    readonly replyWantBacks: ReplyWantBacks,
    /**
     * @summary `validationErrors`.
     * @public
     * @readonly
     */
    readonly validationErrors: OPTIONAL<OBJECT_IDENTIFIER[]>,
    /**
     * @summary `nextUpdate`.
     * @public
     * @readonly
     */
    readonly nextUpdate: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `certReplyExtensions`.
     * @public
     * @readonly
     */
    readonly certReplyExtensions: OPTIONAL<Extensions>
  ) {}

  /**
   * @summary Restructures an object into a CertReply
   * @description
   *
   * This takes an `object` and converts it to a `CertReply`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CertReply`.
   * @returns {CertReply}
   */
  public static _from_object(
    _o: { [_K in keyof CertReply]: CertReply[_K] }
  ): CertReply {
    return new CertReply(
      _o.cert,
      _o.replyStatus,
      _o.replyValTime,
      _o.replyChecks,
      _o.replyWantBacks,
      _o.validationErrors,
      _o.nextUpdate,
      _o.certReplyExtensions
    );
  }

  /**
   * @summary Getter that returns the default value for `replyStatus`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_replyStatus() {
    return ReplyStatus_success;
  }
  /**
   * @summary The enum used as the type of the component `replyStatus`
   * @public
   * @static
   */

  public static _enum_for_replyStatus = _enum_for_ReplyStatus;
}
/* END_OF_SYMBOL_DEFINITION CertReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReply */
/**
 * @summary The Leading Root Component Types of CertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReply: $.ComponentSpec[] = [
  new $.ComponentSpec('cert', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'replyStatus',
    true,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'replyValTime',
    false,
    $.hasTag(_TagClass.universal, 24),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'replyChecks',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'replyWantBacks',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'validationErrors',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'nextUpdate',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'certReplyExtensions',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReply */
/**
 * @summary The Trailing Root Component Types of CertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReply */
/**
 * @summary The Extension Addition Component Types of CertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReply */
let _cached_decoder_for_CertReply: $.ASN1Decoder<CertReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReply */

/* START_OF_SYMBOL_DEFINITION _decode_CertReply */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReply} The decoded data structure.
 */
export function _decode_CertReply(el: _Element) {
  if (!_cached_decoder_for_CertReply) {
    _cached_decoder_for_CertReply = function (el: _Element): CertReply {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let cert!: CertReference;
      let replyStatus: OPTIONAL<ReplyStatus> =
        CertReply._default_value_for_replyStatus;
      let replyValTime!: GeneralizedTime;
      let replyChecks!: ReplyChecks;
      let replyWantBacks!: ReplyWantBacks;
      let validationErrors: OPTIONAL<OBJECT_IDENTIFIER[]>;
      let nextUpdate: OPTIONAL<GeneralizedTime>;
      let certReplyExtensions: OPTIONAL<Extensions>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        cert: (_el: _Element): void => {
          cert = _decode_CertReference(_el);
        },
        replyStatus: (_el: _Element): void => {
          replyStatus = _decode_ReplyStatus(_el);
        },
        replyValTime: (_el: _Element): void => {
          replyValTime = $._decodeGeneralizedTime(_el);
        },
        replyChecks: (_el: _Element): void => {
          replyChecks = _decode_ReplyChecks(_el);
        },
        replyWantBacks: (_el: _Element): void => {
          replyWantBacks = _decode_ReplyWantBacks(_el);
        },
        validationErrors: (_el: _Element): void => {
          validationErrors = $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
            $._decodeSequenceOf<OBJECT_IDENTIFIER>(
              () => $._decodeObjectIdentifier
            )
          )(_el);
        },
        nextUpdate: (_el: _Element): void => {
          nextUpdate = $._decode_implicit<GeneralizedTime>(
            () => $._decodeGeneralizedTime
          )(_el);
        },
        certReplyExtensions: (_el: _Element): void => {
          certReplyExtensions = $._decode_implicit<Extensions>(
            () => _decode_Extensions
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertReply,
        _extension_additions_list_spec_for_CertReply,
        _root_component_type_list_2_spec_for_CertReply,
        undefined
      );
      return new CertReply /* SEQUENCE_CONSTRUCTOR_CALL */(
        cert,
        replyStatus,
        replyValTime,
        replyChecks,
        replyWantBacks,
        validationErrors,
        nextUpdate,
        certReplyExtensions
      );
    };
  }
  return _cached_decoder_for_CertReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReply */
let _cached_encoder_for_CertReply: $.ASN1Encoder<CertReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReply */

/* START_OF_SYMBOL_DEFINITION _encode_CertReply */
/**
 * @summary Encodes a(n) CertReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReply, encoded as an ASN.1 Element.
 */
export function _encode_CertReply(
  value: CertReply,
  elGetter: $.ASN1Encoder<CertReply>
) {
  if (!_cached_encoder_for_CertReply) {
    _cached_encoder_for_CertReply = function (
      value: CertReply,
      elGetter: $.ASN1Encoder<CertReply>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CertReference(value.cert, $.BER),
            /* IF_DEFAULT */ value.replyStatus === undefined ||
            $.deepEq(
              value.replyStatus,
              CertReply._default_value_for_replyStatus
            )
              ? undefined
              : _encode_ReplyStatus(value.replyStatus, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(
              value.replyValTime,
              $.BER
            ),
            /* REQUIRED   */ _encode_ReplyChecks(value.replyChecks, $.BER),
            /* REQUIRED   */ _encode_ReplyWantBacks(
              value.replyWantBacks,
              $.BER
            ),
            /* IF_ABSENT  */ value.validationErrors === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () =>
                    $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                      () => $._encodeObjectIdentifier,
                      $.BER
                    ),
                  $.BER
                )(value.validationErrors, $.BER),
            /* IF_ABSENT  */ value.nextUpdate === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeGeneralizedTime,
                  $.BER
                )(value.nextUpdate, $.BER),
            /* IF_ABSENT  */ value.certReplyExtensions === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_Extensions,
                  $.BER
                )(value.certReplyExtensions, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CertReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReply */

/* eslint-enable */
