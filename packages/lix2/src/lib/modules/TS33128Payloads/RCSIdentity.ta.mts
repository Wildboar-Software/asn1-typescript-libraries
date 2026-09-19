/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FiveGSSubscriberIDs, _decode_FiveGSSubscriberIDs, _encode_FiveGSSubscriberIDs } from "../TS33128Payloads/FiveGSSubscriberIDs.ta.mjs";
// export { FiveGSSubscriberIDs, _decode_FiveGSSubscriberIDs, _encode_FiveGSSubscriberIDs } from "../TS33128Payloads/FiveGSSubscriberIDs.ta.mjs";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
import { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";
// export { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";


/**
 * @summary RCSIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSIdentity  ::=  CHOICE
 * {
 *     fiveGSIdentities [1] FiveGSSubscriberIDs,
 *     ePSIdentities    [2] EPSSubscriberIDs,
 *     iMSIdentities    [3] IMSSubscriberIDs
 * }
 * ```
 */
export
type RCSIdentity =
    { fiveGSIdentities: FiveGSSubscriberIDs } /* CHOICE_ALT_ROOT */
    | { ePSIdentities: EPSSubscriberIDs } /* CHOICE_ALT_ROOT */
    | { iMSIdentities: IMSSubscriberIDs } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RCSIdentity: $.ASN1Decoder<RCSIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSIdentity (el: _Element): RCSIdentity {
    if (!_cached_decoder_for_RCSIdentity) { _cached_decoder_for_RCSIdentity = $._decode_inextensible_choice<RCSIdentity>({
    "CONTEXT 1": [ "fiveGSIdentities", $._decode_implicit<FiveGSSubscriberIDs>(() => _decode_FiveGSSubscriberIDs) ],
    "CONTEXT 2": [ "ePSIdentities", $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs) ],
    "CONTEXT 3": [ "iMSIdentities", $._decode_explicit<IMSSubscriberIDs>(() => _decode_IMSSubscriberIDs) ]
}); }
    return _cached_decoder_for_RCSIdentity(el);
}

let _cached_encoder_for_RCSIdentity: $.ASN1Encoder<RCSIdentity> | null = null;

/**
 * @summary Encodes a(n) RCSIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_RCSIdentity (value: RCSIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSIdentity) { _cached_encoder_for_RCSIdentity = $._encode_choice<RCSIdentity>({
    "fiveGSIdentities": $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSSubscriberIDs, $.BER),
    "ePSIdentities": $._encode_implicit(_TagClass.context, 2, () => _encode_EPSSubscriberIDs, $.BER),
    "iMSIdentities": $._encode_explicit(_TagClass.context, 3, () => _encode_IMSSubscriberIDs, $.BER),
}, $.BER); }
    return _cached_encoder_for_RCSIdentity(value, elGetter);
}


/* eslint-enable */
