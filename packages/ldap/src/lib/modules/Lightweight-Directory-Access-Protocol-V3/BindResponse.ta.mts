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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  _decode_LDAPResult,
  _encode_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta.mjs';
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
 * @summary BindResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindResponse ::= [APPLICATION 1]  SEQUENCE {
 *   COMPONENTS OF LDAPResult,
 *   serverSaslCreds  [7]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BindResponse {
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
     * @summary `serverSaslCreds`.
     * @public
     * @readonly
     */
    readonly serverSaslCreds: OPTIONAL<OCTET_STRING>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a BindResponse
   * @description
   *
   * This takes an `object` and converts it to a `BindResponse`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BindResponse`.
   * @returns {BindResponse}
   */
  public static _from_object(
    _o: { [_K in keyof BindResponse]: BindResponse[_K] }
  ): BindResponse {
    return new BindResponse(
      _o.resultCode,
      _o.matchedDN,
      _o.diagnosticMessage,
      _o.referral,
      _o.serverSaslCreds,
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
 * @summary The Leading Root Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BindResponse: $.ComponentSpec[] = [
  ..._root_component_type_list_1_spec_for_LDAPResult,
  new $.ComponentSpec(
    'serverSaslCreds',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BindResponse: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BindResponse: $.ComponentSpec[] = [];


let _cached_decoder_for_BindResponse: $.ASN1Decoder<BindResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BindResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindResponse} The decoded data structure.
 */
export function _decode_BindResponse(el: _Element) {
  if (!_cached_decoder_for_BindResponse) {
    _cached_decoder_for_BindResponse = $._decode_implicit<BindResponse>(
      () =>
        function (el: _Element): BindResponse {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let resultCode!: LDAPResult_resultCode;
          let matchedDN!: LDAPDN;
          let diagnosticMessage!: LDAPString;
          let referral: OPTIONAL<Referral>;
          let serverSaslCreds: OPTIONAL<OCTET_STRING>;
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
            serverSaslCreds: (_el: _Element): void => {
              serverSaslCreds = $._decode_implicit<OCTET_STRING>(
                () => $._decodeOctetString
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_BindResponse,
            _extension_additions_list_spec_for_BindResponse,
            _root_component_type_list_2_spec_for_BindResponse,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new BindResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
            resultCode,
            matchedDN,
            diagnosticMessage,
            referral,
            serverSaslCreds,
            _unrecognizedExtensionsList
          );
        }
    );
  }
  return _cached_decoder_for_BindResponse(el);
}


let _cached_encoder_for_BindResponse: $.ASN1Encoder<BindResponse> | null = null;


/**
 * @summary Encodes a(n) BindResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindResponse, encoded as an ASN.1 Element.
 */
export function _encode_BindResponse(
  value: BindResponse,
  elGetter: $.ASN1Encoder<BindResponse>
) {
  if (!_cached_encoder_for_BindResponse) {
    _cached_encoder_for_BindResponse = $._encode_implicit(
      _TagClass.application,
      1,
      () =>
        function (
          value: BindResponse        ): _Element {
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
                  /* IF_ABSENT  */ value.serverSaslCreds === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        7,
                        () => $._encodeOctetString,
                        $.BER
                      )(value.serverSaslCreds, $.BER),
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
  return _cached_encoder_for_BindResponse(value, elGetter);
}


/* eslint-enable */
