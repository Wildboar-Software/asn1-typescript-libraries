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
  C_NOCHANGE_RI_confirmation,
  _enum_for_C_NOCHANGE_RI_confirmation,
  C_NOCHANGE_RI_confirmation_result_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_C_NOCHANGE_RI_confirmation,
  _encode_C_NOCHANGE_RI_confirmation,
} from '../CCR/C-NOCHANGE-RI-confirmation.ta.mjs';
import {
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';
/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RI */
/**
 * @summary C_NOCHANGE_RI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-NOCHANGE-RI ::= [13]  SEQUENCE {
 *   confirmation
 *     [0]  ENUMERATED {not-required(0), result-requested(1), ...
 *                      } DEFAULT result-requested,
 *   ...,
 *   ...,
 *   user-data     User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class C_NOCHANGE_RI {
  constructor(
    /**
     * @summary `confirmation`.
     * @public
     * @readonly
     */
    readonly confirmation: OPTIONAL<C_NOCHANGE_RI_confirmation>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = [],
    /**
     * @summary `user_data`.
     * @public
     * @readonly
     */
    readonly user_data: OPTIONAL<User_data>
  ) {}

  /**
   * @summary Restructures an object into a C_NOCHANGE_RI
   * @description
   *
   * This takes an `object` and converts it to a `C_NOCHANGE_RI`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_NOCHANGE_RI`.
   * @returns {C_NOCHANGE_RI}
   */
  public static _from_object(
    _o: { [_K in keyof C_NOCHANGE_RI]: C_NOCHANGE_RI[_K] }
  ): C_NOCHANGE_RI {
    return new C_NOCHANGE_RI(
      _o.confirmation,
      _o._unrecognizedExtensionsList,
      _o.user_data
    );
  }

  /**
   * @summary Getter that returns the default value for `confirmation`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_confirmation() {
    return C_NOCHANGE_RI_confirmation_result_requested;
  }
  /**
   * @summary The enum used as the type of the component `confirmation`
   * @public
   * @static
   */

  public static _enum_for_confirmation = _enum_for_C_NOCHANGE_RI_confirmation;
}
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RI */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_C_NOCHANGE_RI */
/**
 * @summary The Leading Root Component Types of C_NOCHANGE_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_NOCHANGE_RI: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'confirmation',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_C_NOCHANGE_RI */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_C_NOCHANGE_RI */
/**
 * @summary The Trailing Root Component Types of C_NOCHANGE_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_NOCHANGE_RI: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_C_NOCHANGE_RI */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_C_NOCHANGE_RI */
/**
 * @summary The Extension Addition Component Types of C_NOCHANGE_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_NOCHANGE_RI: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_C_NOCHANGE_RI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_C_NOCHANGE_RI */
let _cached_decoder_for_C_NOCHANGE_RI: $.ASN1Decoder<C_NOCHANGE_RI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_C_NOCHANGE_RI */

/* START_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RI */
/**
 * @summary Decodes an ASN.1 element into a(n) C_NOCHANGE_RI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_NOCHANGE_RI} The decoded data structure.
 */
export function _decode_C_NOCHANGE_RI(el: _Element) {
  if (!_cached_decoder_for_C_NOCHANGE_RI) {
    _cached_decoder_for_C_NOCHANGE_RI = $._decode_implicit<C_NOCHANGE_RI>(
      () =>
        function (el: _Element): C_NOCHANGE_RI {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let confirmation: OPTIONAL<C_NOCHANGE_RI_confirmation> =
            C_NOCHANGE_RI._default_value_for_confirmation;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_data: OPTIONAL<User_data>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            confirmation: (_el: _Element): void => {
              confirmation = $._decode_implicit<C_NOCHANGE_RI_confirmation>(
                () => _decode_C_NOCHANGE_RI_confirmation
              )(_el);
            },
            'user-data': (_el: _Element): void => {
              user_data = _decode_User_data(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_C_NOCHANGE_RI,
            _extension_additions_list_spec_for_C_NOCHANGE_RI,
            _root_component_type_list_2_spec_for_C_NOCHANGE_RI,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_NOCHANGE_RI /* SEQUENCE_CONSTRUCTOR_CALL */(
            confirmation,
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_NOCHANGE_RI(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RI */
let _cached_encoder_for_C_NOCHANGE_RI: $.ASN1Encoder<C_NOCHANGE_RI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RI */

/* START_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RI */
/**
 * @summary Encodes a(n) C_NOCHANGE_RI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_NOCHANGE_RI, encoded as an ASN.1 Element.
 */
export function _encode_C_NOCHANGE_RI(
  value: C_NOCHANGE_RI,
  elGetter: $.ASN1Encoder<C_NOCHANGE_RI>
) {
  if (!_cached_encoder_for_C_NOCHANGE_RI) {
    _cached_encoder_for_C_NOCHANGE_RI = $._encode_implicit(
      _TagClass.context,
      13,
      () =>
        function (
          value: C_NOCHANGE_RI        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_DEFAULT */ value.confirmation === undefined ||
                  $.deepEq(
                    value.confirmation,
                    C_NOCHANGE_RI._default_value_for_confirmation
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_C_NOCHANGE_RI_confirmation,
                        $.BER
                      )(value.confirmation, $.BER),
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : [],
                [
                  /* IF_ABSENT  */ value.user_data === undefined
                    ? undefined
                    : _encode_User_data(value.user_data, $.BER),
                ]
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_C_NOCHANGE_RI(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RI */

/* eslint-enable */
