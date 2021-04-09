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

/* START_OF_SYMBOL_DEFINITION ResponseFlags */
/**
 * @summary ResponseFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseFlags ::= SEQUENCE {
 *     fullRequestInResponse      [0] BOOLEAN DEFAULT FALSE,
 *     responseValidationPolByRef [1] BOOLEAN DEFAULT TRUE,
 *
 *     protectResponse            [2] BOOLEAN DEFAULT TRUE,
 *     cachedResponse             [3] BOOLEAN DEFAULT TRUE
 * }
 * ```
 *
 * @class
 */
export class ResponseFlags {
  constructor(
    /**
     * @summary `fullRequestInResponse`.
     * @public
     * @readonly
     */
    readonly fullRequestInResponse: OPTIONAL<BOOLEAN>,
    /**
     * @summary `responseValidationPolByRef`.
     * @public
     * @readonly
     */
    readonly responseValidationPolByRef: OPTIONAL<BOOLEAN>,
    /**
     * @summary `protectResponse`.
     * @public
     * @readonly
     */
    readonly protectResponse: OPTIONAL<BOOLEAN>,
    /**
     * @summary `cachedResponse`.
     * @public
     * @readonly
     */
    readonly cachedResponse: OPTIONAL<BOOLEAN>
  ) {}

  /**
   * @summary Restructures an object into a ResponseFlags
   * @description
   *
   * This takes an `object` and converts it to a `ResponseFlags`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ResponseFlags`.
   * @returns {ResponseFlags}
   */
  public static _from_object(
    _o: { [_K in keyof ResponseFlags]: ResponseFlags[_K] }
  ): ResponseFlags {
    return new ResponseFlags(
      _o.fullRequestInResponse,
      _o.responseValidationPolByRef,
      _o.protectResponse,
      _o.cachedResponse
    );
  }

  /**
   * @summary Getter that returns the default value for `fullRequestInResponse`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_fullRequestInResponse() {
    return false;
  }
  /**
   * @summary Getter that returns the default value for `responseValidationPolByRef`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_responseValidationPolByRef() {
    return false;
  }
  /**
   * @summary Getter that returns the default value for `protectResponse`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_protectResponse() {
    return false;
  }
  /**
   * @summary Getter that returns the default value for `cachedResponse`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_cachedResponse() {
    return false;
  }
}
/* END_OF_SYMBOL_DEFINITION ResponseFlags */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResponseFlags */
/**
 * @summary The Leading Root Component Types of ResponseFlags
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseFlags: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'fullRequestInResponse',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responseValidationPolByRef',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'protectResponse',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cachedResponse',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResponseFlags */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResponseFlags */
/**
 * @summary The Trailing Root Component Types of ResponseFlags
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseFlags: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResponseFlags */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResponseFlags */
/**
 * @summary The Extension Addition Component Types of ResponseFlags
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseFlags: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResponseFlags */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseFlags */
let _cached_decoder_for_ResponseFlags: $.ASN1Decoder<ResponseFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseFlags */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseFlags} The decoded data structure.
 */
export function _decode_ResponseFlags(el: _Element) {
  if (!_cached_decoder_for_ResponseFlags) {
    _cached_decoder_for_ResponseFlags = function (el: _Element): ResponseFlags {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let fullRequestInResponse: OPTIONAL<BOOLEAN> =
        ResponseFlags._default_value_for_fullRequestInResponse;
      let responseValidationPolByRef: OPTIONAL<BOOLEAN> =
        ResponseFlags._default_value_for_responseValidationPolByRef;
      let protectResponse: OPTIONAL<BOOLEAN> =
        ResponseFlags._default_value_for_protectResponse;
      let cachedResponse: OPTIONAL<BOOLEAN> =
        ResponseFlags._default_value_for_cachedResponse;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        fullRequestInResponse: (_el: _Element): void => {
          fullRequestInResponse = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        responseValidationPolByRef: (_el: _Element): void => {
          responseValidationPolByRef = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        protectResponse: (_el: _Element): void => {
          protectResponse = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(
            _el
          );
        },
        cachedResponse: (_el: _Element): void => {
          cachedResponse = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(
            _el
          );
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ResponseFlags,
        _extension_additions_list_spec_for_ResponseFlags,
        _root_component_type_list_2_spec_for_ResponseFlags,
        undefined
      );
      return new ResponseFlags /* SEQUENCE_CONSTRUCTOR_CALL */(
        fullRequestInResponse,
        responseValidationPolByRef,
        protectResponse,
        cachedResponse
      );
    };
  }
  return _cached_decoder_for_ResponseFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseFlags */
let _cached_encoder_for_ResponseFlags: $.ASN1Encoder<ResponseFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseFlags */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseFlags */
/**
 * @summary Encodes a(n) ResponseFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseFlags, encoded as an ASN.1 Element.
 */
export function _encode_ResponseFlags(
  value: ResponseFlags,
  elGetter: $.ASN1Encoder<ResponseFlags>
) {
  if (!_cached_encoder_for_ResponseFlags) {
    _cached_encoder_for_ResponseFlags = function (
      value: ResponseFlags,
      elGetter: $.ASN1Encoder<ResponseFlags>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.fullRequestInResponse === undefined ||
            $.deepEq(
              value.fullRequestInResponse,
              ResponseFlags._default_value_for_fullRequestInResponse
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => $._encodeBoolean,
                  $.BER
                )(value.fullRequestInResponse, $.BER),
            /* IF_DEFAULT */ value.responseValidationPolByRef === undefined ||
            $.deepEq(
              value.responseValidationPolByRef,
              ResponseFlags._default_value_for_responseValidationPolByRef
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeBoolean,
                  $.BER
                )(value.responseValidationPolByRef, $.BER),
            /* IF_DEFAULT */ value.protectResponse === undefined ||
            $.deepEq(
              value.protectResponse,
              ResponseFlags._default_value_for_protectResponse
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeBoolean,
                  $.BER
                )(value.protectResponse, $.BER),
            /* IF_DEFAULT */ value.cachedResponse === undefined ||
            $.deepEq(
              value.cachedResponse,
              ResponseFlags._default_value_for_cachedResponse
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => $._encodeBoolean,
                  $.BER
                )(value.cachedResponse, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ResponseFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseFlags */

/* eslint-enable */
