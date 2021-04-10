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
  Entry_returnedObject,
  _enum_for_Entry_returnedObject,
  Entry_returnedObject_subscriber /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_street /* IMPORTED_LONG_ENUMERATION_ITEM */,
  street /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_businessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  businessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Entry_returnedObject,
  _encode_Entry_returnedObject,
} from '../Uds2/Entry-returnedObject.ta';
export {
  Entry_returnedObject,
  _enum_for_Entry_returnedObject,
  Entry_returnedObject_subscriber /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_street /* IMPORTED_LONG_ENUMERATION_ITEM */,
  street /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Entry_returnedObject_businessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  businessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Entry_returnedObject,
  _encode_Entry_returnedObject,
} from '../Uds2/Entry-returnedObject.ta';
import {
  Entry_choice_Item,
  _decode_Entry_choice_Item,
  _encode_Entry_choice_Item,
} from '../Uds2/Entry-choice-Item.ta';
export {
  Entry_choice_Item,
  _decode_Entry_choice_Item,
  _encode_Entry_choice_Item,
} from '../Uds2/Entry-choice-Item.ta';

/* START_OF_SYMBOL_DEFINITION Entry */
/**
 * @summary Entry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Entry ::= SEQUENCE {
 *   entryIdentifier  OCTET STRING OPTIONAL,
 *   returnedObject
 *     ENUMERATED {subscriber, stateOrProvince, locality, street, businessCategory}
 *       DEFAULT subscriber,
 *   hierarchyLevel   INTEGER(0..MAX) OPTIONAL,
 *   hierarchyBelow   BOOLEAN DEFAULT FALSE,
 *   choice           SEQUENCE OF CHOICE {attribute  Attribute,
 *                                        family     Family}
 * }
 * ```
 *
 * @class
 */
export class Entry {
  constructor(
    /**
     * @summary `entryIdentifier`.
     * @public
     * @readonly
     */
    readonly entryIdentifier: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `returnedObject`.
     * @public
     * @readonly
     */
    readonly returnedObject: OPTIONAL<Entry_returnedObject>,
    /**
     * @summary `hierarchyLevel`.
     * @public
     * @readonly
     */
    readonly hierarchyLevel: OPTIONAL<INTEGER>,
    /**
     * @summary `hierarchyBelow`.
     * @public
     * @readonly
     */
    readonly hierarchyBelow: OPTIONAL<BOOLEAN>,
    /**
     * @summary `choice`.
     * @public
     * @readonly
     */
    readonly choice: Entry_choice_Item[]
  ) {}

  /**
   * @summary Restructures an object into a Entry
   * @description
   *
   * This takes an `object` and converts it to a `Entry`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Entry`.
   * @returns {Entry}
   */
  public static _from_object(_o: { [_K in keyof Entry]: Entry[_K] }): Entry {
    return new Entry(
      _o.entryIdentifier,
      _o.returnedObject,
      _o.hierarchyLevel,
      _o.hierarchyBelow,
      _o.choice
    );
  }

  /**
   * @summary Getter that returns the default value for `returnedObject`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_returnedObject() {
    return Entry_returnedObject_subscriber;
  }
  /**
   * @summary Getter that returns the default value for `hierarchyBelow`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_hierarchyBelow() {
    return false;
  }
  /**
   * @summary The enum used as the type of the component `returnedObject`
   * @public
   * @static
   */

  public static _enum_for_returnedObject = _enum_for_Entry_returnedObject;
}
/* END_OF_SYMBOL_DEFINITION Entry */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Entry */
/**
 * @summary The Leading Root Component Types of Entry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Entry: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entryIdentifier',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'returnedObject',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'hierarchyLevel',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'hierarchyBelow',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'choice',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Entry */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Entry */
/**
 * @summary The Trailing Root Component Types of Entry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Entry: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Entry */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Entry */
/**
 * @summary The Extension Addition Component Types of Entry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Entry: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Entry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Entry */
let _cached_decoder_for_Entry: $.ASN1Decoder<Entry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Entry */

/* START_OF_SYMBOL_DEFINITION _decode_Entry */
/**
 * @summary Decodes an ASN.1 element into a(n) Entry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Entry} The decoded data structure.
 */
export function _decode_Entry(el: _Element) {
  if (!_cached_decoder_for_Entry) {
    _cached_decoder_for_Entry = function (el: _Element): Entry {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let entryIdentifier: OPTIONAL<OCTET_STRING>;
      let returnedObject: OPTIONAL<Entry_returnedObject> =
        Entry._default_value_for_returnedObject;
      let hierarchyLevel: OPTIONAL<INTEGER>;
      let hierarchyBelow: OPTIONAL<BOOLEAN> =
        Entry._default_value_for_hierarchyBelow;
      let choice!: Entry_choice_Item[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        entryIdentifier: (_el: _Element): void => {
          entryIdentifier = $._decodeOctetString(_el);
        },
        returnedObject: (_el: _Element): void => {
          returnedObject = _decode_Entry_returnedObject(_el);
        },
        hierarchyLevel: (_el: _Element): void => {
          hierarchyLevel = $._decodeInteger(_el);
        },
        hierarchyBelow: (_el: _Element): void => {
          hierarchyBelow = $._decodeBoolean(_el);
        },
        choice: (_el: _Element): void => {
          choice = $._decodeSequenceOf<Entry_choice_Item>(
            () => _decode_Entry_choice_Item
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Entry,
        _extension_additions_list_spec_for_Entry,
        _root_component_type_list_2_spec_for_Entry,
        undefined
      );
      return new Entry /* SEQUENCE_CONSTRUCTOR_CALL */(
        entryIdentifier,
        returnedObject,
        hierarchyLevel,
        hierarchyBelow,
        choice
      );
    };
  }
  return _cached_decoder_for_Entry(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Entry */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Entry */
let _cached_encoder_for_Entry: $.ASN1Encoder<Entry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Entry */

/* START_OF_SYMBOL_DEFINITION _encode_Entry */
/**
 * @summary Encodes a(n) Entry into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entry, encoded as an ASN.1 Element.
 */
export function _encode_Entry(value: Entry, elGetter: $.ASN1Encoder<Entry>) {
  if (!_cached_encoder_for_Entry) {
    _cached_encoder_for_Entry = function (
      value: Entry,
      elGetter: $.ASN1Encoder<Entry>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.entryIdentifier === undefined
              ? undefined
              : $._encodeOctetString(value.entryIdentifier, $.BER),
            /* IF_DEFAULT */ value.returnedObject === undefined ||
            $.deepEq(
              value.returnedObject,
              Entry._default_value_for_returnedObject
            )
              ? undefined
              : _encode_Entry_returnedObject(value.returnedObject, $.BER),
            /* IF_ABSENT  */ value.hierarchyLevel === undefined
              ? undefined
              : $._encodeInteger(value.hierarchyLevel, $.BER),
            /* IF_DEFAULT */ value.hierarchyBelow === undefined ||
            $.deepEq(
              value.hierarchyBelow,
              Entry._default_value_for_hierarchyBelow
            )
              ? undefined
              : $._encodeBoolean(value.hierarchyBelow, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<Entry_choice_Item>(
              () => _encode_Entry_choice_Item,
              $.BER
            )(value.choice, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Entry(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Entry */

/* eslint-enable */
