/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
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
import { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.mjs';
import { ultimateReceiver } from '../ASN1SOAP/ultimateReceiver.va.mjs';
import {
  Content,
  _decode_Content,
  _encode_Content,
} from '../ASN1SOAP/Content.ta.mjs';

/**
 * @summary HeaderBlock
 * @description
 *
 * One ASN.1 SOAP header block. `content` is the block payload;
 * `mustUnderstand`, `relay`, and `role` are the SOAP Header
 * attributes. When mapping from a fast infoset payload, those
 * three attributes are stripped from the root element so only
 * these components govern processing.
 * ITU-T Rec. X.892 (05/2005)
 * [§3.2.3](https://www.itu.int/rec/T-REC-X.892-200505-I),
 * §7.2.2, §7.5.2.3, Table 1.
 * W3C SOAP 1.2 Part 1
 * [§5.2.1](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#soapheadblock).
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
 */
export class HeaderBlock {
  constructor(
    /**
     * @summary `mustUnderstand`.
     * @description If present and not `FALSE`, maps to SOAP
     * `mustUnderstand="1"`. A targeted node that does not process
     * the block must fault (`mustUnderstand`). Omitted or `FALSE`
     * produces no attribute.
     * ITU-T Rec. X.892 (05/2005) §7.2.2.1, §8.2.2.1.
     * W3C SOAP 1.2 Part 1
     * [§5.2.3](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#soapmu).
     * @public
     * @readonly
     */
    readonly mustUnderstand: OPTIONAL<BOOLEAN>,
    /**
     * @summary `relay`.
     * @description If present and not `FALSE`, maps to SOAP
     * `relay="1"`: an intermediary that does not process the
     * block shall forward it. Omitted or `FALSE` produces no
     * attribute (SOAP default: do not relay).
     * ITU-T Rec. X.892 (05/2005) §7.2.2.2, §8.2.2.2.
     * W3C SOAP 1.2 Part 1
     * [§5.2.4](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#soaprelay).
     * @public
     * @readonly
     */
    readonly relay: OPTIONAL<BOOLEAN>,
    /**
     * @summary `role`.
     * @description SOAP role URI this block is targeted at.
     * Default {@link ultimateReceiver}. The `role` attribute is
     * generated only when the value differs from that default.
     * ITU-T Rec. X.892 (05/2005) §7.2.2.3, §8.2.2.3.
     * W3C SOAP 1.2 Part 1
     * [§5.2.2](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#soaprole).
     * @public
     * @readonly
     */
    readonly role: OPTIONAL<AnyURI>,
    /**
     * @summary `content`.
     * @description Header-block payload: an embedded ASN.1
     * encoding, a fast infoset document, or a NotUnderstood
     * block. ITU-T Rec. X.892 (05/2005) §7.2.2, §7.5.
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
   * @description {@link ultimateReceiver}
   * (`http://www.w3.org/2003/05/soap-envelope/role/UltimateReceiver`).
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_role(): AnyURI {
    return ultimateReceiver;
  }
}


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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'relay',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'role',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'content',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of HeaderBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HeaderBlock: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of HeaderBlock
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HeaderBlock: $.ComponentSpec[] = [];


let _cached_decoder_for_HeaderBlock: $.ASN1Decoder<HeaderBlock> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HeaderBlock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeaderBlock} The decoded data structure.
 */
export function _decode_HeaderBlock(el: _Element): HeaderBlock {
  if (!_cached_decoder_for_HeaderBlock) {
    _cached_decoder_for_HeaderBlock = function (el: _Element): HeaderBlock {
      let mustUnderstand: OPTIONAL<BOOLEAN>;
      let relay: OPTIONAL<BOOLEAN>;
      let role: OPTIONAL<AnyURI> = HeaderBlock._default_value_for_role;
      let content!: Content;
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_HeaderBlock,
        _extension_additions_list_spec_for_HeaderBlock,
        _root_component_type_list_2_spec_for_HeaderBlock,
        undefined
      );
      return new HeaderBlock (
        mustUnderstand,
        relay,
        role,
        content
      );
    };
  }
  return _cached_decoder_for_HeaderBlock(el);
}


let _cached_encoder_for_HeaderBlock: $.ASN1Encoder<HeaderBlock> | null = null;


/**
 * @summary Encodes a(n) HeaderBlock into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderBlock, encoded as an ASN.1 Element.
 */
export function _encode_HeaderBlock(
  value: HeaderBlock,
  elGetter: $.ASN1Encoder<HeaderBlock>
): _Element {
  if (!_cached_encoder_for_HeaderBlock) {
    _cached_encoder_for_HeaderBlock = function (
      value: HeaderBlock    ): _Element {
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


/* eslint-enable */
