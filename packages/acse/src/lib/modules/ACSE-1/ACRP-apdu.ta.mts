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
  ASO_qualifier,
  _decode_ASO_qualifier,
  _encode_ASO_qualifier,
} from '../ACSE-1/ASO-qualifier.ta.mjs';
import {
  ASOI_identifier,
  _decode_ASOI_identifier,
  _encode_ASOI_identifier,
} from '../ACSE-1/ASOI-identifier.ta.mjs';
import {
  ASO_context_name_list,
  _decode_ASO_context_name_list,
  _encode_ASO_context_name_list,
} from '../ACSE-1/ASO-context-name-list.ta.mjs';
import {
  P_context_result_list,
  _decode_P_context_result_list,
  _encode_P_context_result_list,
} from '../ACSE-1/P-context-result-list.ta.mjs';
import {
  User_information,
  _decode_User_information,
  _encode_User_information,
} from '../ACSE-1/User-information.ta.mjs';
/**
 * @summary ACRP_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACRP-apdu ::= [APPLICATION 7] IMPLICIT SEQUENCE {
 *   aso-qualifier          [0]  ASO-qualifier OPTIONAL,
 *   asoi-identifier        [1] IMPLICIT ASOI-identifier OPTIONAL,
 *   aSO-context-name       [3] IMPLICIT ASO-context-name-list OPTIONAL,
 *   p-context-result-list  [4] IMPLICIT P-context-result-list OPTIONAL,
 *   ...,
 *   ...,
 *   user-information       [30] IMPLICIT User-information OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ACRP_apdu {
  constructor(
    /**
     * @summary `aso_qualifier`.
     * @public
     * @readonly
     */
    readonly aso_qualifier: OPTIONAL<ASO_qualifier>,
    /**
     * @summary `asoi_identifier`.
     * @public
     * @readonly
     */
    readonly asoi_identifier: OPTIONAL<ASOI_identifier>,
    /**
     * @summary `aSO_context_name`.
     * @public
     * @readonly
     */
    readonly aSO_context_name: OPTIONAL<ASO_context_name_list>,
    /**
     * @summary `p_context_result_list`.
     * @public
     * @readonly
     */
    readonly p_context_result_list: OPTIONAL<P_context_result_list>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = [],
    /**
     * @summary `user_information`.
     * @public
     * @readonly
     */
    readonly user_information: OPTIONAL<User_information>
  ) {}

  /**
   * @summary Restructures an object into a ACRP_apdu
   * @description
   *
   * This takes an `object` and converts it to a `ACRP_apdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ACRP_apdu`.
   * @returns {ACRP_apdu}
   */
  public static _from_object(
    _o: { [_K in keyof ACRP_apdu]: ACRP_apdu[_K] }
  ): ACRP_apdu {
    return new ACRP_apdu(
      _o.aso_qualifier,
      _o.asoi_identifier,
      _o.aSO_context_name,
      _o.p_context_result_list,
      _o._unrecognizedExtensionsList,
      _o.user_information
    );
  }
}

/**
 * @summary The Leading Root Component Types of ACRP_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACRP_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'aso-qualifier',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'asoi-identifier',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'aSO-context-name',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'p-context-result-list',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
];

/**
 * @summary The Trailing Root Component Types of ACRP_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACRP_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-information',
    true,
    $.hasTag(_TagClass.context, 30)
  ),
];

/**
 * @summary The Extension Addition Component Types of ACRP_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACRP_apdu: $.ComponentSpec[] = [];

let _cached_decoder_for_ACRP_apdu: $.ASN1Decoder<ACRP_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACRP_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACRP_apdu} The decoded data structure.
 */
export function _decode_ACRP_apdu(el: _Element) {
  if (!_cached_decoder_for_ACRP_apdu) {
    _cached_decoder_for_ACRP_apdu = $._decode_implicit<ACRP_apdu>(
      () =>
        function (el: _Element): ACRP_apdu {
          let aso_qualifier: OPTIONAL<ASO_qualifier>;
          let asoi_identifier: OPTIONAL<ASOI_identifier>;
          let aSO_context_name: OPTIONAL<ASO_context_name_list>;
          let p_context_result_list: OPTIONAL<P_context_result_list>;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_information: OPTIONAL<User_information>;
          const callbacks: $.DecodingMap = {
            'aso-qualifier': (_el: _Element): void => {
              aso_qualifier = $._decode_explicit<ASO_qualifier>(
                () => _decode_ASO_qualifier
              )(_el);
            },
            'asoi-identifier': (_el: _Element): void => {
              asoi_identifier = $._decode_implicit<ASOI_identifier>(
                () => _decode_ASOI_identifier
              )(_el);
            },
            'aSO-context-name': (_el: _Element): void => {
              aSO_context_name = $._decode_implicit<ASO_context_name_list>(
                () => _decode_ASO_context_name_list
              )(_el);
            },
            'p-context-result-list': (_el: _Element): void => {
              p_context_result_list = $._decode_implicit<P_context_result_list>(
                () => _decode_P_context_result_list
              )(_el);
            },
            'user-information': (_el: _Element): void => {
              user_information = $._decode_implicit<User_information>(
                () => _decode_User_information
              )(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ACRP_apdu,
            _extension_additions_list_spec_for_ACRP_apdu,
            _root_component_type_list_2_spec_for_ACRP_apdu,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new ACRP_apdu (
            aso_qualifier,
            asoi_identifier,
            aSO_context_name,
            p_context_result_list,
            _unrecognizedExtensionsList,
            user_information
          );
        }
    );
  }
  return _cached_decoder_for_ACRP_apdu(el);
}

let _cached_encoder_for_ACRP_apdu: $.ASN1Encoder<ACRP_apdu> | null = null;

/**
 * @summary Encodes a(n) ACRP_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACRP_apdu, encoded as an ASN.1 Element.
 */
export function _encode_ACRP_apdu(
  value: ACRP_apdu,
  elGetter: $.ASN1Encoder<ACRP_apdu>
) {
  if (!_cached_encoder_for_ACRP_apdu) {
    _cached_encoder_for_ACRP_apdu = $._encode_implicit(
      _TagClass.application,
      7,
      () =>
        function (
          value: ACRP_apdu        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_ABSENT  */ value.aso_qualifier === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        0,
                        () => _encode_ASO_qualifier,
                        $.BER
                      )(value.aso_qualifier, $.BER),
                  /* IF_ABSENT  */ value.asoi_identifier === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        1,
                        () => _encode_ASOI_identifier,
                        $.BER
                      )(value.asoi_identifier, $.BER),
                  /* IF_ABSENT  */ value.aSO_context_name === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        3,
                        () => _encode_ASO_context_name_list,
                        $.BER
                      )(value.aSO_context_name, $.BER),
                  /* IF_ABSENT  */ value.p_context_result_list === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        4,
                        () => _encode_P_context_result_list,
                        $.BER
                      )(value.p_context_result_list, $.BER),
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : [],
                [
                  /* IF_ABSENT  */ value.user_information === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        30,
                        () => _encode_User_information,
                        $.BER
                      )(value.user_information, $.BER),
                ]
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_ACRP_apdu(value, elGetter);
}


/* eslint-enable */
