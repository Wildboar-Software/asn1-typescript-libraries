/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MapId, _decode_MapId, _encode_MapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MapId.ta.mjs";


/**
 * @summary Map
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Map                      ::=    CHOICE
 * {  none              [0]   NULL
 * ,  mapUsed           [1]   MapId
 * }
 * ```
 */
export
type Map =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { mapUsed: MapId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Map: $.ASN1Decoder<Map> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Map
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Map (el: _Element): Map {
    if (!_cached_decoder_for_Map) { _cached_decoder_for_Map = $._decode_inextensible_choice<Map>({
    "CONTEXT 0": [ "none", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "mapUsed", $._decode_implicit<MapId>(() => _decode_MapId) ]
}); }
    return _cached_decoder_for_Map(el);
}

let _cached_encoder_for_Map: $.ASN1Encoder<Map> | null = null;

/**
 * @summary Encodes a(n) Map into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Map, encoded as an ASN.1 Element.
 */
export
function _encode_Map (value: Map, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Map) { _cached_encoder_for_Map = $._encode_choice<Map>({
    "none": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "mapUsed": $._encode_implicit(_TagClass.context, 1, () => _encode_MapId, $.BER),
}, $.BER); }
    return _cached_encoder_for_Map(value, elGetter);
}


/* eslint-enable */
