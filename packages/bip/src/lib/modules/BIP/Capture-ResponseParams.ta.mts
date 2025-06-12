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

/* START_OF_SYMBOL_DEFINITION Capture_ResponseParams */
/**
 * @summary Capture_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Capture-ResponseParams ::= SEQUENCE {
 *   capturedBIR  BioAPI-BIR-HANDLE,
 *   auditData    BioAPI-BIR-HANDLE OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Capture_ResponseParams {
  constructor(
    /**
     * @summary `capturedBIR`.
     * @public
     * @readonly
     */
    readonly capturedBIR: BioAPI_BIR_HANDLE,
    /**
     * @summary `auditData`.
     * @public
     * @readonly
     */
    readonly auditData: OPTIONAL<BioAPI_BIR_HANDLE>
  ) {}

  /**
   * @summary Restructures an object into a Capture_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Capture_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Capture_ResponseParams`.
   * @returns {Capture_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Capture_ResponseParams]: Capture_ResponseParams[_K] }
  ): Capture_ResponseParams {
    return new Capture_ResponseParams(_o.capturedBIR, _o.auditData);
  }
}
/* END_OF_SYMBOL_DEFINITION Capture_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Capture_ResponseParams */
/**
 * @summary The Leading Root Component Types of Capture_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Capture_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'capturedBIR',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'auditData',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Capture_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Capture_ResponseParams */
/**
 * @summary The Trailing Root Component Types of Capture_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Capture_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Capture_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Capture_ResponseParams */
/**
 * @summary The Extension Addition Component Types of Capture_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Capture_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Capture_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Capture_ResponseParams */
let _cached_decoder_for_Capture_ResponseParams: $.ASN1Decoder<Capture_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Capture_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_Capture_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Capture_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capture_ResponseParams} The decoded data structure.
 */
export function _decode_Capture_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Capture_ResponseParams) {
    _cached_decoder_for_Capture_ResponseParams = function (
      el: _Element
    ): Capture_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let capturedBIR!: BioAPI_BIR_HANDLE;
      let auditData: OPTIONAL<BioAPI_BIR_HANDLE>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        capturedBIR: (_el: _Element): void => {
          capturedBIR = _decode_BioAPI_BIR_HANDLE(_el);
        },
        auditData: (_el: _Element): void => {
          auditData = _decode_BioAPI_BIR_HANDLE(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Capture_ResponseParams,
        _extension_additions_list_spec_for_Capture_ResponseParams,
        _root_component_type_list_2_spec_for_Capture_ResponseParams,
        undefined
      );
      return new Capture_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        capturedBIR,
        auditData
      );
    };
  }
  return _cached_decoder_for_Capture_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Capture_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Capture_ResponseParams */
let _cached_encoder_for_Capture_ResponseParams: $.ASN1Encoder<Capture_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Capture_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_Capture_ResponseParams */
/**
 * @summary Encodes a(n) Capture_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capture_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Capture_ResponseParams(
  value: Capture_ResponseParams,
  elGetter: $.ASN1Encoder<Capture_ResponseParams>
) {
  if (!_cached_encoder_for_Capture_ResponseParams) {
    _cached_encoder_for_Capture_ResponseParams = function (
      value: Capture_ResponseParams,
      elGetter: $.ASN1Encoder<Capture_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.capturedBIR,
              $.BER
            ),
            /* IF_ABSENT  */ value.auditData === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.auditData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Capture_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Capture_ResponseParams */

/* eslint-enable */
