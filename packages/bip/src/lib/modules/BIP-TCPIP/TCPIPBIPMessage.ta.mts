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
  TCPIPBIPMessage_version,
  TCPIPBIPMessage_version_version_1 /* IMPORTED_LONG_NAMED_INTEGER */,
  version_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_TCPIPBIPMessage_version,
  _encode_TCPIPBIPMessage_version,
} from '../BIP-TCPIP/TCPIPBIPMessage-version.ta.mjs';
export {
  TCPIPBIPMessage_version,
  TCPIPBIPMessage_version_version_1 /* IMPORTED_LONG_NAMED_INTEGER */,
  version_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_TCPIPBIPMessage_version,
  _encode_TCPIPBIPMessage_version,
} from '../BIP-TCPIP/TCPIPBIPMessage-version.ta.mjs';
import {
  TCPIPBIPMessage_content,
  _decode_TCPIPBIPMessage_content,
  _encode_TCPIPBIPMessage_content,
} from '../BIP-TCPIP/TCPIPBIPMessage-content.ta.mjs';
export {
  TCPIPBIPMessage_content,
  _decode_TCPIPBIPMessage_content,
  _encode_TCPIPBIPMessage_content,
} from '../BIP-TCPIP/TCPIPBIPMessage-content.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TCPIPBIPMessage */
/**
 * @summary TCPIPBIPMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCPIPBIPMessage ::= SEQUENCE {
 *   magicNumber  OCTET STRING(SIZE (4))('3AC49E70'H),
 *   version      INTEGER {version-1(1)}(0..255),
 *   content
 *     CHOICE {bIPMessage
 *               OCTET STRING(CONTAINING BIPMessage ENCODED BY basic-per-aligned),
 *             keepalive                          NULL,
 *             requestLinkChannelOnSpecifiedPort  INTEGER(0..65535),
 *             requestLinkChannel                 NULL}
 * }
 * ```
 *
 * @class
 */
export class TCPIPBIPMessage {
  constructor(
    /**
     * @summary `magicNumber`.
     * @public
     * @readonly
     */
    readonly magicNumber: OCTET_STRING,
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: TCPIPBIPMessage_version,
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: TCPIPBIPMessage_content
  ) {}

  /**
   * @summary Restructures an object into a TCPIPBIPMessage
   * @description
   *
   * This takes an `object` and converts it to a `TCPIPBIPMessage`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `TCPIPBIPMessage`.
   * @returns {TCPIPBIPMessage}
   */
  public static _from_object(
    _o: { [_K in keyof TCPIPBIPMessage]: TCPIPBIPMessage[_K] }
  ): TCPIPBIPMessage {
    return new TCPIPBIPMessage(_o.magicNumber, _o.version, _o.content);
  }
}
/* END_OF_SYMBOL_DEFINITION TCPIPBIPMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TCPIPBIPMessage */
/**
 * @summary The Leading Root Component Types of TCPIPBIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TCPIPBIPMessage: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'magicNumber',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'version',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'content',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TCPIPBIPMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TCPIPBIPMessage */
/**
 * @summary The Trailing Root Component Types of TCPIPBIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TCPIPBIPMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TCPIPBIPMessage */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TCPIPBIPMessage */
/**
 * @summary The Extension Addition Component Types of TCPIPBIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TCPIPBIPMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TCPIPBIPMessage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage */
let _cached_decoder_for_TCPIPBIPMessage: $.ASN1Decoder<TCPIPBIPMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage */

/* START_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage */
/**
 * @summary Decodes an ASN.1 element into a(n) TCPIPBIPMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCPIPBIPMessage} The decoded data structure.
 */
export function _decode_TCPIPBIPMessage(el: _Element) {
  if (!_cached_decoder_for_TCPIPBIPMessage) {
    _cached_decoder_for_TCPIPBIPMessage = function (
      el: _Element
    ): TCPIPBIPMessage {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'TCPIPBIPMessage contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'magicNumber';
      sequence[1].name = 'version';
      sequence[2].name = 'content';
      let magicNumber!: OCTET_STRING;
      let version!: TCPIPBIPMessage_version;
      let content!: TCPIPBIPMessage_content;
      magicNumber = $._decodeOctetString(sequence[0]);
      version = _decode_TCPIPBIPMessage_version(sequence[1]);
      content = _decode_TCPIPBIPMessage_content(sequence[2]);
      return new TCPIPBIPMessage(magicNumber, version, content);
    };
  }
  return _cached_decoder_for_TCPIPBIPMessage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage */
let _cached_encoder_for_TCPIPBIPMessage: $.ASN1Encoder<TCPIPBIPMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage */

/* START_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage */
/**
 * @summary Encodes a(n) TCPIPBIPMessage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCPIPBIPMessage, encoded as an ASN.1 Element.
 */
export function _encode_TCPIPBIPMessage(
  value: TCPIPBIPMessage,
  elGetter: $.ASN1Encoder<TCPIPBIPMessage>
) {
  if (!_cached_encoder_for_TCPIPBIPMessage) {
    _cached_encoder_for_TCPIPBIPMessage = function (
      value: TCPIPBIPMessage,
      elGetter: $.ASN1Encoder<TCPIPBIPMessage>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeOctetString(value.magicNumber, $.BER),
            /* REQUIRED   */ _encode_TCPIPBIPMessage_version(
              value.version,
              $.BER
            ),
            /* REQUIRED   */ _encode_TCPIPBIPMessage_content(
              value.content,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_TCPIPBIPMessage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage */

/* eslint-enable */
