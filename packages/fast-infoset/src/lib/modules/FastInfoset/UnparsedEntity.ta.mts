/* eslint-disable */
import {
  OPTIONAL,
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
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
/**
 * @summary UnparsedEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnparsedEntity ::= SEQUENCE {
 *   name               IdentifyingStringOrIndex-- OTHER NCNAME category --,
 *   system-identifier  IdentifyingStringOrIndex-- OTHER URI category --,
 *   public-identifier  IdentifyingStringOrIndex OPTIONAL-- OTHER URI category --,
 *   notation-name      IdentifyingStringOrIndex
 * }
 * ```
 *
 * @class
 */
export class UnparsedEntity {
  constructor(
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: IdentifyingStringOrIndex,
    /**
     * @summary `system_identifier`.
     * @public
     * @readonly
     */
    readonly system_identifier: IdentifyingStringOrIndex,
    /**
     * @summary `public_identifier`.
     * @public
     * @readonly
     */
    readonly public_identifier: OPTIONAL<IdentifyingStringOrIndex>,
    /**
     * @summary `notation_name`.
     * @public
     * @readonly
     */
    readonly notation_name: IdentifyingStringOrIndex
  ) {}

  /**
   * @summary Restructures an object into a UnparsedEntity
   * @description
   *
   * This takes an `object` and converts it to a `UnparsedEntity`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnparsedEntity`.
   * @returns {UnparsedEntity}
   */
  public static _from_object(
    _o: { [_K in keyof UnparsedEntity]: UnparsedEntity[_K] }
  ): UnparsedEntity {
    return new UnparsedEntity(
      _o.name,
      _o.system_identifier,
      _o.public_identifier,
      _o.notation_name
    );
  }
}

/**
 * @summary The Leading Root Component Types of UnparsedEntity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnparsedEntity: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'name',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'system-identifier',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'public-identifier',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'notation-name',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];

/**
 * @summary The Trailing Root Component Types of UnparsedEntity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnparsedEntity: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UnparsedEntity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnparsedEntity: $.ComponentSpec[] = [];

let _cached_decoder_for_UnparsedEntity: $.ASN1Decoder<UnparsedEntity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnparsedEntity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnparsedEntity} The decoded data structure.
 */
export function _decode_UnparsedEntity(el: _Element) {
  if (!_cached_decoder_for_UnparsedEntity) {
    _cached_decoder_for_UnparsedEntity = function (
      el: _Element
    ): UnparsedEntity {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let name!: IdentifyingStringOrIndex;
      let system_identifier!: IdentifyingStringOrIndex;
      let public_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      let notation_name!: IdentifyingStringOrIndex;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        name: (_el: _Element): void => {
          name = _decode_IdentifyingStringOrIndex(_el);
        },
        'system-identifier': (_el: _Element): void => {
          system_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
        'public-identifier': (_el: _Element): void => {
          public_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
        'notation-name': (_el: _Element): void => {
          notation_name = _decode_IdentifyingStringOrIndex(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UnparsedEntity,
        _extension_additions_list_spec_for_UnparsedEntity,
        _root_component_type_list_2_spec_for_UnparsedEntity,
        undefined
      );
      return new UnparsedEntity /* SEQUENCE_CONSTRUCTOR_CALL */(
        name,
        system_identifier,
        public_identifier,
        notation_name
      );
    };
  }
  return _cached_decoder_for_UnparsedEntity(el);
}

let _cached_encoder_for_UnparsedEntity: $.ASN1Encoder<UnparsedEntity> | null = null;

/**
 * @summary Encodes a(n) UnparsedEntity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnparsedEntity, encoded as an ASN.1 Element.
 */
export function _encode_UnparsedEntity(
  value: UnparsedEntity,
  elGetter: $.ASN1Encoder<UnparsedEntity>
) {
  if (!_cached_encoder_for_UnparsedEntity) {
    _cached_encoder_for_UnparsedEntity = function (
      value: UnparsedEntity    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_IdentifyingStringOrIndex(
              value.name,
              $.BER
            ),
            /* REQUIRED   */ _encode_IdentifyingStringOrIndex(
              value.system_identifier,
              $.BER
            ),
            /* IF_ABSENT  */ value.public_identifier === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(
                  value.public_identifier,
                  $.BER
                ),
            /* REQUIRED   */ _encode_IdentifyingStringOrIndex(
              value.notation_name,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnparsedEntity(value, elGetter);
}


/* eslint-enable */
