/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GvcId, _decode_GvcId, _encode_GvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/GvcId.ta.mjs";


/**
 * @summary ClcwGvcId
 * @description
 * 
 * Master or Virtual Channel that carries the CLCW the provider uses for
 * forward-link RF and bit-lock status. Annex A spells the configured
 * alternative `congigured`. When the instance is configured so that the CLCW is
 * not evaluated, the reported value is not configured. Processing of the lock
 * flags is delegated to the Forward TC Space Link Processing functional group
 * and is the same for every FSP instance that shares the physical channel.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.5 (table 3-11), section 3.1.9, and annex
 * A2.5. CLCW is a term of CCSDS 232.0-B-3, cited in section 1.6.1.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClcwGvcId             ::=    CHOICE
 * {  congigured                 [0]   GvcId
 * ,  notConfigured              [1]   NULL
 * }
 * ```
 */
export
type ClcwGvcId =
    { congigured: GvcId } /* CHOICE_ALT_ROOT */
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
    "CONTEXT 0": [ "congigured", $._decode_implicit<GvcId>(() => _decode_GvcId) ],
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
    "congigured": $._encode_implicit(_TagClass.context, 0, () => _encode_GvcId, $.BER),
    "notConfigured": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClcwGvcId(value, elGetter);
}


/* eslint-enable */
