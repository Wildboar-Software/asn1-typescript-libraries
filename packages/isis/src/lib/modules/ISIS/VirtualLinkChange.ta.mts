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

/* START_OF_SYMBOL_DEFINITION _enum_for_VirtualLinkChange */
/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```@enum {number}
 */
export enum _enum_for_VirtualLinkChange {
  deleted = 0,
  created = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange */
/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```@enum {number}
 */
export type VirtualLinkChange = _enum_for_VirtualLinkChange;
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange */
/**
 * @summary VirtualLinkChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```@enum {number}
 */
export const VirtualLinkChange = _enum_for_VirtualLinkChange;
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange_deleted */
/**
 * @summary VirtualLinkChange_deleted
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_deleted: VirtualLinkChange =
  VirtualLinkChange.deleted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange_deleted */

/* START_OF_SYMBOL_DEFINITION deleted */
/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export const deleted: VirtualLinkChange =
  VirtualLinkChange.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deleted */

/* START_OF_SYMBOL_DEFINITION VirtualLinkChange_created */
/**
 * @summary VirtualLinkChange_created
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_created: VirtualLinkChange =
  VirtualLinkChange.created; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION VirtualLinkChange_created */

/* START_OF_SYMBOL_DEFINITION created */
/**
 * @summary created
 * @constant
 * @type {number}
 */
export const created: VirtualLinkChange =
  VirtualLinkChange.created; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION created */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VirtualLinkChange */
let _cached_decoder_for_VirtualLinkChange: $.ASN1Decoder<VirtualLinkChange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION _decode_VirtualLinkChange */
/**
 * @summary Decodes an ASN.1 element into a(n) VirtualLinkChange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VirtualLinkChange} The decoded data structure.
 */
export function _decode_VirtualLinkChange(el: _Element) {
  if (!_cached_decoder_for_VirtualLinkChange) {
    _cached_decoder_for_VirtualLinkChange = $._decodeEnumerated;
  }
  return _cached_decoder_for_VirtualLinkChange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VirtualLinkChange */
let _cached_encoder_for_VirtualLinkChange: $.ASN1Encoder<VirtualLinkChange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VirtualLinkChange */

/* START_OF_SYMBOL_DEFINITION _encode_VirtualLinkChange */
/**
 * @summary Encodes a(n) VirtualLinkChange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VirtualLinkChange, encoded as an ASN.1 Element.
 */
export function _encode_VirtualLinkChange(
  value: VirtualLinkChange,
  elGetter: $.ASN1Encoder<VirtualLinkChange>
) {
  if (!_cached_encoder_for_VirtualLinkChange) {
    _cached_encoder_for_VirtualLinkChange = $._encodeEnumerated;
  }
  return _cached_encoder_for_VirtualLinkChange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VirtualLinkChange */

/* eslint-enable */
