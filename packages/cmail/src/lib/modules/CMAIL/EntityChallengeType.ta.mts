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
  SecretQuestionType,
  _decode_SecretQuestionType,
  _encode_SecretQuestionType,
} from '../CMAIL/SecretQuestionType.ta.mjs';
import {
  SignatureType,
  _decode_SignatureType,
  _encode_SignatureType,
} from '../CMAIL/SignatureType.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  /* FIXME: signature COULD_NOT_RESOLVE_TYPE_DEF */
];


/**
 * @summary The Trailing Root Component Types of EntityChallengeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntityChallengeType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EntityChallengeType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntityChallengeType: $.ComponentSpec[] = [];


let _cached_decoder_for_EntityChallengeType: $.ASN1Decoder<EntityChallengeType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EntityChallengeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntityChallengeType} The decoded data structure.
 */
export function _decode_EntityChallengeType(el: _Element): EntityChallengeType {
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


let _cached_encoder_for_EntityChallengeType: $.ASN1Encoder<EntityChallengeType> | null = null;


/**
 * @summary Encodes a(n) EntityChallengeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityChallengeType, encoded as an ASN.1 Element.
 */
export function _encode_EntityChallengeType(
  value: EntityChallengeType,
  elGetter: $.ASN1Encoder<EntityChallengeType>
): _Element {
  if (!_cached_encoder_for_EntityChallengeType) {
    _cached_encoder_for_EntityChallengeType = function (
      value: EntityChallengeType    ): _Element {
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


/* eslint-enable */
