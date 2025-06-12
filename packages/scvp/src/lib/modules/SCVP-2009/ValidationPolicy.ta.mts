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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  ValidationPolRef,
  _decode_ValidationPolRef,
  _encode_ValidationPolRef,
} from '../SCVP-2009/ValidationPolRef.ta.mjs';
export {
  ValidationPolRef,
  _decode_ValidationPolRef,
  _encode_ValidationPolRef,
} from '../SCVP-2009/ValidationPolRef.ta.mjs';
import {
  ValidationAlg,
  _decode_ValidationAlg,
  _encode_ValidationAlg,
} from '../SCVP-2009/ValidationAlg.ta.mjs';
export {
  ValidationAlg,
  _decode_ValidationAlg,
  _encode_ValidationAlg,
} from '../SCVP-2009/ValidationAlg.ta.mjs';
import {
  TrustAnchors,
  _decode_TrustAnchors,
  _encode_TrustAnchors,
} from '../SCVP-2009/TrustAnchors.ta.mjs';
export {
  TrustAnchors,
  _decode_TrustAnchors,
  _encode_TrustAnchors,
} from '../SCVP-2009/TrustAnchors.ta.mjs';
import {
  KeyUsage,
  KeyUsage_digitalSignature /* IMPORTED_LONG_NAMED_BIT */,
  digitalSignature /* IMPORTED_SHORT_NAMED_BIT */,
//   KeyUsage_nonRepudiation /* IMPORTED_LONG_NAMED_BIT */,
//   nonRepudiation /* IMPORTED_SHORT_NAMED_BIT */,
  KeyUsage_keyEncipherment /* IMPORTED_LONG_NAMED_BIT */,
  keyEncipherment /* IMPORTED_SHORT_NAMED_BIT */,
  KeyUsage_dataEncipherment /* IMPORTED_LONG_NAMED_BIT */,
  dataEncipherment /* IMPORTED_SHORT_NAMED_BIT */,
  KeyUsage_keyAgreement /* IMPORTED_LONG_NAMED_BIT */,
  keyAgreement /* IMPORTED_SHORT_NAMED_BIT */,
  KeyUsage_keyCertSign /* IMPORTED_LONG_NAMED_BIT */,
  keyCertSign /* IMPORTED_SHORT_NAMED_BIT */,
  KeyUsage_cRLSign /* IMPORTED_LONG_NAMED_BIT */,
  cRLSign /* IMPORTED_SHORT_NAMED_BIT */,
  KeyUsage_encipherOnly /* IMPORTED_LONG_NAMED_BIT */,
  encipherOnly /* IMPORTED_SHORT_NAMED_BIT */,
  KeyUsage_decipherOnly /* IMPORTED_LONG_NAMED_BIT */,
  decipherOnly /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_KeyUsage,
  _encode_KeyUsage,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/KeyUsage.ta.mjs';
import {
  KeyPurposeId,
  _decode_KeyPurposeId,
  _encode_KeyPurposeId,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/KeyPurposeId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ValidationPolicy */
/**
 * @summary ValidationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationPolicy ::= SEQUENCE {
 *     validationPolRef           ValidationPolRef,
 *     validationAlg          [0] ValidationAlg OPTIONAL,
 *     userPolicySet          [1] SEQUENCE SIZE (1..MAX) OF OBJECT
 *                             IDENTIFIER OPTIONAL,
 *     inhibitPolicyMapping   [2] BOOLEAN OPTIONAL,
 *     requireExplicitPolicy  [3] BOOLEAN OPTIONAL,
 *     inhibitAnyPolicy       [4] BOOLEAN OPTIONAL,
 *     trustAnchors           [5] TrustAnchors OPTIONAL,
 *     keyUsages              [6] SEQUENCE OF KeyUsage OPTIONAL,
 *     extendedKeyUsages      [7] SEQUENCE OF KeyPurposeId OPTIONAL,
 *     specifiedKeyUsages     [8] SEQUENCE OF KeyPurposeId OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ValidationPolicy {
  constructor(
    /**
     * @summary `validationPolRef`.
     * @public
     * @readonly
     */
    readonly validationPolRef: ValidationPolRef,
    /**
     * @summary `validationAlg`.
     * @public
     * @readonly
     */
    readonly validationAlg: OPTIONAL<ValidationAlg>,
    /**
     * @summary `userPolicySet`.
     * @public
     * @readonly
     */
    readonly userPolicySet: OPTIONAL<OBJECT_IDENTIFIER[]>,
    /**
     * @summary `inhibitPolicyMapping`.
     * @public
     * @readonly
     */
    readonly inhibitPolicyMapping: OPTIONAL<BOOLEAN>,
    /**
     * @summary `requireExplicitPolicy`.
     * @public
     * @readonly
     */
    readonly requireExplicitPolicy: OPTIONAL<BOOLEAN>,
    /**
     * @summary `inhibitAnyPolicy`.
     * @public
     * @readonly
     */
    readonly inhibitAnyPolicy: OPTIONAL<BOOLEAN>,
    /**
     * @summary `trustAnchors`.
     * @public
     * @readonly
     */
    readonly trustAnchors: OPTIONAL<TrustAnchors>,
    /**
     * @summary `keyUsages`.
     * @public
     * @readonly
     */
    readonly keyUsages: OPTIONAL<KeyUsage[]>,
    /**
     * @summary `extendedKeyUsages`.
     * @public
     * @readonly
     */
    readonly extendedKeyUsages: OPTIONAL<KeyPurposeId[]>,
    /**
     * @summary `specifiedKeyUsages`.
     * @public
     * @readonly
     */
    readonly specifiedKeyUsages: OPTIONAL<KeyPurposeId[]>
  ) {}

  /**
   * @summary Restructures an object into a ValidationPolicy
   * @description
   *
   * This takes an `object` and converts it to a `ValidationPolicy`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ValidationPolicy`.
   * @returns {ValidationPolicy}
   */
  public static _from_object(
    _o: { [_K in keyof ValidationPolicy]: ValidationPolicy[_K] }
  ): ValidationPolicy {
    return new ValidationPolicy(
      _o.validationPolRef,
      _o.validationAlg,
      _o.userPolicySet,
      _o.inhibitPolicyMapping,
      _o.requireExplicitPolicy,
      _o.inhibitAnyPolicy,
      _o.trustAnchors,
      _o.keyUsages,
      _o.extendedKeyUsages,
      _o.specifiedKeyUsages
    );
  }
}
/* END_OF_SYMBOL_DEFINITION ValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValidationPolicy */
/**
 * @summary The Leading Root Component Types of ValidationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValidationPolicy: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'validationPolRef',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'validationAlg',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'userPolicySet',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'inhibitPolicyMapping',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'requireExplicitPolicy',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'inhibitAnyPolicy',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'trustAnchors',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyUsages',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extendedKeyUsages',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'specifiedKeyUsages',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValidationPolicy */
/**
 * @summary The Trailing Root Component Types of ValidationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationPolicy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValidationPolicy */
/**
 * @summary The Extension Addition Component Types of ValidationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationPolicy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidationPolicy */
let _cached_decoder_for_ValidationPolicy: $.ASN1Decoder<ValidationPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_ValidationPolicy */
/**
 * @summary Decodes an ASN.1 element into a(n) ValidationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidationPolicy} The decoded data structure.
 */
export function _decode_ValidationPolicy(el: _Element) {
  if (!_cached_decoder_for_ValidationPolicy) {
    _cached_decoder_for_ValidationPolicy = function (
      el: _Element
    ): ValidationPolicy {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let validationPolRef!: ValidationPolRef;
      let validationAlg: OPTIONAL<ValidationAlg>;
      let userPolicySet: OPTIONAL<OBJECT_IDENTIFIER[]>;
      let inhibitPolicyMapping: OPTIONAL<BOOLEAN>;
      let requireExplicitPolicy: OPTIONAL<BOOLEAN>;
      let inhibitAnyPolicy: OPTIONAL<BOOLEAN>;
      let trustAnchors: OPTIONAL<TrustAnchors>;
      let keyUsages: OPTIONAL<KeyUsage[]>;
      let extendedKeyUsages: OPTIONAL<KeyPurposeId[]>;
      let specifiedKeyUsages: OPTIONAL<KeyPurposeId[]>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        validationPolRef: (_el: _Element): void => {
          validationPolRef = _decode_ValidationPolRef(_el);
        },
        validationAlg: (_el: _Element): void => {
          validationAlg = $._decode_implicit<ValidationAlg>(
            () => _decode_ValidationAlg
          )(_el);
        },
        userPolicySet: (_el: _Element): void => {
          userPolicySet = $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
            $._decodeSequenceOf<OBJECT_IDENTIFIER>(
              () => $._decodeObjectIdentifier
            )
          )(_el);
        },
        inhibitPolicyMapping: (_el: _Element): void => {
          inhibitPolicyMapping = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        requireExplicitPolicy: (_el: _Element): void => {
          requireExplicitPolicy = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        inhibitAnyPolicy: (_el: _Element): void => {
          inhibitAnyPolicy = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        trustAnchors: (_el: _Element): void => {
          trustAnchors = $._decode_implicit<TrustAnchors>(
            () => _decode_TrustAnchors
          )(_el);
        },
        keyUsages: (_el: _Element): void => {
          keyUsages = $._decode_implicit<KeyUsage[]>(() =>
            $._decodeSequenceOf<KeyUsage>(() => _decode_KeyUsage)
          )(_el);
        },
        extendedKeyUsages: (_el: _Element): void => {
          extendedKeyUsages = $._decode_implicit<KeyPurposeId[]>(() =>
            $._decodeSequenceOf<KeyPurposeId>(() => _decode_KeyPurposeId)
          )(_el);
        },
        specifiedKeyUsages: (_el: _Element): void => {
          specifiedKeyUsages = $._decode_implicit<KeyPurposeId[]>(() =>
            $._decodeSequenceOf<KeyPurposeId>(() => _decode_KeyPurposeId)
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ValidationPolicy,
        _extension_additions_list_spec_for_ValidationPolicy,
        _root_component_type_list_2_spec_for_ValidationPolicy,
        undefined
      );
      return new ValidationPolicy /* SEQUENCE_CONSTRUCTOR_CALL */(
        validationPolRef,
        validationAlg,
        userPolicySet,
        inhibitPolicyMapping,
        requireExplicitPolicy,
        inhibitAnyPolicy,
        trustAnchors,
        keyUsages,
        extendedKeyUsages,
        specifiedKeyUsages
      );
    };
  }
  return _cached_decoder_for_ValidationPolicy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidationPolicy */
let _cached_encoder_for_ValidationPolicy: $.ASN1Encoder<ValidationPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_ValidationPolicy */
/**
 * @summary Encodes a(n) ValidationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_ValidationPolicy(
  value: ValidationPolicy,
  elGetter: $.ASN1Encoder<ValidationPolicy>
) {
  if (!_cached_encoder_for_ValidationPolicy) {
    _cached_encoder_for_ValidationPolicy = function (
      value: ValidationPolicy,
      elGetter: $.ASN1Encoder<ValidationPolicy>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ValidationPolRef(
              value.validationPolRef,
              $.BER
            ),
            /* IF_ABSENT  */ value.validationAlg === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_ValidationAlg,
                  $.BER
                )(value.validationAlg, $.BER),
            /* IF_ABSENT  */ value.userPolicySet === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () =>
                    $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                      () => $._encodeObjectIdentifier,
                      $.BER
                    ),
                  $.BER
                )(value.userPolicySet, $.BER),
            /* IF_ABSENT  */ value.inhibitPolicyMapping === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeBoolean,
                  $.BER
                )(value.inhibitPolicyMapping, $.BER),
            /* IF_ABSENT  */ value.requireExplicitPolicy === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => $._encodeBoolean,
                  $.BER
                )(value.requireExplicitPolicy, $.BER),
            /* IF_ABSENT  */ value.inhibitAnyPolicy === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => $._encodeBoolean,
                  $.BER
                )(value.inhibitAnyPolicy, $.BER),
            /* IF_ABSENT  */ value.trustAnchors === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  5,
                  () => _encode_TrustAnchors,
                  $.BER
                )(value.trustAnchors, $.BER),
            /* IF_ABSENT  */ value.keyUsages === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  6,
                  () =>
                    $._encodeSequenceOf<KeyUsage>(
                      () => _encode_KeyUsage,
                      $.BER
                    ),
                  $.BER
                )(value.keyUsages, $.BER),
            /* IF_ABSENT  */ value.extendedKeyUsages === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  7,
                  () =>
                    $._encodeSequenceOf<KeyPurposeId>(
                      () => _encode_KeyPurposeId,
                      $.BER
                    ),
                  $.BER
                )(value.extendedKeyUsages, $.BER),
            /* IF_ABSENT  */ value.specifiedKeyUsages === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  8,
                  () =>
                    $._encodeSequenceOf<KeyPurposeId>(
                      () => _encode_KeyPurposeId,
                      $.BER
                    ),
                  $.BER
                )(value.specifiedKeyUsages, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ValidationPolicy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValidationPolicy */

/* eslint-enable */
