/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProSeDirectDiscovery, _decode_ProSeDirectDiscovery, _encode_ProSeDirectDiscovery } from "../ProSeHI2Operations/ProSeDirectDiscovery.ta.mjs";
// export { ProSeDirectDiscovery, _decode_ProSeDirectDiscovery, _encode_ProSeDirectDiscovery } from "../ProSeHI2Operations/ProSeDirectDiscovery.ta.mjs";


/**
 * @summary ProSeEventData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeEventData             ::=  CHOICE
 * {
 *     proseDirectDiscovery     [0]  ProSeDirectDiscovery,
 * 
 *     ...
 * 
 * }
 * ```
 */
export
type ProSeEventData =
    { proseDirectDiscovery: ProSeDirectDiscovery } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ProSeEventData: $.ASN1Decoder<ProSeEventData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeEventData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeEventData (el: _Element): ProSeEventData {
    if (!_cached_decoder_for_ProSeEventData) { _cached_decoder_for_ProSeEventData = $._decode_extensible_choice<ProSeEventData>({
    "CONTEXT 0": [ "proseDirectDiscovery", $._decode_implicit<ProSeDirectDiscovery>(() => _decode_ProSeDirectDiscovery) ]
}); }
    return _cached_decoder_for_ProSeEventData(el);
}

let _cached_encoder_for_ProSeEventData: $.ASN1Encoder<ProSeEventData> | null = null;

/**
 * @summary Encodes a(n) ProSeEventData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeEventData, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeEventData (value: ProSeEventData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeEventData) { _cached_encoder_for_ProSeEventData = $._encode_choice<ProSeEventData>({
    "proseDirectDiscovery": $._encode_implicit(_TagClass.context, 0, () => _encode_ProSeDirectDiscovery, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProSeEventData(value, elGetter);
}


/* eslint-enable */
