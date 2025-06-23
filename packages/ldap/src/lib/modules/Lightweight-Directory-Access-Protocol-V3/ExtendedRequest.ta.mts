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
 * @summary ExtendedRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedRequest ::= [APPLICATION 23]  SEQUENCE {
 *   requestName   [0]  LDAPOID,
 *   requestValue  [1]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ExtendedRequest {
  constructor(
    /**
     * @summary `requestName`.
     * @public
     * @readonly
     */
    readonly requestName: LDAPOID,
    /**
     * @summary `requestValue`.
     * @public
     * @readonly
     */
    readonly requestValue: OPTIONAL<OCTET_STRING>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ExtendedRequest
   * @description
   *
   * This takes an `object` and converts it to a `ExtendedRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ExtendedRequest`.
   * @returns {ExtendedRequest}
   */
  public static _from_object(
    _o: { [_K in keyof ExtendedRequest]: ExtendedRequest[_K] }
  ): ExtendedRequest {
    return new ExtendedRequest(
      _o.requestName,
      _o.requestValue,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of ExtendedRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'requestName',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'requestValue',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of ExtendedRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ExtendedRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_ExtendedRequest: $.ASN1Decoder<ExtendedRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedRequest} The decoded data structure.
 */
export function _decode_ExtendedRequest(el: _Element): ExtendedRequest {
  if (!_cached_decoder_for_ExtendedRequest) {
    _cached_decoder_for_ExtendedRequest = $._decode_implicit<ExtendedRequest>(
      () =>
        function (el: _Element): ExtendedRequest {
          let requestName!: LDAPOID;
          let requestValue: OPTIONAL<OCTET_STRING>;
          let _unrecognizedExtensionsList: _Element[] = [];
          const callbacks: $.DecodingMap = {
            requestName: (_el: _Element): void => {
              requestName = $._decode_implicit<LDAPOID>(() => _decode_LDAPOID)(
                _el
              );
            },
            requestValue: (_el: _Element): void => {
              requestValue = $._decode_implicit<OCTET_STRING>(
                () => $._decodeOctetString
              )(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ExtendedRequest,
            _extension_additions_list_spec_for_ExtendedRequest,
            _root_component_type_list_2_spec_for_ExtendedRequest,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new ExtendedRequest (
            requestName,
            requestValue,
            _unrecognizedExtensionsList
          );
        }
    );
  }
  return _cached_decoder_for_ExtendedRequest(el);
}


let _cached_encoder_for_ExtendedRequest: $.ASN1Encoder<ExtendedRequest> | null = null;


/**
 * @summary Encodes a(n) ExtendedRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedRequest, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedRequest(
  value: ExtendedRequest,
  elGetter: $.ASN1Encoder<ExtendedRequest>
): _Element {
  if (!_cached_encoder_for_ExtendedRequest) {
    _cached_encoder_for_ExtendedRequest = $._encode_implicit(
      _TagClass.application,
      23,
      () =>
        function (
          value: ExtendedRequest        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* REQUIRED   */ $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_LDAPOID,
                    $.BER
                  )(value.requestName, $.BER),
                  /* IF_ABSENT  */ value.requestValue === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        1,
                        () => $._encodeOctetString,
                        $.BER
                      )(value.requestValue, $.BER),
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
  return _cached_encoder_for_ExtendedRequest(value, elGetter);
}


/* eslint-enable */
