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
  ATOMIC_ACTION_IDENTIFIER,
  _decode_ATOMIC_ACTION_IDENTIFIER,
  _encode_ATOMIC_ACTION_IDENTIFIER,
} from '../CCR/ATOMIC-ACTION-IDENTIFIER.ta.mjs';
import {
  C_BEGIN_RI_branch_suffix,
  _decode_C_BEGIN_RI_branch_suffix,
  _encode_C_BEGIN_RI_branch_suffix,
} from '../CCR/C-BEGIN-RI-branch-suffix.ta.mjs';
import {
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';

/**
 * @summary C_BEGIN_RI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-BEGIN-RI ::= [1]  SEQUENCE {
 *   atomic-action-identifier  [0]  ATOMIC-ACTION-IDENTIFIER,
 *   branch-suffix
 *     CHOICE {form1  [2]  OCTET STRING,
 *             form2  [3]  INTEGER,
 *             ...},
 *   ...,
 *   ...,
 *   user-data                 User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class C_BEGIN_RI {
  constructor(
    /**
     * @summary `atomic_action_identifier`.
     * @public
     * @readonly
     */
    readonly atomic_action_identifier: ATOMIC_ACTION_IDENTIFIER,
    /**
     * @summary `branch_suffix`.
     * @public
     * @readonly
     */
    readonly branch_suffix: C_BEGIN_RI_branch_suffix,
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
   * @summary Restructures an object into a C_BEGIN_RI
   * @description
   *
   * This takes an `object` and converts it to a `C_BEGIN_RI`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_BEGIN_RI`.
   * @returns {C_BEGIN_RI}
   */
  public static _from_object(
    _o: { [_K in keyof C_BEGIN_RI]: C_BEGIN_RI[_K] }
  ): C_BEGIN_RI {
    return new C_BEGIN_RI(
      _o.atomic_action_identifier,
      _o.branch_suffix,
      _o._unrecognizedExtensionsList,
      _o.user_data
    );
  }
}


/**
 * @summary The Leading Root Component Types of C_BEGIN_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_BEGIN_RI: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'atomic-action-identifier',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'branch-suffix',
    false,
    $.hasAnyTag
  ),
];


/**
 * @summary The Trailing Root Component Types of C_BEGIN_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_BEGIN_RI: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30)
  ),
];


/**
 * @summary The Extension Addition Component Types of C_BEGIN_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_BEGIN_RI: $.ComponentSpec[] = [];


let _cached_decoder_for_C_BEGIN_RI: $.ASN1Decoder<C_BEGIN_RI> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) C_BEGIN_RI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_BEGIN_RI} The decoded data structure.
 */
export function _decode_C_BEGIN_RI(el: _Element) {
  if (!_cached_decoder_for_C_BEGIN_RI) {
    _cached_decoder_for_C_BEGIN_RI = $._decode_implicit<C_BEGIN_RI>(
      () =>
        function (el: _Element): C_BEGIN_RI {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let atomic_action_identifier!: ATOMIC_ACTION_IDENTIFIER;
          let branch_suffix!: C_BEGIN_RI_branch_suffix;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_data: OPTIONAL<User_data>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'atomic-action-identifier': (_el: _Element): void => {
              atomic_action_identifier = $._decode_implicit<ATOMIC_ACTION_IDENTIFIER>(
                () => _decode_ATOMIC_ACTION_IDENTIFIER
              )(_el);
            },
            'branch-suffix': (_el: _Element): void => {
              branch_suffix = _decode_C_BEGIN_RI_branch_suffix(_el);
            },
            'user-data': (_el: _Element): void => {
              user_data = _decode_User_data(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_C_BEGIN_RI,
            _extension_additions_list_spec_for_C_BEGIN_RI,
            _root_component_type_list_2_spec_for_C_BEGIN_RI,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_BEGIN_RI /* SEQUENCE_CONSTRUCTOR_CALL */(
            atomic_action_identifier,
            branch_suffix,
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_BEGIN_RI(el);
}


let _cached_encoder_for_C_BEGIN_RI: $.ASN1Encoder<C_BEGIN_RI> | null = null;


/**
 * @summary Encodes a(n) C_BEGIN_RI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_BEGIN_RI, encoded as an ASN.1 Element.
 */
export function _encode_C_BEGIN_RI(
  value: C_BEGIN_RI,
  elGetter: $.ASN1Encoder<C_BEGIN_RI>
) {
  if (!_cached_encoder_for_C_BEGIN_RI) {
    _cached_encoder_for_C_BEGIN_RI = $._encode_implicit(
      _TagClass.context,
      1,
      () =>
        function (
          value: C_BEGIN_RI        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* REQUIRED   */ $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ATOMIC_ACTION_IDENTIFIER,
                    $.BER
                  )(value.atomic_action_identifier, $.BER),
                  /* REQUIRED   */ _encode_C_BEGIN_RI_branch_suffix(
                    value.branch_suffix,
                    $.BER
                  ),
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
  return _cached_encoder_for_C_BEGIN_RI(value, elGetter);
}


/* eslint-enable */
