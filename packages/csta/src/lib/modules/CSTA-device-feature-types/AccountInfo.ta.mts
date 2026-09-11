/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AccountInfo
 * @description
 *
 * Computing sub-domain / business-specific code applied to a call for
 * accounting. Managed by the switching function; a null string clears it.
 * Association completes before any resulting state transitions. The switching
 * function may omit it from events for security. Changes are reported via the
 * Call Information event. ECMA-269 §12.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccountInfo  ::=  OCTET STRING
 * ```
 */
export
type AccountInfo = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AccountInfo: $.ASN1Decoder<AccountInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccountInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccountInfo (el: _Element): AccountInfo {
    if (!_cached_decoder_for_AccountInfo) { _cached_decoder_for_AccountInfo = $._decodeOctetString; }
    return _cached_decoder_for_AccountInfo(el);
}

let _cached_encoder_for_AccountInfo: $.ASN1Encoder<AccountInfo> | null = null;

/**
 * @summary Encodes a(n) AccountInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccountInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AccountInfo (value: AccountInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccountInfo) { _cached_encoder_for_AccountInfo = $._encodeOctetString; }
    return _cached_encoder_for_AccountInfo(value, elGetter);
}


/* eslint-enable */
