/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";



/**
 * @summary IOCrossRefID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IOCrossRefID  ::=  CHOICE
 * {    switchProvided         [0] OCTET STRING ,
 *     computerProvided     [1] OCTET STRING }
 * ```
 */
export
type IOCrossRefID =
    { switchProvided: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { computerProvided: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IOCrossRefID: $.ASN1Decoder<IOCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IOCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IOCrossRefID (el: _Element): IOCrossRefID {
    if (!_cached_decoder_for_IOCrossRefID) { _cached_decoder_for_IOCrossRefID = $._decode_inextensible_choice<IOCrossRefID>({
    "CONTEXT 0": [ "switchProvided", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "computerProvided", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_IOCrossRefID(el);
}

let _cached_encoder_for_IOCrossRefID: $.ASN1Encoder<IOCrossRefID> | null = null;

/**
 * @summary Encodes a(n) IOCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IOCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_IOCrossRefID (value: IOCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IOCrossRefID) { _cached_encoder_for_IOCrossRefID = $._encode_choice<IOCrossRefID>({
    "switchProvided": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "computerProvided": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_IOCrossRefID(value, elGetter);
}


/* eslint-enable */
