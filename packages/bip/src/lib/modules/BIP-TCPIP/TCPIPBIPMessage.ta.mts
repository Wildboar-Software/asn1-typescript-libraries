/* eslint-disable */
import {
  OCTET_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  TCPIPBIPMessage_version,
  _decode_TCPIPBIPMessage_version,
  _encode_TCPIPBIPMessage_version,
} from '../BIP-TCPIP/TCPIPBIPMessage-version.ta.mjs';
import {
  TCPIPBIPMessage_content,
  _decode_TCPIPBIPMessage_content,
  _encode_TCPIPBIPMessage_content,
} from '../BIP-TCPIP/TCPIPBIPMessage-content.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'version',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'content',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of TCPIPBIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TCPIPBIPMessage: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TCPIPBIPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TCPIPBIPMessage: $.ComponentSpec[] = [];


let _cached_decoder_for_TCPIPBIPMessage: $.ASN1Decoder<TCPIPBIPMessage> | null = null;


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


let _cached_encoder_for_TCPIPBIPMessage: $.ASN1Encoder<TCPIPBIPMessage> | null = null;


/**
 * @summary Encodes a(n) TCPIPBIPMessage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCPIPBIPMessage, encoded as an ASN.1 Element.
 */
export function _encode_TCPIPBIPMessage(
  value: TCPIPBIPMessage,
  elGetter: $.ASN1Encoder<TCPIPBIPMessage>
) {
  if (!_cached_encoder_for_TCPIPBIPMessage) {
    _cached_encoder_for_TCPIPBIPMessage = function (
      value: TCPIPBIPMessage    ): _Element {
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


/* eslint-enable */
