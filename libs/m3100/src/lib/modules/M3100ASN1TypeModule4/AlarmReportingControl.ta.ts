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
  ArcState,
  _enum_for_ArcState,
  ArcState_alm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  alm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmQualifiedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmQualifiedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmTimedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmTimedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ArcState,
  _encode_ArcState,
} from '../M3100ASN1TypeModule4/ArcState.ta';
export {
  ArcState,
  _enum_for_ArcState,
  ArcState_alm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  alm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmQualifiedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmQualifiedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ArcState_nalmTimedInhibit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  nalmTimedInhibit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ArcState,
  _encode_ArcState,
} from '../M3100ASN1TypeModule4/ArcState.ta';

/* START_OF_SYMBOL_DEFINITION AlarmReportingControl */
/**
 * @summary AlarmReportingControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmReportingControl ::= SEQUENCE {
 *   controlledEntity         ObjectInstance,
 *   arcProbableCauseList     SET OF ProbableCause, -- empty means all
 *   arcState                 ArcState, -- the value alm(0) is not used
 *   timeRemainingInARCState  INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlarmReportingControl {
  constructor(
    /**
     * @summary `controlledEntity`.
     * @public
     * @readonly
     */
    readonly controlledEntity: ObjectInstance,
    /**
     * @summary `arcProbableCauseList`.
     * @public
     * @readonly
     */
    readonly arcProbableCauseList: ProbableCause[],
    /**
     * @summary `arcState`.
     * @public
     * @readonly
     */
    readonly arcState: ArcState,
    /**
     * @summary `timeRemainingInARCState`.
     * @public
     * @readonly
     */
    readonly timeRemainingInARCState: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a AlarmReportingControl
   * @description
   *
   * This takes an `object` and converts it to a `AlarmReportingControl`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AlarmReportingControl`.
   * @returns {AlarmReportingControl}
   */
  public static _from_object(
    _o: { [_K in keyof AlarmReportingControl]: AlarmReportingControl[_K] }
  ): AlarmReportingControl {
    return new AlarmReportingControl(
      _o.controlledEntity,
      _o.arcProbableCauseList,
      _o.arcState,
      _o.timeRemainingInARCState
    );
  }

  /**
   * @summary The enum used as the type of the component `arcState`
   * @public
   * @static
   */

  public static _enum_for_arcState = _enum_for_ArcState;
}
/* END_OF_SYMBOL_DEFINITION AlarmReportingControl */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlarmReportingControl */
/**
 * @summary The Leading Root Component Types of AlarmReportingControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlarmReportingControl: $.ComponentSpec[] = [
  ,
  /* FIXME: controlledEntity COULD_NOT_RESOLVE_TYPE_DEF */ new $.ComponentSpec(
    'arcProbableCauseList',
    false,
    $.hasTag(_TagClass.universal, 17),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'arcState',
    false,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'timeRemainingInARCState',
    true,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlarmReportingControl */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlarmReportingControl */
/**
 * @summary The Trailing Root Component Types of AlarmReportingControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlarmReportingControl: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlarmReportingControl */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlarmReportingControl */
/**
 * @summary The Extension Addition Component Types of AlarmReportingControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlarmReportingControl: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlarmReportingControl */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmReportingControl */
let _cached_decoder_for_AlarmReportingControl: $.ASN1Decoder<AlarmReportingControl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmReportingControl */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmReportingControl */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmReportingControl
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmReportingControl} The decoded data structure.
 */
export function _decode_AlarmReportingControl(el: _Element) {
  if (!_cached_decoder_for_AlarmReportingControl) {
    _cached_decoder_for_AlarmReportingControl = function (
      el: _Element
    ): AlarmReportingControl {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let controlledEntity!: ObjectInstance;
      let arcProbableCauseList!: ProbableCause[];
      let arcState!: ArcState;
      let timeRemainingInARCState: OPTIONAL<INTEGER>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        controlledEntity: (_el: _Element): void => {
          controlledEntity = _decode_ObjectInstance(_el);
        },
        arcProbableCauseList: (_el: _Element): void => {
          arcProbableCauseList = $._decodeSetOf<ProbableCause>(
            () => _decode_ProbableCause
          )(_el);
        },
        arcState: (_el: _Element): void => {
          arcState = _decode_ArcState(_el);
        },
        timeRemainingInARCState: (_el: _Element): void => {
          timeRemainingInARCState = $._decodeInteger(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AlarmReportingControl,
        _extension_additions_list_spec_for_AlarmReportingControl,
        _root_component_type_list_2_spec_for_AlarmReportingControl,
        undefined
      );
      return new AlarmReportingControl /* SEQUENCE_CONSTRUCTOR_CALL */(
        controlledEntity,
        arcProbableCauseList,
        arcState,
        timeRemainingInARCState
      );
    };
  }
  return _cached_decoder_for_AlarmReportingControl(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmReportingControl */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmReportingControl */
let _cached_encoder_for_AlarmReportingControl: $.ASN1Encoder<AlarmReportingControl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmReportingControl */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmReportingControl */
/**
 * @summary Encodes a(n) AlarmReportingControl into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmReportingControl, encoded as an ASN.1 Element.
 */
export function _encode_AlarmReportingControl(
  value: AlarmReportingControl,
  elGetter: $.ASN1Encoder<AlarmReportingControl>
) {
  if (!_cached_encoder_for_AlarmReportingControl) {
    _cached_encoder_for_AlarmReportingControl = function (
      value: AlarmReportingControl,
      elGetter: $.ASN1Encoder<AlarmReportingControl>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ObjectInstance(
              value.controlledEntity,
              $.BER
            ),
            /* REQUIRED   */ $._encodeSetOf<ProbableCause>(
              () => _encode_ProbableCause,
              $.BER
            )(value.arcProbableCauseList, $.BER),
            /* REQUIRED   */ _encode_ArcState(value.arcState, $.BER),
            /* IF_ABSENT  */ value.timeRemainingInARCState === undefined
              ? undefined
              : $._encodeInteger(value.timeRemainingInARCState, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AlarmReportingControl(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmReportingControl */

/* eslint-enable */
