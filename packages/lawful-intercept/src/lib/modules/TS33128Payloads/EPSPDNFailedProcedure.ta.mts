/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
// export { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
import { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
// export { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
import { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";
// export { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";


/**
 * @summary EPSPDNFailedProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNFailedProcedure  ::=  CHOICE
 * {
 *     ePSPDNConnectionEstablishment [1] EPSPDNConnectionEstablishment,
 *     ePSPDNConnectionModification  [2] EPSPDNConnectionModification,
 *     ePSPDNConnectionRelease       [3] EPSPDNConnectionRelease
 * }
 * ```
 */
export
type EPSPDNFailedProcedure =
    /**
     * @description
     *
     * Shall be used to report a failed EPS PDN connection establishment.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     */
    { ePSPDNConnectionEstablishment: EPSPDNConnectionEstablishment } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Shall be used to report a failed EPSPDNConnectionModification.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     */
    | { ePSPDNConnectionModification: EPSPDNConnectionModification } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Shall be used to report a failed EPS PDN connection release.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     */
    | { ePSPDNConnectionRelease: EPSPDNConnectionRelease } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_EPSPDNFailedProcedure: $.ASN1Decoder<EPSPDNFailedProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNFailedProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNFailedProcedure (el: _Element): EPSPDNFailedProcedure {
    if (!_cached_decoder_for_EPSPDNFailedProcedure) { _cached_decoder_for_EPSPDNFailedProcedure = $._decode_extensible_choice<EPSPDNFailedProcedure>({
    "CONTEXT 1": [ "ePSPDNConnectionEstablishment", $._decode_implicit<EPSPDNConnectionEstablishment>(() => _decode_EPSPDNConnectionEstablishment) ],
    "CONTEXT 2": [ "ePSPDNConnectionModification", $._decode_implicit<EPSPDNConnectionModification>(() => _decode_EPSPDNConnectionModification) ],
    "CONTEXT 3": [ "ePSPDNConnectionRelease", $._decode_implicit<EPSPDNConnectionRelease>(() => _decode_EPSPDNConnectionRelease) ]
}); }
    return _cached_decoder_for_EPSPDNFailedProcedure(el);
}

let _cached_encoder_for_EPSPDNFailedProcedure: $.ASN1Encoder<EPSPDNFailedProcedure> | null = null;

/**
 * @summary Encodes a(n) EPSPDNFailedProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNFailedProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNFailedProcedure (value: EPSPDNFailedProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNFailedProcedure) { _cached_encoder_for_EPSPDNFailedProcedure = $._encode_choice<EPSPDNFailedProcedure>({
    "ePSPDNConnectionEstablishment": $._encode_implicit(_TagClass.context, 1, () => _encode_EPSPDNConnectionEstablishment, $.BER),
    "ePSPDNConnectionModification": $._encode_implicit(_TagClass.context, 2, () => _encode_EPSPDNConnectionModification, $.BER),
    "ePSPDNConnectionRelease": $._encode_implicit(_TagClass.context, 3, () => _encode_EPSPDNConnectionRelease, $.BER),
}, $.BER); }
    return _cached_encoder_for_EPSPDNFailedProcedure(value, elGetter);
}


/* eslint-enable */
