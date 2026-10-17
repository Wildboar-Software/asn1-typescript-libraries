/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpaceLinkDataUnit
 * @description
 * 
 * The telemetry frame delivered by RAF-TRANSFER-DATA, 1 to 65536 octets,
 * without the Attached Sync Marker. A good Reed-Solomon frame has its check
 * symbols removed; a good LDPC frame has parity and trailing fill removed; a
 * good BCH frame has each codeword's Error Control octet and any fill removed.
 * An erred Reed-Solomon frame is the unmodified decoder input. An erred BCH
 * frame is the decoder output and may still contain fill, so its length can
 * differ from a good frame. An erred convolutional, turbo, or LDPC frame, or a
 * frame encoded as in references [3] or [4] of this book is the decoder
 * output at the length of a good frame. An uncoded erred frame is the frame
 * as acquired. An undetermined frame is a candidate whose coding is unknown
 * or unsupported, and its length may be implementation dependent.
 * 
 * CCSDS 911.1-B-5, section 3.6.2.8 and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpaceLinkDataUnit       ::=    OCTET STRING (SIZE (1 .. 65536))
 * ```
 */
export
type SpaceLinkDataUnit = OCTET_STRING; // OctetStringType
export function _decode_SpaceLinkDataUnit (el: _Element): SpaceLinkDataUnit {
    const _decoded = $._decodeOctetString(el);
    if (_decoded.length < 1 || _decoded.length > 65536) {
        throw new ASN1SizeError("SpaceLinkDataUnit violates SIZE (1..65536)");
    }
    return _decoded;
}
export const _encode_SpaceLinkDataUnit: $.ASN1Encoder<SpaceLinkDataUnit> = $._encodeOctetString;


/* eslint-enable */
