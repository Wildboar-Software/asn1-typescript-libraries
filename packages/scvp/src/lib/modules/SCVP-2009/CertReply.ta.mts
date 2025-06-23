/* eslint-disable */
import {
  OPTIONAL,
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
  CertReference,
  _decode_CertReference,
  _encode_CertReference,
} from '../SCVP-2009/CertReference.ta.mjs';
import {
  ReplyStatus,
  _enum_for_ReplyStatus,
  ReplyStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_ReplyStatus,
  _encode_ReplyStatus,
} from '../SCVP-2009/ReplyStatus.ta.mjs';
import {
  ReplyChecks,
  _decode_ReplyChecks,
  _encode_ReplyChecks,
} from '../SCVP-2009/ReplyChecks.ta.mjs';
import {
  ReplyWantBacks,
  _decode_ReplyWantBacks,
  _encode_ReplyWantBacks,
} from '../SCVP-2009/ReplyWantBacks.ta.mjs';
import {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs';
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

/**
 * @summary The Leading Root Component Types of CertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReply: $.ComponentSpec[] = [
  new $.ComponentSpec('cert', false, $.hasAnyTag),
  new $.ComponentSpec(
    'replyStatus',
    true,
    $.hasTag(_TagClass.universal, 10)
  ),
  new $.ComponentSpec(
    'replyValTime',
    false,
    $.hasTag(_TagClass.universal, 24)
  ),
  new $.ComponentSpec(
    'replyChecks',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'replyWantBacks',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'validationErrors',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'nextUpdate',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'certReplyExtensions',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];

/**
 * @summary The Trailing Root Component Types of CertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReply: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReply: $.ComponentSpec[] = [];

let _cached_decoder_for_CertReply: $.ASN1Decoder<CertReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReply} The decoded data structure.
 */
export function _decode_CertReply(el: _Element) {
  if (!_cached_decoder_for_CertReply) {
    _cached_decoder_for_CertReply = function (el: _Element): CertReply {
      let cert!: CertReference;
      let replyStatus: OPTIONAL<ReplyStatus> =
        CertReply._default_value_for_replyStatus;
      let replyValTime!: GeneralizedTime;
      let replyChecks!: ReplyChecks;
      let replyWantBacks!: ReplyWantBacks;
      let validationErrors: OPTIONAL<OBJECT_IDENTIFIER[]>;
      let nextUpdate: OPTIONAL<GeneralizedTime>;
      let certReplyExtensions: OPTIONAL<Extensions>;
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertReply,
        _extension_additions_list_spec_for_CertReply,
        _root_component_type_list_2_spec_for_CertReply,
        undefined
      );
      return new CertReply (
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

let _cached_encoder_for_CertReply: $.ASN1Encoder<CertReply> | null = null;

/**
 * @summary Encodes a(n) CertReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReply, encoded as an ASN.1 Element.
 */
export function _encode_CertReply(
  value: CertReply,
  elGetter: $.ASN1Encoder<CertReply>
) {
  if (!_cached_encoder_for_CertReply) {
    _cached_encoder_for_CertReply = function (
      value: CertReply    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CertReference(value.cert, $.DER),
            /* IF_DEFAULT */ value.replyStatus === undefined ||
            $.deepEq(
              value.replyStatus,
              CertReply._default_value_for_replyStatus
            )
              ? undefined
              : _encode_ReplyStatus(value.replyStatus, $.DER),
            /* REQUIRED   */ $._encodeGeneralizedTime(
              value.replyValTime,
              $.DER
            ),
            /* REQUIRED   */ _encode_ReplyChecks(value.replyChecks, $.DER),
            /* REQUIRED   */ _encode_ReplyWantBacks(
              value.replyWantBacks,
              $.DER
            ),
            /* IF_ABSENT  */ value.validationErrors === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () =>
                    $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                      () => $._encodeObjectIdentifier,
                      $.DER
                    ),
                  $.DER
                )(value.validationErrors, $.DER),
            /* IF_ABSENT  */ value.nextUpdate === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeGeneralizedTime,
                  $.DER
                )(value.nextUpdate, $.DER),
            /* IF_ABSENT  */ value.certReplyExtensions === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_Extensions,
                  $.DER
                )(value.certReplyExtensions, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_CertReply(value, elGetter);
}


/* eslint-enable */
