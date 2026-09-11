/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";



/**
 * @summary EscapeRegisterID
 * @description
 *
 * Identifies an escape-service registration. Returned by Escape Register; used
 * to match subsequent Escape requests. ECMA-269 §9.4.2.1, §12.3.13.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterID  ::=  [0] OCTET STRING
 * ```
 */
export
type EscapeRegisterID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EscapeRegisterID: $.ASN1Decoder<EscapeRegisterID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterID (el: _Element): EscapeRegisterID {
    if (!_cached_decoder_for_EscapeRegisterID) { _cached_decoder_for_EscapeRegisterID = $._decode_implicit<EscapeRegisterID>(() => $._decodeOctetString); }
    return _cached_decoder_for_EscapeRegisterID(el);
}

let _cached_encoder_for_EscapeRegisterID: $.ASN1Encoder<EscapeRegisterID> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterID, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterID (value: EscapeRegisterID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterID) { _cached_encoder_for_EscapeRegisterID = $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_EscapeRegisterID(value, elGetter);
}


/* eslint-enable */
