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
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta';
export {
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta';

/* START_OF_SYMBOL_DEFINITION symmetricKeyInformation_KiType */
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
/* END_OF_SYMBOL_DEFINITION symmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_symmetricKeyInformation_KiType */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyIdentifier',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_symmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_symmetricKeyInformation_KiType */
/**
 * @summary The Trailing Root Component Types of symmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_symmetricKeyInformation_KiType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_symmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_symmetricKeyInformation_KiType */
/**
 * @summary The Extension Addition Component Types of symmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_symmetricKeyInformation_KiType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_symmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_symmetricKeyInformation_KiType */
let _cached_decoder_for_symmetricKeyInformation_KiType: $.ASN1Decoder<symmetricKeyInformation_KiType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_symmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _decode_symmetricKeyInformation_KiType */
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
/* END_OF_SYMBOL_DEFINITION _decode_symmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_symmetricKeyInformation_KiType */
let _cached_encoder_for_symmetricKeyInformation_KiType: $.ASN1Encoder<symmetricKeyInformation_KiType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_symmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _encode_symmetricKeyInformation_KiType */
/**
 * @summary Encodes a(n) symmetricKeyInformation_KiType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The symmetricKeyInformation_KiType, encoded as an ASN.1 Element.
 */
export function _encode_symmetricKeyInformation_KiType(
  value: symmetricKeyInformation_KiType,
  elGetter: $.ASN1Encoder<symmetricKeyInformation_KiType>
) {
  if (!_cached_encoder_for_symmetricKeyInformation_KiType) {
    _cached_encoder_for_symmetricKeyInformation_KiType = function (
      value: symmetricKeyInformation_KiType,
      elGetter: $.ASN1Encoder<symmetricKeyInformation_KiType>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_symmetricKeyInformation_KiType */

/* eslint-enable */
