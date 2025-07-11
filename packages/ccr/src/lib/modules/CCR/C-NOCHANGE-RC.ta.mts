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
  C_NOCHANGE_RC_outcome,
  _enum_for_C_NOCHANGE_RC_outcome,
  C_NOCHANGE_RC_outcome_not_determined /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_C_NOCHANGE_RC_outcome,
  _encode_C_NOCHANGE_RC_outcome,
} from '../CCR/C-NOCHANGE-RC-outcome.ta.mjs';
import {
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';

/**
 * @summary C_NOCHANGE_RC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-NOCHANGE-RC ::= [14]  SEQUENCE {
 *   outcome
 *     [0]  ENUMERATED {not-determined(0), committed(1), rolled-back(2),
 *                      no-change(3), ...
 *                      } DEFAULT not-determined,
 *   ...,
 *   ...,
 *   user-data  User-data OPTIONAL
 * }
 * ```
 *
 */
export class C_NOCHANGE_RC {
  constructor(
    /**
     * @summary `outcome`.
     * @public
     * @readonly
     */
    readonly outcome: OPTIONAL<C_NOCHANGE_RC_outcome>,
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
   * @summary Restructures an object into a C_NOCHANGE_RC
   * @description
   *
   * This takes an `object` and converts it to a `C_NOCHANGE_RC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_NOCHANGE_RC`.
   * @returns {C_NOCHANGE_RC}
   */
  public static _from_object(
    _o: { [_K in keyof C_NOCHANGE_RC]: C_NOCHANGE_RC[_K] }
  ): C_NOCHANGE_RC {
    return new C_NOCHANGE_RC(
      _o.outcome,
      _o._unrecognizedExtensionsList,
      _o.user_data
    );
  }

  /**
   * @summary Getter that returns the default value for `outcome`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_outcome(): C_NOCHANGE_RC_outcome {
    return C_NOCHANGE_RC_outcome_not_determined;
  }
  /**
   * @summary The enum used as the type of the component `outcome`
   * @public
   * @static
   */

  public static _enum_for_outcome = _enum_for_C_NOCHANGE_RC_outcome;
}


/**
 * @summary The Leading Root Component Types of C_NOCHANGE_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_NOCHANGE_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'outcome',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of C_NOCHANGE_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_NOCHANGE_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30)
  ),
];


/**
 * @summary The Extension Addition Component Types of C_NOCHANGE_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_NOCHANGE_RC: $.ComponentSpec[] = [];


let _cached_decoder_for_C_NOCHANGE_RC: $.ASN1Decoder<C_NOCHANGE_RC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) C_NOCHANGE_RC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_NOCHANGE_RC} The decoded data structure.
 */
export function _decode_C_NOCHANGE_RC(el: _Element): C_NOCHANGE_RC {
  if (!_cached_decoder_for_C_NOCHANGE_RC) {
    _cached_decoder_for_C_NOCHANGE_RC = $._decode_implicit<C_NOCHANGE_RC>(
      () =>
        function (el: _Element): C_NOCHANGE_RC {
          let outcome: OPTIONAL<C_NOCHANGE_RC_outcome> =
            C_NOCHANGE_RC._default_value_for_outcome;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_data: OPTIONAL<User_data>;
          const callbacks: $.DecodingMap = {
            outcome: (_el: _Element): void => {
              outcome = $._decode_implicit<C_NOCHANGE_RC_outcome>(
                () => _decode_C_NOCHANGE_RC_outcome
              )(_el);
            },
            'user-data': (_el: _Element): void => {
              user_data = _decode_User_data(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_C_NOCHANGE_RC,
            _extension_additions_list_spec_for_C_NOCHANGE_RC,
            _root_component_type_list_2_spec_for_C_NOCHANGE_RC,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_NOCHANGE_RC (
            outcome,
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_NOCHANGE_RC(el);
}


let _cached_encoder_for_C_NOCHANGE_RC: $.ASN1Encoder<C_NOCHANGE_RC> | null = null;


/**
 * @summary Encodes a(n) C_NOCHANGE_RC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_NOCHANGE_RC, encoded as an ASN.1 Element.
 */
export function _encode_C_NOCHANGE_RC(
  value: C_NOCHANGE_RC,
  elGetter: $.ASN1Encoder<C_NOCHANGE_RC>
): _Element {
  if (!_cached_encoder_for_C_NOCHANGE_RC) {
    _cached_encoder_for_C_NOCHANGE_RC = $._encode_implicit(
      _TagClass.context,
      14,
      () =>
        function (
          value: C_NOCHANGE_RC        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_DEFAULT */ value.outcome === undefined ||
                  $.deepEq(
                    value.outcome,
                    C_NOCHANGE_RC._default_value_for_outcome
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_C_NOCHANGE_RC_outcome,
                        $.BER
                      )(value.outcome, $.BER),
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
  return _cached_encoder_for_C_NOCHANGE_RC(value, elGetter);
}


/* eslint-enable */
