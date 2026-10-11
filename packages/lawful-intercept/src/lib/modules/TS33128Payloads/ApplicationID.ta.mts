/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplicationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationID  ::=  OCTET STRING
 * ```
 */
export
type ApplicationID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ApplicationID: $.ASN1Decoder<ApplicationID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationID (el: _Element): ApplicationID {
    if (!_cached_decoder_for_ApplicationID) { _cached_decoder_for_ApplicationID = $._decodeOctetString; }
    return _cached_decoder_for_ApplicationID(el);
}

let _cached_encoder_for_ApplicationID: $.ASN1Encoder<ApplicationID> | null = null;

/**
 * @summary Encodes a(n) ApplicationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationID, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationID (value: ApplicationID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationID) { _cached_encoder_for_ApplicationID = $._encodeOctetString; }
    return _cached_encoder_for_ApplicationID(value, elGetter);
}


/* eslint-enable */
