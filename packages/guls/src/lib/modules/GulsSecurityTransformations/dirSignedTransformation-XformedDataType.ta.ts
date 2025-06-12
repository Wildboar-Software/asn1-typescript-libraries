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
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.js';

/* START_OF_SYMBOL_DEFINITION dirSignedTransformation_XformedDataType */
/**
 * @summary dirSignedTransformation_XformedDataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirSignedTransformation-XformedDataType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class dirSignedTransformation_XformedDataType {
  constructor(
    /**
     * @summary `toBeSigned`.
     * @public
     * @readonly
     */
    readonly toBeSigned: _Element,
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
   * @summary Restructures an object into a dirSignedTransformation_XformedDataType
   * @description
   *
   * This takes an `object` and converts it to a `dirSignedTransformation_XformedDataType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `dirSignedTransformation_XformedDataType`.
   * @returns {dirSignedTransformation_XformedDataType}
   */
  public static _from_object(
    _o: {
      [_K in keyof dirSignedTransformation_XformedDataType]: dirSignedTransformation_XformedDataType[_K];
    }
  ): dirSignedTransformation_XformedDataType {
    return new dirSignedTransformation_XformedDataType(
      _o.toBeSigned,
      _o.algorithmId,
      _o.encipheredHash
    );
  }
}
/* END_OF_SYMBOL_DEFINITION dirSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_dirSignedTransformation_XformedDataType */
/**
 * @summary The Leading Root Component Types of dirSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_dirSignedTransformation_XformedDataType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'toBeSigned',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'algorithmId',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'encipheredHash',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_dirSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_dirSignedTransformation_XformedDataType */
/**
 * @summary The Trailing Root Component Types of dirSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_dirSignedTransformation_XformedDataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_dirSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_dirSignedTransformation_XformedDataType */
/**
 * @summary The Extension Addition Component Types of dirSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_dirSignedTransformation_XformedDataType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_dirSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_dirSignedTransformation_XformedDataType */
let _cached_decoder_for_dirSignedTransformation_XformedDataType: $.ASN1Decoder<dirSignedTransformation_XformedDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_dirSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _decode_dirSignedTransformation_XformedDataType */
/**
 * @summary Decodes an ASN.1 element into a(n) dirSignedTransformation_XformedDataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {dirSignedTransformation_XformedDataType} The decoded data structure.
 */
export function _decode_dirSignedTransformation_XformedDataType(el: _Element) {
  if (!_cached_decoder_for_dirSignedTransformation_XformedDataType) {
    _cached_decoder_for_dirSignedTransformation_XformedDataType = function (
      el: _Element
    ): dirSignedTransformation_XformedDataType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'dirSignedTransformation-XformedDataType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'toBeSigned';
      sequence[1].name = 'algorithmId';
      sequence[2].name = 'encipheredHash';
      let toBeSigned!: _Element;
      let algorithmId!: AlgorithmIdentifier;
      let encipheredHash!: BIT_STRING;
      toBeSigned = $._decodeAny(sequence[0]);
      algorithmId = _decode_AlgorithmIdentifier(sequence[1]);
      encipheredHash = $._decodeBitString(sequence[2]);
      return new dirSignedTransformation_XformedDataType(
        toBeSigned,
        algorithmId,
        encipheredHash
      );
    };
  }
  return _cached_decoder_for_dirSignedTransformation_XformedDataType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_dirSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_dirSignedTransformation_XformedDataType */
let _cached_encoder_for_dirSignedTransformation_XformedDataType: $.ASN1Encoder<dirSignedTransformation_XformedDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_dirSignedTransformation_XformedDataType */

/* START_OF_SYMBOL_DEFINITION _encode_dirSignedTransformation_XformedDataType */
/**
 * @summary Encodes a(n) dirSignedTransformation_XformedDataType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The dirSignedTransformation_XformedDataType, encoded as an ASN.1 Element.
 */
export function _encode_dirSignedTransformation_XformedDataType(
  value: dirSignedTransformation_XformedDataType,
  elGetter: $.ASN1Encoder<dirSignedTransformation_XformedDataType>
) {
  if (!_cached_encoder_for_dirSignedTransformation_XformedDataType) {
    _cached_encoder_for_dirSignedTransformation_XformedDataType = function (
      value: dirSignedTransformation_XformedDataType,
      elGetter: $.ASN1Encoder<dirSignedTransformation_XformedDataType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeAny(value.toBeSigned, $.BER),
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
  return _cached_encoder_for_dirSignedTransformation_XformedDataType(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_dirSignedTransformation_XformedDataType */

/* eslint-enable */
