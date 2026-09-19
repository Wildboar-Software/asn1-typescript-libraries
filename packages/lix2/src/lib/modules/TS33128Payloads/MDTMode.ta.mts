/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MDTMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTMode  ::=  CHOICE
 * {
 *     immediateMDT      [1] OCTET STRING,
 *     loggedMDT         [2] OCTET STRING
 * }
 * ```
 */
export
type MDTMode =
    { immediateMDT: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { loggedMDT: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MDTMode: $.ASN1Decoder<MDTMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MDTMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MDTMode (el: _Element): MDTMode {
    if (!_cached_decoder_for_MDTMode) { _cached_decoder_for_MDTMode = $._decode_inextensible_choice<MDTMode>({
    "CONTEXT 1": [ "immediateMDT", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "loggedMDT", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_MDTMode(el);
}

let _cached_encoder_for_MDTMode: $.ASN1Encoder<MDTMode> | null = null;

/**
 * @summary Encodes a(n) MDTMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDTMode, encoded as an ASN.1 Element.
 */
export
function _encode_MDTMode (value: MDTMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MDTMode) { _cached_encoder_for_MDTMode = $._encode_choice<MDTMode>({
    "immediateMDT": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "loggedMDT": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_MDTMode(value, elGetter);
}


/* eslint-enable */
