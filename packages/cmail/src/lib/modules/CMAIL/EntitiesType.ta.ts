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
  EntityType,
  _decode_EntityType,
  _encode_EntityType,
} from '../CMAIL/EntityType.ta.js';
export {
  EntityType,
  _decode_EntityType,
  _encode_EntityType,
} from '../CMAIL/EntityType.ta.js';

/* START_OF_SYMBOL_DEFINITION EntitiesType */
/**
 * @summary EntitiesType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntitiesType ::= SEQUENCE {
 *     entity        SEQUENCE(SIZE(1..MAX)) OF entity EntityType
 *     }
 * ```
 *
 * @class
 */
export class EntitiesType {
  constructor(
    /**
     * @summary `entity`.
     * @public
     * @readonly
     */
    readonly entity: EntityType[]
  ) {}

  /**
   * @summary Restructures an object into a EntitiesType
   * @description
   *
   * This takes an `object` and converts it to a `EntitiesType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EntitiesType`.
   * @returns {EntitiesType}
   */
  public static _from_object(
    _o: { [_K in keyof EntitiesType]: EntitiesType[_K] }
  ): EntitiesType {
    return new EntitiesType(_o.entity);
  }
}
/* END_OF_SYMBOL_DEFINITION EntitiesType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntitiesType */
/**
 * @summary The Leading Root Component Types of EntitiesType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntitiesType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entity',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntitiesType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntitiesType */
/**
 * @summary The Trailing Root Component Types of EntitiesType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntitiesType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntitiesType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntitiesType */
/**
 * @summary The Extension Addition Component Types of EntitiesType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntitiesType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntitiesType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntitiesType */
let _cached_decoder_for_EntitiesType: $.ASN1Decoder<EntitiesType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntitiesType */

/* START_OF_SYMBOL_DEFINITION _decode_EntitiesType */
/**
 * @summary Decodes an ASN.1 element into a(n) EntitiesType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntitiesType} The decoded data structure.
 */
export function _decode_EntitiesType(el: _Element) {
  if (!_cached_decoder_for_EntitiesType) {
    _cached_decoder_for_EntitiesType = function (el: _Element): EntitiesType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'EntitiesType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'entity';
      let entity!: EntityType[];
      entity = $._decodeSequenceOf<EntityType>(() => _decode_EntityType)(
        sequence[0]
      );
      return new EntitiesType(entity);
    };
  }
  return _cached_decoder_for_EntitiesType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntitiesType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntitiesType */
let _cached_encoder_for_EntitiesType: $.ASN1Encoder<EntitiesType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntitiesType */

/* START_OF_SYMBOL_DEFINITION _encode_EntitiesType */
/**
 * @summary Encodes a(n) EntitiesType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntitiesType, encoded as an ASN.1 Element.
 */
export function _encode_EntitiesType(
  value: EntitiesType,
  elGetter: $.ASN1Encoder<EntitiesType>
) {
  if (!_cached_encoder_for_EntitiesType) {
    _cached_encoder_for_EntitiesType = function (
      value: EntitiesType,
      elGetter: $.ASN1Encoder<EntitiesType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<EntityType>(
              () => _encode_EntityType,
              $.BER
            )(value.entity, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EntitiesType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntitiesType */

/* eslint-enable */
