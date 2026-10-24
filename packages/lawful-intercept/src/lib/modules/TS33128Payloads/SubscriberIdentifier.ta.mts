/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";


/**
 * @summary SubscriberIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberIdentifier  ::=  CHOICE
 * {
 *     sUCI   [1] SUCI,
 *     sUPI   [2] SUPI
 * }
 * ```
 */
export
type SubscriberIdentifier =
    /**
     * @description
     *
     * The SUCI type is derived from the data present in the Subscription
     * Concealed Identifier type defined in TS 23.003 [19] clause 2.2B. (3GPP TS
     * 33.128, clause 8.3.5.)
     */
    { sUCI: SUCI } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * The SUPI type is derived from the data present in the Subscription
     * Permanent Identifier type defined in TS 23.003 [19] clause 2.2A. (3GPP TS
     * 33.128, clause 8.3.4.)
     */
    | { sUPI: SUPI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SubscriberIdentifier: $.ASN1Decoder<SubscriberIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberIdentifier (el: _Element): SubscriberIdentifier {
    if (!_cached_decoder_for_SubscriberIdentifier) { _cached_decoder_for_SubscriberIdentifier = $._decode_extensible_choice<SubscriberIdentifier>({
    "CONTEXT 1": [ "sUCI", $._decode_implicit<SUCI>(() => _decode_SUCI) ],
    "CONTEXT 2": [ "sUPI", $._decode_explicit<SUPI>(() => _decode_SUPI) ]
}); }
    return _cached_decoder_for_SubscriberIdentifier(el);
}

let _cached_encoder_for_SubscriberIdentifier: $.ASN1Encoder<SubscriberIdentifier> | null = null;

/**
 * @summary Encodes a(n) SubscriberIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberIdentifier (value: SubscriberIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberIdentifier) { _cached_encoder_for_SubscriberIdentifier = $._encode_choice<SubscriberIdentifier>({
    "sUCI": $._encode_implicit(_TagClass.context, 1, () => _encode_SUCI, $.BER),
    "sUPI": $._encode_explicit(_TagClass.context, 2, () => _encode_SUPI, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriberIdentifier(value, elGetter);
}


/* eslint-enable */
