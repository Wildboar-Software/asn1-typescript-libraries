/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MapId, _decode_MapId, _encode_MapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MapId.ta.mjs";


/**
 * @summary MapList
 * @description
 * 
 * MAPs a service instance may use. `mapsNotUsed` means MAPs are not used.
 * `mapsUsed` is the permitted list. Annex A requires the entries to be in
 * ascending order, from 1 to 64 identifiers. Table 3-11 reports `null` when
 * MAPs are not used.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.5 (table 3-11) and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MapList                  ::=    CHOICE
 * {  mapsNotUsed       [0]   NULL
 * ,  mapsUsed          [1]   SEQUENCE SIZE (1 .. 64) OF MapId
 * }
 * ```
 */
export
type MapList =
    { mapsNotUsed: NULL } /* CHOICE_ALT_ROOT */
    | { mapsUsed: MapId[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MapList: $.ASN1Decoder<MapList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MapList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MapList (el: _Element): MapList {
    if (!_cached_decoder_for_MapList) { _cached_decoder_for_MapList = $._decode_inextensible_choice<MapList>({
    "CONTEXT 0": [ "mapsNotUsed", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "mapsUsed", $._decode_implicit<MapId[]>(() => $._decodeSequenceOf<MapId>(() => _decode_MapId)) ]
}); }
    const _decoded = _cached_decoder_for_MapList(el);
    if ("mapsUsed" in _decoded) {
        if (_decoded.mapsUsed.length < 1 || _decoded.mapsUsed.length > 64) {
            throw new ASN1SizeError("MapList.mapsUsed violates SIZE (1..64)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_MapList: $.ASN1Encoder<MapList> | null = null;

/**
 * @summary Encodes a(n) MapList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MapList, encoded as an ASN.1 Element.
 */
export
function _encode_MapList (value: MapList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MapList) { _cached_encoder_for_MapList = $._encode_choice<MapList>({
    "mapsNotUsed": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "mapsUsed": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MapId>(() => _encode_MapId, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MapList(value, elGetter);
}


/* eslint-enable */
