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

/* START_OF_SYMBOL_DEFINITION PagedResults */
/**
 * @summary PagedResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PagedResults ::= SEQUENCE {
 *   pageSize        INTEGER(1..MAX) OPTIONAL,
 *   pageNumber      INTEGER(1..MAX) OPTIONAL,
 *   queryReference  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PagedResults {
  constructor(
    /**
     * @summary `pageSize`.
     * @public
     * @readonly
     */
    readonly pageSize: OPTIONAL<INTEGER>,
    /**
     * @summary `pageNumber`.
     * @public
     * @readonly
     */
    readonly pageNumber: OPTIONAL<INTEGER>,
    /**
     * @summary `queryReference`.
     * @public
     * @readonly
     */
    readonly queryReference: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a PagedResults
   * @description
   *
   * This takes an `object` and converts it to a `PagedResults`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PagedResults`.
   * @returns {PagedResults}
   */
  public static _from_object(
    _o: { [_K in keyof PagedResults]: PagedResults[_K] }
  ): PagedResults {
    return new PagedResults(_o.pageSize, _o.pageNumber, _o.queryReference);
  }
}
/* END_OF_SYMBOL_DEFINITION PagedResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PagedResults */
/**
 * @summary The Leading Root Component Types of PagedResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PagedResults: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pageSize',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'pageNumber',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'queryReference',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PagedResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PagedResults */
/**
 * @summary The Trailing Root Component Types of PagedResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PagedResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PagedResults */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PagedResults */
/**
 * @summary The Extension Addition Component Types of PagedResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PagedResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PagedResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PagedResults */
let _cached_decoder_for_PagedResults: $.ASN1Decoder<PagedResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PagedResults */

/* START_OF_SYMBOL_DEFINITION _decode_PagedResults */
/**
 * @summary Decodes an ASN.1 element into a(n) PagedResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PagedResults} The decoded data structure.
 */
export function _decode_PagedResults(el: _Element) {
  if (!_cached_decoder_for_PagedResults) {
    _cached_decoder_for_PagedResults = function (el: _Element): PagedResults {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let pageSize: OPTIONAL<INTEGER>;
      let pageNumber: OPTIONAL<INTEGER>;
      let queryReference: OPTIONAL<OCTET_STRING>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        pageSize: (_el: _Element): void => {
          pageSize = $._decodeInteger(_el);
        },
        pageNumber: (_el: _Element): void => {
          pageNumber = $._decodeInteger(_el);
        },
        queryReference: (_el: _Element): void => {
          queryReference = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PagedResults,
        _extension_additions_list_spec_for_PagedResults,
        _root_component_type_list_2_spec_for_PagedResults,
        undefined
      );
      return new PagedResults /* SEQUENCE_CONSTRUCTOR_CALL */(
        pageSize,
        pageNumber,
        queryReference
      );
    };
  }
  return _cached_decoder_for_PagedResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PagedResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PagedResults */
let _cached_encoder_for_PagedResults: $.ASN1Encoder<PagedResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PagedResults */

/* START_OF_SYMBOL_DEFINITION _encode_PagedResults */
/**
 * @summary Encodes a(n) PagedResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagedResults, encoded as an ASN.1 Element.
 */
export function _encode_PagedResults(
  value: PagedResults,
  elGetter: $.ASN1Encoder<PagedResults>
) {
  if (!_cached_encoder_for_PagedResults) {
    _cached_encoder_for_PagedResults = function (
      value: PagedResults,
      elGetter: $.ASN1Encoder<PagedResults>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.pageSize === undefined
              ? undefined
              : $._encodeInteger(value.pageSize, $.BER),
            /* IF_ABSENT  */ value.pageNumber === undefined
              ? undefined
              : $._encodeInteger(value.pageNumber, $.BER),
            /* IF_ABSENT  */ value.queryReference === undefined
              ? undefined
              : $._encodeOctetString(value.queryReference, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PagedResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PagedResults */

/* eslint-enable */
