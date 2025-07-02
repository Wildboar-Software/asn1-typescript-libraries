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
import { Code, _decode_Code, _encode_Code } from '../ASN1SOAP/Code.ta.mjs';
import { Text, _decode_Text, _encode_Text } from '../ASN1SOAP/Text.ta.mjs';
import { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.mjs';
import {
  Content,
  _decode_Content,
  _encode_Content,
} from '../ASN1SOAP/Content.ta.mjs';

/**
 * @summary Fault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Fault ::= SEQUENCE {
 *   code    Code,
 *   reason  SEQUENCE SIZE (1..MAX) OF Text,
 *   node    AnyURI OPTIONAL,
 *   role    AnyURI OPTIONAL,
 *   detail  Content OPTIONAL
 * }
 * ```
 *
 */
export class Fault {
  constructor(
    /**
     * @summary `code`.
     * @public
     * @readonly
     */
    readonly code: Code,
    /**
     * @summary `reason`.
     * @public
     * @readonly
     */
    readonly reason: Text[],
    /**
     * @summary `node`.
     * @public
     * @readonly
     */
    readonly node: OPTIONAL<AnyURI>,
    /**
     * @summary `role`.
     * @public
     * @readonly
     */
    readonly role: OPTIONAL<AnyURI>,
    /**
     * @summary `detail`.
     * @public
     * @readonly
     */
    readonly detail: OPTIONAL<Content>
  ) {}

  /**
   * @summary Restructures an object into a Fault
   * @description
   *
   * This takes an `object` and converts it to a `Fault`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Fault`.
   * @returns {Fault}
   */
  public static _from_object(_o: { [_K in keyof Fault]: Fault[_K] }): Fault {
    return new Fault(_o.code, _o.reason, _o.node, _o.role, _o.detail);
  }
}


/**
 * @summary The Leading Root Component Types of Fault
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Fault: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'code',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'reason',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'node',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'role',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'detail',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of Fault
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Fault: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Fault
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Fault: $.ComponentSpec[] = [];


let _cached_decoder_for_Fault: $.ASN1Decoder<Fault> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Fault
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Fault} The decoded data structure.
 */
export function _decode_Fault(el: _Element): Fault {
  if (!_cached_decoder_for_Fault) {
    _cached_decoder_for_Fault = function (el: _Element): Fault {
      let code!: Code;
      let reason!: Text[];
      let node: OPTIONAL<AnyURI>;
      let role: OPTIONAL<AnyURI>;
      let detail: OPTIONAL<Content>;
      const callbacks: $.DecodingMap = {
        code: (_el: _Element): void => {
          code = _decode_Code(_el);
        },
        reason: (_el: _Element): void => {
          reason = $._decodeSequenceOf<Text>(() => _decode_Text)(_el);
        },
        node: (_el: _Element): void => {
          node = _decode_AnyURI(_el);
        },
        role: (_el: _Element): void => {
          role = _decode_AnyURI(_el);
        },
        detail: (_el: _Element): void => {
          detail = _decode_Content(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Fault,
        _extension_additions_list_spec_for_Fault,
        _root_component_type_list_2_spec_for_Fault,
        undefined
      );
      return new Fault (
        code,
        reason,
        node,
        role,
        detail
      );
    };
  }
  return _cached_decoder_for_Fault(el);
}


let _cached_encoder_for_Fault: $.ASN1Encoder<Fault> | null = null;


/**
 * @summary Encodes a(n) Fault into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Fault, encoded as an ASN.1 Element.
 */
export function _encode_Fault(value: Fault, elGetter: $.ASN1Encoder<Fault>): _Element {
  if (!_cached_encoder_for_Fault) {
    _cached_encoder_for_Fault = function (
      value: Fault    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Code(value.code, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<Text>(
              () => _encode_Text,
              $.BER
            )(value.reason, $.BER),
            /* IF_ABSENT  */ value.node === undefined
              ? undefined
              : _encode_AnyURI(value.node, $.BER),
            /* IF_ABSENT  */ value.role === undefined
              ? undefined
              : _encode_AnyURI(value.role, $.BER),
            /* IF_ABSENT  */ value.detail === undefined
              ? undefined
              : _encode_Content(value.detail, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Fault(value, elGetter);
}


/* eslint-enable */
