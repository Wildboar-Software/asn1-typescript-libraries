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
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';

/**
 * @summary MatchingRuleId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleId  ::=  LDAPString
 * ```
 */
export type MatchingRuleId = LDAPString; // DefinedType


/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleId} The decoded data structure.
 */
export function _decode_MatchingRuleId(el: _Element) {
  return _decode_LDAPString(el);
}


/**
 * @summary Encodes a(n) MatchingRuleId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleId, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleId(
  value: MatchingRuleId,
  elGetter: $.ASN1Encoder<MatchingRuleId>
) {
  return _encode_LDAPString(value, elGetter);
}


/* eslint-enable */
