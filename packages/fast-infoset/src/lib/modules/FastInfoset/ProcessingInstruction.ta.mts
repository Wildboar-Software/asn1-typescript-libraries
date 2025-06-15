/* eslint-disable */
import {
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
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
import {
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta.mjs';
/**
 * @summary ProcessingInstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingInstruction ::= SEQUENCE {
 *   target   IdentifyingStringOrIndex-- OTHER NCNAME category --,
 *   content  NonIdentifyingStringOrIndex
 * }
 * ```
 *
 * @class
 */
export class ProcessingInstruction {
  constructor(
    /**
     * @summary `target`.
     * @public
     * @readonly
     */
    readonly target: IdentifyingStringOrIndex,
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: NonIdentifyingStringOrIndex
  ) {}

  /**
   * @summary Restructures an object into a ProcessingInstruction
   * @description
   *
   * This takes an `object` and converts it to a `ProcessingInstruction`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ProcessingInstruction`.
   * @returns {ProcessingInstruction}
   */
  public static _from_object(
    _o: { [_K in keyof ProcessingInstruction]: ProcessingInstruction[_K] }
  ): ProcessingInstruction {
    return new ProcessingInstruction(_o.target, _o.content);
  }
}

/**
 * @summary The Leading Root Component Types of ProcessingInstruction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProcessingInstruction: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'target',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'content',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of ProcessingInstruction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProcessingInstruction: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ProcessingInstruction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProcessingInstruction: $.ComponentSpec[] = [];

let _cached_decoder_for_ProcessingInstruction: $.ASN1Decoder<ProcessingInstruction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingInstruction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingInstruction} The decoded data structure.
 */
export function _decode_ProcessingInstruction(el: _Element) {
  if (!_cached_decoder_for_ProcessingInstruction) {
    _cached_decoder_for_ProcessingInstruction = function (
      el: _Element
    ): ProcessingInstruction {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ProcessingInstruction contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'target';
      sequence[1].name = 'content';
      let target!: IdentifyingStringOrIndex;
      let content!: NonIdentifyingStringOrIndex;
      target = _decode_IdentifyingStringOrIndex(sequence[0]);
      content = _decode_NonIdentifyingStringOrIndex(sequence[1]);
      return new ProcessingInstruction(target, content);
    };
  }
  return _cached_decoder_for_ProcessingInstruction(el);
}

let _cached_encoder_for_ProcessingInstruction: $.ASN1Encoder<ProcessingInstruction> | null = null;

/**
 * @summary Encodes a(n) ProcessingInstruction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingInstruction, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingInstruction(
  value: ProcessingInstruction,
  elGetter: $.ASN1Encoder<ProcessingInstruction>
) {
  if (!_cached_encoder_for_ProcessingInstruction) {
    _cached_encoder_for_ProcessingInstruction = function (
      value: ProcessingInstruction    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_IdentifyingStringOrIndex(
              value.target,
              $.BER
            ),
            /* REQUIRED   */ _encode_NonIdentifyingStringOrIndex(
              value.content,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ProcessingInstruction(value, elGetter);
}


/* eslint-enable */
