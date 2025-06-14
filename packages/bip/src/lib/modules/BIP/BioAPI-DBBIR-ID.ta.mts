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
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BioAPI_DBBIR_ID */
/**
 * @summary BioAPI_DBBIR_ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DBBIR-ID ::= SEQUENCE {dbHandle  BioAPI-DB-HANDLE,
 *                               keyValue  BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class BioAPI_DBBIR_ID {
  constructor(
    /**
     * @summary `dbHandle`.
     * @public
     * @readonly
     */
    readonly dbHandle: BioAPI_DB_HANDLE,
    /**
     * @summary `keyValue`.
     * @public
     * @readonly
     */
    readonly keyValue: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_DBBIR_ID
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_DBBIR_ID`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_DBBIR_ID`.
   * @returns {BioAPI_DBBIR_ID}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_DBBIR_ID]: BioAPI_DBBIR_ID[_K] }
  ): BioAPI_DBBIR_ID {
    return new BioAPI_DBBIR_ID(_o.dbHandle, _o.keyValue);
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_DBBIR_ID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_DBBIR_ID */
/**
 * @summary The Leading Root Component Types of BioAPI_DBBIR_ID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_DBBIR_ID: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dbHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyValue',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_DBBIR_ID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_DBBIR_ID */
/**
 * @summary The Trailing Root Component Types of BioAPI_DBBIR_ID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_DBBIR_ID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_DBBIR_ID */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_DBBIR_ID */
/**
 * @summary The Extension Addition Component Types of BioAPI_DBBIR_ID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_DBBIR_ID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_DBBIR_ID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DBBIR_ID */
let _cached_decoder_for_BioAPI_DBBIR_ID: $.ASN1Decoder<BioAPI_DBBIR_ID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DBBIR_ID */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_DBBIR_ID */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DBBIR_ID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DBBIR_ID} The decoded data structure.
 */
export function _decode_BioAPI_DBBIR_ID(el: _Element) {
  if (!_cached_decoder_for_BioAPI_DBBIR_ID) {
    _cached_decoder_for_BioAPI_DBBIR_ID = function (
      el: _Element
    ): BioAPI_DBBIR_ID {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-DBBIR-ID contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'dbHandle';
      sequence[1].name = 'keyValue';
      let dbHandle!: BioAPI_DB_HANDLE;
      let keyValue!: BioAPI_UUID;
      dbHandle = _decode_BioAPI_DB_HANDLE(sequence[0]);
      keyValue = _decode_BioAPI_UUID(sequence[1]);
      return new BioAPI_DBBIR_ID(dbHandle, keyValue);
    };
  }
  return _cached_decoder_for_BioAPI_DBBIR_ID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_DBBIR_ID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DBBIR_ID */
let _cached_encoder_for_BioAPI_DBBIR_ID: $.ASN1Encoder<BioAPI_DBBIR_ID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DBBIR_ID */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_DBBIR_ID */
/**
 * @summary Encodes a(n) BioAPI_DBBIR_ID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DBBIR_ID, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_DBBIR_ID(
  value: BioAPI_DBBIR_ID,
  elGetter: $.ASN1Encoder<BioAPI_DBBIR_ID>
) {
  if (!_cached_encoder_for_BioAPI_DBBIR_ID) {
    _cached_encoder_for_BioAPI_DBBIR_ID = function (
      value: BioAPI_DBBIR_ID    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_DB_HANDLE(value.dbHandle, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.keyValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_DBBIR_ID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_DBBIR_ID */

/* eslint-enable */
