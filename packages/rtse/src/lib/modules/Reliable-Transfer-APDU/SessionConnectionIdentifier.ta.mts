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
  CallingSSuserReference,
  _decode_CallingSSuserReference,
  _encode_CallingSSuserReference,
} from '../Reliable-Transfer-APDU/CallingSSuserReference.ta.mjs';
import {
  CommonReference,
  _decode_CommonReference,
  _encode_CommonReference,
} from '../Reliable-Transfer-APDU/CommonReference.ta.mjs';
import {
  AdditionalReferenceInformation,
  _decode_AdditionalReferenceInformation,
  _encode_AdditionalReferenceInformation,
} from '../Reliable-Transfer-APDU/AdditionalReferenceInformation.ta.mjs';

/**
 * @summary SessionConnectionIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SessionConnectionIdentifier ::= SEQUENCE {
 *   callingSSuserReference          CallingSSuserReference,
 *   commonReference                 CommonReference,
 *   additionalReferenceInformation
 *     [0] IMPLICIT AdditionalReferenceInformation OPTIONAL
 * }
 * ```
 *
 */
export class SessionConnectionIdentifier {
  constructor(
    /**
     * @summary `callingSSuserReference`.
     * @public
     * @readonly
     */
    readonly callingSSuserReference: CallingSSuserReference,
    /**
     * @summary `commonReference`.
     * @public
     * @readonly
     */
    readonly commonReference: CommonReference,
    /**
     * @summary `additionalReferenceInformation`.
     * @public
     * @readonly
     */
    readonly additionalReferenceInformation: OPTIONAL<AdditionalReferenceInformation>
  ) {}

  /**
   * @summary Restructures an object into a SessionConnectionIdentifier
   * @description
   *
   * This takes an `object` and converts it to a `SessionConnectionIdentifier`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SessionConnectionIdentifier`.
   * @returns {SessionConnectionIdentifier}
   */
  public static _from_object(
    _o: {
      [_K in keyof SessionConnectionIdentifier]: SessionConnectionIdentifier[_K];
    }
  ): SessionConnectionIdentifier {
    return new SessionConnectionIdentifier(
      _o.callingSSuserReference,
      _o.commonReference,
      _o.additionalReferenceInformation
    );
  }
}


/**
 * @summary The Leading Root Component Types of SessionConnectionIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'callingSSuserReference',
    false,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'commonReference',
    false,
    $.hasTag(_TagClass.universal, 23)
  ),
  new $.ComponentSpec(
    'additionalReferenceInformation',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of SessionConnectionIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SessionConnectionIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [];


let _cached_decoder_for_SessionConnectionIdentifier: $.ASN1Decoder<SessionConnectionIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SessionConnectionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SessionConnectionIdentifier} The decoded data structure.
 */
export function _decode_SessionConnectionIdentifier(el: _Element): SessionConnectionIdentifier {
  if (!_cached_decoder_for_SessionConnectionIdentifier) {
    _cached_decoder_for_SessionConnectionIdentifier = function (
      el: _Element
    ): SessionConnectionIdentifier {
      let callingSSuserReference!: CallingSSuserReference;
      let commonReference!: CommonReference;
      let additionalReferenceInformation: OPTIONAL<AdditionalReferenceInformation>;
      const callbacks: $.DecodingMap = {
        callingSSuserReference: (_el: _Element): void => {
          callingSSuserReference = _decode_CallingSSuserReference(_el);
        },
        commonReference: (_el: _Element): void => {
          commonReference = _decode_CommonReference(_el);
        },
        additionalReferenceInformation: (_el: _Element): void => {
          additionalReferenceInformation = $._decode_implicit<AdditionalReferenceInformation>(
            () => _decode_AdditionalReferenceInformation
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SessionConnectionIdentifier,
        _extension_additions_list_spec_for_SessionConnectionIdentifier,
        _root_component_type_list_2_spec_for_SessionConnectionIdentifier,
        undefined
      );
      return new SessionConnectionIdentifier (
        callingSSuserReference,
        commonReference,
        additionalReferenceInformation
      );
    };
  }
  return _cached_decoder_for_SessionConnectionIdentifier(el);
}


let _cached_encoder_for_SessionConnectionIdentifier: $.ASN1Encoder<SessionConnectionIdentifier> | null = null;


/**
 * @summary Encodes a(n) SessionConnectionIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionConnectionIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SessionConnectionIdentifier(
  value: SessionConnectionIdentifier,
  elGetter: $.ASN1Encoder<SessionConnectionIdentifier>
): _Element {
  if (!_cached_encoder_for_SessionConnectionIdentifier) {
    _cached_encoder_for_SessionConnectionIdentifier = function (
      value: SessionConnectionIdentifier    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CallingSSuserReference(
              value.callingSSuserReference,
              $.BER
            ),
            /* REQUIRED   */ _encode_CommonReference(
              value.commonReference,
              $.BER
            ),
            /* IF_ABSENT  */ value.additionalReferenceInformation === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_AdditionalReferenceInformation,
                  $.BER
                )(value.additionalReferenceInformation, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SessionConnectionIdentifier(value, elGetter);
}


/* eslint-enable */
