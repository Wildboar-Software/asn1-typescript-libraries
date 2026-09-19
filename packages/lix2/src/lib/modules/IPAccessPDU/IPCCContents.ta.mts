/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPTruncatedPacket, _decode_IPTruncatedPacket, _encode_IPTruncatedPacket } from "../IPAccessPDU/IPTruncatedPacket.ta.mjs";
// export { IPTruncatedPacket, _decode_IPTruncatedPacket, _encode_IPTruncatedPacket } from "../IPAccessPDU/IPTruncatedPacket.ta.mjs";


/**
 * @summary IPCCContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPCCContents  ::=  CHOICE
 * {
 *     iPPackets           [0] OCTET STRING,
 *     ...,
 *     iPTruncatedPacket   [1] IPTruncatedPacket
 * }
 * ```
 */
export
type IPCCContents =
    { iPPackets: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iPTruncatedPacket: IPTruncatedPacket } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IPCCContents: $.ASN1Decoder<IPCCContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPCCContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPCCContents (el: _Element): IPCCContents {
    if (!_cached_decoder_for_IPCCContents) { _cached_decoder_for_IPCCContents = $._decode_extensible_choice<IPCCContents>({
    "CONTEXT 0": [ "iPPackets", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "iPTruncatedPacket", $._decode_implicit<IPTruncatedPacket>(() => _decode_IPTruncatedPacket) ]
}); }
    return _cached_decoder_for_IPCCContents(el);
}

let _cached_encoder_for_IPCCContents: $.ASN1Encoder<IPCCContents> | null = null;

/**
 * @summary Encodes a(n) IPCCContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPCCContents, encoded as an ASN.1 Element.
 */
export
function _encode_IPCCContents (value: IPCCContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPCCContents) { _cached_encoder_for_IPCCContents = $._encode_choice<IPCCContents>({
    "iPPackets": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "iPTruncatedPacket": $._encode_implicit(_TagClass.context, 1, () => _encode_IPTruncatedPacket, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPCCContents(value, elGetter);
}


/* eslint-enable */
