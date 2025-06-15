/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
  TRUE_BIT,
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
  C_INITIALIZE_RC_version_number,
  C_INITIALIZE_RC_version_number_version2 /* IMPORTED_LONG_NAMED_BIT */,
  _decode_C_INITIALIZE_RC_version_number,
  _encode_C_INITIALIZE_RC_version_number,
} from '../CCR/C-INITIALIZE-RC-version-number.ta.mjs';
import {
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';
import {
  Ccr_requirements,
  Ccr_requirements_static_commitment /* IMPORTED_LONG_NAMED_BIT */,
  _decode_Ccr_requirements,
  _encode_Ccr_requirements,
} from '../CCR/Ccr-requirements.ta.mjs';

/**
 * @summary C_INITIALIZE_RC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-INITIALIZE-RC ::= [12]  SEQUENCE {
 *   version-number
 *     [0]  BIT STRING {version1(0), version2(1)} DEFAULT {version2},
 *   ...,
 *   ccr-requirements
 *     [1]  Ccr-requirements DEFAULT {static-commitment},
 *   ready-collision-reservation     [2]  BOOLEAN DEFAULT TRUE,
 *   ...,
 *   user-data                       User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class C_INITIALIZE_RC {
  constructor(
    /**
     * @summary `version_number`.
     * @public
     * @readonly
     */
    readonly version_number: OPTIONAL<C_INITIALIZE_RC_version_number>,
    /**
     * @summary `ccr_requirements`.
     * @public
     * @readonly
     */
    readonly ccr_requirements: OPTIONAL<Ccr_requirements>,
    /**
     * @summary `ready_collision_reservation`.
     * @public
     * @readonly
     */
    readonly ready_collision_reservation: OPTIONAL<BOOLEAN>,
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
   * @summary Restructures an object into a C_INITIALIZE_RC
   * @description
   *
   * This takes an `object` and converts it to a `C_INITIALIZE_RC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_INITIALIZE_RC`.
   * @returns {C_INITIALIZE_RC}
   */
  public static _from_object(
    _o: { [_K in keyof C_INITIALIZE_RC]: C_INITIALIZE_RC[_K] }
  ): C_INITIALIZE_RC {
    return new C_INITIALIZE_RC(
      _o.version_number,
      _o.ccr_requirements,
      _o.ready_collision_reservation,
      _o._unrecognizedExtensionsList,
      _o.user_data
    );
  }

  /**
   * @summary Getter that returns the default value for `version_number`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_version_number() {
    return (() => {
      const _ret = new Uint8ClampedArray(2);
      _ret[C_INITIALIZE_RC_version_number_version2] = TRUE_BIT;
      return _ret;
    })();
  }
  /**
   * @summary Getter that returns the default value for `ccr_requirements`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_ccr_requirements() {
    return (() => {
      const _ret = new Uint8ClampedArray(5);
      _ret[Ccr_requirements_static_commitment] = TRUE_BIT;
      return _ret;
    })();
  }
  /**
   * @summary Getter that returns the default value for `ready_collision_reservation`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_ready_collision_reservation(): boolean {
    return true;
  }
}


/**
 * @summary The Leading Root Component Types of C_INITIALIZE_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_INITIALIZE_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'version-number',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of C_INITIALIZE_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_INITIALIZE_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30),
    undefined,
    undefined
  ),
];


/**
 * @summary The Extension Addition Component Types of C_INITIALIZE_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_INITIALIZE_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'ccr-requirements',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'ready-collision-reservation',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];


let _cached_decoder_for_C_INITIALIZE_RC: $.ASN1Decoder<C_INITIALIZE_RC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) C_INITIALIZE_RC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_INITIALIZE_RC} The decoded data structure.
 */
export function _decode_C_INITIALIZE_RC(el: _Element) {
  if (!_cached_decoder_for_C_INITIALIZE_RC) {
    _cached_decoder_for_C_INITIALIZE_RC = $._decode_implicit<C_INITIALIZE_RC>(
      () =>
        function (el: _Element): C_INITIALIZE_RC {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let version_number: OPTIONAL<C_INITIALIZE_RC_version_number> =
            C_INITIALIZE_RC._default_value_for_version_number;
          let ccr_requirements: OPTIONAL<Ccr_requirements> =
            C_INITIALIZE_RC._default_value_for_ccr_requirements;
          let ready_collision_reservation: OPTIONAL<BOOLEAN> =
            C_INITIALIZE_RC._default_value_for_ready_collision_reservation;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_data: OPTIONAL<User_data>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'version-number': (_el: _Element): void => {
              version_number = $._decode_implicit<C_INITIALIZE_RC_version_number>(
                () => _decode_C_INITIALIZE_RC_version_number
              )(_el);
            },
            'user-data': (_el: _Element): void => {
              user_data = _decode_User_data(_el);
            },
            'ccr-requirements': (_el: _Element): void => {
              ccr_requirements = $._decode_implicit<Ccr_requirements>(
                () => _decode_Ccr_requirements
              )(_el);
            },
            'ready-collision-reservation': (_el: _Element): void => {
              ready_collision_reservation = $._decode_implicit<BOOLEAN>(
                () => $._decodeBoolean
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_C_INITIALIZE_RC,
            _extension_additions_list_spec_for_C_INITIALIZE_RC,
            _root_component_type_list_2_spec_for_C_INITIALIZE_RC,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_INITIALIZE_RC /* SEQUENCE_CONSTRUCTOR_CALL */(
            version_number,
            ccr_requirements,
            ready_collision_reservation,
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_INITIALIZE_RC(el);
}


let _cached_encoder_for_C_INITIALIZE_RC: $.ASN1Encoder<C_INITIALIZE_RC> | null = null;


/**
 * @summary Encodes a(n) C_INITIALIZE_RC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_INITIALIZE_RC, encoded as an ASN.1 Element.
 */
export function _encode_C_INITIALIZE_RC(
  value: C_INITIALIZE_RC,
  elGetter: $.ASN1Encoder<C_INITIALIZE_RC>
) {
  if (!_cached_encoder_for_C_INITIALIZE_RC) {
    _cached_encoder_for_C_INITIALIZE_RC = $._encode_implicit(
      _TagClass.context,
      12,
      () =>
        function (
          value: C_INITIALIZE_RC        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_DEFAULT */ value.version_number === undefined ||
                  $.deepEq(
                    value.version_number,
                    C_INITIALIZE_RC._default_value_for_version_number
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_C_INITIALIZE_RC_version_number,
                        $.BER
                      )(value.version_number, $.BER),
                ],
                [
                  /* IF_DEFAULT */ value.ccr_requirements === undefined ||
                  $.deepEq(
                    value.ccr_requirements,
                    C_INITIALIZE_RC._default_value_for_ccr_requirements
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        1,
                        () => _encode_Ccr_requirements,
                        $.BER
                      )(value.ccr_requirements, $.BER),
                  /* IF_DEFAULT */ value.ready_collision_reservation ===
                    undefined ||
                  $.deepEq(
                    value.ready_collision_reservation,
                    C_INITIALIZE_RC._default_value_for_ready_collision_reservation
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        2,
                        () => $._encodeBoolean,
                        $.BER
                      )(value.ready_collision_reservation, $.BER),
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
  return _cached_encoder_for_C_INITIALIZE_RC(value, elGetter);
}


/* eslint-enable */
