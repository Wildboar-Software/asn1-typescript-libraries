/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TetraLocation_ms_Loc, _decode_TetraLocation_ms_Loc, _encode_TetraLocation_ms_Loc } from "../HI2Operations/TetraLocation-ms-Loc.ta.mjs";
// export { TetraLocation_ms_Loc, _decode_TetraLocation_ms_Loc, _encode_TetraLocation_ms_Loc } from "../HI2Operations/TetraLocation-ms-Loc.ta.mjs";


/**
 * @summary TetraLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TetraLocation  ::=  CHOICE
 *     -- This optional parameter is not in use anymore, but is kept for backwards compatibility.
 * {
 *     ms-Loc        [1] SEQUENCE
 *     {
 *         mcc                [1] INTEGER (0..1023),
 *             -- 10 bits EN 300 392-1 [40]
 *         mnc                [2] INTEGER (0..16383),
 *             -- 14 bits EN 300 392-1 [40]
 *         lai                [3] INTEGER (0..65535),
 *             -- 14 bits EN 300 392-1 [40]
 *         ci                [4] INTEGER OPTIONAL
 *     },
 *     ls-Loc        [2] INTEGER
 * }
 * ```
 */
export
type TetraLocation =
    { ms_Loc: TetraLocation_ms_Loc } /* CHOICE_ALT_ROOT */
    | { ls_Loc: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TetraLocation: $.ASN1Decoder<TetraLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TetraLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TetraLocation (el: _Element): TetraLocation {
    if (!_cached_decoder_for_TetraLocation) { _cached_decoder_for_TetraLocation = $._decode_inextensible_choice<TetraLocation>({
    "CONTEXT 1": [ "ms_Loc", $._decode_implicit<TetraLocation_ms_Loc>(() => _decode_TetraLocation_ms_Loc) ],
    "CONTEXT 2": [ "ls_Loc", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_TetraLocation(el);
}

let _cached_encoder_for_TetraLocation: $.ASN1Encoder<TetraLocation> | null = null;

/**
 * @summary Encodes a(n) TetraLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TetraLocation, encoded as an ASN.1 Element.
 */
export
function _encode_TetraLocation (value: TetraLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TetraLocation) { _cached_encoder_for_TetraLocation = $._encode_choice<TetraLocation>({
    "ms_Loc": $._encode_implicit(_TagClass.context, 1, () => _encode_TetraLocation_ms_Loc, $.BER),
    "ls_Loc": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_TetraLocation(value, elGetter);
}


/* eslint-enable */
