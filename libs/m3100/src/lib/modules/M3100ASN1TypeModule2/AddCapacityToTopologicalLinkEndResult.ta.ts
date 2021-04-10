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
  PointCapacity,
  _decode_PointCapacity,
  _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta';
export {
  PointCapacity,
  _decode_PointCapacity,
  _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta';
import {
  NWTPList,
  _decode_NWTPList,
  _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta';
export {
  NWTPList,
  _decode_NWTPList,
  _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta';

/* START_OF_SYMBOL_DEFINITION AddCapacityToTopologicalLinkEndResult */
/**
 * @summary AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddCapacityToTopologicalLinkEndResult ::= SEQUENCE {
 *   resultingCapacity                    PointCapacity,
 *   resultingnetworkCTPs                 NWTPList,
 *   resultingProvisionedLinkEndCapacity  PointCapacity
 * }
 * ```
 *
 * @class
 */
export class AddCapacityToTopologicalLinkEndResult {
  constructor(
    /**
     * @summary `resultingCapacity`.
     * @public
     * @readonly
     */
    readonly resultingCapacity: PointCapacity,
    /**
     * @summary `resultingnetworkCTPs`.
     * @public
     * @readonly
     */
    readonly resultingnetworkCTPs: NWTPList,
    /**
     * @summary `resultingProvisionedLinkEndCapacity`.
     * @public
     * @readonly
     */
    readonly resultingProvisionedLinkEndCapacity: PointCapacity
  ) {}

  /**
   * @summary Restructures an object into a AddCapacityToTopologicalLinkEndResult
   * @description
   *
   * This takes an `object` and converts it to a `AddCapacityToTopologicalLinkEndResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AddCapacityToTopologicalLinkEndResult`.
   * @returns {AddCapacityToTopologicalLinkEndResult}
   */
  public static _from_object(
    _o: {
      [_K in keyof AddCapacityToTopologicalLinkEndResult]: AddCapacityToTopologicalLinkEndResult[_K];
    }
  ): AddCapacityToTopologicalLinkEndResult {
    return new AddCapacityToTopologicalLinkEndResult(
      _o.resultingCapacity,
      _o.resultingnetworkCTPs,
      _o.resultingProvisionedLinkEndCapacity
    );
  }
}
/* END_OF_SYMBOL_DEFINITION AddCapacityToTopologicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddCapacityToTopologicalLinkEndResult */
/**
 * @summary The Leading Root Component Types of AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddCapacityToTopologicalLinkEndResult: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'resultingCapacity',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'resultingnetworkCTPs',
    false,
    $.hasTag(_TagClass.universal, 17),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'resultingProvisionedLinkEndCapacity',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddCapacityToTopologicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddCapacityToTopologicalLinkEndResult */
/**
 * @summary The Trailing Root Component Types of AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddCapacityToTopologicalLinkEndResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddCapacityToTopologicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddCapacityToTopologicalLinkEndResult */
/**
 * @summary The Extension Addition Component Types of AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddCapacityToTopologicalLinkEndResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddCapacityToTopologicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddCapacityToTopologicalLinkEndResult */
let _cached_decoder_for_AddCapacityToTopologicalLinkEndResult: $.ASN1Decoder<AddCapacityToTopologicalLinkEndResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddCapacityToTopologicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _decode_AddCapacityToTopologicalLinkEndResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AddCapacityToTopologicalLinkEndResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddCapacityToTopologicalLinkEndResult} The decoded data structure.
 */
export function _decode_AddCapacityToTopologicalLinkEndResult(el: _Element) {
  if (!_cached_decoder_for_AddCapacityToTopologicalLinkEndResult) {
    _cached_decoder_for_AddCapacityToTopologicalLinkEndResult = function (
      el: _Element
    ): AddCapacityToTopologicalLinkEndResult {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'AddCapacityToTopologicalLinkEndResult contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'resultingCapacity';
      sequence[1].name = 'resultingnetworkCTPs';
      sequence[2].name = 'resultingProvisionedLinkEndCapacity';
      let resultingCapacity!: PointCapacity;
      let resultingnetworkCTPs!: NWTPList;
      let resultingProvisionedLinkEndCapacity!: PointCapacity;
      resultingCapacity = _decode_PointCapacity(sequence[0]);
      resultingnetworkCTPs = _decode_NWTPList(sequence[1]);
      resultingProvisionedLinkEndCapacity = _decode_PointCapacity(sequence[2]);
      return new AddCapacityToTopologicalLinkEndResult(
        resultingCapacity,
        resultingnetworkCTPs,
        resultingProvisionedLinkEndCapacity
      );
    };
  }
  return _cached_decoder_for_AddCapacityToTopologicalLinkEndResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddCapacityToTopologicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddCapacityToTopologicalLinkEndResult */
let _cached_encoder_for_AddCapacityToTopologicalLinkEndResult: $.ASN1Encoder<AddCapacityToTopologicalLinkEndResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddCapacityToTopologicalLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _encode_AddCapacityToTopologicalLinkEndResult */
/**
 * @summary Encodes a(n) AddCapacityToTopologicalLinkEndResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddCapacityToTopologicalLinkEndResult, encoded as an ASN.1 Element.
 */
export function _encode_AddCapacityToTopologicalLinkEndResult(
  value: AddCapacityToTopologicalLinkEndResult,
  elGetter: $.ASN1Encoder<AddCapacityToTopologicalLinkEndResult>
) {
  if (!_cached_encoder_for_AddCapacityToTopologicalLinkEndResult) {
    _cached_encoder_for_AddCapacityToTopologicalLinkEndResult = function (
      value: AddCapacityToTopologicalLinkEndResult,
      elGetter: $.ASN1Encoder<AddCapacityToTopologicalLinkEndResult>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PointCapacity(
              value.resultingCapacity,
              $.BER
            ),
            /* REQUIRED   */ _encode_NWTPList(
              value.resultingnetworkCTPs,
              $.BER
            ),
            /* REQUIRED   */ _encode_PointCapacity(
              value.resultingProvisionedLinkEndCapacity,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AddCapacityToTopologicalLinkEndResult(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_AddCapacityToTopologicalLinkEndResult */

/* eslint-enable */
