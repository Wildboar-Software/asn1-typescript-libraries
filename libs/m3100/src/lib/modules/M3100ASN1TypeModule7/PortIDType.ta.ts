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

/* START_OF_SYMBOL_DEFINITION PortIDType */
/**
 * @summary PortIDType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortIDType ::= SEQUENCE {
 *   managedElement  [0]  GraphicString,
 *   bay             [1]  GraphicString OPTIONAL,
 *   shelf           [2]  GraphicString OPTIONAL,
 *   drawer          [3]  GraphicString OPTIONAL,
 *   slot            [4]  GraphicString OPTIONAL,
 *   port            [5]  GraphicString
 * }
 * ```
 *
 * @class
 */
export class PortIDType {
  constructor(
    /**
     * @summary `managedElement`.
     * @public
     * @readonly
     */
    readonly managedElement: GraphicString,
    /**
     * @summary `bay`.
     * @public
     * @readonly
     */
    readonly bay: OPTIONAL<GraphicString>,
    /**
     * @summary `shelf`.
     * @public
     * @readonly
     */
    readonly shelf: OPTIONAL<GraphicString>,
    /**
     * @summary `drawer`.
     * @public
     * @readonly
     */
    readonly drawer: OPTIONAL<GraphicString>,
    /**
     * @summary `slot`.
     * @public
     * @readonly
     */
    readonly slot: OPTIONAL<GraphicString>,
    /**
     * @summary `port`.
     * @public
     * @readonly
     */
    readonly port: GraphicString
  ) {}

  /**
   * @summary Restructures an object into a PortIDType
   * @description
   *
   * This takes an `object` and converts it to a `PortIDType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PortIDType`.
   * @returns {PortIDType}
   */
  public static _from_object(
    _o: { [_K in keyof PortIDType]: PortIDType[_K] }
  ): PortIDType {
    return new PortIDType(
      _o.managedElement,
      _o.bay,
      _o.shelf,
      _o.drawer,
      _o.slot,
      _o.port
    );
  }
}
/* END_OF_SYMBOL_DEFINITION PortIDType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PortIDType */
/**
 * @summary The Leading Root Component Types of PortIDType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PortIDType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedElement',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bay',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'shelf',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'drawer',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'slot',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'port',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PortIDType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PortIDType */
/**
 * @summary The Trailing Root Component Types of PortIDType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PortIDType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PortIDType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PortIDType */
/**
 * @summary The Extension Addition Component Types of PortIDType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PortIDType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PortIDType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PortIDType */
let _cached_decoder_for_PortIDType: $.ASN1Decoder<PortIDType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PortIDType */

/* START_OF_SYMBOL_DEFINITION _decode_PortIDType */
/**
 * @summary Decodes an ASN.1 element into a(n) PortIDType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PortIDType} The decoded data structure.
 */
export function _decode_PortIDType(el: _Element) {
  if (!_cached_decoder_for_PortIDType) {
    _cached_decoder_for_PortIDType = function (el: _Element): PortIDType {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedElement!: GraphicString;
      let bay: OPTIONAL<GraphicString>;
      let shelf: OPTIONAL<GraphicString>;
      let drawer: OPTIONAL<GraphicString>;
      let slot: OPTIONAL<GraphicString>;
      let port!: GraphicString;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        managedElement: (_el: _Element): void => {
          managedElement = $._decode_implicit<GraphicString>(
            () => $._decodeGraphicString
          )(_el);
        },
        bay: (_el: _Element): void => {
          bay = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(
            _el
          );
        },
        shelf: (_el: _Element): void => {
          shelf = $._decode_implicit<GraphicString>(
            () => $._decodeGraphicString
          )(_el);
        },
        drawer: (_el: _Element): void => {
          drawer = $._decode_implicit<GraphicString>(
            () => $._decodeGraphicString
          )(_el);
        },
        slot: (_el: _Element): void => {
          slot = $._decode_implicit<GraphicString>(
            () => $._decodeGraphicString
          )(_el);
        },
        port: (_el: _Element): void => {
          port = $._decode_implicit<GraphicString>(
            () => $._decodeGraphicString
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PortIDType,
        _extension_additions_list_spec_for_PortIDType,
        _root_component_type_list_2_spec_for_PortIDType,
        undefined
      );
      return new PortIDType /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedElement,
        bay,
        shelf,
        drawer,
        slot,
        port
      );
    };
  }
  return _cached_decoder_for_PortIDType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PortIDType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PortIDType */
let _cached_encoder_for_PortIDType: $.ASN1Encoder<PortIDType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PortIDType */

/* START_OF_SYMBOL_DEFINITION _encode_PortIDType */
/**
 * @summary Encodes a(n) PortIDType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortIDType, encoded as an ASN.1 Element.
 */
export function _encode_PortIDType(
  value: PortIDType,
  elGetter: $.ASN1Encoder<PortIDType>
) {
  if (!_cached_encoder_for_PortIDType) {
    _cached_encoder_for_PortIDType = function (
      value: PortIDType,
      elGetter: $.ASN1Encoder<PortIDType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeGraphicString,
              $.BER
            )(value.managedElement, $.BER),
            /* IF_ABSENT  */ value.bay === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeGraphicString,
                  $.BER
                )(value.bay, $.BER),
            /* IF_ABSENT  */ value.shelf === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeGraphicString,
                  $.BER
                )(value.shelf, $.BER),
            /* IF_ABSENT  */ value.drawer === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => $._encodeGraphicString,
                  $.BER
                )(value.drawer, $.BER),
            /* IF_ABSENT  */ value.slot === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => $._encodeGraphicString,
                  $.BER
                )(value.slot, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              5,
              () => $._encodeGraphicString,
              $.BER
            )(value.port, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PortIDType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PortIDType */

/* eslint-enable */
