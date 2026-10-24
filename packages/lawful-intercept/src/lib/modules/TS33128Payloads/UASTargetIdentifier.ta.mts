/* eslint-disable */
import {
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { type PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";


/**
 * @summary UASTargetIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASTargetIdentifier  ::=  CHOICE
 * {
 *     gPSI              [1] GPSI,
 *     cAALevelUAVID     [2] UTF8String,
 *     pEI               [3] PEI
 * }
 * ```
 */
export
type UASTargetIdentifier =
    /**
     * @description
     *
     * The GPSI type is derived from the data present in the Generic Public
     * Subscription Identifier type defined in TS 23.003 [19] clause 28.8. (3GPP
     * TS 33.128, clause 8.3.7.)
     */
    { gPSI: GPSI } /* CHOICE_ALT_ROOT */
    | { cAALevelUAVID: UTF8String } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * The PEI type is derived from the data present in the Permanent Equipment
     * Identifier type defined in TS 23.003 [19] clause 6.4. (3GPP TS 33.128,
     * clause 8.3.6.)
     */
    | { pEI: PEI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UASTargetIdentifier: $.ASN1Decoder<UASTargetIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UASTargetIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UASTargetIdentifier (el: _Element): UASTargetIdentifier {
    if (!_cached_decoder_for_UASTargetIdentifier) { _cached_decoder_for_UASTargetIdentifier = $._decode_extensible_choice<UASTargetIdentifier>({
    "CONTEXT 1": [ "gPSI", $._decode_explicit<GPSI>(() => _decode_GPSI) ],
    "CONTEXT 2": [ "cAALevelUAVID", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 3": [ "pEI", $._decode_explicit<PEI>(() => _decode_PEI) ]
}); }
    return _cached_decoder_for_UASTargetIdentifier(el);
}

let _cached_encoder_for_UASTargetIdentifier: $.ASN1Encoder<UASTargetIdentifier> | null = null;

/**
 * @summary Encodes a(n) UASTargetIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UASTargetIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_UASTargetIdentifier (value: UASTargetIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UASTargetIdentifier) { _cached_encoder_for_UASTargetIdentifier = $._encode_choice<UASTargetIdentifier>({
    "gPSI": $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER),
    "cAALevelUAVID": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
    "pEI": $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER),
}, $.BER); }
    return _cached_encoder_for_UASTargetIdentifier(value, elGetter);
}


/* eslint-enable */
