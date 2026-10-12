/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { IMSSubscriberIdentity, _decode_IMSSubscriberIdentity, _encode_IMSSubscriberIdentity } from "../TS33128Payloads/IMSSubscriberIdentity.ta.mjs";
// export { IMSSubscriberIdentity, _decode_IMSSubscriberIdentity, _encode_IMSSubscriberIdentity } from "../TS33128Payloads/IMSSubscriberIdentity.ta.mjs";


/**
 * @summary IMSSubscriberIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSSubscriberIDs  ::=  CHOICE
 * {
 *     -- deprecatedIMPI and deprecatedIMPU were deprecated in r(19) version6(6)
 *     deprecatedIMPI        [1] IMPI,
 *     deprecatedIMPU        [2] IMPU,
 *     iMSSubscriberIDs      [3] SEQUENCE (SIZE (1..MAX)) OF IMSSubscriberIdentity
 * }
 * ```
 */
export
type IMSSubscriberIDs =
    { deprecatedIMPI: IMPI } /* CHOICE_ALT_ROOT */
    | { deprecatedIMPU: IMPU } /* CHOICE_ALT_ROOT */
    | { iMSSubscriberIDs: IMSSubscriberIdentity[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IMSSubscriberIDs: $.ASN1Decoder<IMSSubscriberIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSSubscriberIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSSubscriberIDs (el: _Element): IMSSubscriberIDs {
    if (!_cached_decoder_for_IMSSubscriberIDs) { _cached_decoder_for_IMSSubscriberIDs = $._decode_extensible_choice<IMSSubscriberIDs>({
    "CONTEXT 1": [ "deprecatedIMPI", $._decode_implicit<IMPI>(() => _decode_IMPI) ],
    "CONTEXT 2": [ "deprecatedIMPU", $._decode_explicit<IMPU>(() => _decode_IMPU) ],
    "CONTEXT 3": [ "iMSSubscriberIDs", $._decode_implicit<IMSSubscriberIdentity[]>(() => $._decodeSequenceOf<IMSSubscriberIdentity>(() => _decode_IMSSubscriberIdentity)) ]
}); }
    const _value = _cached_decoder_for_IMSSubscriberIDs(el);
    if ("iMSSubscriberIDs" in _value && _value.iMSSubscriberIDs !== undefined) {
        const _alt = _value.iMSSubscriberIDs;
        if (_alt.length < 1) {
            throw new ASN1SizeError("IMSSubscriberIDs.iMSSubscriberIDs violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_IMSSubscriberIDs: $.ASN1Encoder<IMSSubscriberIDs> | null = null;

/**
 * @summary Encodes a(n) IMSSubscriberIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSSubscriberIDs, encoded as an ASN.1 Element.
 */
export
function _encode_IMSSubscriberIDs (value: IMSSubscriberIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSSubscriberIDs) { _cached_encoder_for_IMSSubscriberIDs = $._encode_choice<IMSSubscriberIDs>({
    "deprecatedIMPI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMPI, $.BER),
    "deprecatedIMPU": $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER),
    "iMSSubscriberIDs": $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IMSSubscriberIdentity>(() => _encode_IMSSubscriberIdentity, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_IMSSubscriberIDs(value, elGetter);
}


/* eslint-enable */
