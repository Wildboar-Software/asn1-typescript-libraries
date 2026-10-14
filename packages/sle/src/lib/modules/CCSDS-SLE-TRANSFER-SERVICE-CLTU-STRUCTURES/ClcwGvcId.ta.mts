/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GvcId, _decode_GvcId, _encode_GvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/GvcId.ta.mjs";


/**
 * @summary ClcwGvcId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClcwGvcId                               ::=    CHOICE
 * {  configured                       [0]   GvcId
 * ,  notConfigured                    [1]   NULL
 * }
 * ```
 */
export
type ClcwGvcId =
    { configured: GvcId } /* CHOICE_ALT_ROOT */
    | { notConfigured: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClcwGvcId: $.ASN1Decoder<ClcwGvcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClcwGvcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClcwGvcId (el: _Element): ClcwGvcId {
    if (!_cached_decoder_for_ClcwGvcId) { _cached_decoder_for_ClcwGvcId = $._decode_inextensible_choice<ClcwGvcId>({
    "CONTEXT 0": [ "configured", $._decode_implicit<GvcId>(() => _decode_GvcId) ],
    "CONTEXT 1": [ "notConfigured", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ClcwGvcId(el);
}

let _cached_encoder_for_ClcwGvcId: $.ASN1Encoder<ClcwGvcId> | null = null;

/**
 * @summary Encodes a(n) ClcwGvcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClcwGvcId, encoded as an ASN.1 Element.
 */
export
function _encode_ClcwGvcId (value: ClcwGvcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClcwGvcId) { _cached_encoder_for_ClcwGvcId = $._encode_choice<ClcwGvcId>({
    "configured": $._encode_implicit(_TagClass.context, 0, () => _encode_GvcId, $.BER),
    "notConfigured": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClcwGvcId(value, elGetter);
}


/* eslint-enable */
