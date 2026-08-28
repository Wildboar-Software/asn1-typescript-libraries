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
 * Wraps the random symmetric cipher key (RSCK, e.g. AES-256)
 * used to encrypt the ENVELOPE body (§8.13). The recipient
 * recovers RSCK with their private key (§9.3). The server
 * never learns RSCK. Annex B does not define a separate
 * component for the wrapped-key octets. ITU-T Rec. X.1341
 * (09/2015)
 * [§8.15](https://www.itu.int/rec/T-REC-X.1341-201509-I),
 * §8.13, §9.3, Annex B.
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
     * @description Symmetric algorithm for the ENVELOPE
     * body. The §8.15 example uses `"AES"`. XER attribute
     * `Algorithm`. ITU-T Rec. X.1341 (09/2015) §8.13, §8.15.
     * @public
     * @readonly
     */
    readonly algorithm: String,
    /**
     * @summary `cipherededKey`.
     * @description ASN.1 spelling of XSD `CipheredKey`
     * (XER attribute). The §8.15 example uses `"RSA"` (the
     * public-key wrap). The Recommendation does not further
     * define this field. ITU-T Rec. X.1341 (09/2015) §8.15,
     * Annex B.
     * @public
     * @readonly
     */
    readonly cipherededKey: String,
    /**
     * @summary `encoding`.
     * @description Encoding of the wrapped key. The §8.15
     * example uses `"base64-DER"`. XER attribute `Encoding`.
     * ITU-T Rec. X.1341 (09/2015) §8.15, Annex B.
     * @public
     * @readonly
     */
    readonly encoding: String,
    /**
     * @summary `keySize`.
     * @description Symmetric key size. The §8.15 example
     * uses `"256"`. XER attribute `KeySize` (XSD: `int`;
     * Annex B: `String`). ITU-T Rec. X.1341 (09/2015)
     * §8.13, §8.15, Annex B.
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
