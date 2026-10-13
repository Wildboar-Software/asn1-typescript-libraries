/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AntennaId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AntennaId                ::=    CHOICE
 * {  globalForm        [0]   OBJECT IDENTIFIER
 * ,  localForm         [1]   OCTET STRING (SIZE (1 .. 16))
 * }
 * ```
 */
export
type AntennaId =
    { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localForm: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AntennaId: $.ASN1Decoder<AntennaId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AntennaId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AntennaId (el: _Element): AntennaId {
    if (!_cached_decoder_for_AntennaId) { _cached_decoder_for_AntennaId = $._decode_inextensible_choice<AntennaId>({
    "CONTEXT 0": [ "globalForm", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "localForm", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_AntennaId(el);
}

let _cached_encoder_for_AntennaId: $.ASN1Encoder<AntennaId> | null = null;

/**
 * @summary Encodes a(n) AntennaId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AntennaId, encoded as an ASN.1 Element.
 */
export
function _encode_AntennaId (value: AntennaId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AntennaId) { _cached_encoder_for_AntennaId = $._encode_choice<AntennaId>({
    "globalForm": $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER),
    "localForm": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_AntennaId(value, elGetter);
}


/* eslint-enable */
