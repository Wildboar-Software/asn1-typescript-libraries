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
  Release_response_reason,
  _decode_Release_response_reason,
  _encode_Release_response_reason,
} from '../ACSE-1/Release-response-reason.ta.mjs';
import {
  Association_data,
  _decode_Association_data,
  _encode_Association_data,
} from '../ACSE-1/Association-data.ta.mjs';
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
/**
 * @summary RLRE_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RLRE-apdu ::= [APPLICATION 3] IMPLICIT SEQUENCE {
 *   reason              [0] IMPLICIT Release-response-reason OPTIONAL,
 *   ...,
 *   --  Extensions for higher level association FU
 *   aso-qualifier       [13]  ASO-qualifier OPTIONAL,
 *   asoi-identifier     [14] IMPLICIT ASOI-identifier OPTIONAL,
 *   --  End of extensions for higher level association FU
 *   ...,
 *   user-information    [30] IMPLICIT Association-data OPTIONAL
 * }
 * ```
 *
 */
export class RLRE_apdu {
  constructor(
    /**
     * @summary `reason`.
     * @public
     * @readonly
     */
    readonly reason: OPTIONAL<Release_response_reason>,
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
    readonly user_information: OPTIONAL<Association_data>
  ) {}

  /**
   * @summary Restructures an object into a RLRE_apdu
   * @description
   *
   * This takes an `object` and converts it to a `RLRE_apdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RLRE_apdu`.
   * @returns {RLRE_apdu}
   */
  public static _from_object(
    _o: { [_K in keyof RLRE_apdu]: RLRE_apdu[_K] }
  ): RLRE_apdu {
    return new RLRE_apdu(
      _o.reason,
      _o.aso_qualifier,
      _o.asoi_identifier,
      _o._unrecognizedExtensionsList,
      _o.user_information
    );
  }
}

/**
 * @summary The Leading Root Component Types of RLRE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RLRE_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'reason',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
];

/**
 * @summary The Trailing Root Component Types of RLRE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RLRE_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-information',
    true,
    $.hasTag(_TagClass.context, 30)
  ),
];

/**
 * @summary The Extension Addition Component Types of RLRE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RLRE_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'aso-qualifier',
    true,
    $.hasTag(_TagClass.context, 13)
  ),
  new $.ComponentSpec(
    'asoi-identifier',
    true,
    $.hasTag(_TagClass.context, 14)
  ),
];

let _cached_decoder_for_RLRE_apdu: $.ASN1Decoder<RLRE_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RLRE_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RLRE_apdu} The decoded data structure.
 */
export function _decode_RLRE_apdu(el: _Element): RLRE_apdu {
  if (!_cached_decoder_for_RLRE_apdu) {
    _cached_decoder_for_RLRE_apdu = $._decode_implicit<RLRE_apdu>(
      () =>
        function (el: _Element): RLRE_apdu {
          let reason: OPTIONAL<Release_response_reason>;
          let aso_qualifier: OPTIONAL<ASO_qualifier>;
          let asoi_identifier: OPTIONAL<ASOI_identifier>;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_information: OPTIONAL<Association_data>;
          const callbacks: $.DecodingMap = {
            reason: (_el: _Element): void => {
              reason = $._decode_implicit<Release_response_reason>(
                () => _decode_Release_response_reason
              )(_el);
            },
            'user-information': (_el: _Element): void => {
              user_information = $._decode_implicit<Association_data>(
                () => _decode_Association_data
              )(_el);
            },
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
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_RLRE_apdu,
            _extension_additions_list_spec_for_RLRE_apdu,
            _root_component_type_list_2_spec_for_RLRE_apdu,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new RLRE_apdu (
            reason,
            aso_qualifier,
            asoi_identifier,
            _unrecognizedExtensionsList,
            user_information
          );
        }
    );
  }
  return _cached_decoder_for_RLRE_apdu(el);
}

let _cached_encoder_for_RLRE_apdu: $.ASN1Encoder<RLRE_apdu> | null = null;

/**
 * @summary Encodes a(n) RLRE_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RLRE_apdu, encoded as an ASN.1 Element.
 */
export function _encode_RLRE_apdu(
  value: RLRE_apdu,
  elGetter: $.ASN1Encoder<RLRE_apdu>
): _Element {
  if (!_cached_encoder_for_RLRE_apdu) {
    _cached_encoder_for_RLRE_apdu = $._encode_implicit(
      _TagClass.application,
      3,
      () =>
        function (
          value: RLRE_apdu        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_ABSENT  */ value.reason === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_Release_response_reason,
                        $.BER
                      )(value.reason, $.BER),
                ],
                [
                  /* IF_ABSENT  */ value.aso_qualifier === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        13,
                        () => _encode_ASO_qualifier,
                        $.BER
                      )(value.aso_qualifier, $.BER),
                  /* IF_ABSENT  */ value.asoi_identifier === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        14,
                        () => _encode_ASOI_identifier,
                        $.BER
                      )(value.asoi_identifier, $.BER),
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
                        () => _encode_Association_data,
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
  return _cached_encoder_for_RLRE_apdu(value, elGetter);
}


/* eslint-enable */
