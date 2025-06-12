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
  ContentEnvelopeInformationType,
  _decode_ContentEnvelopeInformationType,
  _encode_ContentEnvelopeInformationType,
} from '../CMAIL/ContentEnvelopeInformationType.ta.mjs';
export {
  ContentEnvelopeInformationType,
  _decode_ContentEnvelopeInformationType,
  _encode_ContentEnvelopeInformationType,
} from '../CMAIL/ContentEnvelopeInformationType.ta.mjs';
import {
  EntityType,
  _decode_EntityType,
  _encode_EntityType,
} from '../CMAIL/EntityType.ta.mjs';
export {
  EntityType,
  _decode_EntityType,
  _encode_EntityType,
} from '../CMAIL/EntityType.ta.mjs';
import {
  EntityChallengeType,
  _decode_EntityChallengeType,
  _encode_EntityChallengeType,
} from '../CMAIL/EntityChallengeType.ta.mjs';
export {
  EntityChallengeType,
  _decode_EntityChallengeType,
  _encode_EntityChallengeType,
} from '../CMAIL/EntityChallengeType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EntityEnvelopeInformationType */
/**
 * @summary EntityEnvelopeInformationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityEnvelopeInformationType ::= SEQUENCE {
 *     bodyEnvelopeInformation    ContentEnvelopeInformationType,
 *     entity            EntityType,
 *     entityChallenge        EntityChallengeType
 *     }
 * ```
 *
 * @class
 */
export class EntityEnvelopeInformationType {
  constructor(
    /**
     * @summary `bodyEnvelopeInformation`.
     * @public
     * @readonly
     */
    readonly bodyEnvelopeInformation: ContentEnvelopeInformationType,
    /**
     * @summary `entity`.
     * @public
     * @readonly
     */
    readonly entity: EntityType,
    /**
     * @summary `entityChallenge`.
     * @public
     * @readonly
     */
    readonly entityChallenge: EntityChallengeType
  ) {}

  /**
   * @summary Restructures an object into a EntityEnvelopeInformationType
   * @description
   *
   * This takes an `object` and converts it to a `EntityEnvelopeInformationType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EntityEnvelopeInformationType`.
   * @returns {EntityEnvelopeInformationType}
   */
  public static _from_object(
    _o: {
      [_K in keyof EntityEnvelopeInformationType]: EntityEnvelopeInformationType[_K];
    }
  ): EntityEnvelopeInformationType {
    return new EntityEnvelopeInformationType(
      _o.bodyEnvelopeInformation,
      _o.entity,
      _o.entityChallenge
    );
  }
}
/* END_OF_SYMBOL_DEFINITION EntityEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntityEnvelopeInformationType */
/**
 * @summary The Leading Root Component Types of EntityEnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntityEnvelopeInformationType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bodyEnvelopeInformation',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'entity',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'entityChallenge',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntityEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntityEnvelopeInformationType */
/**
 * @summary The Trailing Root Component Types of EntityEnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntityEnvelopeInformationType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntityEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntityEnvelopeInformationType */
/**
 * @summary The Extension Addition Component Types of EntityEnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntityEnvelopeInformationType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntityEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityEnvelopeInformationType */
let _cached_decoder_for_EntityEnvelopeInformationType: $.ASN1Decoder<EntityEnvelopeInformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _decode_EntityEnvelopeInformationType */
/**
 * @summary Decodes an ASN.1 element into a(n) EntityEnvelopeInformationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntityEnvelopeInformationType} The decoded data structure.
 */
export function _decode_EntityEnvelopeInformationType(el: _Element) {
  if (!_cached_decoder_for_EntityEnvelopeInformationType) {
    _cached_decoder_for_EntityEnvelopeInformationType = function (
      el: _Element
    ): EntityEnvelopeInformationType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'EntityEnvelopeInformationType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bodyEnvelopeInformation';
      sequence[1].name = 'entity';
      sequence[2].name = 'entityChallenge';
      let bodyEnvelopeInformation!: ContentEnvelopeInformationType;
      let entity!: EntityType;
      let entityChallenge!: EntityChallengeType;
      bodyEnvelopeInformation = _decode_ContentEnvelopeInformationType(
        sequence[0]
      );
      entity = _decode_EntityType(sequence[1]);
      entityChallenge = _decode_EntityChallengeType(sequence[2]);
      return new EntityEnvelopeInformationType(
        bodyEnvelopeInformation,
        entity,
        entityChallenge
      );
    };
  }
  return _cached_decoder_for_EntityEnvelopeInformationType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntityEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityEnvelopeInformationType */
let _cached_encoder_for_EntityEnvelopeInformationType: $.ASN1Encoder<EntityEnvelopeInformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _encode_EntityEnvelopeInformationType */
/**
 * @summary Encodes a(n) EntityEnvelopeInformationType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityEnvelopeInformationType, encoded as an ASN.1 Element.
 */
export function _encode_EntityEnvelopeInformationType(
  value: EntityEnvelopeInformationType,
  elGetter: $.ASN1Encoder<EntityEnvelopeInformationType>
) {
  if (!_cached_encoder_for_EntityEnvelopeInformationType) {
    _cached_encoder_for_EntityEnvelopeInformationType = function (
      value: EntityEnvelopeInformationType,
      elGetter: $.ASN1Encoder<EntityEnvelopeInformationType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ContentEnvelopeInformationType(
              value.bodyEnvelopeInformation,
              $.BER
            ),
            /* REQUIRED   */ _encode_EntityType(value.entity, $.BER),
            /* REQUIRED   */ _encode_EntityChallengeType(
              value.entityChallenge,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EntityEnvelopeInformationType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntityEnvelopeInformationType */

/* eslint-enable */
