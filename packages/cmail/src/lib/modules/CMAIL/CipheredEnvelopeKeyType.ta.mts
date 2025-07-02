/* eslint-disable */
import {
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
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta.mjs';


/**
 * @summary CipheredEnvelopeKeyType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CipheredEnvelopeKeyType ::= SEQUENCE {
 *     algorithm    String,
 *     cipherededKey    String,
 *     encoding    String,
 *     keySize        String
 *     }
 * ```
 *
 */
export class CipheredEnvelopeKeyType {
  constructor(
    /**
     * @summary `algorithm`.
     * @public
     * @readonly
     */
    readonly algorithm: String,
    /**
     * @summary `cipherededKey`.
     * @public
     * @readonly
     */
    readonly cipherededKey: String,
    /**
     * @summary `encoding`.
     * @public
     * @readonly
     */
    readonly encoding: String,
    /**
     * @summary `keySize`.
     * @public
     * @readonly
     */
    readonly keySize: String
  ) {}

  /**
   * @summary Restructures an object into a CipheredEnvelopeKeyType
   * @description
   *
   * This takes an `object` and converts it to a `CipheredEnvelopeKeyType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CipheredEnvelopeKeyType`.
   * @returns {CipheredEnvelopeKeyType}
   */
  public static _from_object(
    _o: { [_K in keyof CipheredEnvelopeKeyType]: CipheredEnvelopeKeyType[_K] }
  ): CipheredEnvelopeKeyType {
    return new CipheredEnvelopeKeyType(
      _o.algorithm,
      _o.cipherededKey,
      _o.encoding,
      _o.keySize
    );
  }
}


/**
 * @summary The Leading Root Component Types of CipheredEnvelopeKeyType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CipheredEnvelopeKeyType: $.ComponentSpec[] = [
  new $.ComponentSpec("algorithm", false, $.hasTag(_TagClass.context, 0)),
  new $.ComponentSpec("cipherededKey", false, $.hasTag(_TagClass.context, 1)),
  new $.ComponentSpec("encoding", false, $.hasTag(_TagClass.context, 2)),
  new $.ComponentSpec("keySize", false, $.hasTag(_TagClass.context, 3)),
];


/**
 * @summary The Trailing Root Component Types of CipheredEnvelopeKeyType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CipheredEnvelopeKeyType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CipheredEnvelopeKeyType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CipheredEnvelopeKeyType: $.ComponentSpec[] = [];


let _cached_decoder_for_CipheredEnvelopeKeyType: $.ASN1Decoder<CipheredEnvelopeKeyType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CipheredEnvelopeKeyType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CipheredEnvelopeKeyType} The decoded data structure.
 */
export function _decode_CipheredEnvelopeKeyType(el: _Element): CipheredEnvelopeKeyType {
  if (!_cached_decoder_for_CipheredEnvelopeKeyType) {
    _cached_decoder_for_CipheredEnvelopeKeyType = function (
      el: _Element
    ): CipheredEnvelopeKeyType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 4) {
        throw new _ConstructionError(
          'CipheredEnvelopeKeyType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'algorithm';
      sequence[1].name = 'cipherededKey';
      sequence[2].name = 'encoding';
      sequence[3].name = 'keySize';
      let algorithm!: String;
      let cipherededKey!: String;
      let encoding!: String;
      let keySize!: String;
      algorithm = _decode_String(sequence[0]);
      cipherededKey = _decode_String(sequence[1]);
      encoding = _decode_String(sequence[2]);
      keySize = _decode_String(sequence[3]);
      return new CipheredEnvelopeKeyType(
        algorithm,
        cipherededKey,
        encoding,
        keySize
      );
    };
  }
  return _cached_decoder_for_CipheredEnvelopeKeyType(el);
}


let _cached_encoder_for_CipheredEnvelopeKeyType: $.ASN1Encoder<CipheredEnvelopeKeyType> | null = null;


/**
 * @summary Encodes a(n) CipheredEnvelopeKeyType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CipheredEnvelopeKeyType, encoded as an ASN.1 Element.
 */
export function _encode_CipheredEnvelopeKeyType(
  value: CipheredEnvelopeKeyType,
  elGetter: $.ASN1Encoder<CipheredEnvelopeKeyType>
): _Element {
  if (!_cached_encoder_for_CipheredEnvelopeKeyType) {
    _cached_encoder_for_CipheredEnvelopeKeyType = function (
      value: CipheredEnvelopeKeyType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_String(value.algorithm, $.BER),
            /* REQUIRED   */ _encode_String(value.cipherededKey, $.BER),
            /* REQUIRED   */ _encode_String(value.encoding, $.BER),
            /* REQUIRED   */ _encode_String(value.keySize, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CipheredEnvelopeKeyType(value, elGetter);
}


/* eslint-enable */
