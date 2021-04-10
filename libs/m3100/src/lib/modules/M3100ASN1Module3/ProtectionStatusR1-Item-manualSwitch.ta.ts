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
  FromAndToProtectionUnit,
  _decode_FromAndToProtectionUnit,
  _encode_FromAndToProtectionUnit,
} from '../M3100ASN1Module3/FromAndToProtectionUnit.ta';
export {
  FromAndToProtectionUnit,
  _decode_FromAndToProtectionUnit,
  _encode_FromAndToProtectionUnit,
} from '../M3100ASN1Module3/FromAndToProtectionUnit.ta';

/* START_OF_SYMBOL_DEFINITION ProtectionStatusR1_Item_manualSwitch */
/**
 * @summary ProtectionStatusR1_Item_manualSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusR1-Item-manualSwitch ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ProtectionStatusR1_Item_manualSwitch {
  constructor(
    /**
     * @summary `switchStatus`.
     * @public
     * @readonly
     */
    readonly switchStatus: SwitchStatus,
    /**
     * @summary `relatedUnit`.
     * @public
     * @readonly
     */
    readonly relatedUnit: FromAndToProtectionUnit
  ) {}

  /**
   * @summary Restructures an object into a ProtectionStatusR1_Item_manualSwitch
   * @description
   *
   * This takes an `object` and converts it to a `ProtectionStatusR1_Item_manualSwitch`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ProtectionStatusR1_Item_manualSwitch`.
   * @returns {ProtectionStatusR1_Item_manualSwitch}
   */
  public static _from_object(
    _o: {
      [_K in keyof ProtectionStatusR1_Item_manualSwitch]: ProtectionStatusR1_Item_manualSwitch[_K];
    }
  ): ProtectionStatusR1_Item_manualSwitch {
    return new ProtectionStatusR1_Item_manualSwitch(
      _o.switchStatus,
      _o.relatedUnit
    );
  }
}
/* END_OF_SYMBOL_DEFINITION ProtectionStatusR1_Item_manualSwitch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatusR1_Item_manualSwitch */
/**
 * @summary The Leading Root Component Types of ProtectionStatusR1_Item_manualSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionStatusR1_Item_manualSwitch: $.ComponentSpec[] = [
  ,
  /* FIXME: switchStatus COULD_NOT_RESOLVE_TYPE_DEF */ new $.ComponentSpec(
    'relatedUnit',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatusR1_Item_manualSwitch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatusR1_Item_manualSwitch */
/**
 * @summary The Trailing Root Component Types of ProtectionStatusR1_Item_manualSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionStatusR1_Item_manualSwitch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatusR1_Item_manualSwitch */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatusR1_Item_manualSwitch */
/**
 * @summary The Extension Addition Component Types of ProtectionStatusR1_Item_manualSwitch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionStatusR1_Item_manualSwitch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatusR1_Item_manualSwitch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1_Item_manualSwitch */
let _cached_decoder_for_ProtectionStatusR1_Item_manualSwitch: $.ASN1Decoder<ProtectionStatusR1_Item_manualSwitch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1_Item_manualSwitch */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1_Item_manualSwitch */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusR1_Item_manualSwitch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusR1_Item_manualSwitch} The decoded data structure.
 */
export function _decode_ProtectionStatusR1_Item_manualSwitch(el: _Element) {
  if (!_cached_decoder_for_ProtectionStatusR1_Item_manualSwitch) {
    _cached_decoder_for_ProtectionStatusR1_Item_manualSwitch = function (
      el: _Element
    ): ProtectionStatusR1_Item_manualSwitch {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ProtectionStatusR1-Item-manualSwitch contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'switchStatus';
      sequence[1].name = 'relatedUnit';
      let switchStatus!: SwitchStatus;
      let relatedUnit!: FromAndToProtectionUnit;
      switchStatus = $._decode_implicit<SwitchStatus>(
        () => _decode_SwitchStatus
      )(sequence[0]);
      relatedUnit = $._decode_explicit<FromAndToProtectionUnit>(
        () => _decode_FromAndToProtectionUnit
      )(sequence[1]);
      return new ProtectionStatusR1_Item_manualSwitch(
        switchStatus,
        relatedUnit
      );
    };
  }
  return _cached_decoder_for_ProtectionStatusR1_Item_manualSwitch(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1_Item_manualSwitch */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1_Item_manualSwitch */
let _cached_encoder_for_ProtectionStatusR1_Item_manualSwitch: $.ASN1Encoder<ProtectionStatusR1_Item_manualSwitch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1_Item_manualSwitch */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1_Item_manualSwitch */
/**
 * @summary Encodes a(n) ProtectionStatusR1_Item_manualSwitch into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusR1_Item_manualSwitch, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusR1_Item_manualSwitch(
  value: ProtectionStatusR1_Item_manualSwitch,
  elGetter: $.ASN1Encoder<ProtectionStatusR1_Item_manualSwitch>
) {
  if (!_cached_encoder_for_ProtectionStatusR1_Item_manualSwitch) {
    _cached_encoder_for_ProtectionStatusR1_Item_manualSwitch = function (
      value: ProtectionStatusR1_Item_manualSwitch,
      elGetter: $.ASN1Encoder<ProtectionStatusR1_Item_manualSwitch>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_SwitchStatus,
              $.BER
            )(value.switchStatus, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              2,
              () => _encode_FromAndToProtectionUnit,
              $.BER
            )(value.relatedUnit, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ProtectionStatusR1_Item_manualSwitch(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1_Item_manualSwitch */

/* eslint-enable */
