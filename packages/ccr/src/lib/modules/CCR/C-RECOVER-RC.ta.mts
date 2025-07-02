/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
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
  ATOMIC_ACTION_IDENTIFIER,
  _decode_ATOMIC_ACTION_IDENTIFIER,
  _encode_ATOMIC_ACTION_IDENTIFIER,
} from '../CCR/ATOMIC-ACTION-IDENTIFIER.ta.mjs';
import {
  BRANCH_IDENTIFIER,
  _decode_BRANCH_IDENTIFIER,
  _encode_BRANCH_IDENTIFIER,
} from '../CCR/BRANCH-IDENTIFIER.ta.mjs';
import {
  C_RECOVER_RC_recovery_state,
  _enum_for_C_RECOVER_RC_recovery_state,
  _decode_C_RECOVER_RC_recovery_state,
  _encode_C_RECOVER_RC_recovery_state,
} from '../CCR/C-RECOVER-RC-recovery-state.ta.mjs';
import {
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';

/**
 * @summary C_RECOVER_RC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-RECOVER-RC ::= [10]  SEQUENCE {
 *   atomic-action-identifier  [0]  ATOMIC-ACTION-IDENTIFIER,
 *   branch-identifier         [1]  BRANCH-IDENTIFIER,
 *   recovery-state
 *     [2]  ENUMERATED {commit(0), ready(1), done(2), unknown(3), retry-later(5),
 *                      ...
 *                      },
 *   ...,
 *   reversed-branch           [3]  BOOLEAN DEFAULT FALSE, --  shall be absent if FALSE
 *   ...,
 *   user-data                 User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class C_RECOVER_RC {
  constructor(
    /**
     * @summary `atomic_action_identifier`.
     * @public
     * @readonly
     */
    readonly atomic_action_identifier: ATOMIC_ACTION_IDENTIFIER,
    /**
     * @summary `branch_identifier`.
     * @public
     * @readonly
     */
    readonly branch_identifier: BRANCH_IDENTIFIER,
    /**
     * @summary `recovery_state`.
     * @public
     * @readonly
     */
    readonly recovery_state: C_RECOVER_RC_recovery_state,
    /**
     * @summary `reversed_branch`.
     * @public
     * @readonly
     */
    readonly reversed_branch: OPTIONAL<BOOLEAN>,
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
   * @summary Restructures an object into a C_RECOVER_RC
   * @description
   *
   * This takes an `object` and converts it to a `C_RECOVER_RC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_RECOVER_RC`.
   * @returns {C_RECOVER_RC}
   */
  public static _from_object(
    _o: { [_K in keyof C_RECOVER_RC]: C_RECOVER_RC[_K] }
  ): C_RECOVER_RC {
    return new C_RECOVER_RC(
      _o.atomic_action_identifier,
      _o.branch_identifier,
      _o.recovery_state,
      _o.reversed_branch,
      _o._unrecognizedExtensionsList,
      _o.user_data
    );
  }

  /**
   * @summary Getter that returns the default value for `reversed_branch`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_reversed_branch(): BOOLEAN {
    return false;
  }
  /**
   * @summary The enum used as the type of the component `recovery_state`
   * @public
   * @static
   */

  public static _enum_for_recovery_state = _enum_for_C_RECOVER_RC_recovery_state;
}


/**
 * @summary The Leading Root Component Types of C_RECOVER_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_RECOVER_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'atomic-action-identifier',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'branch-identifier',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'recovery-state',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of C_RECOVER_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_RECOVER_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30)
  ),
];


/**
 * @summary The Extension Addition Component Types of C_RECOVER_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_RECOVER_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'reversed-branch',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
];


let _cached_decoder_for_C_RECOVER_RC: $.ASN1Decoder<C_RECOVER_RC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) C_RECOVER_RC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_RECOVER_RC} The decoded data structure.
 */
export function _decode_C_RECOVER_RC(el: _Element): C_RECOVER_RC {
  if (!_cached_decoder_for_C_RECOVER_RC) {
    _cached_decoder_for_C_RECOVER_RC = $._decode_implicit<C_RECOVER_RC>(
      () =>
        function (el: _Element): C_RECOVER_RC {
          let atomic_action_identifier!: ATOMIC_ACTION_IDENTIFIER;
          let branch_identifier!: BRANCH_IDENTIFIER;
          let recovery_state!: C_RECOVER_RC_recovery_state;
          let reversed_branch: OPTIONAL<BOOLEAN> =
            C_RECOVER_RC._default_value_for_reversed_branch;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_data: OPTIONAL<User_data>;
          const callbacks: $.DecodingMap = {
            'atomic-action-identifier': (_el: _Element): void => {
              atomic_action_identifier = $._decode_implicit<ATOMIC_ACTION_IDENTIFIER>(
                () => _decode_ATOMIC_ACTION_IDENTIFIER
              )(_el);
            },
            'branch-identifier': (_el: _Element): void => {
              branch_identifier = $._decode_implicit<BRANCH_IDENTIFIER>(
                () => _decode_BRANCH_IDENTIFIER
              )(_el);
            },
            'recovery-state': (_el: _Element): void => {
              recovery_state = $._decode_implicit<C_RECOVER_RC_recovery_state>(
                () => _decode_C_RECOVER_RC_recovery_state
              )(_el);
            },
            'user-data': (_el: _Element): void => {
              user_data = _decode_User_data(_el);
            },
            'reversed-branch': (_el: _Element): void => {
              reversed_branch = $._decode_implicit<BOOLEAN>(
                () => $._decodeBoolean
              )(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_C_RECOVER_RC,
            _extension_additions_list_spec_for_C_RECOVER_RC,
            _root_component_type_list_2_spec_for_C_RECOVER_RC,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_RECOVER_RC (
            atomic_action_identifier,
            branch_identifier,
            recovery_state,
            reversed_branch,
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_RECOVER_RC(el);
}


let _cached_encoder_for_C_RECOVER_RC: $.ASN1Encoder<C_RECOVER_RC> | null = null;


/**
 * @summary Encodes a(n) C_RECOVER_RC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_RECOVER_RC, encoded as an ASN.1 Element.
 */
export function _encode_C_RECOVER_RC(
  value: C_RECOVER_RC,
  elGetter: $.ASN1Encoder<C_RECOVER_RC>
): _Element {
  if (!_cached_encoder_for_C_RECOVER_RC) {
    _cached_encoder_for_C_RECOVER_RC = $._encode_implicit(
      _TagClass.context,
      10,
      () =>
        function (
          value: C_RECOVER_RC        ): _Element {
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
                  /* REQUIRED   */ $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_BRANCH_IDENTIFIER,
                    $.BER
                  )(value.branch_identifier, $.BER),
                  /* REQUIRED   */ $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_C_RECOVER_RC_recovery_state,
                    $.BER
                  )(value.recovery_state, $.BER),
                ],
                [
                  /* IF_DEFAULT */ value.reversed_branch === undefined ||
                  $.deepEq(
                    value.reversed_branch,
                    C_RECOVER_RC._default_value_for_reversed_branch
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        3,
                        () => $._encodeBoolean,
                        $.BER
                      )(value.reversed_branch, $.BER),
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
  return _cached_encoder_for_C_RECOVER_RC(value, elGetter);
}


/* eslint-enable */
