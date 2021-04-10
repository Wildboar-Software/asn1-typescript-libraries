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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
import {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta';
export {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta';

/* START_OF_SYMBOL_DEFINITION BSPUnloadCallParams */
/**
 * @summary BSPUnloadCallParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPUnloadCallParams ::= SEQUENCE {
 *   bspUuid                  BioAPI-UUID,
 *   unitEventHandlerAddress  MemoryAddress,
 *   unitEventHandlerContext  MemoryAddress
 * }
 * ```
 *
 * @class
 */
export class BSPUnloadCallParams {
  constructor(
    /**
     * @summary `bspUuid`.
     * @public
     * @readonly
     */
    readonly bspUuid: BioAPI_UUID,
    /**
     * @summary `unitEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly unitEventHandlerAddress: MemoryAddress,
    /**
     * @summary `unitEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly unitEventHandlerContext: MemoryAddress
  ) {}

  /**
   * @summary Restructures an object into a BSPUnloadCallParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPUnloadCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPUnloadCallParams`.
   * @returns {BSPUnloadCallParams}
   */
  public static _from_object(
    _o: { [_K in keyof BSPUnloadCallParams]: BSPUnloadCallParams[_K] }
  ): BSPUnloadCallParams {
    return new BSPUnloadCallParams(
      _o.bspUuid,
      _o.unitEventHandlerAddress,
      _o.unitEventHandlerContext
    );
  }
}
/* END_OF_SYMBOL_DEFINITION BSPUnloadCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BSPUnloadCallParams */
/**
 * @summary The Leading Root Component Types of BSPUnloadCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPUnloadCallParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspUuid',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BSPUnloadCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BSPUnloadCallParams */
/**
 * @summary The Trailing Root Component Types of BSPUnloadCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPUnloadCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BSPUnloadCallParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BSPUnloadCallParams */
/**
 * @summary The Extension Addition Component Types of BSPUnloadCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPUnloadCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BSPUnloadCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BSPUnloadCallParams */
let _cached_decoder_for_BSPUnloadCallParams: $.ASN1Decoder<BSPUnloadCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BSPUnloadCallParams */

/* START_OF_SYMBOL_DEFINITION _decode_BSPUnloadCallParams */
/**
 * @summary Decodes an ASN.1 element into a(n) BSPUnloadCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPUnloadCallParams} The decoded data structure.
 */
export function _decode_BSPUnloadCallParams(el: _Element) {
  if (!_cached_decoder_for_BSPUnloadCallParams) {
    _cached_decoder_for_BSPUnloadCallParams = function (
      el: _Element
    ): BSPUnloadCallParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BSPUnloadCallParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspUuid';
      sequence[1].name = 'unitEventHandlerAddress';
      sequence[2].name = 'unitEventHandlerContext';
      let bspUuid!: BioAPI_UUID;
      let unitEventHandlerAddress!: MemoryAddress;
      let unitEventHandlerContext!: MemoryAddress;
      bspUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventHandlerAddress = _decode_MemoryAddress(sequence[1]);
      unitEventHandlerContext = _decode_MemoryAddress(sequence[2]);
      return new BSPUnloadCallParams(
        bspUuid,
        unitEventHandlerAddress,
        unitEventHandlerContext
      );
    };
  }
  return _cached_decoder_for_BSPUnloadCallParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BSPUnloadCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BSPUnloadCallParams */
let _cached_encoder_for_BSPUnloadCallParams: $.ASN1Encoder<BSPUnloadCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BSPUnloadCallParams */

/* START_OF_SYMBOL_DEFINITION _encode_BSPUnloadCallParams */
/**
 * @summary Encodes a(n) BSPUnloadCallParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPUnloadCallParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPUnloadCallParams(
  value: BSPUnloadCallParams,
  elGetter: $.ASN1Encoder<BSPUnloadCallParams>
) {
  if (!_cached_encoder_for_BSPUnloadCallParams) {
    _cached_encoder_for_BSPUnloadCallParams = function (
      value: BSPUnloadCallParams,
      elGetter: $.ASN1Encoder<BSPUnloadCallParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspUuid, $.BER),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerContext,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPUnloadCallParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BSPUnloadCallParams */

/* eslint-enable */
