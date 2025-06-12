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
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';
export {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
export {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  BioAPI_GUI_OPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta.mjs';
export {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  BioAPI_GUI_OPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta.mjs';
import {
  BioAPI_GUI_SUBOPERATION,
  _enum_for_BioAPI_GUI_SUBOPERATION,
  BioAPI_GUI_SUBOPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_SUBOPERATION,
  _encode_BioAPI_GUI_SUBOPERATION,
} from '../BIP/BioAPI-GUI-SUBOPERATION.ta.mjs';
export {
  BioAPI_GUI_SUBOPERATION,
  _enum_for_BioAPI_GUI_SUBOPERATION,
  BioAPI_GUI_SUBOPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_SUBOPERATION,
  _encode_BioAPI_GUI_SUBOPERATION,
} from '../BIP/BioAPI-GUI-SUBOPERATION.ta.mjs';
import {
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  BioAPI_BIR_PURPOSE_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollVerify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollVerify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollIdentify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollIdentify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_audit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  audit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_any_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta.mjs';
export {
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  BioAPI_BIR_PURPOSE_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollVerify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollVerify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollIdentify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollIdentify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_audit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  audit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_any_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta.mjs';
import {
  BioAPI_GUI_MOMENT,
  _enum_for_BioAPI_GUI_MOMENT,
  BioAPI_GUI_MOMENT_beforeStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  beforeStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_during /* IMPORTED_LONG_ENUMERATION_ITEM */,
  during /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_afterEnd /* IMPORTED_LONG_ENUMERATION_ITEM */,
  afterEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_MOMENT,
  _encode_BioAPI_GUI_MOMENT,
} from '../BIP/BioAPI-GUI-MOMENT.ta.mjs';
export {
  BioAPI_GUI_MOMENT,
  _enum_for_BioAPI_GUI_MOMENT,
  BioAPI_GUI_MOMENT_beforeStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  beforeStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_during /* IMPORTED_LONG_ENUMERATION_ITEM */,
  during /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_afterEnd /* IMPORTED_LONG_ENUMERATION_ITEM */,
  afterEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_MOMENT,
  _encode_BioAPI_GUI_MOMENT,
} from '../BIP/BioAPI-GUI-MOMENT.ta.mjs';
import {
  UnsignedByte,
  _decode_UnsignedByte,
  _encode_UnsignedByte,
} from '../BIP/UnsignedByte.ta.mjs';
export {
  UnsignedByte,
  _decode_UnsignedByte,
  _encode_UnsignedByte,
} from '../BIP/UnsignedByte.ta.mjs';
import {
  BioAPI_GUI_BITMAP_ARRAY,
  _decode_BioAPI_GUI_BITMAP_ARRAY,
  _encode_BioAPI_GUI_BITMAP_ARRAY,
} from '../BIP/BioAPI-GUI-BITMAP-ARRAY.ta.mjs';
export {
  BioAPI_GUI_BITMAP_ARRAY,
  _decode_BioAPI_GUI_BITMAP_ARRAY,
  _encode_BioAPI_GUI_BITMAP_ARRAY,
} from '../BIP/BioAPI-GUI-BITMAP-ARRAY.ta.mjs';

/* START_OF_SYMBOL_DEFINITION GUIProgressEventHandlerCallbackParams */
/**
 * @summary GUIProgressEventHandlerCallbackParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIProgressEventHandlerCallbackParams ::= SEQUENCE {
 *   guiProgressEventHandlerAddress  MemoryAddress,
 *   guiProgressEventHandlerContext  MemoryAddress,
 *   bspUuid                         BioAPI-UUID,
 *   unitID                          BioAPI-UNIT-ID,
 *   bspHandle                       BioAPI-HANDLE OPTIONAL,
 *   operation                       BioAPI-GUI-OPERATION,
 *   suboperation                    BioAPI-GUI-SUBOPERATION,
 *   purpose                         BioAPI-BIR-PURPOSE,
 *   moment                          BioAPI-GUI-MOMENT,
 *   suboperationProgress            UnsignedByte,
 *   bitmaps                         BioAPI-GUI-BITMAP-ARRAY OPTIONAL,
 *   text                            UTF8String OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class GUIProgressEventHandlerCallbackParams {
  constructor(
    /**
     * @summary `guiProgressEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiProgressEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerContext: MemoryAddress,
    /**
     * @summary `bspUuid`.
     * @public
     * @readonly
     */
    readonly bspUuid: BioAPI_UUID,
    /**
     * @summary `unitID`.
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `bspHandle`.
     * @public
     * @readonly
     */
    readonly bspHandle: OPTIONAL<BioAPI_HANDLE>,
    /**
     * @summary `operation`.
     * @public
     * @readonly
     */
    readonly operation: BioAPI_GUI_OPERATION,
    /**
     * @summary `suboperation`.
     * @public
     * @readonly
     */
    readonly suboperation: BioAPI_GUI_SUBOPERATION,
    /**
     * @summary `purpose`.
     * @public
     * @readonly
     */
    readonly purpose: BioAPI_BIR_PURPOSE,
    /**
     * @summary `moment`.
     * @public
     * @readonly
     */
    readonly moment: BioAPI_GUI_MOMENT,
    /**
     * @summary `suboperationProgress`.
     * @public
     * @readonly
     */
    readonly suboperationProgress: UnsignedByte,
    /**
     * @summary `bitmaps`.
     * @public
     * @readonly
     */
    readonly bitmaps: OPTIONAL<BioAPI_GUI_BITMAP_ARRAY>,
    /**
     * @summary `text`.
     * @public
     * @readonly
     */
    readonly text: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a GUIProgressEventHandlerCallbackParams
   * @description
   *
   * This takes an `object` and converts it to a `GUIProgressEventHandlerCallbackParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIProgressEventHandlerCallbackParams`.
   * @returns {GUIProgressEventHandlerCallbackParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUIProgressEventHandlerCallbackParams]: GUIProgressEventHandlerCallbackParams[_K];
    }
  ): GUIProgressEventHandlerCallbackParams {
    return new GUIProgressEventHandlerCallbackParams(
      _o.guiProgressEventHandlerAddress,
      _o.guiProgressEventHandlerContext,
      _o.bspUuid,
      _o.unitID,
      _o.bspHandle,
      _o.operation,
      _o.suboperation,
      _o.purpose,
      _o.moment,
      _o.suboperationProgress,
      _o.bitmaps,
      _o.text
    );
  }

  /**
   * @summary The enum used as the type of the component `operation`
   * @public
   * @static
   */

  public static _enum_for_operation = _enum_for_BioAPI_GUI_OPERATION;
  /**
   * @summary The enum used as the type of the component `suboperation`
   * @public
   * @static
   */

  public static _enum_for_suboperation = _enum_for_BioAPI_GUI_SUBOPERATION;
  /**
   * @summary The enum used as the type of the component `purpose`
   * @public
   * @static
   */

  public static _enum_for_purpose = _enum_for_BioAPI_BIR_PURPOSE;
  /**
   * @summary The enum used as the type of the component `moment`
   * @public
   * @static
   */

  public static _enum_for_moment = _enum_for_BioAPI_GUI_MOMENT;
}
/* END_OF_SYMBOL_DEFINITION GUIProgressEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIProgressEventHandlerCallbackParams */
/**
 * @summary The Leading Root Component Types of GUIProgressEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIProgressEventHandlerCallbackParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiProgressEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiProgressEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspUuid',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspHandle',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'suboperation',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'moment',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'suboperationProgress',
    false,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bitmaps',
    true,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'text',
    true,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIProgressEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIProgressEventHandlerCallbackParams */
/**
 * @summary The Trailing Root Component Types of GUIProgressEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIProgressEventHandlerCallbackParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIProgressEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIProgressEventHandlerCallbackParams */
/**
 * @summary The Extension Addition Component Types of GUIProgressEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIProgressEventHandlerCallbackParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIProgressEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIProgressEventHandlerCallbackParams */
let _cached_decoder_for_GUIProgressEventHandlerCallbackParams: $.ASN1Decoder<GUIProgressEventHandlerCallbackParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIProgressEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _decode_GUIProgressEventHandlerCallbackParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GUIProgressEventHandlerCallbackParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIProgressEventHandlerCallbackParams} The decoded data structure.
 */
export function _decode_GUIProgressEventHandlerCallbackParams(el: _Element) {
  if (!_cached_decoder_for_GUIProgressEventHandlerCallbackParams) {
    _cached_decoder_for_GUIProgressEventHandlerCallbackParams = function (
      el: _Element
    ): GUIProgressEventHandlerCallbackParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let guiProgressEventHandlerAddress!: MemoryAddress;
      let guiProgressEventHandlerContext!: MemoryAddress;
      let bspUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let bspHandle: OPTIONAL<BioAPI_HANDLE>;
      let operation!: BioAPI_GUI_OPERATION;
      let suboperation!: BioAPI_GUI_SUBOPERATION;
      let purpose!: BioAPI_BIR_PURPOSE;
      let moment!: BioAPI_GUI_MOMENT;
      let suboperationProgress!: UnsignedByte;
      let bitmaps: OPTIONAL<BioAPI_GUI_BITMAP_ARRAY>;
      let text: OPTIONAL<UTF8String>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        guiProgressEventHandlerAddress: (_el: _Element): void => {
          guiProgressEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiProgressEventHandlerContext: (_el: _Element): void => {
          guiProgressEventHandlerContext = _decode_MemoryAddress(_el);
        },
        bspUuid: (_el: _Element): void => {
          bspUuid = _decode_BioAPI_UUID(_el);
        },
        unitID: (_el: _Element): void => {
          unitID = _decode_BioAPI_UNIT_ID(_el);
        },
        bspHandle: (_el: _Element): void => {
          bspHandle = _decode_BioAPI_HANDLE(_el);
        },
        operation: (_el: _Element): void => {
          operation = _decode_BioAPI_GUI_OPERATION(_el);
        },
        suboperation: (_el: _Element): void => {
          suboperation = _decode_BioAPI_GUI_SUBOPERATION(_el);
        },
        purpose: (_el: _Element): void => {
          purpose = _decode_BioAPI_BIR_PURPOSE(_el);
        },
        moment: (_el: _Element): void => {
          moment = _decode_BioAPI_GUI_MOMENT(_el);
        },
        suboperationProgress: (_el: _Element): void => {
          suboperationProgress = _decode_UnsignedByte(_el);
        },
        bitmaps: (_el: _Element): void => {
          bitmaps = _decode_BioAPI_GUI_BITMAP_ARRAY(_el);
        },
        text: (_el: _Element): void => {
          text = $._decodeUTF8String(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GUIProgressEventHandlerCallbackParams,
        _extension_additions_list_spec_for_GUIProgressEventHandlerCallbackParams,
        _root_component_type_list_2_spec_for_GUIProgressEventHandlerCallbackParams,
        undefined
      );
      return new GUIProgressEventHandlerCallbackParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        guiProgressEventHandlerAddress,
        guiProgressEventHandlerContext,
        bspUuid,
        unitID,
        bspHandle,
        operation,
        suboperation,
        purpose,
        moment,
        suboperationProgress,
        bitmaps,
        text
      );
    };
  }
  return _cached_decoder_for_GUIProgressEventHandlerCallbackParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GUIProgressEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIProgressEventHandlerCallbackParams */
let _cached_encoder_for_GUIProgressEventHandlerCallbackParams: $.ASN1Encoder<GUIProgressEventHandlerCallbackParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIProgressEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _encode_GUIProgressEventHandlerCallbackParams */
/**
 * @summary Encodes a(n) GUIProgressEventHandlerCallbackParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIProgressEventHandlerCallbackParams, encoded as an ASN.1 Element.
 */
export function _encode_GUIProgressEventHandlerCallbackParams(
  value: GUIProgressEventHandlerCallbackParams,
  elGetter: $.ASN1Encoder<GUIProgressEventHandlerCallbackParams>
) {
  if (!_cached_encoder_for_GUIProgressEventHandlerCallbackParams) {
    _cached_encoder_for_GUIProgressEventHandlerCallbackParams = function (
      value: GUIProgressEventHandlerCallbackParams,
      elGetter: $.ASN1Encoder<GUIProgressEventHandlerCallbackParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiProgressEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiProgressEventHandlerContext,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
            /* IF_ABSENT  */ value.bspHandle === undefined
              ? undefined
              : _encode_BioAPI_HANDLE(value.bspHandle, $.BER),
            /* REQUIRED   */ _encode_BioAPI_GUI_OPERATION(
              value.operation,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_GUI_SUBOPERATION(
              value.suboperation,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_PURPOSE(value.purpose, $.BER),
            /* REQUIRED   */ _encode_BioAPI_GUI_MOMENT(value.moment, $.BER),
            /* REQUIRED   */ _encode_UnsignedByte(
              value.suboperationProgress,
              $.BER
            ),
            /* IF_ABSENT  */ value.bitmaps === undefined
              ? undefined
              : _encode_BioAPI_GUI_BITMAP_ARRAY(value.bitmaps, $.BER),
            /* IF_ABSENT  */ value.text === undefined
              ? undefined
              : $._encodeUTF8String(value.text, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GUIProgressEventHandlerCallbackParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_GUIProgressEventHandlerCallbackParams */

/* eslint-enable */
