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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.js';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.js';
import {
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.js';
export {
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.js';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.js';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.js';

/* START_OF_SYMBOL_DEFINITION DbDeleteBIR_RequestParams */
/**
 * @summary DbDeleteBIR_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbDeleteBIR-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   dbHandle           BioAPI-DB-HANDLE,
 *   keyValue           BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class DbDeleteBIR_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `dbHandle`.
     * @public
     * @readonly
     */
    readonly dbHandle: BioAPI_DB_HANDLE,
    /**
     * @summary `keyValue`.
     * @public
     * @readonly
     */
    readonly keyValue: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a DbDeleteBIR_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbDeleteBIR_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbDeleteBIR_RequestParams`.
   * @returns {DbDeleteBIR_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof DbDeleteBIR_RequestParams]: DbDeleteBIR_RequestParams[_K];
    }
  ): DbDeleteBIR_RequestParams {
    return new DbDeleteBIR_RequestParams(
      _o.originalBSPHandle,
      _o.dbHandle,
      _o.keyValue
    );
  }
}
/* END_OF_SYMBOL_DEFINITION DbDeleteBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DbDeleteBIR_RequestParams */
/**
 * @summary The Leading Root Component Types of DbDeleteBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbDeleteBIR_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dbHandle',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyValue',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DbDeleteBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DbDeleteBIR_RequestParams */
/**
 * @summary The Trailing Root Component Types of DbDeleteBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbDeleteBIR_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DbDeleteBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DbDeleteBIR_RequestParams */
/**
 * @summary The Extension Addition Component Types of DbDeleteBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbDeleteBIR_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DbDeleteBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DbDeleteBIR_RequestParams */
let _cached_decoder_for_DbDeleteBIR_RequestParams: $.ASN1Decoder<DbDeleteBIR_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DbDeleteBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_DbDeleteBIR_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) DbDeleteBIR_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbDeleteBIR_RequestParams} The decoded data structure.
 */
export function _decode_DbDeleteBIR_RequestParams(el: _Element) {
  if (!_cached_decoder_for_DbDeleteBIR_RequestParams) {
    _cached_decoder_for_DbDeleteBIR_RequestParams = function (
      el: _Element
    ): DbDeleteBIR_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'DbDeleteBIR-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'dbHandle';
      sequence[2].name = 'keyValue';
      let originalBSPHandle!: BioAPI_HANDLE;
      let dbHandle!: BioAPI_DB_HANDLE;
      let keyValue!: BioAPI_UUID;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      dbHandle = _decode_BioAPI_DB_HANDLE(sequence[1]);
      keyValue = _decode_BioAPI_UUID(sequence[2]);
      return new DbDeleteBIR_RequestParams(
        originalBSPHandle,
        dbHandle,
        keyValue
      );
    };
  }
  return _cached_decoder_for_DbDeleteBIR_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DbDeleteBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DbDeleteBIR_RequestParams */
let _cached_encoder_for_DbDeleteBIR_RequestParams: $.ASN1Encoder<DbDeleteBIR_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DbDeleteBIR_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_DbDeleteBIR_RequestParams */
/**
 * @summary Encodes a(n) DbDeleteBIR_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbDeleteBIR_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbDeleteBIR_RequestParams(
  value: DbDeleteBIR_RequestParams,
  elGetter: $.ASN1Encoder<DbDeleteBIR_RequestParams>
) {
  if (!_cached_encoder_for_DbDeleteBIR_RequestParams) {
    _cached_encoder_for_DbDeleteBIR_RequestParams = function (
      value: DbDeleteBIR_RequestParams,
      elGetter: $.ASN1Encoder<DbDeleteBIR_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_DB_HANDLE(value.dbHandle, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.keyValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbDeleteBIR_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DbDeleteBIR_RequestParams */

/* eslint-enable */
