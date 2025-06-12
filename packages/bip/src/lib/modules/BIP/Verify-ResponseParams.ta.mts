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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';
export {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';
import {
  BioAPI_FMR,
  _decode_BioAPI_FMR,
  _encode_BioAPI_FMR,
} from '../BIP/BioAPI-FMR.ta.mjs';
export {
  BioAPI_FMR,
  _decode_BioAPI_FMR,
  _encode_BioAPI_FMR,
} from '../BIP/BioAPI-FMR.ta.mjs';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';
export {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Verify_ResponseParams */
/**
 * @summary Verify_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Verify-ResponseParams ::= SEQUENCE {
 *   adaptedBIR   BioAPI-BIR-HANDLE OPTIONAL,
 *   result       BOOLEAN,
 *   fmrAchieved  BioAPI-FMR OPTIONAL,
 *   payload      BioAPI-DATA OPTIONAL,
 *   auditData    BioAPI-BIR-HANDLE OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Verify_ResponseParams {
  constructor(
    /**
     * @summary `adaptedBIR`.
     * @public
     * @readonly
     */
    readonly adaptedBIR: OPTIONAL<BioAPI_BIR_HANDLE>,
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: BOOLEAN,
    /**
     * @summary `fmrAchieved`.
     * @public
     * @readonly
     */
    readonly fmrAchieved: OPTIONAL<BioAPI_FMR>,
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: OPTIONAL<BioAPI_DATA>,
    /**
     * @summary `auditData`.
     * @public
     * @readonly
     */
    readonly auditData: OPTIONAL<BioAPI_BIR_HANDLE>
  ) {}

  /**
   * @summary Restructures an object into a Verify_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Verify_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Verify_ResponseParams`.
   * @returns {Verify_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Verify_ResponseParams]: Verify_ResponseParams[_K] }
  ): Verify_ResponseParams {
    return new Verify_ResponseParams(
      _o.adaptedBIR,
      _o.result,
      _o.fmrAchieved,
      _o.payload,
      _o.auditData
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Verify_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Verify_ResponseParams */
/**
 * @summary The Leading Root Component Types of Verify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Verify_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'adaptedBIR',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'result',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'fmrAchieved',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'payload',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'auditData',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Verify_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Verify_ResponseParams */
/**
 * @summary The Trailing Root Component Types of Verify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Verify_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Verify_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Verify_ResponseParams */
/**
 * @summary The Extension Addition Component Types of Verify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Verify_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Verify_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Verify_ResponseParams */
let _cached_decoder_for_Verify_ResponseParams: $.ASN1Decoder<Verify_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Verify_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_Verify_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Verify_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Verify_ResponseParams} The decoded data structure.
 */
export function _decode_Verify_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Verify_ResponseParams) {
    _cached_decoder_for_Verify_ResponseParams = function (
      el: _Element
    ): Verify_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let adaptedBIR: OPTIONAL<BioAPI_BIR_HANDLE>;
      let result!: BOOLEAN;
      let fmrAchieved: OPTIONAL<BioAPI_FMR>;
      let payload: OPTIONAL<BioAPI_DATA>;
      let auditData: OPTIONAL<BioAPI_BIR_HANDLE>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        adaptedBIR: (_el: _Element): void => {
          adaptedBIR = _decode_BioAPI_BIR_HANDLE(_el);
        },
        result: (_el: _Element): void => {
          result = $._decodeBoolean(_el);
        },
        fmrAchieved: (_el: _Element): void => {
          fmrAchieved = _decode_BioAPI_FMR(_el);
        },
        payload: (_el: _Element): void => {
          payload = _decode_BioAPI_DATA(_el);
        },
        auditData: (_el: _Element): void => {
          auditData = _decode_BioAPI_BIR_HANDLE(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Verify_ResponseParams,
        _extension_additions_list_spec_for_Verify_ResponseParams,
        _root_component_type_list_2_spec_for_Verify_ResponseParams,
        undefined
      );
      return new Verify_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        adaptedBIR,
        result,
        fmrAchieved,
        payload,
        auditData
      );
    };
  }
  return _cached_decoder_for_Verify_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Verify_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Verify_ResponseParams */
let _cached_encoder_for_Verify_ResponseParams: $.ASN1Encoder<Verify_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Verify_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_Verify_ResponseParams */
/**
 * @summary Encodes a(n) Verify_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Verify_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Verify_ResponseParams(
  value: Verify_ResponseParams,
  elGetter: $.ASN1Encoder<Verify_ResponseParams>
) {
  if (!_cached_encoder_for_Verify_ResponseParams) {
    _cached_encoder_for_Verify_ResponseParams = function (
      value: Verify_ResponseParams,
      elGetter: $.ASN1Encoder<Verify_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.adaptedBIR === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.adaptedBIR, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.result, $.BER),
            /* IF_ABSENT  */ value.fmrAchieved === undefined
              ? undefined
              : _encode_BioAPI_FMR(value.fmrAchieved, $.BER),
            /* IF_ABSENT  */ value.payload === undefined
              ? undefined
              : _encode_BioAPI_DATA(value.payload, $.BER),
            /* IF_ABSENT  */ value.auditData === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.auditData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Verify_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Verify_ResponseParams */

/* eslint-enable */
