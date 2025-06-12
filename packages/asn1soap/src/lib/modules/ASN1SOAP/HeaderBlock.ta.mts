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
import { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.mjs';
export { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.mjs';
import { ultimateReceiver } from '../ASN1SOAP/ultimateReceiver.va.mjs';
export { ultimateReceiver } from '../ASN1SOAP/ultimateReceiver.va.mjs';
import {
  Content,
  _decode_Content,
  _encode_Content,
} from '../ASN1SOAP/Content.ta.mjs';
export {
  Content,
  _decode_Content,
  _encode_Content,
} from '../ASN1SOAP/Content.ta.mjs';

/* START_OF_SYMBOL_DEFINITION HeaderBlock */
/**
 * @summary HeaderBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderBlock ::= SEQUENCE {
 *   mustUnderstand  BOOLEAN OPTIONAL,
 *   relay           BOOLEAN OPTIONAL,
 *   role            AnyURI DEFAULT ultimateReceiver,
 *   content         Content
 * }
 * ```
 *
 * @class
 */
export class HeaderBlock {
  constructor(
    /**
     * @summary `mustUnderstand`.
     * @public
     * @readonly
     */
    readonly mustUnderstand: OPTIONAL<BOOLEAN>,
    /**
     * @summary `relay`.
     * @public
     * @readonly
     */
    readonly relay: OPTIONAL<BOOLEAN>,
    /**
     * @summary `role`.
     * @public
     * @readonly
     */
    readonly role: OPTIONAL<AnyURI>,
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: Content
  ) {}

  /**
   * @summary Restructures an object into a HeaderBlock
   * @description
   *
   * This takes an `object` and converts it to a `HeaderBlock`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `HeaderBlock`.
   * @returns {HeaderBlock}
   */
  public static _from_object(
    _o: { [_K in keyof HeaderBlock]: HeaderBlock[_K] }
  ): HeaderBlock {
    return new HeaderBlock(_o.mustUnderstand, _o.relay, _o.role, _o.content);
  }

  /**
   * @summary Getter that returns the default value for `role`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_role() {
    return ultimateReceiver;
  }
}
/* END_OF_SYMBOL_DEFINITION HeaderBlock */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_HeaderBlock */
/**
 * @summary The Leading Root Component Types of HeaderBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HeaderBlock: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'mustUnderstand',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'relay',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'role',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'content',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_HeaderBlock */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_HeaderBlock */
/**
 * @summary The Trailing Root Component Types of HeaderBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HeaderBlock: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_HeaderBlock */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_HeaderBlock */
/**
 * @summary The Extension Addition Component Types of HeaderBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HeaderBlock: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_HeaderBlock */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderBlock */
let _cached_decoder_for_HeaderBlock: $.ASN1Decoder<HeaderBlock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderBlock */

/* START_OF_SYMBOL_DEFINITION _decode_HeaderBlock */
/**
 * @summary Decodes an ASN.1 element into a(n) HeaderBlock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeaderBlock} The decoded data structure.
 */
export function _decode_HeaderBlock(el: _Element) {
  if (!_cached_decoder_for_HeaderBlock) {
    _cached_decoder_for_HeaderBlock = function (el: _Element): HeaderBlock {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let mustUnderstand: OPTIONAL<BOOLEAN>;
      let relay: OPTIONAL<BOOLEAN>;
      let role: OPTIONAL<AnyURI> = HeaderBlock._default_value_for_role;
      let content!: Content;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        mustUnderstand: (_el: _Element): void => {
          mustUnderstand = $._decodeBoolean(_el);
        },
        relay: (_el: _Element): void => {
          relay = $._decodeBoolean(_el);
        },
        role: (_el: _Element): void => {
          role = _decode_AnyURI(_el);
        },
        content: (_el: _Element): void => {
          content = _decode_Content(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_HeaderBlock,
        _extension_additions_list_spec_for_HeaderBlock,
        _root_component_type_list_2_spec_for_HeaderBlock,
        undefined
      );
      return new HeaderBlock /* SEQUENCE_CONSTRUCTOR_CALL */(
        mustUnderstand,
        relay,
        role,
        content
      );
    };
  }
  return _cached_decoder_for_HeaderBlock(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HeaderBlock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderBlock */
let _cached_encoder_for_HeaderBlock: $.ASN1Encoder<HeaderBlock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderBlock */

/* START_OF_SYMBOL_DEFINITION _encode_HeaderBlock */
/**
 * @summary Encodes a(n) HeaderBlock into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderBlock, encoded as an ASN.1 Element.
 */
export function _encode_HeaderBlock(
  value: HeaderBlock,
  elGetter: $.ASN1Encoder<HeaderBlock>
) {
  if (!_cached_encoder_for_HeaderBlock) {
    _cached_encoder_for_HeaderBlock = function (
      value: HeaderBlock,
      elGetter: $.ASN1Encoder<HeaderBlock>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.mustUnderstand === undefined
              ? undefined
              : $._encodeBoolean(value.mustUnderstand, $.BER),
            /* IF_ABSENT  */ value.relay === undefined
              ? undefined
              : $._encodeBoolean(value.relay, $.BER),
            /* IF_DEFAULT */ value.role === undefined ||
            $.deepEq(value.role, HeaderBlock._default_value_for_role)
              ? undefined
              : _encode_AnyURI(value.role, $.BER),
            /* REQUIRED   */ _encode_Content(value.content, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_HeaderBlock(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HeaderBlock */

/* eslint-enable */
