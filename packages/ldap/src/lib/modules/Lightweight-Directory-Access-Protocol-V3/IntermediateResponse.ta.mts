/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
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
  LDAPOID,
  _decode_LDAPOID,
  _encode_LDAPOID,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPOID.ta.mjs';

/**
 * @summary IntermediateResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResponse ::= [APPLICATION 25]  SEQUENCE {
 *   responseName   [0]  LDAPOID OPTIONAL,
 *   responseValue  [1]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IntermediateResponse {
  constructor(
    /**
     * @summary `responseName`.
     * @public
     * @readonly
     */
    readonly responseName: OPTIONAL<LDAPOID>,
    /**
     * @summary `responseValue`.
     * @public
     * @readonly
     */
    readonly responseValue: OPTIONAL<OCTET_STRING>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a IntermediateResponse
   * @description
   *
   * This takes an `object` and converts it to a `IntermediateResponse`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `IntermediateResponse`.
   * @returns {IntermediateResponse}
   */
  public static _from_object(
    _o: { [_K in keyof IntermediateResponse]: IntermediateResponse[_K] }
  ): IntermediateResponse {
    return new IntermediateResponse(
      _o.responseName,
      _o.responseValue,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of IntermediateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IntermediateResponse: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'responseName',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'responseValue',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of IntermediateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IntermediateResponse: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IntermediateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IntermediateResponse: $.ComponentSpec[] = [];


let _cached_decoder_for_IntermediateResponse: $.ASN1Decoder<IntermediateResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IntermediateResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntermediateResponse} The decoded data structure.
 */
export function _decode_IntermediateResponse(el: _Element) {
  if (!_cached_decoder_for_IntermediateResponse) {
    _cached_decoder_for_IntermediateResponse = $._decode_implicit<IntermediateResponse>(
      () =>
        function (el: _Element): IntermediateResponse {
          let responseName: OPTIONAL<LDAPOID>;
          let responseValue: OPTIONAL<OCTET_STRING>;
          let _unrecognizedExtensionsList: _Element[] = [];
          const callbacks: $.DecodingMap = {
            responseName: (_el: _Element): void => {
              responseName = $._decode_implicit<LDAPOID>(() => _decode_LDAPOID)(
                _el
              );
            },
            responseValue: (_el: _Element): void => {
              responseValue = $._decode_implicit<OCTET_STRING>(
                () => $._decodeOctetString
              )(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_IntermediateResponse,
            _extension_additions_list_spec_for_IntermediateResponse,
            _root_component_type_list_2_spec_for_IntermediateResponse,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new IntermediateResponse (
            responseName,
            responseValue,
            _unrecognizedExtensionsList
          );
        }
    );
  }
  return _cached_decoder_for_IntermediateResponse(el);
}


let _cached_encoder_for_IntermediateResponse: $.ASN1Encoder<IntermediateResponse> | null = null;


/**
 * @summary Encodes a(n) IntermediateResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntermediateResponse, encoded as an ASN.1 Element.
 */
export function _encode_IntermediateResponse(
  value: IntermediateResponse,
  elGetter: $.ASN1Encoder<IntermediateResponse>
) {
  if (!_cached_encoder_for_IntermediateResponse) {
    _cached_encoder_for_IntermediateResponse = $._encode_implicit(
      _TagClass.application,
      25,
      () =>
        function (
          value: IntermediateResponse        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_ABSENT  */ value.responseName === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_LDAPOID,
                        $.BER
                      )(value.responseName, $.BER),
                  /* IF_ABSENT  */ value.responseValue === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        1,
                        () => $._encodeOctetString,
                        $.BER
                      )(value.responseValue, $.BER),
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : []
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_IntermediateResponse(value, elGetter);
}


/* eslint-enable */
