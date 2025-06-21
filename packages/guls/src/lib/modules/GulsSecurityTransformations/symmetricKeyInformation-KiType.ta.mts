/* eslint-disable */
import {
  INTEGER,
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
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta.mjs';

/**
 * @summary symmetricKeyInformation_KiType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * symmetricKeyInformation-KiType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class symmetricKeyInformation_KiType {
  constructor(
    /**
     * @summary `entityId`.
     * @public
     * @readonly
     */
    readonly entityId: SecurityIdentity,
    /**
     * @summary `keyIdentifier`.
     * @public
     * @readonly
     */
    readonly keyIdentifier: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a symmetricKeyInformation_KiType
   * @description
   *
   * This takes an `object` and converts it to a `symmetricKeyInformation_KiType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `symmetricKeyInformation_KiType`.
   * @returns {symmetricKeyInformation_KiType}
   */
  public static _from_object(
    _o: {
      [_K in keyof symmetricKeyInformation_KiType]: symmetricKeyInformation_KiType[_K];
    }
  ): symmetricKeyInformation_KiType {
    return new symmetricKeyInformation_KiType(_o.entityId, _o.keyIdentifier);
  }
}


/**
 * @summary The Leading Root Component Types of symmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_symmetricKeyInformation_KiType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entityId',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'keyIdentifier',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of symmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_symmetricKeyInformation_KiType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of symmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_symmetricKeyInformation_KiType: $.ComponentSpec[] = [];


let _cached_decoder_for_symmetricKeyInformation_KiType: $.ASN1Decoder<symmetricKeyInformation_KiType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) symmetricKeyInformation_KiType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {symmetricKeyInformation_KiType} The decoded data structure.
 */
export function _decode_symmetricKeyInformation_KiType(el: _Element) {
  if (!_cached_decoder_for_symmetricKeyInformation_KiType) {
    _cached_decoder_for_symmetricKeyInformation_KiType = function (
      el: _Element
    ): symmetricKeyInformation_KiType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'symmetricKeyInformation-KiType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'entityId';
      sequence[1].name = 'keyIdentifier';
      let entityId!: SecurityIdentity;
      let keyIdentifier!: INTEGER;
      entityId = _decode_SecurityIdentity(sequence[0]);
      keyIdentifier = $._decodeInteger(sequence[1]);
      return new symmetricKeyInformation_KiType(entityId, keyIdentifier);
    };
  }
  return _cached_decoder_for_symmetricKeyInformation_KiType(el);
}


let _cached_encoder_for_symmetricKeyInformation_KiType: $.ASN1Encoder<symmetricKeyInformation_KiType> | null = null;


/**
 * @summary Encodes a(n) symmetricKeyInformation_KiType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The symmetricKeyInformation_KiType, encoded as an ASN.1 Element.
 */
export function _encode_symmetricKeyInformation_KiType(
  value: symmetricKeyInformation_KiType,
  elGetter: $.ASN1Encoder<symmetricKeyInformation_KiType>
) {
  if (!_cached_encoder_for_symmetricKeyInformation_KiType) {
    _cached_encoder_for_symmetricKeyInformation_KiType = function (
      value: symmetricKeyInformation_KiType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_SecurityIdentity(value.entityId, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.keyIdentifier, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_symmetricKeyInformation_KiType(value, elGetter);
}


/* eslint-enable */
