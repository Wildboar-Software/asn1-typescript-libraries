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
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta';
export {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta';
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
} from '../BIP/BioAPI-GUI-OPERATION.ta';
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
} from '../BIP/BioAPI-GUI-OPERATION.ta';
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
} from '../BIP/BioAPI-GUI-SUBOPERATION.ta';
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
} from '../BIP/BioAPI-GUI-SUBOPERATION.ta';
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
} from '../BIP/BioAPI-BIR-PURPOSE.ta';
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
} from '../BIP/BioAPI-BIR-PURPOSE.ta';
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
} from '../BIP/BioAPI-GUI-MOMENT.ta';
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
} from '../BIP/BioAPI-GUI-MOMENT.ta';
import {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta';
export {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta';
export {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta';
import {
  BioAPI_GUI_BITMAP_ARRAY,
  _decode_BioAPI_GUI_BITMAP_ARRAY,
  _encode_BioAPI_GUI_BITMAP_ARRAY,
} from '../BIP/BioAPI-GUI-BITMAP-ARRAY.ta';
export {
  BioAPI_GUI_BITMAP_ARRAY,
  _decode_BioAPI_GUI_BITMAP_ARRAY,
  _encode_BioAPI_GUI_BITMAP_ARRAY,
} from '../BIP/BioAPI-GUI-BITMAP-ARRAY.ta';

/* START_OF_SYMBOL_DEFINITION GUIStateEventHandlerCallbackParams */
/**
 * @summary GUIStateEventHandlerCallbackParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIStateEventHandlerCallbackParams ::= SEQUENCE {
 *   guiStateEventHandlerAddress  MemoryAddress,
 *   guiStateEventHandlerContext  MemoryAddress,
 *   bspUuid                      BioAPI-UUID,
 *   unitID                       BioAPI-UNIT-ID,
 *   bspHandle                    BioAPI-HANDLE OPTIONAL,
 *   operation                    BioAPI-GUI-OPERATION,
 *   suboperation                 BioAPI-GUI-SUBOPERATION,
 *   purpose                      BioAPI-BIR-PURPOSE,
 *   moment                       BioAPI-GUI-MOMENT,
 *   resultCode                   BioAPI-RETURN,
 *   enrollSampleIndex            SignedInt,
 *   bitmaps                      BioAPI-GUI-BITMAP-ARRAY OPTIONAL,
 *   text                         UTF8String OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class GUIStateEventHandlerCallbackParams {
  constructor(
    /**
     * @summary `guiStateEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiStateEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerContext: MemoryAddress,
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
     * @summary `resultCode`.
     * @public
     * @readonly
     */
    readonly resultCode: BioAPI_RETURN,
    /**
     * @summary `enrollSampleIndex`.
     * @public
     * @readonly
     */
    readonly enrollSampleIndex: SignedInt,
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
   * @summary Restructures an object into a GUIStateEventHandlerCallbackParams
   * @description
   *
   * This takes an `object` and converts it to a `GUIStateEventHandlerCallbackParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIStateEventHandlerCallbackParams`.
   * @returns {GUIStateEventHandlerCallbackParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUIStateEventHandlerCallbackParams]: GUIStateEventHandlerCallbackParams[_K];
    }
  ): GUIStateEventHandlerCallbackParams {
    return new GUIStateEventHandlerCallbackParams(
      _o.guiStateEventHandlerAddress,
      _o.guiStateEventHandlerContext,
      _o.bspUuid,
      _o.unitID,
      _o.bspHandle,
      _o.operation,
      _o.suboperation,
      _o.purpose,
      _o.moment,
      _o.resultCode,
      _o.enrollSampleIndex,
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
/* END_OF_SYMBOL_DEFINITION GUIStateEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIStateEventHandlerCallbackParams */
/**
 * @summary The Leading Root Component Types of GUIStateEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIStateEventHandlerCallbackParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiStateEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiStateEventHandlerContext',
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
    'resultCode',
    false,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'enrollSampleIndex',
    false,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bitmaps',
    true,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'text',
    true,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIStateEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIStateEventHandlerCallbackParams */
/**
 * @summary The Trailing Root Component Types of GUIStateEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIStateEventHandlerCallbackParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIStateEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIStateEventHandlerCallbackParams */
/**
 * @summary The Extension Addition Component Types of GUIStateEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIStateEventHandlerCallbackParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIStateEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIStateEventHandlerCallbackParams */
let _cached_decoder_for_GUIStateEventHandlerCallbackParams: $.ASN1Decoder<GUIStateEventHandlerCallbackParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIStateEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _decode_GUIStateEventHandlerCallbackParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GUIStateEventHandlerCallbackParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIStateEventHandlerCallbackParams} The decoded data structure.
 */
export function _decode_GUIStateEventHandlerCallbackParams(el: _Element) {
  if (!_cached_decoder_for_GUIStateEventHandlerCallbackParams) {
    _cached_decoder_for_GUIStateEventHandlerCallbackParams = function (
      el: _Element
    ): GUIStateEventHandlerCallbackParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let guiStateEventHandlerAddress!: MemoryAddress;
      let guiStateEventHandlerContext!: MemoryAddress;
      let bspUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let bspHandle: OPTIONAL<BioAPI_HANDLE>;
      let operation!: BioAPI_GUI_OPERATION;
      let suboperation!: BioAPI_GUI_SUBOPERATION;
      let purpose!: BioAPI_BIR_PURPOSE;
      let moment!: BioAPI_GUI_MOMENT;
      let resultCode!: BioAPI_RETURN;
      let enrollSampleIndex!: SignedInt;
      let bitmaps: OPTIONAL<BioAPI_GUI_BITMAP_ARRAY>;
      let text: OPTIONAL<UTF8String>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        guiStateEventHandlerAddress: (_el: _Element): void => {
          guiStateEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiStateEventHandlerContext: (_el: _Element): void => {
          guiStateEventHandlerContext = _decode_MemoryAddress(_el);
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
        resultCode: (_el: _Element): void => {
          resultCode = _decode_BioAPI_RETURN(_el);
        },
        enrollSampleIndex: (_el: _Element): void => {
          enrollSampleIndex = _decode_SignedInt(_el);
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
        _root_component_type_list_1_spec_for_GUIStateEventHandlerCallbackParams,
        _extension_additions_list_spec_for_GUIStateEventHandlerCallbackParams,
        _root_component_type_list_2_spec_for_GUIStateEventHandlerCallbackParams,
        undefined
      );
      return new GUIStateEventHandlerCallbackParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        guiStateEventHandlerAddress,
        guiStateEventHandlerContext,
        bspUuid,
        unitID,
        bspHandle,
        operation,
        suboperation,
        purpose,
        moment,
        resultCode,
        enrollSampleIndex,
        bitmaps,
        text
      );
    };
  }
  return _cached_decoder_for_GUIStateEventHandlerCallbackParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GUIStateEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIStateEventHandlerCallbackParams */
let _cached_encoder_for_GUIStateEventHandlerCallbackParams: $.ASN1Encoder<GUIStateEventHandlerCallbackParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIStateEventHandlerCallbackParams */

/* START_OF_SYMBOL_DEFINITION _encode_GUIStateEventHandlerCallbackParams */
/**
 * @summary Encodes a(n) GUIStateEventHandlerCallbackParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIStateEventHandlerCallbackParams, encoded as an ASN.1 Element.
 */
export function _encode_GUIStateEventHandlerCallbackParams(
  value: GUIStateEventHandlerCallbackParams,
  elGetter: $.ASN1Encoder<GUIStateEventHandlerCallbackParams>
) {
  if (!_cached_encoder_for_GUIStateEventHandlerCallbackParams) {
    _cached_encoder_for_GUIStateEventHandlerCallbackParams = function (
      value: GUIStateEventHandlerCallbackParams,
      elGetter: $.ASN1Encoder<GUIStateEventHandlerCallbackParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiStateEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiStateEventHandlerContext,
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
            /* REQUIRED   */ _encode_BioAPI_RETURN(value.resultCode, $.BER),
            /* REQUIRED   */ _encode_SignedInt(value.enrollSampleIndex, $.BER),
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
  return _cached_encoder_for_GUIStateEventHandlerCallbackParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_GUIStateEventHandlerCallbackParams */

/* eslint-enable */
