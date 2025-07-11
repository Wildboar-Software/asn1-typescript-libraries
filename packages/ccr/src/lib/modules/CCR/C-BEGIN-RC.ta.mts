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
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';

/**
 * @summary C_BEGIN_RC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-BEGIN-RC ::= [2]  SEQUENCE {...,
 *                               ...,
 *                               user-data  User-data OPTIONAL
 * }
 * ```
 *
 */
export class C_BEGIN_RC {
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
   * @summary Restructures an object into a C_BEGIN_RC
   * @description
   *
   * This takes an `object` and converts it to a `C_BEGIN_RC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_BEGIN_RC`.
   * @returns {C_BEGIN_RC}
   */
  public static _from_object(
    _o: { [_K in keyof C_BEGIN_RC]: C_BEGIN_RC[_K] }
  ): C_BEGIN_RC {
    return new C_BEGIN_RC(_o._unrecognizedExtensionsList, _o.user_data);
  }
}


/**
 * @summary The Leading Root Component Types of C_BEGIN_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_BEGIN_RC: $.ComponentSpec[] = [];


/**
 * @summary The Trailing Root Component Types of C_BEGIN_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_BEGIN_RC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30)
  ),
];


/**
 * @summary The Extension Addition Component Types of C_BEGIN_RC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_BEGIN_RC: $.ComponentSpec[] = [];


let _cached_decoder_for_C_BEGIN_RC: $.ASN1Decoder<C_BEGIN_RC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) C_BEGIN_RC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_BEGIN_RC} The decoded data structure.
 */
export function _decode_C_BEGIN_RC(el: _Element): C_BEGIN_RC {
  if (!_cached_decoder_for_C_BEGIN_RC) {
    _cached_decoder_for_C_BEGIN_RC = $._decode_implicit<C_BEGIN_RC>(
      () =>
        function (el: _Element): C_BEGIN_RC {
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_data: OPTIONAL<User_data>;
          const callbacks: $.DecodingMap = {
            'user-data': (_el: _Element): void => {
              user_data = _decode_User_data(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_C_BEGIN_RC,
            _extension_additions_list_spec_for_C_BEGIN_RC,
            _root_component_type_list_2_spec_for_C_BEGIN_RC,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_BEGIN_RC (
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_BEGIN_RC(el);
}


let _cached_encoder_for_C_BEGIN_RC: $.ASN1Encoder<C_BEGIN_RC> | null = null;


/**
 * @summary Encodes a(n) C_BEGIN_RC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_BEGIN_RC, encoded as an ASN.1 Element.
 */
export function _encode_C_BEGIN_RC(
  value: C_BEGIN_RC,
  elGetter: $.ASN1Encoder<C_BEGIN_RC>
): _Element {
  if (!_cached_encoder_for_C_BEGIN_RC) {
    _cached_encoder_for_C_BEGIN_RC = $._encode_implicit(
      _TagClass.context,
      2,
      () =>
        function (
          value: C_BEGIN_RC        ): _Element {
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
  return _cached_encoder_for_C_BEGIN_RC(value, elGetter);
}


/* eslint-enable */
