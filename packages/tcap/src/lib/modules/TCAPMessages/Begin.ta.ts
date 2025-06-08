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
  OrigTransactionID,
  _decode_OrigTransactionID,
  _encode_OrigTransactionID,
} from '../TCAPMessages/OrigTransactionID.ta';
export {
  OrigTransactionID,
  _decode_OrigTransactionID,
  _encode_OrigTransactionID,
} from '../TCAPMessages/OrigTransactionID.ta';
import {
  DialoguePortion,
  _decode_DialoguePortion,
  _encode_DialoguePortion,
} from '../TCAPMessages/DialoguePortion.ta';
export {
  DialoguePortion,
  _decode_DialoguePortion,
  _encode_DialoguePortion,
} from '../TCAPMessages/DialoguePortion.ta';
import {
  ComponentPortion,
  _decode_ComponentPortion,
  _encode_ComponentPortion,
} from '../TCAPMessages/ComponentPortion.ta';
export {
  ComponentPortion,
  _decode_ComponentPortion,
  _encode_ComponentPortion,
} from '../TCAPMessages/ComponentPortion.ta';

/* START_OF_SYMBOL_DEFINITION Begin */
/**
 * @summary Begin
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Begin{OPERATION:Invokable, OPERATION:Returnable} ::= SEQUENCE {
 *   otid             OrigTransactionID,
 *   dialoguePortion  DialoguePortion OPTIONAL,
 *   components       ComponentPortion{{Invokable}, {Returnable}} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Begin {
  constructor(
    /**
     * @summary `otid`.
     * @public
     * @readonly
     */
    readonly otid: OrigTransactionID,
    /**
     * @summary `dialoguePortion`.
     * @public
     * @readonly
     */
    readonly dialoguePortion: OPTIONAL<DialoguePortion>,
    /**
     * @summary `components`.
     * @public
     * @readonly
     */
    readonly components: OPTIONAL<ComponentPortion>
  ) {}

  /**
   * @summary Restructures an object into a Begin
   * @description
   *
   * This takes an `object` and converts it to a `Begin`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Begin`.
   * @returns {Begin}
   */
  public static _from_object(_o: { [_K in keyof Begin]: Begin[_K] }): Begin {
    return new Begin(_o.otid, _o.dialoguePortion, _o.components);
  }
}
/* END_OF_SYMBOL_DEFINITION Begin */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Begin */
/**
 * @summary The Leading Root Component Types of Begin
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Begin: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'otid',
    false,
    $.hasTag(_TagClass.application, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dialoguePortion',
    true,
    $.hasTag(_TagClass.application, 11),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'components',
    true,
    $.hasTag(_TagClass.application, 12),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Begin */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Begin */
/**
 * @summary The Trailing Root Component Types of Begin
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Begin: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Begin */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Begin */
/**
 * @summary The Extension Addition Component Types of Begin
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Begin: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Begin */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Begin */
let _cached_decoder_for_Begin: $.ASN1Decoder<Begin> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Begin */

/* START_OF_SYMBOL_DEFINITION _decode_Begin */
/**
 * @summary Decodes an ASN.1 element into a(n) Begin
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Begin} The decoded data structure.
 */
export function _decode_Begin(el: _Element) {
  if (!_cached_decoder_for_Begin) {
    _cached_decoder_for_Begin = function (el: _Element): Begin {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let otid!: OrigTransactionID;
      let dialoguePortion: OPTIONAL<DialoguePortion>;
      let components: OPTIONAL<ComponentPortion>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        otid: (_el: _Element): void => {
          otid = _decode_OrigTransactionID(_el);
        },
        dialoguePortion: (_el: _Element): void => {
          dialoguePortion = _decode_DialoguePortion(_el);
        },
        components: (_el: _Element): void => {
          components = _decode_ComponentPortion(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Begin,
        _extension_additions_list_spec_for_Begin,
        _root_component_type_list_2_spec_for_Begin,
        undefined
      );
      return new Begin /* SEQUENCE_CONSTRUCTOR_CALL */(
        otid,
        dialoguePortion,
        components
      );
    };
  }
  return _cached_decoder_for_Begin(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Begin */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Begin */
let _cached_encoder_for_Begin: $.ASN1Encoder<Begin> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Begin */

/* START_OF_SYMBOL_DEFINITION _encode_Begin */
/**
 * @summary Encodes a(n) Begin into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Begin, encoded as an ASN.1 Element.
 */
export function _encode_Begin(value: Begin, elGetter: $.ASN1Encoder<Begin>) {
  if (!_cached_encoder_for_Begin) {
    _cached_encoder_for_Begin = function (
      value: Begin,
      elGetter: $.ASN1Encoder<Begin>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_OrigTransactionID(value.otid, $.BER),
            /* IF_ABSENT  */ value.dialoguePortion === undefined
              ? undefined
              : _encode_DialoguePortion(value.dialoguePortion, $.BER),
            /* IF_ABSENT  */ value.components === undefined
              ? undefined
              : _encode_ComponentPortion(value.components, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Begin(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Begin */

/* eslint-enable */
