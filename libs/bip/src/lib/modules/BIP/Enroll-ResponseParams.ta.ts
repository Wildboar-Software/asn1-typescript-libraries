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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';

/* START_OF_SYMBOL_DEFINITION Enroll_ResponseParams */
/**
 * @summary Enroll_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Enroll-ResponseParams ::= SEQUENCE {
 *   newTemplate   BioAPI-BIR-HANDLE,
 *   auditData     BioAPI-BIR-HANDLE OPTIONAL,
 *   templateUuid  BioAPI-UUID OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Enroll_ResponseParams {
  constructor(
    /**
     * @summary `newTemplate`.
     * @public
     * @readonly
     */
    readonly newTemplate: BioAPI_BIR_HANDLE,
    /**
     * @summary `auditData`.
     * @public
     * @readonly
     */
    readonly auditData: OPTIONAL<BioAPI_BIR_HANDLE>,
    /**
     * @summary `templateUuid`.
     * @public
     * @readonly
     */
    readonly templateUuid: OPTIONAL<BioAPI_UUID>
  ) {}

  /**
   * @summary Restructures an object into a Enroll_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Enroll_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Enroll_ResponseParams`.
   * @returns {Enroll_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Enroll_ResponseParams]: Enroll_ResponseParams[_K] }
  ): Enroll_ResponseParams {
    return new Enroll_ResponseParams(
      _o.newTemplate,
      _o.auditData,
      _o.templateUuid
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Enroll_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Enroll_ResponseParams */
/**
 * @summary The Leading Root Component Types of Enroll_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Enroll_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'newTemplate',
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
  new $.ComponentSpec(
    'templateUuid',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Enroll_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Enroll_ResponseParams */
/**
 * @summary The Trailing Root Component Types of Enroll_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Enroll_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Enroll_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Enroll_ResponseParams */
/**
 * @summary The Extension Addition Component Types of Enroll_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Enroll_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Enroll_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Enroll_ResponseParams */
let _cached_decoder_for_Enroll_ResponseParams: $.ASN1Decoder<Enroll_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Enroll_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_Enroll_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) Enroll_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Enroll_ResponseParams} The decoded data structure.
 */
export function _decode_Enroll_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Enroll_ResponseParams) {
    _cached_decoder_for_Enroll_ResponseParams = function (
      el: _Element
    ): Enroll_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let newTemplate!: BioAPI_BIR_HANDLE;
      let auditData: OPTIONAL<BioAPI_BIR_HANDLE>;
      let templateUuid: OPTIONAL<BioAPI_UUID>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        newTemplate: (_el: _Element): void => {
          newTemplate = _decode_BioAPI_BIR_HANDLE(_el);
        },
        auditData: (_el: _Element): void => {
          auditData = _decode_BioAPI_BIR_HANDLE(_el);
        },
        templateUuid: (_el: _Element): void => {
          templateUuid = _decode_BioAPI_UUID(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Enroll_ResponseParams,
        _extension_additions_list_spec_for_Enroll_ResponseParams,
        _root_component_type_list_2_spec_for_Enroll_ResponseParams,
        undefined
      );
      return new Enroll_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        newTemplate,
        auditData,
        templateUuid
      );
    };
  }
  return _cached_decoder_for_Enroll_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Enroll_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Enroll_ResponseParams */
let _cached_encoder_for_Enroll_ResponseParams: $.ASN1Encoder<Enroll_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Enroll_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_Enroll_ResponseParams */
/**
 * @summary Encodes a(n) Enroll_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Enroll_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Enroll_ResponseParams(
  value: Enroll_ResponseParams,
  elGetter: $.ASN1Encoder<Enroll_ResponseParams>
) {
  if (!_cached_encoder_for_Enroll_ResponseParams) {
    _cached_encoder_for_Enroll_ResponseParams = function (
      value: Enroll_ResponseParams,
      elGetter: $.ASN1Encoder<Enroll_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.newTemplate,
              $.BER
            ),
            /* IF_ABSENT  */ value.auditData === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.auditData, $.BER),
            /* IF_ABSENT  */ value.templateUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.templateUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Enroll_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Enroll_ResponseParams */

/* eslint-enable */
