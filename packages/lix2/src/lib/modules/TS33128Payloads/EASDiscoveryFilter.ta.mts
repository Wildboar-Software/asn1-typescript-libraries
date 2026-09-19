/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
// export { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
import { EASsCharacteristics, _decode_EASsCharacteristics, _encode_EASsCharacteristics } from "../TS33128Payloads/EASsCharacteristics.ta.mjs";
// export { EASsCharacteristics, _decode_EASsCharacteristics, _encode_EASsCharacteristics } from "../TS33128Payloads/EASsCharacteristics.ta.mjs";


/**
 * @summary EASDiscoveryFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASDiscoveryFilter  ::=  CHOICE
 * {
 *     aCsCharacteristics     [1] ACProfiles,
 *     eASCharacteristics     [2] EASsCharacteristics
 * }
 * ```
 */
export
type EASDiscoveryFilter =
    { aCsCharacteristics: ACProfiles } /* CHOICE_ALT_ROOT */
    | { eASCharacteristics: EASsCharacteristics } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EASDiscoveryFilter: $.ASN1Decoder<EASDiscoveryFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASDiscoveryFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASDiscoveryFilter (el: _Element): EASDiscoveryFilter {
    if (!_cached_decoder_for_EASDiscoveryFilter) { _cached_decoder_for_EASDiscoveryFilter = $._decode_inextensible_choice<EASDiscoveryFilter>({
    "CONTEXT 1": [ "aCsCharacteristics", $._decode_implicit<ACProfiles>(() => _decode_ACProfiles) ],
    "CONTEXT 2": [ "eASCharacteristics", $._decode_implicit<EASsCharacteristics>(() => _decode_EASsCharacteristics) ]
}); }
    return _cached_decoder_for_EASDiscoveryFilter(el);
}

let _cached_encoder_for_EASDiscoveryFilter: $.ASN1Encoder<EASDiscoveryFilter> | null = null;

/**
 * @summary Encodes a(n) EASDiscoveryFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASDiscoveryFilter, encoded as an ASN.1 Element.
 */
export
function _encode_EASDiscoveryFilter (value: EASDiscoveryFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASDiscoveryFilter) { _cached_encoder_for_EASDiscoveryFilter = $._encode_choice<EASDiscoveryFilter>({
    "aCsCharacteristics": $._encode_implicit(_TagClass.context, 1, () => _encode_ACProfiles, $.BER),
    "eASCharacteristics": $._encode_implicit(_TagClass.context, 2, () => _encode_EASsCharacteristics, $.BER),
}, $.BER); }
    return _cached_encoder_for_EASDiscoveryFilter(value, elGetter);
}


/* eslint-enable */
