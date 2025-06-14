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
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';
/* START_OF_SYMBOL_DEFINITION C_ROLLBACK_RC */
/**
 * @summary C_ROLLBACK_RC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-ROLLBACK-RC ::= [8]  SEQUENCE {...,
 *                                  ...,
 *                                  user-data  User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class C_ROLLBACK_RC {
  constructor(
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
   * @summary Restructures an object into a C_ROLLBACK_RC
   * @description
   *
   * This takes an `object` and converts it to a `C_ROLLBACK_RC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_ROLLBACK_RC`.
   * @returns {C_ROLLBACK_RC}
   */
  public static _from_object(
    _o: { [_K in keyof C_ROLLBACK_RC]: C_ROLLBACK_RC[_K] }
  ): C_ROLLBACK_RC {
    return new C_ROLLBACK_RC(_o._unrecognizedExtensionsList, _o.user_data);
  }
}
/* END_OF_SYMBOL_DEFINITION C_ROLLBACK_RC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_C_ROLLBACK_RC */
/**
 * @summary The Leading Root Component Types of C_ROLLBACK_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_ROLLBACK_RC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_C_ROLLBACK_RC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_C_ROLLBACK_RC */
/**
 * @summary The Trailing Root Component Types of C_ROLLBACK_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_ROLLBACK_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_C_ROLLBACK_RC */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_C_ROLLBACK_RC */
/**
 * @summary The Extension Addition Component Types of C_ROLLBACK_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_ROLLBACK_RC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_C_ROLLBACK_RC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_C_ROLLBACK_RC */
let _cached_decoder_for_C_ROLLBACK_RC: $.ASN1Decoder<C_ROLLBACK_RC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_C_ROLLBACK_RC */

/* START_OF_SYMBOL_DEFINITION _decode_C_ROLLBACK_RC */
/**
 * @summary Decodes an ASN.1 element into a(n) C_ROLLBACK_RC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_ROLLBACK_RC} The decoded data structure.
 */
export function _decode_C_ROLLBACK_RC(el: _Element) {
  if (!_cached_decoder_for_C_ROLLBACK_RC) {
    _cached_decoder_for_C_ROLLBACK_RC = $._decode_implicit<C_ROLLBACK_RC>(
      () =>
        function (el: _Element): C_ROLLBACK_RC {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_data: OPTIONAL<User_data>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'user-data': (_el: _Element): void => {
              user_data = _decode_User_data(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_C_ROLLBACK_RC,
            _extension_additions_list_spec_for_C_ROLLBACK_RC,
            _root_component_type_list_2_spec_for_C_ROLLBACK_RC,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_ROLLBACK_RC /* SEQUENCE_CONSTRUCTOR_CALL */(
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_ROLLBACK_RC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_C_ROLLBACK_RC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_C_ROLLBACK_RC */
let _cached_encoder_for_C_ROLLBACK_RC: $.ASN1Encoder<C_ROLLBACK_RC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_C_ROLLBACK_RC */

/* START_OF_SYMBOL_DEFINITION _encode_C_ROLLBACK_RC */
/**
 * @summary Encodes a(n) C_ROLLBACK_RC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_ROLLBACK_RC, encoded as an ASN.1 Element.
 */
export function _encode_C_ROLLBACK_RC(
  value: C_ROLLBACK_RC,
  elGetter: $.ASN1Encoder<C_ROLLBACK_RC>
) {
  if (!_cached_encoder_for_C_ROLLBACK_RC) {
    _cached_encoder_for_C_ROLLBACK_RC = $._encode_implicit(
      _TagClass.context,
      8,
      () =>
        function (
          value: C_ROLLBACK_RC        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
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
  return _cached_encoder_for_C_ROLLBACK_RC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_C_ROLLBACK_RC */

/* eslint-enable */
