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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.js';
export {
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.js';
import {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';
export {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';

/* START_OF_SYMBOL_DEFINITION LastReq_Item */
/**
 * @summary LastReq_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastReq-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class LastReq_Item {
  constructor(
    /**
     * @summary `lr_type`.
     * @public
     * @readonly
     */
    readonly lr_type: Int32,
    /**
     * @summary `lr_value`.
     * @public
     * @readonly
     */
    readonly lr_value: KerberosTime
  ) {}

  /**
   * @summary Restructures an object into a LastReq_Item
   * @description
   *
   * This takes an `object` and converts it to a `LastReq_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `LastReq_Item`.
   * @returns {LastReq_Item}
   */
  public static _from_object(
    _o: { [_K in keyof LastReq_Item]: LastReq_Item[_K] }
  ): LastReq_Item {
    return new LastReq_Item(_o.lr_type, _o.lr_value);
  }
}
/* END_OF_SYMBOL_DEFINITION LastReq_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LastReq_Item */
/**
 * @summary The Leading Root Component Types of LastReq_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LastReq_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'lr-type',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'lr-value',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LastReq_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LastReq_Item */
/**
 * @summary The Trailing Root Component Types of LastReq_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LastReq_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LastReq_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LastReq_Item */
/**
 * @summary The Extension Addition Component Types of LastReq_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LastReq_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LastReq_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LastReq_Item */
let _cached_decoder_for_LastReq_Item: $.ASN1Decoder<LastReq_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LastReq_Item */

/* START_OF_SYMBOL_DEFINITION _decode_LastReq_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) LastReq_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastReq_Item} The decoded data structure.
 */
export function _decode_LastReq_Item(el: _Element) {
  if (!_cached_decoder_for_LastReq_Item) {
    _cached_decoder_for_LastReq_Item = function (el: _Element): LastReq_Item {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'LastReq-Item contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'lr-type';
      sequence[1].name = 'lr-value';
      let lr_type!: Int32;
      let lr_value!: KerberosTime;
      lr_type = $._decode_explicit<Int32>(() => _decode_Int32)(sequence[0]);
      lr_value = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(
        sequence[1]
      );
      return new LastReq_Item(lr_type, lr_value);
    };
  }
  return _cached_decoder_for_LastReq_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LastReq_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LastReq_Item */
let _cached_encoder_for_LastReq_Item: $.ASN1Encoder<LastReq_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LastReq_Item */

/* START_OF_SYMBOL_DEFINITION _encode_LastReq_Item */
/**
 * @summary Encodes a(n) LastReq_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastReq_Item, encoded as an ASN.1 Element.
 */
export function _encode_LastReq_Item(
  value: LastReq_Item,
  elGetter: $.ASN1Encoder<LastReq_Item>
) {
  if (!_cached_encoder_for_LastReq_Item) {
    _cached_encoder_for_LastReq_Item = function (
      value: LastReq_Item,
      elGetter: $.ASN1Encoder<LastReq_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.BER
            )(value.lr_type, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_KerberosTime,
              $.BER
            )(value.lr_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_LastReq_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LastReq_Item */

/* eslint-enable */
