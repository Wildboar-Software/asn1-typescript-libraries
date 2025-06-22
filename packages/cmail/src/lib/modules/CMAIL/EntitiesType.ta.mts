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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
  EntityType,
  _decode_EntityType,
  _encode_EntityType,
} from '../CMAIL/EntityType.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of EntitiesType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntitiesType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EntitiesType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntitiesType: $.ComponentSpec[] = [];


let _cached_decoder_for_EntitiesType: $.ASN1Decoder<EntitiesType> | null = null;


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


let _cached_encoder_for_EntitiesType: $.ASN1Encoder<EntitiesType> | null = null;


/**
 * @summary Encodes a(n) EntitiesType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntitiesType, encoded as an ASN.1 Element.
 */
export function _encode_EntitiesType(
  value: EntitiesType,
  elGetter: $.ASN1Encoder<EntitiesType>
) {
  if (!_cached_encoder_for_EntitiesType) {
    _cached_encoder_for_EntitiesType = function (
      value: EntitiesType    ): _Element {
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


/* eslint-enable */
