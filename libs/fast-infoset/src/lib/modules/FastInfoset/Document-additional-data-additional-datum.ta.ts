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
import { URI, _decode_URI, _encode_URI } from '../FastInfoset/URI.ta';
export { URI, _decode_URI, _encode_URI } from '../FastInfoset/URI.ta';
import {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta';
export {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta';

/* START_OF_SYMBOL_DEFINITION Document_additional_data_additional_datum */
/**
 * @summary Document_additional_data_additional_datum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Document-additional-data-additional-datum ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Document_additional_data_additional_datum {
  constructor(
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: URI,
    /**
     * @summary `data`.
     * @public
     * @readonly
     */
    readonly data: NonEmptyOctetString
  ) {}

  /**
   * @summary Restructures an object into a Document_additional_data_additional_datum
   * @description
   *
   * This takes an `object` and converts it to a `Document_additional_data_additional_datum`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Document_additional_data_additional_datum`.
   * @returns {Document_additional_data_additional_datum}
   */
  public static _from_object(
    _o: {
      [_K in keyof Document_additional_data_additional_datum]: Document_additional_data_additional_datum[_K];
    }
  ): Document_additional_data_additional_datum {
    return new Document_additional_data_additional_datum(_o.id, _o.data);
  }
}
/* END_OF_SYMBOL_DEFINITION Document_additional_data_additional_datum */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Document_additional_data_additional_datum */
/**
 * @summary The Leading Root Component Types of Document_additional_data_additional_datum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Document_additional_data_additional_datum: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'id',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'data',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Document_additional_data_additional_datum */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Document_additional_data_additional_datum */
/**
 * @summary The Trailing Root Component Types of Document_additional_data_additional_datum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Document_additional_data_additional_datum: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Document_additional_data_additional_datum */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Document_additional_data_additional_datum */
/**
 * @summary The Extension Addition Component Types of Document_additional_data_additional_datum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Document_additional_data_additional_datum: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Document_additional_data_additional_datum */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_additional_data_additional_datum */
let _cached_decoder_for_Document_additional_data_additional_datum: $.ASN1Decoder<Document_additional_data_additional_datum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_additional_data_additional_datum */

/* START_OF_SYMBOL_DEFINITION _decode_Document_additional_data_additional_datum */
/**
 * @summary Decodes an ASN.1 element into a(n) Document_additional_data_additional_datum
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Document_additional_data_additional_datum} The decoded data structure.
 */
export function _decode_Document_additional_data_additional_datum(
  el: _Element
) {
  if (!_cached_decoder_for_Document_additional_data_additional_datum) {
    _cached_decoder_for_Document_additional_data_additional_datum = function (
      el: _Element
    ): Document_additional_data_additional_datum {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Document-additional-data-additional-datum contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'id';
      sequence[1].name = 'data';
      let id!: URI;
      let data!: NonEmptyOctetString;
      id = _decode_URI(sequence[0]);
      data = _decode_NonEmptyOctetString(sequence[1]);
      return new Document_additional_data_additional_datum(id, data);
    };
  }
  return _cached_decoder_for_Document_additional_data_additional_datum(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Document_additional_data_additional_datum */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_additional_data_additional_datum */
let _cached_encoder_for_Document_additional_data_additional_datum: $.ASN1Encoder<Document_additional_data_additional_datum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_additional_data_additional_datum */

/* START_OF_SYMBOL_DEFINITION _encode_Document_additional_data_additional_datum */
/**
 * @summary Encodes a(n) Document_additional_data_additional_datum into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Document_additional_data_additional_datum, encoded as an ASN.1 Element.
 */
export function _encode_Document_additional_data_additional_datum(
  value: Document_additional_data_additional_datum,
  elGetter: $.ASN1Encoder<Document_additional_data_additional_datum>
) {
  if (!_cached_encoder_for_Document_additional_data_additional_datum) {
    _cached_encoder_for_Document_additional_data_additional_datum = function (
      value: Document_additional_data_additional_datum,
      elGetter: $.ASN1Encoder<Document_additional_data_additional_datum>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_URI(value.id, $.BER),
            /* REQUIRED   */ _encode_NonEmptyOctetString(value.data, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Document_additional_data_additional_datum(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_Document_additional_data_additional_datum */

/* eslint-enable */
