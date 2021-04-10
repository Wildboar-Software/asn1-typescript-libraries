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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta';
export {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta';
import {
  BioAPI_DB_MARKER_HANDLE,
  _decode_BioAPI_DB_MARKER_HANDLE,
  _encode_BioAPI_DB_MARKER_HANDLE,
} from '../BIP/BioAPI-DB-MARKER-HANDLE.ta';
export {
  BioAPI_DB_MARKER_HANDLE,
  _decode_BioAPI_DB_MARKER_HANDLE,
  _encode_BioAPI_DB_MARKER_HANDLE,
} from '../BIP/BioAPI-DB-MARKER-HANDLE.ta';

/* START_OF_SYMBOL_DEFINITION DbGetBIR_ResponseParams */
/**
 * @summary DbGetBIR_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbGetBIR-ResponseParams ::= SEQUENCE {
 *   retrievedBIR  BioAPI-BIR-HANDLE,
 *   markerHandle  BioAPI-DB-MARKER-HANDLE
 * }
 * ```
 *
 * @class
 */
export class DbGetBIR_ResponseParams {
  constructor(
    /**
     * @summary `retrievedBIR`.
     * @public
     * @readonly
     */
    readonly retrievedBIR: BioAPI_BIR_HANDLE,
    /**
     * @summary `markerHandle`.
     * @public
     * @readonly
     */
    readonly markerHandle: BioAPI_DB_MARKER_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a DbGetBIR_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `DbGetBIR_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbGetBIR_ResponseParams`.
   * @returns {DbGetBIR_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbGetBIR_ResponseParams]: DbGetBIR_ResponseParams[_K] }
  ): DbGetBIR_ResponseParams {
    return new DbGetBIR_ResponseParams(_o.retrievedBIR, _o.markerHandle);
  }
}
/* END_OF_SYMBOL_DEFINITION DbGetBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DbGetBIR_ResponseParams */
/**
 * @summary The Leading Root Component Types of DbGetBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbGetBIR_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'retrievedBIR',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'markerHandle',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DbGetBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DbGetBIR_ResponseParams */
/**
 * @summary The Trailing Root Component Types of DbGetBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbGetBIR_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DbGetBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DbGetBIR_ResponseParams */
/**
 * @summary The Extension Addition Component Types of DbGetBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbGetBIR_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DbGetBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DbGetBIR_ResponseParams */
let _cached_decoder_for_DbGetBIR_ResponseParams: $.ASN1Decoder<DbGetBIR_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DbGetBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_DbGetBIR_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) DbGetBIR_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbGetBIR_ResponseParams} The decoded data structure.
 */
export function _decode_DbGetBIR_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_DbGetBIR_ResponseParams) {
    _cached_decoder_for_DbGetBIR_ResponseParams = function (
      el: _Element
    ): DbGetBIR_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DbGetBIR-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'retrievedBIR';
      sequence[1].name = 'markerHandle';
      let retrievedBIR!: BioAPI_BIR_HANDLE;
      let markerHandle!: BioAPI_DB_MARKER_HANDLE;
      retrievedBIR = _decode_BioAPI_BIR_HANDLE(sequence[0]);
      markerHandle = _decode_BioAPI_DB_MARKER_HANDLE(sequence[1]);
      return new DbGetBIR_ResponseParams(retrievedBIR, markerHandle);
    };
  }
  return _cached_decoder_for_DbGetBIR_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DbGetBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DbGetBIR_ResponseParams */
let _cached_encoder_for_DbGetBIR_ResponseParams: $.ASN1Encoder<DbGetBIR_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DbGetBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_DbGetBIR_ResponseParams */
/**
 * @summary Encodes a(n) DbGetBIR_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbGetBIR_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DbGetBIR_ResponseParams(
  value: DbGetBIR_ResponseParams,
  elGetter: $.ASN1Encoder<DbGetBIR_ResponseParams>
) {
  if (!_cached_encoder_for_DbGetBIR_ResponseParams) {
    _cached_encoder_for_DbGetBIR_ResponseParams = function (
      value: DbGetBIR_ResponseParams,
      elGetter: $.ASN1Encoder<DbGetBIR_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.retrievedBIR,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_DB_MARKER_HANDLE(
              value.markerHandle,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbGetBIR_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DbGetBIR_ResponseParams */

/* eslint-enable */
