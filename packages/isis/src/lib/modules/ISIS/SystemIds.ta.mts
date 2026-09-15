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
  SystemId,
  _decode_SystemId,
  _encode_SystemId,
} from '../ISIS/SystemId.ta.mjs';
/**
 * @summary SystemIds
 * @description
 *
 * Set of system IDs. For an IS neighbour this is the single ID from the Source
 * ID field of the neighbour's IIH PDU; for an ES neighbour it is the set of IDs
 * of that ES.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.6.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemIds  ::=  SET OF SystemId
 * ```
 */
export type SystemIds = SystemId[]; // SetOfType

let _cached_decoder_for_SystemIds: $.ASN1Decoder<SystemIds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemIds} The decoded data structure.
 */
export function _decode_SystemIds(el: _Element): SystemIds {
  if (!_cached_decoder_for_SystemIds) {
    _cached_decoder_for_SystemIds = $._decodeSetOf<SystemId>(
      () => _decode_SystemId
    );
  }
  return _cached_decoder_for_SystemIds(el);
}

let _cached_encoder_for_SystemIds: $.ASN1Encoder<SystemIds> | null = null;

/**
 * @summary Encodes a(n) SystemIds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemIds, encoded as an ASN.1 Element.
 */
export function _encode_SystemIds(
  value: SystemIds,
  elGetter: $.ASN1Encoder<SystemIds>
): _Element {
  if (!_cached_encoder_for_SystemIds) {
    _cached_encoder_for_SystemIds = $._encodeSetOf<SystemId>(
      () => _encode_SystemId,
      $.BER
    );
  }
  return _cached_encoder_for_SystemIds(value, elGetter);
}


/* eslint-enable */
