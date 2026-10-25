/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
import { type IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { type PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { type IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";


/**
 * @summary IMSSubscriberIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSSubscriberIdentity  ::=  CHOICE
 * {
 *     iMPI [1] IMPI,
 *     iMPU [2] IMPU,
 *     pEI  [3] PEI,
 *     iMEI [4] IMEI
 * }
 * ```
 */
export
type IMSSubscriberIdentity =
    /**
     * @description
     *
     * Chosen when the identifier being reported is an IMPI.
     *
     * 3GPP TS 33.128, clause 8.3.2.6.
     */
    { iMPI: IMPI } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the identifier being reported is an IMPU.
     *
     * 3GPP TS 33.128, clause 8.3.2.6.
     */
    | { iMPU: IMPU } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the identifier being reported is a PEI.
     *
     * 3GPP TS 33.128, clause 8.3.2.6.
     */
    | { pEI: PEI } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the identifier being reported is an IMEI.
     *
     * 3GPP TS 33.128, clause 8.3.2.6.
     */
    | { iMEI: IMEI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IMSSubscriberIdentity: $.ASN1Decoder<IMSSubscriberIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSSubscriberIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSSubscriberIdentity (el: _Element): IMSSubscriberIdentity {
    if (!_cached_decoder_for_IMSSubscriberIdentity) { _cached_decoder_for_IMSSubscriberIdentity = $._decode_extensible_choice<IMSSubscriberIdentity>({
    "CONTEXT 1": [ "iMPI", $._decode_implicit<IMPI>(() => _decode_IMPI) ],
    "CONTEXT 2": [ "iMPU", $._decode_explicit<IMPU>(() => _decode_IMPU) ],
    "CONTEXT 3": [ "pEI", $._decode_explicit<PEI>(() => _decode_PEI) ],
    "CONTEXT 4": [ "iMEI", $._decode_implicit<IMEI>(() => _decode_IMEI) ]
}); }
    return _cached_decoder_for_IMSSubscriberIdentity(el);
}

let _cached_encoder_for_IMSSubscriberIdentity: $.ASN1Encoder<IMSSubscriberIdentity> | null = null;

/**
 * @summary Encodes a(n) IMSSubscriberIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSSubscriberIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_IMSSubscriberIdentity (value: IMSSubscriberIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSSubscriberIdentity) { _cached_encoder_for_IMSSubscriberIdentity = $._encode_choice<IMSSubscriberIdentity>({
    "iMPI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMPI, $.BER),
    "iMPU": $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER),
    "pEI": $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER),
    "iMEI": $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER),
}, $.BER); }
    return _cached_encoder_for_IMSSubscriberIdentity(value, elGetter);
}


/* eslint-enable */
