/* eslint-disable */
import {
  OPTIONAL,
  UTF8String,
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
  CVStatusCode,
  _enum_for_CVStatusCode,
  CVStatusCode_okay /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_CVStatusCode,
  _encode_CVStatusCode,
} from '../SCVP-2009/CVStatusCode.ta.mjs';
/**
 * @summary ResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseStatus ::= SEQUENCE {
 *     statusCode               CVStatusCode DEFAULT  okay,
 *     errorMessage             UTF8String OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ResponseStatus {
  constructor(
    /**
     * @summary `statusCode`.
     * @public
     * @readonly
     */
    readonly statusCode: OPTIONAL<CVStatusCode>,
    /**
     * @summary `errorMessage`.
     * @public
     * @readonly
     */
    readonly errorMessage: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a ResponseStatus
   * @description
   *
   * This takes an `object` and converts it to a `ResponseStatus`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ResponseStatus`.
   * @returns {ResponseStatus}
   */
  public static _from_object(
    _o: { [_K in keyof ResponseStatus]: ResponseStatus[_K] }
  ): ResponseStatus {
    return new ResponseStatus(_o.statusCode, _o.errorMessage);
  }

  /**
   * @summary Getter that returns the default value for `statusCode`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_statusCode() {
    return CVStatusCode_okay;
  }
  /**
   * @summary The enum used as the type of the component `statusCode`
   * @public
   * @static
   */

  public static _enum_for_statusCode = _enum_for_CVStatusCode;
}

/**
 * @summary The Leading Root Component Types of ResponseStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseStatus: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'statusCode',
    true,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'errorMessage',
    true,
    $.hasTag(_TagClass.universal, 12),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of ResponseStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseStatus: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ResponseStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseStatus: $.ComponentSpec[] = [];

let _cached_decoder_for_ResponseStatus: $.ASN1Decoder<ResponseStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResponseStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseStatus} The decoded data structure.
 */
export function _decode_ResponseStatus(el: _Element) {
  if (!_cached_decoder_for_ResponseStatus) {
    _cached_decoder_for_ResponseStatus = function (
      el: _Element
    ): ResponseStatus {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let statusCode: OPTIONAL<CVStatusCode> =
        ResponseStatus._default_value_for_statusCode;
      let errorMessage: OPTIONAL<UTF8String>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        statusCode: (_el: _Element): void => {
          statusCode = _decode_CVStatusCode(_el);
        },
        errorMessage: (_el: _Element): void => {
          errorMessage = $._decodeUTF8String(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ResponseStatus,
        _extension_additions_list_spec_for_ResponseStatus,
        _root_component_type_list_2_spec_for_ResponseStatus,
        undefined
      );
      return new ResponseStatus /* SEQUENCE_CONSTRUCTOR_CALL */(
        statusCode,
        errorMessage
      );
    };
  }
  return _cached_decoder_for_ResponseStatus(el);
}

let _cached_encoder_for_ResponseStatus: $.ASN1Encoder<ResponseStatus> | null = null;

/**
 * @summary Encodes a(n) ResponseStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseStatus, encoded as an ASN.1 Element.
 */
export function _encode_ResponseStatus(
  value: ResponseStatus,
  elGetter: $.ASN1Encoder<ResponseStatus>
) {
  if (!_cached_encoder_for_ResponseStatus) {
    _cached_encoder_for_ResponseStatus = function (
      value: ResponseStatus    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.statusCode === undefined ||
            $.deepEq(
              value.statusCode,
              ResponseStatus._default_value_for_statusCode
            )
              ? undefined
              : _encode_CVStatusCode(value.statusCode, $.BER),
            /* IF_ABSENT  */ value.errorMessage === undefined
              ? undefined
              : $._encodeUTF8String(value.errorMessage, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ResponseStatus(value, elGetter);
}


/* eslint-enable */
