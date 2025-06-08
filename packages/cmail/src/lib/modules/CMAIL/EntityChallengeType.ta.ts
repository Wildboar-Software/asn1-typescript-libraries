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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  SecretQuestionType,
  _decode_SecretQuestionType,
  _encode_SecretQuestionType,
} from '../CMAIL/SecretQuestionType.ta';
export {
  SecretQuestionType,
  _decode_SecretQuestionType,
  _encode_SecretQuestionType,
} from '../CMAIL/SecretQuestionType.ta';
import {
  SignatureType,
  _decode_SignatureType,
  _encode_SignatureType,
} from '../CMAIL/SignatureType.ta';
export {
  SignatureType,
  _decode_SignatureType,
  _encode_SignatureType,
} from '../CMAIL/SignatureType.ta';

/* START_OF_SYMBOL_DEFINITION EntityChallengeType */
/**
 * @summary EntityChallengeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityChallengeType ::= SEQUENCE {
 *     secretQuestion SecretQuestionType,
 *     signature    SignatureType
 *     }
 * ```
 *
 * @class
 */
export class EntityChallengeType {
  constructor(
    /**
     * @summary `secretQuestion`.
     * @public
     * @readonly
     */
    readonly secretQuestion: SecretQuestionType,
    /**
     * @summary `signature`.
     * @public
     * @readonly
     */
    readonly signature: SignatureType
  ) {}

  /**
   * @summary Restructures an object into a EntityChallengeType
   * @description
   *
   * This takes an `object` and converts it to a `EntityChallengeType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EntityChallengeType`.
   * @returns {EntityChallengeType}
   */
  public static _from_object(
    _o: { [_K in keyof EntityChallengeType]: EntityChallengeType[_K] }
  ): EntityChallengeType {
    return new EntityChallengeType(_o.secretQuestion, _o.signature);
  }
}
/* END_OF_SYMBOL_DEFINITION EntityChallengeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntityChallengeType */
/**
 * @summary The Leading Root Component Types of EntityChallengeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntityChallengeType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'secretQuestion',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  /* FIXME: signature COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntityChallengeType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntityChallengeType */
/**
 * @summary The Trailing Root Component Types of EntityChallengeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntityChallengeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntityChallengeType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntityChallengeType */
/**
 * @summary The Extension Addition Component Types of EntityChallengeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntityChallengeType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntityChallengeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityChallengeType */
let _cached_decoder_for_EntityChallengeType: $.ASN1Decoder<EntityChallengeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityChallengeType */

/* START_OF_SYMBOL_DEFINITION _decode_EntityChallengeType */
/**
 * @summary Decodes an ASN.1 element into a(n) EntityChallengeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntityChallengeType} The decoded data structure.
 */
export function _decode_EntityChallengeType(el: _Element) {
  if (!_cached_decoder_for_EntityChallengeType) {
    _cached_decoder_for_EntityChallengeType = function (
      el: _Element
    ): EntityChallengeType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EntityChallengeType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'secretQuestion';
      sequence[1].name = 'signature';
      let secretQuestion!: SecretQuestionType;
      let signature!: SignatureType;
      secretQuestion = _decode_SecretQuestionType(sequence[0]);
      signature = _decode_SignatureType(sequence[1]);
      return new EntityChallengeType(secretQuestion, signature);
    };
  }
  return _cached_decoder_for_EntityChallengeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntityChallengeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityChallengeType */
let _cached_encoder_for_EntityChallengeType: $.ASN1Encoder<EntityChallengeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityChallengeType */

/* START_OF_SYMBOL_DEFINITION _encode_EntityChallengeType */
/**
 * @summary Encodes a(n) EntityChallengeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityChallengeType, encoded as an ASN.1 Element.
 */
export function _encode_EntityChallengeType(
  value: EntityChallengeType,
  elGetter: $.ASN1Encoder<EntityChallengeType>
) {
  if (!_cached_encoder_for_EntityChallengeType) {
    _cached_encoder_for_EntityChallengeType = function (
      value: EntityChallengeType,
      elGetter: $.ASN1Encoder<EntityChallengeType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_SecretQuestionType(
              value.secretQuestion,
              $.BER
            ),
            /* REQUIRED   */ _encode_SignatureType(value.signature, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EntityChallengeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntityChallengeType */

/* eslint-enable */
