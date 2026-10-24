/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128IdentityAssociation/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128IdentityAssociation/IMSI.ta.mjs";
import { type NAI, _decode_NAI, _encode_NAI } from "../TS33128IdentityAssociation/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128IdentityAssociation/NAI.ta.mjs";


/**
 * @summary SUPI
 * @description
 * 
 * The SUPI type is derived from the data present in the Subscription Permanent
 * Identifier type defined in TS 23.003 [19] clause 2.2A.
 *
 * 3GPP TS 33.128, clause 8.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPI  ::=  CHOICE
 * {
 *     iMSI        [1] IMSI,
 *     nAI         [2] NAI
 * }
 * ```
 */
export
type SUPI =
    /**
     * @description
     *
     * Chosen when the SUPI contains an IMSI.
     *
     * 3GPP TS 33.128, clause 8.3.4.
     */
    { iMSI: IMSI } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the SUPI contains an NAI.
     *
     * 3GPP TS 33.128, clause 8.3.4.
     */
    | { nAI: NAI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SUPI: $.ASN1Decoder<SUPI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUPI (el: _Element): SUPI {
    if (!_cached_decoder_for_SUPI) { _cached_decoder_for_SUPI = $._decode_extensible_choice<SUPI>({
    "CONTEXT 1": [ "iMSI", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 2": [ "nAI", $._decode_implicit<NAI>(() => _decode_NAI) ]
}); }
    return _cached_decoder_for_SUPI(el);
}

let _cached_encoder_for_SUPI: $.ASN1Encoder<SUPI> | null = null;

/**
 * @summary Encodes a(n) SUPI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPI, encoded as an ASN.1 Element.
 */
export
function _encode_SUPI (value: SUPI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUPI) { _cached_encoder_for_SUPI = $._encode_choice<SUPI>({
    "iMSI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER),
    "nAI": $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER),
}, $.BER); }
    return _cached_encoder_for_SUPI(value, elGetter);
}


/* eslint-enable */
