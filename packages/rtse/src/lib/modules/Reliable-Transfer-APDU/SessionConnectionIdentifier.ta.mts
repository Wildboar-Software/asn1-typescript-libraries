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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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
/* START_OF_SYMBOL_DEFINITION SessionConnectionIdentifier */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION SessionConnectionIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SessionConnectionIdentifier */
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
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'commonReference',
    false,
    $.hasTag(_TagClass.universal, 23),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'additionalReferenceInformation',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SessionConnectionIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SessionConnectionIdentifier */
/**
 * @summary The Trailing Root Component Types of SessionConnectionIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SessionConnectionIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SessionConnectionIdentifier */
/**
 * @summary The Extension Addition Component Types of SessionConnectionIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SessionConnectionIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionConnectionIdentifier */
let _cached_decoder_for_SessionConnectionIdentifier: $.ASN1Decoder<SessionConnectionIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionConnectionIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SessionConnectionIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) SessionConnectionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SessionConnectionIdentifier} The decoded data structure.
 */
export function _decode_SessionConnectionIdentifier(el: _Element) {
  if (!_cached_decoder_for_SessionConnectionIdentifier) {
    _cached_decoder_for_SessionConnectionIdentifier = function (
      el: _Element
    ): SessionConnectionIdentifier {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let callingSSuserReference!: CallingSSuserReference;
      let commonReference!: CommonReference;
      let additionalReferenceInformation: OPTIONAL<AdditionalReferenceInformation>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SessionConnectionIdentifier,
        _extension_additions_list_spec_for_SessionConnectionIdentifier,
        _root_component_type_list_2_spec_for_SessionConnectionIdentifier,
        undefined
      );
      return new SessionConnectionIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
        callingSSuserReference,
        commonReference,
        additionalReferenceInformation
      );
    };
  }
  return _cached_decoder_for_SessionConnectionIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SessionConnectionIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionConnectionIdentifier */
let _cached_encoder_for_SessionConnectionIdentifier: $.ASN1Encoder<SessionConnectionIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionConnectionIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SessionConnectionIdentifier */
/**
 * @summary Encodes a(n) SessionConnectionIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionConnectionIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SessionConnectionIdentifier(
  value: SessionConnectionIdentifier,
  elGetter: $.ASN1Encoder<SessionConnectionIdentifier>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_SessionConnectionIdentifier */

/* eslint-enable */
