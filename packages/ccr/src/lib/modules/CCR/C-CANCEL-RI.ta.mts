/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
export {
  User_data,
  _decode_User_data,
  _encode_User_data,
} from '../CCR/User-data.ta.mjs';

/* START_OF_SYMBOL_DEFINITION C_CANCEL_RI */
/**
 * @summary C_CANCEL_RI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-CANCEL-RI ::= [15]  SEQUENCE {...,
 *                                 ...,
 *                                 user-data  User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class C_CANCEL_RI {
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
   * @summary Restructures an object into a C_CANCEL_RI
   * @description
   *
   * This takes an `object` and converts it to a `C_CANCEL_RI`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `C_CANCEL_RI`.
   * @returns {C_CANCEL_RI}
   */
  public static _from_object(
    _o: { [_K in keyof C_CANCEL_RI]: C_CANCEL_RI[_K] }
  ): C_CANCEL_RI {
    return new C_CANCEL_RI(_o._unrecognizedExtensionsList, _o.user_data);
  }
}
/* END_OF_SYMBOL_DEFINITION C_CANCEL_RI */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_C_CANCEL_RI */
/**
 * @summary The Leading Root Component Types of C_CANCEL_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_C_CANCEL_RI: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_C_CANCEL_RI */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_C_CANCEL_RI */
/**
 * @summary The Trailing Root Component Types of C_CANCEL_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_C_CANCEL_RI: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-data',
    true,
    $.hasTag(_TagClass.context, 30),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_C_CANCEL_RI */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_C_CANCEL_RI */
/**
 * @summary The Extension Addition Component Types of C_CANCEL_RI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_C_CANCEL_RI: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_C_CANCEL_RI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_C_CANCEL_RI */
let _cached_decoder_for_C_CANCEL_RI: $.ASN1Decoder<C_CANCEL_RI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_C_CANCEL_RI */

/* START_OF_SYMBOL_DEFINITION _decode_C_CANCEL_RI */
/**
 * @summary Decodes an ASN.1 element into a(n) C_CANCEL_RI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_CANCEL_RI} The decoded data structure.
 */
export function _decode_C_CANCEL_RI(el: _Element) {
  if (!_cached_decoder_for_C_CANCEL_RI) {
    _cached_decoder_for_C_CANCEL_RI = $._decode_implicit<C_CANCEL_RI>(
      () =>
        function (el: _Element): C_CANCEL_RI {
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
            _root_component_type_list_1_spec_for_C_CANCEL_RI,
            _extension_additions_list_spec_for_C_CANCEL_RI,
            _root_component_type_list_2_spec_for_C_CANCEL_RI,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new C_CANCEL_RI /* SEQUENCE_CONSTRUCTOR_CALL */(
            _unrecognizedExtensionsList,
            user_data
          );
        }
    );
  }
  return _cached_decoder_for_C_CANCEL_RI(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_C_CANCEL_RI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_C_CANCEL_RI */
let _cached_encoder_for_C_CANCEL_RI: $.ASN1Encoder<C_CANCEL_RI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_C_CANCEL_RI */

/* START_OF_SYMBOL_DEFINITION _encode_C_CANCEL_RI */
/**
 * @summary Encodes a(n) C_CANCEL_RI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_CANCEL_RI, encoded as an ASN.1 Element.
 */
export function _encode_C_CANCEL_RI(
  value: C_CANCEL_RI,
  elGetter: $.ASN1Encoder<C_CANCEL_RI>
) {
  if (!_cached_encoder_for_C_CANCEL_RI) {
    _cached_encoder_for_C_CANCEL_RI = $._encode_implicit(
      _TagClass.context,
      15,
      () =>
        function (
          value: C_CANCEL_RI,
          elGetter: $.ASN1Encoder<C_CANCEL_RI>
        ): _Element {
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
  return _cached_encoder_for_C_CANCEL_RI(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_C_CANCEL_RI */

/* eslint-enable */
