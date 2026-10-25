/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AntennaId
 * @description
 * 
 * Antenna that acquired the frame, used as the reference point for Earth
 * Receive Time. RAF and RCF use it for a delivered frame. ROCF uses it for the
 * frame from which an OCF was extracted. `globalForm` is an object identifier.
 * `localForm` is a 1-to-16-octet string. Section 3.6.2.4 requires SLE Complex
 * Management and SLE Utilization Management to agree the allowable values and
 * their interpretation. That section does not define which alternative is used,
 * or how either encoding maps to a physical location. The value refers to
 * location information supplied outside the service.
 * 
 * CCSDS 911.1-B-5, 911.2-B-4, and 911.5-B-4, section 3.6.2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AntennaId                    ::=  CHOICE
 * {   globalForm                      [0] OBJECT IDENTIFIER
 * ,   localForm                       [1] OCTET STRING (SIZE (1 .. 16))
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
    const _decoded = _cached_decoder_for_AntennaId(el);
    if ("localForm" in _decoded) {
        if (_decoded.localForm.length < 1 || _decoded.localForm.length > 16) {
            throw new ASN1SizeError("AntennaId.localForm violates SIZE (1..16)");
        }
    }
    return _decoded;
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
