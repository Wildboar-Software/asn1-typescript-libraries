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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta';
export {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta';
export {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta';
export {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta';

/* START_OF_SYMBOL_DEFINITION ControlUnit_RequestParams */
/**
 * @summary ControlUnit_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlUnit-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   unitID             BioAPI-UNIT-ID,
 *   controlCode        UnsignedInt,
 *   inputData          BioAPI-DATA
 * }
 * ```
 *
 * @class
 */
export class ControlUnit_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `unitID`.
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `controlCode`.
     * @public
     * @readonly
     */
    readonly controlCode: UnsignedInt,
    /**
     * @summary `inputData`.
     * @public
     * @readonly
     */
    readonly inputData: BioAPI_DATA
  ) {}

  /**
   * @summary Restructures an object into a ControlUnit_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `ControlUnit_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ControlUnit_RequestParams`.
   * @returns {ControlUnit_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof ControlUnit_RequestParams]: ControlUnit_RequestParams[_K];
    }
  ): ControlUnit_RequestParams {
    return new ControlUnit_RequestParams(
      _o.originalBSPHandle,
      _o.unitID,
      _o.controlCode,
      _o.inputData
    );
  }
}
/* END_OF_SYMBOL_DEFINITION ControlUnit_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlUnit_RequestParams */
/**
 * @summary The Leading Root Component Types of ControlUnit_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ControlUnit_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'controlCode',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'inputData',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlUnit_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlUnit_RequestParams */
/**
 * @summary The Trailing Root Component Types of ControlUnit_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlUnit_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlUnit_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlUnit_RequestParams */
/**
 * @summary The Extension Addition Component Types of ControlUnit_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlUnit_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlUnit_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlUnit_RequestParams */
let _cached_decoder_for_ControlUnit_RequestParams: $.ASN1Decoder<ControlUnit_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlUnit_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_ControlUnit_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlUnit_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlUnit_RequestParams} The decoded data structure.
 */
export function _decode_ControlUnit_RequestParams(el: _Element) {
  if (!_cached_decoder_for_ControlUnit_RequestParams) {
    _cached_decoder_for_ControlUnit_RequestParams = function (
      el: _Element
    ): ControlUnit_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 4) {
        throw new _ConstructionError(
          'ControlUnit-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'unitID';
      sequence[2].name = 'controlCode';
      sequence[3].name = 'inputData';
      let originalBSPHandle!: BioAPI_HANDLE;
      let unitID!: BioAPI_UNIT_ID;
      let controlCode!: UnsignedInt;
      let inputData!: BioAPI_DATA;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      unitID = _decode_BioAPI_UNIT_ID(sequence[1]);
      controlCode = _decode_UnsignedInt(sequence[2]);
      inputData = _decode_BioAPI_DATA(sequence[3]);
      return new ControlUnit_RequestParams(
        originalBSPHandle,
        unitID,
        controlCode,
        inputData
      );
    };
  }
  return _cached_decoder_for_ControlUnit_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlUnit_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlUnit_RequestParams */
let _cached_encoder_for_ControlUnit_RequestParams: $.ASN1Encoder<ControlUnit_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlUnit_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_ControlUnit_RequestParams */
/**
 * @summary Encodes a(n) ControlUnit_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlUnit_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_ControlUnit_RequestParams(
  value: ControlUnit_RequestParams,
  elGetter: $.ASN1Encoder<ControlUnit_RequestParams>
) {
  if (!_cached_encoder_for_ControlUnit_RequestParams) {
    _cached_encoder_for_ControlUnit_RequestParams = function (
      value: ControlUnit_RequestParams,
      elGetter: $.ASN1Encoder<ControlUnit_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.controlCode, $.BER),
            /* REQUIRED   */ _encode_BioAPI_DATA(value.inputData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ControlUnit_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlUnit_RequestParams */

/* eslint-enable */
