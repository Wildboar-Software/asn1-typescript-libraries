/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Query, _decode_Query, _encode_Query } from "../Z39-50-APDU-2001/Query.ta.mjs";


/**
 * @summary ServerPart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart  ::=  Query
 * ```
 */
export
type ServerPart = Query; // DefinedType

let _cached_decoder_for_ServerPart: $.ASN1Decoder<ServerPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart (el: _Element): ServerPart {
    if (!_cached_decoder_for_ServerPart) { _cached_decoder_for_ServerPart = _decode_Query; }
    return _cached_decoder_for_ServerPart(el);
}

let _cached_encoder_for_ServerPart: $.ASN1Encoder<ServerPart> | null = null;

/**
 * @summary Encodes a(n) ServerPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart (value: ServerPart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart) { _cached_encoder_for_ServerPart = _encode_Query; }
    return _cached_encoder_for_ServerPart(value, elGetter);
}


/* eslint-enable */
