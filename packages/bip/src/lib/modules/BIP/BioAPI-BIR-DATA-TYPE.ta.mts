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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_BIR_DATA_TYPE_processedLevel,
  _enum_for_BioAPI_BIR_DATA_TYPE_processedLevel,
  _decode_BioAPI_BIR_DATA_TYPE_processedLevel,
  _encode_BioAPI_BIR_DATA_TYPE_processedLevel,
} from '../BIP/BioAPI-BIR-DATA-TYPE-processedLevel.ta.mjs';
import {
  BioAPI_BIR_DATA_TYPE_flags,
  _decode_BioAPI_BIR_DATA_TYPE_flags,
  _encode_BioAPI_BIR_DATA_TYPE_flags,
} from '../BIP/BioAPI-BIR-DATA-TYPE-flags.ta.mjs';

/**
 * @summary BioAPI_BIR_DATA_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-DATA-TYPE ::= SEQUENCE {
 *   processedLevel  ENUMERATED {raw, intermediate, processed, ...
 *                               },
 *   flags
 *     BIT STRING {encrypted(0), signed(1), index-present(3)}(SIZE (4))
 * }
 * ```
 *
 */
export class BioAPI_BIR_DATA_TYPE {
  constructor(
    /**
     * @summary `processedLevel`.
     * @public
     * @readonly
     */
    readonly processedLevel: BioAPI_BIR_DATA_TYPE_processedLevel,
    /**
     * @summary `flags`.
     * @public
     * @readonly
     */
    readonly flags: BioAPI_BIR_DATA_TYPE_flags
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BIR_DATA_TYPE
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BIR_DATA_TYPE`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BIR_DATA_TYPE`.
   * @returns {BioAPI_BIR_DATA_TYPE}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_BIR_DATA_TYPE]: BioAPI_BIR_DATA_TYPE[_K] }
  ): BioAPI_BIR_DATA_TYPE {
    return new BioAPI_BIR_DATA_TYPE(_o.processedLevel, _o.flags);
  }

  /**
   * @summary The enum used as the type of the component `processedLevel`
   * @public
   * @static
   */

  public static _enum_for_processedLevel = _enum_for_BioAPI_BIR_DATA_TYPE_processedLevel;
}


/**
 * @summary The Leading Root Component Types of BioAPI_BIR_DATA_TYPE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BIR_DATA_TYPE: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'processedLevel',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'flags',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_BIR_DATA_TYPE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR_DATA_TYPE: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_BIR_DATA_TYPE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR_DATA_TYPE: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_BIR_DATA_TYPE: $.ASN1Decoder<BioAPI_BIR_DATA_TYPE> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_DATA_TYPE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_DATA_TYPE} The decoded data structure.
 */
export function _decode_BioAPI_BIR_DATA_TYPE(el: _Element): BioAPI_BIR_DATA_TYPE {
  if (!_cached_decoder_for_BioAPI_BIR_DATA_TYPE) {
    _cached_decoder_for_BioAPI_BIR_DATA_TYPE = function (
      el: _Element
    ): BioAPI_BIR_DATA_TYPE {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-BIR-DATA-TYPE contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'processedLevel';
      sequence[1].name = 'flags';
      let processedLevel!: BioAPI_BIR_DATA_TYPE_processedLevel;
      let flags!: BioAPI_BIR_DATA_TYPE_flags;
      processedLevel = _decode_BioAPI_BIR_DATA_TYPE_processedLevel(sequence[0]);
      flags = _decode_BioAPI_BIR_DATA_TYPE_flags(sequence[1]);
      return new BioAPI_BIR_DATA_TYPE(processedLevel, flags);
    };
  }
  return _cached_decoder_for_BioAPI_BIR_DATA_TYPE(el);
}


let _cached_encoder_for_BioAPI_BIR_DATA_TYPE: $.ASN1Encoder<BioAPI_BIR_DATA_TYPE> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BIR_DATA_TYPE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_DATA_TYPE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_DATA_TYPE(
  value: BioAPI_BIR_DATA_TYPE,
  elGetter: $.ASN1Encoder<BioAPI_BIR_DATA_TYPE>
): _Element {
  if (!_cached_encoder_for_BioAPI_BIR_DATA_TYPE) {
    _cached_encoder_for_BioAPI_BIR_DATA_TYPE = function (
      value: BioAPI_BIR_DATA_TYPE    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_DATA_TYPE_processedLevel(
              value.processedLevel,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_DATA_TYPE_flags(
              value.flags,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BIR_DATA_TYPE(value, elGetter);
}


/* eslint-enable */
