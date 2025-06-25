/* eslint-disable */
import {
  OPTIONAL,
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
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';

/**
 * @summary KeyAgreePublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreePublicKey ::= SEQUENCE {
 *     algorithm           AlgorithmIdentifier{KEY-AGREE,
 *                             {SupportedKeyAgreePublicKeys}},
 *     publicKey           BIT STRING,
 *     macAlgorithm        AlgorithmIdentifier{MAC-ALGORITHM,
 *                             {SupportedMACAlgorithms}},
 *     kDF                 AlgorithmIdentifier{KEY-DERIVATION,
 *                             {SupportedKeyDerivationFunctions}}
 *                             OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class KeyAgreePublicKey {
  constructor(
    /**
     * @summary `algorithm`.
     * @public
     * @readonly
     */
    readonly algorithm: AlgorithmIdentifier,
    /**
     * @summary `publicKey`.
     * @public
     * @readonly
     */
    readonly publicKey: BIT_STRING,
    /**
     * @summary `macAlgorithm`.
     * @public
     * @readonly
     */
    readonly macAlgorithm: AlgorithmIdentifier,
    /**
     * @summary `kDF`.
     * @public
     * @readonly
     */
    readonly kDF: OPTIONAL<AlgorithmIdentifier>
  ) {}

  /**
   * @summary Restructures an object into a KeyAgreePublicKey
   * @description
   *
   * This takes an `object` and converts it to a `KeyAgreePublicKey`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KeyAgreePublicKey`.
   * @returns {KeyAgreePublicKey}
   */
  public static _from_object(
    _o: { [_K in keyof KeyAgreePublicKey]: KeyAgreePublicKey[_K] }
  ): KeyAgreePublicKey {
    return new KeyAgreePublicKey(
      _o.algorithm,
      _o.publicKey,
      _o.macAlgorithm,
      _o.kDF
    );
  }
}

/**
 * @summary The Leading Root Component Types of KeyAgreePublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreePublicKey: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'algorithm',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'publicKey',
    false,
    $.hasTag(_TagClass.universal, 3)
  ),
  new $.ComponentSpec(
    'macAlgorithm',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'kDF',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
];

/**
 * @summary The Trailing Root Component Types of KeyAgreePublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreePublicKey: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of KeyAgreePublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreePublicKey: $.ComponentSpec[] = [];

let _cached_decoder_for_KeyAgreePublicKey: $.ASN1Decoder<KeyAgreePublicKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreePublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreePublicKey} The decoded data structure.
 */
export function _decode_KeyAgreePublicKey(el: _Element): KeyAgreePublicKey {
  if (!_cached_decoder_for_KeyAgreePublicKey) {
    _cached_decoder_for_KeyAgreePublicKey = function (
      el: _Element
    ): KeyAgreePublicKey {
      let algorithm!: AlgorithmIdentifier;
      let publicKey!: BIT_STRING;
      let macAlgorithm!: AlgorithmIdentifier;
      let kDF: OPTIONAL<AlgorithmIdentifier>;
      const callbacks: $.DecodingMap = {
        algorithm: (_el: _Element): void => {
          algorithm = _decode_AlgorithmIdentifier(_el);
        },
        publicKey: (_el: _Element): void => {
          publicKey = $._decodeBitString(_el);
        },
        macAlgorithm: (_el: _Element): void => {
          macAlgorithm = _decode_AlgorithmIdentifier(_el);
        },
        kDF: (_el: _Element): void => {
          kDF = _decode_AlgorithmIdentifier(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KeyAgreePublicKey,
        _extension_additions_list_spec_for_KeyAgreePublicKey,
        _root_component_type_list_2_spec_for_KeyAgreePublicKey,
        undefined
      );
      return new KeyAgreePublicKey (
        algorithm,
        publicKey,
        macAlgorithm,
        kDF
      );
    };
  }
  return _cached_decoder_for_KeyAgreePublicKey(el);
}

let _cached_encoder_for_KeyAgreePublicKey: $.ASN1Encoder<KeyAgreePublicKey> | null = null;

/**
 * @summary Encodes a(n) KeyAgreePublicKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreePublicKey, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreePublicKey(
  value: KeyAgreePublicKey,
  elGetter: $.ASN1Encoder<KeyAgreePublicKey>
): _Element {
  if (!_cached_encoder_for_KeyAgreePublicKey) {
    _cached_encoder_for_KeyAgreePublicKey = function (
      value: KeyAgreePublicKey    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AlgorithmIdentifier(
              value.algorithm,
              $.DER
            ),
            /* REQUIRED   */ $._encodeBitString(value.publicKey, $.DER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(
              value.macAlgorithm,
              $.DER
            ),
            /* IF_ABSENT  */ value.kDF === undefined
              ? undefined
              : _encode_AlgorithmIdentifier(value.kDF, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_KeyAgreePublicKey(value, elGetter);
}


/* eslint-enable */
