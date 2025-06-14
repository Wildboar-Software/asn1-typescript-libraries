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
  User_Data,
  _decode_User_Data,
  _encode_User_Data,
} from '../ACSE-1/User-Data.ta.mjs';
/* START_OF_SYMBOL_DEFINITION A_DT_apdu */
/**
 * @summary A_DT_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * A-DT-apdu ::= [APPLICATION 5] IMPLICIT SEQUENCE {
 *   aso-qualifier    [0]  ASO-qualifier OPTIONAL,
 *   asoi-identifier  [1] IMPLICIT ASOI-identifier OPTIONAL,
 *   ...,
 *   ...,
 *   a-user-data      [30] IMPLICIT User-Data
 * }
 * ```
 *
 * @class
 */
export class A_DT_apdu {
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = [],
    /**
     * @summary `a_user_data`.
     * @public
     * @readonly
     */
    readonly a_user_data: User_Data
  ) {}

  /**
   * @summary Restructures an object into a A_DT_apdu
   * @description
   *
   * This takes an `object` and converts it to a `A_DT_apdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `A_DT_apdu`.
   * @returns {A_DT_apdu}
   */
  public static _from_object(
    _o: { [_K in keyof A_DT_apdu]: A_DT_apdu[_K] }
  ): A_DT_apdu {
    return new A_DT_apdu(
      _o.aso_qualifier,
      _o.asoi_identifier,
      _o._unrecognizedExtensionsList,
      _o.a_user_data
    );
  }
}
/* END_OF_SYMBOL_DEFINITION A_DT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_A_DT_apdu */
/**
 * @summary The Leading Root Component Types of A_DT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_A_DT_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'aso-qualifier',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'asoi-identifier',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_A_DT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_A_DT_apdu */
/**
 * @summary The Trailing Root Component Types of A_DT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_A_DT_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'a-user-data',
    false,
    $.hasTag(_TagClass.context, 30),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_A_DT_apdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_A_DT_apdu */
/**
 * @summary The Extension Addition Component Types of A_DT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_A_DT_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_A_DT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_A_DT_apdu */
let _cached_decoder_for_A_DT_apdu: $.ASN1Decoder<A_DT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_A_DT_apdu */

/* START_OF_SYMBOL_DEFINITION _decode_A_DT_apdu */
/**
 * @summary Decodes an ASN.1 element into a(n) A_DT_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {A_DT_apdu} The decoded data structure.
 */
export function _decode_A_DT_apdu(el: _Element) {
  if (!_cached_decoder_for_A_DT_apdu) {
    _cached_decoder_for_A_DT_apdu = $._decode_implicit<A_DT_apdu>(
      () =>
        function (el: _Element): A_DT_apdu {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let aso_qualifier: OPTIONAL<ASO_qualifier>;
          let asoi_identifier: OPTIONAL<ASOI_identifier>;
          let _unrecognizedExtensionsList: _Element[] = [];
          let a_user_data!: User_Data;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
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
            'a-user-data': (_el: _Element): void => {
              a_user_data = $._decode_explicit<User_Data>(
                () => _decode_User_Data
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_A_DT_apdu,
            _extension_additions_list_spec_for_A_DT_apdu,
            _root_component_type_list_2_spec_for_A_DT_apdu,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new A_DT_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
            aso_qualifier,
            asoi_identifier,
            _unrecognizedExtensionsList,
            a_user_data
          );
        }
    );
  }
  return _cached_decoder_for_A_DT_apdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_A_DT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_A_DT_apdu */
let _cached_encoder_for_A_DT_apdu: $.ASN1Encoder<A_DT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_A_DT_apdu */

/* START_OF_SYMBOL_DEFINITION _encode_A_DT_apdu */
/**
 * @summary Encodes a(n) A_DT_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The A_DT_apdu, encoded as an ASN.1 Element.
 */
export function _encode_A_DT_apdu(
  value: A_DT_apdu,
  elGetter: $.ASN1Encoder<A_DT_apdu>
) {
  if (!_cached_encoder_for_A_DT_apdu) {
    _cached_encoder_for_A_DT_apdu = $._encode_implicit(
      _TagClass.application,
      5,
      () =>
        function (
          value: A_DT_apdu        ): _Element {
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
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : [],
                [
                  /* REQUIRED   */ $._encode_explicit(
                    _TagClass.context,
                    30,
                    () => _encode_User_Data,
                    $.BER
                  )(value.a_user_data, $.BER),
                ]
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_A_DT_apdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_A_DT_apdu */

/* eslint-enable */
