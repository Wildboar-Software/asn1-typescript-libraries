/* eslint-disable */
import {
  OPTIONAL,
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
  Content,
  _decode_Content,
  _encode_Content,
} from '../ASN1SOAP/Content.ta.mjs';

/**
 * @summary Body
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Body ::= SEQUENCE {content  Content OPTIONAL
 * }
 * ```
 *
 */
export class Body {
  constructor(
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: OPTIONAL<Content>
  ) {}

  /**
   * @summary Restructures an object into a Body
   * @description
   *
   * This takes an `object` and converts it to a `Body`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Body`.
   * @returns {Body}
   */
  public static _from_object(_o: { [_K in keyof Body]: Body[_K] }): Body {
    return new Body(_o.content);
  }
}


/**
 * @summary The Leading Root Component Types of Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Body: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'content',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Body: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Body: $.ComponentSpec[] = [];


let _cached_decoder_for_Body: $.ASN1Decoder<Body> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Body
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Body} The decoded data structure.
 */
export function _decode_Body(el: _Element): Body {
  if (!_cached_decoder_for_Body) {
    _cached_decoder_for_Body = function (el: _Element): Body {
      let content: OPTIONAL<Content>;
      const callbacks: $.DecodingMap = {
        content: (_el: _Element): void => {
          content = _decode_Content(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Body,
        _extension_additions_list_spec_for_Body,
        _root_component_type_list_2_spec_for_Body,
        undefined
      );
      return new Body (content);
    };
  }
  return _cached_decoder_for_Body(el);
}


let _cached_encoder_for_Body: $.ASN1Encoder<Body> | null = null;


/**
 * @summary Encodes a(n) Body into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Body, encoded as an ASN.1 Element.
 */
export function _encode_Body(value: Body, elGetter: $.ASN1Encoder<Body>): _Element {
  if (!_cached_encoder_for_Body) {
    _cached_encoder_for_Body = function (
      value: Body    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.content === undefined
              ? undefined
              : _encode_Content(value.content, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Body(value, elGetter);
}


/* eslint-enable */
