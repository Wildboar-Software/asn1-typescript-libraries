/* eslint-disable */
import {
  BIT_STRING,
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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';


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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'algorithmId',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'encipheredHash',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of dirSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_dirSignedTransformation_XformedDataType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of dirSignedTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_dirSignedTransformation_XformedDataType: $.ComponentSpec[] = [];


let _cached_decoder_for_dirSignedTransformation_XformedDataType: $.ASN1Decoder<dirSignedTransformation_XformedDataType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) dirSignedTransformation_XformedDataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {dirSignedTransformation_XformedDataType} The decoded data structure.
 */
export function _decode_dirSignedTransformation_XformedDataType(el: _Element): dirSignedTransformation_XformedDataType {
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


let _cached_encoder_for_dirSignedTransformation_XformedDataType: $.ASN1Encoder<dirSignedTransformation_XformedDataType> | null = null;


/**
 * @summary Encodes a(n) dirSignedTransformation_XformedDataType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The dirSignedTransformation_XformedDataType, encoded as an ASN.1 Element.
 */
export function _encode_dirSignedTransformation_XformedDataType(
  value: dirSignedTransformation_XformedDataType,
  elGetter: $.ASN1Encoder<dirSignedTransformation_XformedDataType>
): _Element {
  if (!_cached_encoder_for_dirSignedTransformation_XformedDataType) {
    _cached_encoder_for_dirSignedTransformation_XformedDataType = function (
      value: dirSignedTransformation_XformedDataType    ): _Element {
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


/* eslint-enable */
