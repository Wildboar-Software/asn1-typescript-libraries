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
  ArcTime,
  _decode_ArcTime,
  _encode_ArcTime,
} from '../M3100ASN1TypeModule4/ArcTime.ta';
export {
  ArcTime,
  _decode_ArcTime,
  _encode_ArcTime,
} from '../M3100ASN1TypeModule4/ArcTime.ta';
import {
  ArcState,
  _enum_for_ArcState,
  ArcState_alm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  alm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmQualifiedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmQualifiedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmTimedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmTimedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ArcState,
  _encode_ArcState,
} from '../M3100ASN1TypeModule4/ArcState.ta';
export {
  ArcState,
  _enum_for_ArcState,
  ArcState_alm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  alm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmQualifiedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmQualifiedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmTimedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmTimedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ArcState,
  _encode_ArcState,
} from '../M3100ASN1TypeModule4/ArcState.ta';

/* START_OF_SYMBOL_DEFINITION ArcControlRequest */
/**
 * @summary ArcControlRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcControlRequest ::= SEQUENCE {
 *   time            ArcTime DEFAULT noAdjustment:NULL,
 *   newState        ArcState,
 *   additionalInfo  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ArcControlRequest {
  constructor(
    /**
     * @summary `time`.
     * @public
     * @readonly
     */
    readonly time: OPTIONAL<ArcTime>,
    /**
     * @summary `newState`.
     * @public
     * @readonly
     */
    readonly newState: ArcState,
    /**
     * @summary `additionalInfo`.
     * @public
     * @readonly
     */
    readonly additionalInfo: OPTIONAL<AdditionalInformation>
  ) {}

  /**
   * @summary Restructures an object into a ArcControlRequest
   * @description
   *
   * This takes an `object` and converts it to a `ArcControlRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ArcControlRequest`.
   * @returns {ArcControlRequest}
   */
  public static _from_object(
    _o: { [_K in keyof ArcControlRequest]: ArcControlRequest[_K] }
  ): ArcControlRequest {
    return new ArcControlRequest(_o.time, _o.newState, _o.additionalInfo);
  }

  /**
   * @summary Getter that returns the default value for `time`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_time() {
    return { noAdjustment: null };
  }
  /**
   * @summary The enum used as the type of the component `newState`
   * @public
   * @static
   */

  public static _enum_for_newState = _enum_for_ArcState;
}
/* END_OF_SYMBOL_DEFINITION ArcControlRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ArcControlRequest */
/**
 * @summary The Leading Root Component Types of ArcControlRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ArcControlRequest: $.ComponentSpec[] = [
  new $.ComponentSpec('time', true, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'newState',
    false,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  /* FIXME: additionalInfo COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ArcControlRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ArcControlRequest */
/**
 * @summary The Trailing Root Component Types of ArcControlRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ArcControlRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ArcControlRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ArcControlRequest */
/**
 * @summary The Extension Addition Component Types of ArcControlRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ArcControlRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ArcControlRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcControlRequest */
let _cached_decoder_for_ArcControlRequest: $.ASN1Decoder<ArcControlRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcControlRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ArcControlRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcControlRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcControlRequest} The decoded data structure.
 */
export function _decode_ArcControlRequest(el: _Element) {
  if (!_cached_decoder_for_ArcControlRequest) {
    _cached_decoder_for_ArcControlRequest = function (
      el: _Element
    ): ArcControlRequest {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let time: OPTIONAL<ArcTime> = ArcControlRequest._default_value_for_time;
      let newState!: ArcState;
      let additionalInfo: OPTIONAL<AdditionalInformation>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        time: (_el: _Element): void => {
          time = _decode_ArcTime(_el);
        },
        newState: (_el: _Element): void => {
          newState = _decode_ArcState(_el);
        },
        additionalInfo: (_el: _Element): void => {
          additionalInfo = _decode_AdditionalInformation(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ArcControlRequest,
        _extension_additions_list_spec_for_ArcControlRequest,
        _root_component_type_list_2_spec_for_ArcControlRequest,
        undefined
      );
      return new ArcControlRequest /* SEQUENCE_CONSTRUCTOR_CALL */(
        time,
        newState,
        additionalInfo
      );
    };
  }
  return _cached_decoder_for_ArcControlRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcControlRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcControlRequest */
let _cached_encoder_for_ArcControlRequest: $.ASN1Encoder<ArcControlRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcControlRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ArcControlRequest */
/**
 * @summary Encodes a(n) ArcControlRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcControlRequest, encoded as an ASN.1 Element.
 */
export function _encode_ArcControlRequest(
  value: ArcControlRequest,
  elGetter: $.ASN1Encoder<ArcControlRequest>
) {
  if (!_cached_encoder_for_ArcControlRequest) {
    _cached_encoder_for_ArcControlRequest = function (
      value: ArcControlRequest,
      elGetter: $.ASN1Encoder<ArcControlRequest>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.time === undefined ||
            $.deepEq(value.time, ArcControlRequest._default_value_for_time)
              ? undefined
              : _encode_ArcTime(value.time, $.BER),
            /* REQUIRED   */ _encode_ArcState(value.newState, $.BER),
            /* IF_ABSENT  */ value.additionalInfo === undefined
              ? undefined
              : _encode_AdditionalInformation(value.additionalInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ArcControlRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcControlRequest */

/* eslint-enable */
