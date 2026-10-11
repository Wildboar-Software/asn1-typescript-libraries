/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
import { LAC, _decode_LAC, _encode_LAC } from "../MAP-MS-DataTypes/LAC.ta.mjs";


/**
 * @summary LocationArea
 * @description
 *
 * One location area in a paging area: full LAI or LAC only. (3GPP TS 29.002
 * V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationArea  ::=  CHOICE {
 *     laiFixedLength    [0] LAIFixedLength,
 *     lac    [1] LAC}
 * ```
 */
export
type LocationArea =
    { laiFixedLength: LAIFixedLength } /* CHOICE_ALT_ROOT */
    | { lac: LAC } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LocationArea: $.ASN1Decoder<LocationArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationArea (el: _Element): LocationArea {
    if (!_cached_decoder_for_LocationArea) { _cached_decoder_for_LocationArea = $._decode_inextensible_choice<LocationArea>({
    "CONTEXT 0": [ "laiFixedLength", $._decode_implicit<LAIFixedLength>(() => _decode_LAIFixedLength) ],
    "CONTEXT 1": [ "lac", $._decode_implicit<LAC>(() => _decode_LAC) ]
}); }
    return _cached_decoder_for_LocationArea(el);
}

let _cached_encoder_for_LocationArea: $.ASN1Encoder<LocationArea> | null = null;

/**
 * @summary Encodes a(n) LocationArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationArea, encoded as an ASN.1 Element.
 */
export
function _encode_LocationArea (value: LocationArea, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationArea) { _cached_encoder_for_LocationArea = $._encode_choice<LocationArea>({
    "laiFixedLength": $._encode_implicit(_TagClass.context, 0, () => _encode_LAIFixedLength, $.BER),
    "lac": $._encode_implicit(_TagClass.context, 1, () => _encode_LAC, $.BER),
}, $.BER); }
    return _cached_encoder_for_LocationArea(value, elGetter);
}


/* eslint-enable */
