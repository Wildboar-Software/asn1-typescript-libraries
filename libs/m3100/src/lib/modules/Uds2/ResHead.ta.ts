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

/* START_OF_SYMBOL_DEFINITION ResHead */
/**
 * @summary ResHead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResHead ::= SEQUENCE {requestRef  INTEGER
 * }
 * ```
 *
 * @class
 */
export class ResHead {
  constructor(
    /**
     * @summary `requestRef`.
     * @public
     * @readonly
     */
    readonly requestRef: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a ResHead
   * @description
   *
   * This takes an `object` and converts it to a `ResHead`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ResHead`.
   * @returns {ResHead}
   */
  public static _from_object(
    _o: { [_K in keyof ResHead]: ResHead[_K] }
  ): ResHead {
    return new ResHead(_o.requestRef);
  }
}
/* END_OF_SYMBOL_DEFINITION ResHead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResHead */
/**
 * @summary The Leading Root Component Types of ResHead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResHead: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'requestRef',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResHead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResHead */
/**
 * @summary The Trailing Root Component Types of ResHead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResHead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResHead */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResHead */
/**
 * @summary The Extension Addition Component Types of ResHead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResHead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResHead */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResHead */
let _cached_decoder_for_ResHead: $.ASN1Decoder<ResHead> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResHead */

/* START_OF_SYMBOL_DEFINITION _decode_ResHead */
/**
 * @summary Decodes an ASN.1 element into a(n) ResHead
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResHead} The decoded data structure.
 */
export function _decode_ResHead(el: _Element) {
  if (!_cached_decoder_for_ResHead) {
    _cached_decoder_for_ResHead = function (el: _Element): ResHead {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'ResHead contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'requestRef';
      let requestRef!: INTEGER;
      requestRef = $._decodeInteger(sequence[0]);
      return new ResHead(requestRef);
    };
  }
  return _cached_decoder_for_ResHead(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResHead */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResHead */
let _cached_encoder_for_ResHead: $.ASN1Encoder<ResHead> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResHead */

/* START_OF_SYMBOL_DEFINITION _encode_ResHead */
/**
 * @summary Encodes a(n) ResHead into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResHead, encoded as an ASN.1 Element.
 */
export function _encode_ResHead(
  value: ResHead,
  elGetter: $.ASN1Encoder<ResHead>
) {
  if (!_cached_encoder_for_ResHead) {
    _cached_encoder_for_ResHead = function (
      value: ResHead,
      elGetter: $.ASN1Encoder<ResHead>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([/* REQUIRED   */ $._encodeInteger(value.requestRef, $.BER)])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ResHead(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResHead */

/* eslint-enable */
