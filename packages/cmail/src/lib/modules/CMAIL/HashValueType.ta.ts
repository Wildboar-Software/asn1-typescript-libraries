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
  HashValueType_algorithmOID,
  _enum_for_HashValueType_algorithmOID,
  HashValueType_algorithmOID_sha_1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sha_1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HashValueType_algorithmOID_sha_256 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sha_256 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_HashValueType_algorithmOID,
  _encode_HashValueType_algorithmOID,
} from '../CMAIL/HashValueType-algorithmOID.ta.js';
export {
  HashValueType_algorithmOID,
  _enum_for_HashValueType_algorithmOID,
  HashValueType_algorithmOID_sha_1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sha_1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HashValueType_algorithmOID_sha_256 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sha_256 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_HashValueType_algorithmOID,
  _encode_HashValueType_algorithmOID,
} from '../CMAIL/HashValueType-algorithmOID.ta.js';

/* START_OF_SYMBOL_DEFINITION HashValueType */
/**
 * @summary HashValueType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType ::= SEQUENCE {
 *     algorithmOID    ENUMERATED {
 *         sha-1,
 *         sha-256
 *         }
 *     }
 * ```
 *
 * @class
 */
export class HashValueType {
  constructor(
    /**
     * @summary `algorithmOID`.
     * @public
     * @readonly
     */
    readonly algorithmOID: HashValueType_algorithmOID
  ) {}

  /**
   * @summary Restructures an object into a HashValueType
   * @description
   *
   * This takes an `object` and converts it to a `HashValueType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `HashValueType`.
   * @returns {HashValueType}
   */
  public static _from_object(
    _o: { [_K in keyof HashValueType]: HashValueType[_K] }
  ): HashValueType {
    return new HashValueType(_o.algorithmOID);
  }

  /**
   * @summary The enum used as the type of the component `algorithmOID`
   * @public
   * @static
   */

  public static _enum_for_algorithmOID = _enum_for_HashValueType_algorithmOID;
}
/* END_OF_SYMBOL_DEFINITION HashValueType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_HashValueType */
/**
 * @summary The Leading Root Component Types of HashValueType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HashValueType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'algorithmOID',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_HashValueType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_HashValueType */
/**
 * @summary The Trailing Root Component Types of HashValueType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HashValueType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_HashValueType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_HashValueType */
/**
 * @summary The Extension Addition Component Types of HashValueType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HashValueType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_HashValueType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HashValueType */
let _cached_decoder_for_HashValueType: $.ASN1Decoder<HashValueType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HashValueType */

/* START_OF_SYMBOL_DEFINITION _decode_HashValueType */
/**
 * @summary Decodes an ASN.1 element into a(n) HashValueType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashValueType} The decoded data structure.
 */
export function _decode_HashValueType(el: _Element) {
  if (!_cached_decoder_for_HashValueType) {
    _cached_decoder_for_HashValueType = function (el: _Element): HashValueType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'HashValueType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'algorithmOID';
      let algorithmOID!: HashValueType_algorithmOID;
      algorithmOID = _decode_HashValueType_algorithmOID(sequence[0]);
      return new HashValueType(algorithmOID);
    };
  }
  return _cached_decoder_for_HashValueType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HashValueType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HashValueType */
let _cached_encoder_for_HashValueType: $.ASN1Encoder<HashValueType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HashValueType */

/* START_OF_SYMBOL_DEFINITION _encode_HashValueType */
/**
 * @summary Encodes a(n) HashValueType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashValueType, encoded as an ASN.1 Element.
 */
export function _encode_HashValueType(
  value: HashValueType,
  elGetter: $.ASN1Encoder<HashValueType>
) {
  if (!_cached_encoder_for_HashValueType) {
    _cached_encoder_for_HashValueType = function (
      value: HashValueType,
      elGetter: $.ASN1Encoder<HashValueType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_HashValueType_algorithmOID(
              value.algorithmOID,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_HashValueType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HashValueType */

/* eslint-enable */
