/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSAgentAddressData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSAgentAddressData  ::=  CHOICE {
 *    eMail-address     [0] IMPLICIT OCTET STRING,
 *    mSISDN            [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    shortCode         [2] IMPLICIT OCTET STRING}
 * ```
 */
export
type MMSAgentAddressData =
    { eMail_address: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { mSISDN: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { shortCode: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MMSAgentAddressData: $.ASN1Decoder<MMSAgentAddressData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSAgentAddressData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSAgentAddressData (el: _Element): MMSAgentAddressData {
    if (!_cached_decoder_for_MMSAgentAddressData) { _cached_decoder_for_MMSAgentAddressData = $._decode_inextensible_choice<MMSAgentAddressData>({
    "CONTEXT 0": [ "eMail_address", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "mSISDN", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "shortCode", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _decoded_MMSAgentAddressData = _cached_decoder_for_MMSAgentAddressData(el);
    if ("mSISDN" in _decoded_MMSAgentAddressData && (_decoded_MMSAgentAddressData.mSISDN.length < 1 || _decoded_MMSAgentAddressData.mSISDN.length > 9)) {
        throw new ASN1SizeError("MMSAgentAddressData.mSISDN violates SIZE constraint");
    }
    return _decoded_MMSAgentAddressData;
}

let _cached_encoder_for_MMSAgentAddressData: $.ASN1Encoder<MMSAgentAddressData> | null = null;

/**
 * @summary Encodes a(n) MMSAgentAddressData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSAgentAddressData, encoded as an ASN.1 Element.
 */
export
function _encode_MMSAgentAddressData (value: MMSAgentAddressData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSAgentAddressData) { _cached_encoder_for_MMSAgentAddressData = $._encode_choice<MMSAgentAddressData>({
    "eMail_address": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "mSISDN": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "shortCode": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMSAgentAddressData(value, elGetter);
}


/* eslint-enable */
