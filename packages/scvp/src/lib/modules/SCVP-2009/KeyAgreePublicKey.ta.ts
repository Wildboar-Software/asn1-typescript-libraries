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
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.js';

/* START_OF_SYMBOL_DEFINITION KeyAgreePublicKey */
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
/* END_OF_SYMBOL_DEFINITION KeyAgreePublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreePublicKey */
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
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'publicKey',
    false,
    $.hasTag(_TagClass.universal, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'macAlgorithm',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'kDF',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreePublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreePublicKey */
/**
 * @summary The Trailing Root Component Types of KeyAgreePublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreePublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreePublicKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreePublicKey */
/**
 * @summary The Extension Addition Component Types of KeyAgreePublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreePublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreePublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreePublicKey */
let _cached_decoder_for_KeyAgreePublicKey: $.ASN1Decoder<KeyAgreePublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreePublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreePublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreePublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreePublicKey} The decoded data structure.
 */
export function _decode_KeyAgreePublicKey(el: _Element) {
  if (!_cached_decoder_for_KeyAgreePublicKey) {
    _cached_decoder_for_KeyAgreePublicKey = function (
      el: _Element
    ): KeyAgreePublicKey {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let algorithm!: AlgorithmIdentifier;
      let publicKey!: BIT_STRING;
      let macAlgorithm!: AlgorithmIdentifier;
      let kDF: OPTIONAL<AlgorithmIdentifier>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KeyAgreePublicKey,
        _extension_additions_list_spec_for_KeyAgreePublicKey,
        _root_component_type_list_2_spec_for_KeyAgreePublicKey,
        undefined
      );
      return new KeyAgreePublicKey /* SEQUENCE_CONSTRUCTOR_CALL */(
        algorithm,
        publicKey,
        macAlgorithm,
        kDF
      );
    };
  }
  return _cached_decoder_for_KeyAgreePublicKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreePublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreePublicKey */
let _cached_encoder_for_KeyAgreePublicKey: $.ASN1Encoder<KeyAgreePublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreePublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreePublicKey */
/**
 * @summary Encodes a(n) KeyAgreePublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreePublicKey, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreePublicKey(
  value: KeyAgreePublicKey,
  elGetter: $.ASN1Encoder<KeyAgreePublicKey>
) {
  if (!_cached_encoder_for_KeyAgreePublicKey) {
    _cached_encoder_for_KeyAgreePublicKey = function (
      value: KeyAgreePublicKey,
      elGetter: $.ASN1Encoder<KeyAgreePublicKey>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AlgorithmIdentifier(
              value.algorithm,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBitString(value.publicKey, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(
              value.macAlgorithm,
              $.BER
            ),
            /* IF_ABSENT  */ value.kDF === undefined
              ? undefined
              : _encode_AlgorithmIdentifier(value.kDF, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_KeyAgreePublicKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreePublicKey */

/* eslint-enable */
