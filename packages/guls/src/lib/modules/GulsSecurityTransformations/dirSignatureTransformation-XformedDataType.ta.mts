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
  AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION dirSignatureTransformation_XformedDataType */
/**
 * @summary dirSignatureTransformation_XformedDataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirSignatureTransformation-XformedDataType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class dirSignatureTransformation_XformedDataType {
  constructor(
    /**
     * @summary `algorithmId`.
     * @public
     * @readonly
     */
    readonly algorithmId: AlgorithmIdentifier,
    /**
     * @summary `encipheredHash`.
     * @public
     * @readonly
     */
    readonly encipheredHash: BIT_STRING
  ) {}

  /**
   * @summary Restructures an object into a dirSignatureTransformation_XformedDataType
   * @description
   *
   * This takes an `object` and converts it to a `dirSignatureTransformation_XformedDataType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `dirSignatureTransformation_XformedDataType`.
   * @returns {dirSignatureTransformation_XformedDataType}
   */
  public static _from_object(
    _o: {
      [_K in keyof dirSignatureTransformation_XformedDataType]: dirSignatureTransformation_XformedDataType[_K];
    }
  ): dirSignatureTransformation_XformedDataType {
    return new dirSignatureTransformation_XformedDataType(
      _o.algorithmId,
      _o.encipheredHash
    );
  }
}
/* END_OF_SYMBOL_DEFINITION dirSignatureTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_dirSignatureTransformation_XformedDataType */
/**
 * @summary The Leading Root Component Types of dirSignatureTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_dirSignatureTransformation_XformedDataType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'algorithmId',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'encipheredHash',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_dirSignatureTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_dirSignatureTransformation_XformedDataType */
/**
 * @summary The Trailing Root Component Types of dirSignatureTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_dirSignatureTransformation_XformedDataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_dirSignatureTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_dirSignatureTransformation_XformedDataType */
/**
 * @summary The Extension Addition Component Types of dirSignatureTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_dirSignatureTransformation_XformedDataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_dirSignatureTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_dirSignatureTransformation_XformedDataType */
let _cached_decoder_for_dirSignatureTransformation_XformedDataType: $.ASN1Decoder<dirSignatureTransformation_XformedDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_dirSignatureTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _decode_dirSignatureTransformation_XformedDataType */
/**
 * @summary Decodes an ASN.1 element into a(n) dirSignatureTransformation_XformedDataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {dirSignatureTransformation_XformedDataType} The decoded data structure.
 */
export function _decode_dirSignatureTransformation_XformedDataType(
  el: _Element
) {
  if (!_cached_decoder_for_dirSignatureTransformation_XformedDataType) {
    _cached_decoder_for_dirSignatureTransformation_XformedDataType = function (
      el: _Element
    ): dirSignatureTransformation_XformedDataType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'dirSignatureTransformation-XformedDataType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'algorithmId';
      sequence[1].name = 'encipheredHash';
      let algorithmId!: AlgorithmIdentifier;
      let encipheredHash!: BIT_STRING;
      algorithmId = _decode_AlgorithmIdentifier(sequence[0]);
      encipheredHash = $._decodeBitString(sequence[1]);
      return new dirSignatureTransformation_XformedDataType(
        algorithmId,
        encipheredHash
      );
    };
  }
  return _cached_decoder_for_dirSignatureTransformation_XformedDataType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_dirSignatureTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_dirSignatureTransformation_XformedDataType */
let _cached_encoder_for_dirSignatureTransformation_XformedDataType: $.ASN1Encoder<dirSignatureTransformation_XformedDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_dirSignatureTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _encode_dirSignatureTransformation_XformedDataType */
/**
 * @summary Encodes a(n) dirSignatureTransformation_XformedDataType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The dirSignatureTransformation_XformedDataType, encoded as an ASN.1 Element.
 */
export function _encode_dirSignatureTransformation_XformedDataType(
  value: dirSignatureTransformation_XformedDataType,
  elGetter: $.ASN1Encoder<dirSignatureTransformation_XformedDataType>
) {
  if (!_cached_encoder_for_dirSignatureTransformation_XformedDataType) {
    _cached_encoder_for_dirSignatureTransformation_XformedDataType = function (
      value: dirSignatureTransformation_XformedDataType,
      elGetter: $.ASN1Encoder<dirSignatureTransformation_XformedDataType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AlgorithmIdentifier(
              value.algorithmId,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBitString(value.encipheredHash, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_dirSignatureTransformation_XformedDataType(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_dirSignatureTransformation_XformedDataType */

/* eslint-enable */
