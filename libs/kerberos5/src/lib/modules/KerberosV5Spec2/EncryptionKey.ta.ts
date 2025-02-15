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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta';
export {
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta';

/* START_OF_SYMBOL_DEFINITION EncryptionKey */
/**
 * @summary EncryptionKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionKey ::= SEQUENCE {
 *         keytype         [0] Int32 -- actually encryption type --,
 *         keyvalue        [1] OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class EncryptionKey {
  constructor(
    /**
     * @summary `keytype`.
     * @public
     * @readonly
     */
    readonly keytype: Int32,
    /**
     * @summary `keyvalue`.
     * @public
     * @readonly
     */
    readonly keyvalue: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a EncryptionKey
   * @description
   *
   * This takes an `object` and converts it to a `EncryptionKey`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncryptionKey`.
   * @returns {EncryptionKey}
   */
  public static _from_object(
    _o: { [_K in keyof EncryptionKey]: EncryptionKey[_K] }
  ): EncryptionKey {
    return new EncryptionKey(_o.keytype, _o.keyvalue);
  }
}
/* END_OF_SYMBOL_DEFINITION EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptionKey */
/**
 * @summary The Leading Root Component Types of EncryptionKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptionKey: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'keytype',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyvalue',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptionKey */
/**
 * @summary The Trailing Root Component Types of EncryptionKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptionKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptionKey */
/**
 * @summary The Extension Addition Component Types of EncryptionKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptionKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionKey */
let _cached_decoder_for_EncryptionKey: $.ASN1Decoder<EncryptionKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptionKey */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptionKey} The decoded data structure.
 */
export function _decode_EncryptionKey(el: _Element) {
  if (!_cached_decoder_for_EncryptionKey) {
    _cached_decoder_for_EncryptionKey = function (el: _Element): EncryptionKey {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EncryptionKey contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'keytype';
      sequence[1].name = 'keyvalue';
      let keytype!: Int32;
      let keyvalue!: OCTET_STRING;
      keytype = $._decode_explicit<Int32>(() => _decode_Int32)(sequence[0]);
      keyvalue = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(
        sequence[1]
      );
      return new EncryptionKey(keytype, keyvalue);
    };
  }
  return _cached_decoder_for_EncryptionKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionKey */
let _cached_encoder_for_EncryptionKey: $.ASN1Encoder<EncryptionKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptionKey */
/**
 * @summary Encodes a(n) EncryptionKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionKey, encoded as an ASN.1 Element.
 */
export function _encode_EncryptionKey(
  value: EncryptionKey,
  elGetter: $.ASN1Encoder<EncryptionKey>
) {
  if (!_cached_encoder_for_EncryptionKey) {
    _cached_encoder_for_EncryptionKey = function (
      value: EncryptionKey,
      elGetter: $.ASN1Encoder<EncryptionKey>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.BER
            )(value.keytype, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => $._encodeOctetString,
              $.BER
            )(value.keyvalue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EncryptionKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptionKey */

/* eslint-enable */
