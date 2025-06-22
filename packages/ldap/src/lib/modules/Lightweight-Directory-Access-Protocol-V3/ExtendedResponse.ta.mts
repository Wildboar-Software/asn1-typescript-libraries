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
  LDAPResult,
  _decode_LDAPResult,
  _encode_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta.mjs';
import {
  LDAPOID,
  _decode_LDAPOID,
  _encode_LDAPOID,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPOID.ta.mjs';
import {
  LDAPResult_resultCode,
  _enum_for_LDAPResult_resultCode,
  _decode_LDAPResult_resultCode,
  _encode_LDAPResult_resultCode,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult-resultCode.ta.mjs';
import {
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.mjs';
import {
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';
import {
  Referral,
  _decode_Referral,
  _encode_Referral,
} from '../Lightweight-Directory-Access-Protocol-V3/Referral.ta.mjs';
import {
  _root_component_type_list_1_spec_for_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta.mjs';


/**
 * @summary ExtendedResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedResponse ::= [APPLICATION 24]  SEQUENCE {
 *   COMPONENTS OF LDAPResult,
 *   responseName   [10]  LDAPOID OPTIONAL,
 *   responseValue  [11]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ExtendedResponse implements LDAPResult {
  constructor(
    /**
     * @summary `resultCode`.
     * @public
     * @readonly
     */
    readonly resultCode: LDAPResult_resultCode /* REPLICATED_COMPONENT */,
    /**
     * @summary `matchedDN`.
     * @public
     * @readonly
     */
    readonly matchedDN: LDAPDN /* REPLICATED_COMPONENT */,
    /**
     * @summary `diagnosticMessage`.
     * @public
     * @readonly
     */
    readonly diagnosticMessage: LDAPString /* REPLICATED_COMPONENT */,
    /**
     * @summary `referral`.
     * @public
     * @readonly
     */
    readonly referral: OPTIONAL<Referral> /* REPLICATED_COMPONENT */,
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
   * @summary Restructures an object into a ExtendedResponse
   * @description
   *
   * This takes an `object` and converts it to a `ExtendedResponse`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ExtendedResponse`.
   * @returns {ExtendedResponse}
   */
  public static _from_object(
    _o: { [_K in keyof ExtendedResponse]: ExtendedResponse[_K] }
  ): ExtendedResponse {
    return new ExtendedResponse(
      _o.resultCode,
      _o.matchedDN,
      _o.diagnosticMessage,
      _o.referral,
      _o.responseName,
      _o.responseValue,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `resultCode`
   * @public
   * @static
   */

  public static _enum_for_resultCode = _enum_for_LDAPResult_resultCode;
}


/**
 * @summary The Leading Root Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedResponse: $.ComponentSpec[] = [
  ..._root_component_type_list_1_spec_for_LDAPResult,
  new $.ComponentSpec(
    'responseName',
    true,
    $.hasTag(_TagClass.context, 10)
  ),
  new $.ComponentSpec(
    'responseValue',
    true,
    $.hasTag(_TagClass.context, 11)
  ),
];


/**
 * @summary The Trailing Root Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedResponse: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedResponse: $.ComponentSpec[] = [];


let _cached_decoder_for_ExtendedResponse: $.ASN1Decoder<ExtendedResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedResponse} The decoded data structure.
 */
export function _decode_ExtendedResponse(el: _Element) {
  if (!_cached_decoder_for_ExtendedResponse) {
    _cached_decoder_for_ExtendedResponse = $._decode_implicit<ExtendedResponse>(
      () =>
        function (el: _Element): ExtendedResponse {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let resultCode!: LDAPResult_resultCode;
          let matchedDN!: LDAPDN;
          let diagnosticMessage!: LDAPString;
          let referral: OPTIONAL<Referral>;
          let responseName: OPTIONAL<LDAPOID>;
          let responseValue: OPTIONAL<OCTET_STRING>;
          let _unrecognizedExtensionsList: _Element[] = [];
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            resultCode: (_el: _Element): void => {
              resultCode = _decode_LDAPResult_resultCode(_el);
            },
            matchedDN: (_el: _Element): void => {
              matchedDN = _decode_LDAPDN(_el);
            },
            diagnosticMessage: (_el: _Element): void => {
              diagnosticMessage = _decode_LDAPString(_el);
            },
            referral: (_el: _Element): void => {
              referral = $._decode_implicit<Referral>(() => _decode_Referral)(
                _el
              );
            },
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
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ExtendedResponse,
            _extension_additions_list_spec_for_ExtendedResponse,
            _root_component_type_list_2_spec_for_ExtendedResponse,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new ExtendedResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
            resultCode,
            matchedDN,
            diagnosticMessage,
            referral,
            responseName,
            responseValue,
            _unrecognizedExtensionsList
          );
        }
    );
  }
  return _cached_decoder_for_ExtendedResponse(el);
}


let _cached_encoder_for_ExtendedResponse: $.ASN1Encoder<ExtendedResponse> | null = null;


/**
 * @summary Encodes a(n) ExtendedResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedResponse, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedResponse(
  value: ExtendedResponse,
  elGetter: $.ASN1Encoder<ExtendedResponse>
) {
  if (!_cached_encoder_for_ExtendedResponse) {
    _cached_encoder_for_ExtendedResponse = $._encode_implicit(
      _TagClass.application,
      24,
      () =>
        function (
          value: ExtendedResponse        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* REQUIRED   */ _encode_LDAPResult_resultCode(
                    value.resultCode,
                    $.BER
                  ),
                  /* REQUIRED   */ _encode_LDAPDN(value.matchedDN, $.BER),
                  /* REQUIRED   */ _encode_LDAPString(
                    value.diagnosticMessage,
                    $.BER
                  ),
                  /* IF_ABSENT  */ value.referral === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        3,
                        () => _encode_Referral,
                        $.BER
                      )(value.referral, $.BER),
                  /* IF_ABSENT  */ value.responseName === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        10,
                        () => _encode_LDAPOID,
                        $.BER
                      )(value.responseName, $.BER),
                  /* IF_ABSENT  */ value.responseValue === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        11,
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
  return _cached_encoder_for_ExtendedResponse(value, elGetter);
}


/* eslint-enable */
