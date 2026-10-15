/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as Common_Parameters from "../Common-Parameters/index.mjs";
// export { LIID, _decode_LIID, _encode_LIID } from "../Common-Parameters/LIID.ta.mjs";


/**
 * @summary LawfulInterceptionIdentifier
 * @description
 * 
 * The LIID from ETSI TS 103 280, under the name this module used before that
 * import replaced the ETSI TS 101 671 definition. TS 102 232-1 defines the
 * field by reference to TS 103 280, clause 6, and does not repeat the LIID
 * format. See `authorizationCountryCode` for the country that makes a
 * nationally unique LIID internationally unique. A CIN-reset sent after a full
 * loss of CIN state sets the LIID to a single "-" (ASCII 45). A CIN-reset for
 * one LIID uses that LIID.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.2, clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LawfulInterceptionIdentifier  ::=  Common-Parameters.LIID
 * ```
 */
export
type LawfulInterceptionIdentifier = Common_Parameters.LIID; // DefinedType

let _cached_decoder_for_LawfulInterceptionIdentifier: $.ASN1Decoder<LawfulInterceptionIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LawfulInterceptionIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LawfulInterceptionIdentifier (el: _Element): LawfulInterceptionIdentifier {
    if (!_cached_decoder_for_LawfulInterceptionIdentifier) { _cached_decoder_for_LawfulInterceptionIdentifier = Common_Parameters._decode_LIID; }
    return _cached_decoder_for_LawfulInterceptionIdentifier(el);
}

let _cached_encoder_for_LawfulInterceptionIdentifier: $.ASN1Encoder<LawfulInterceptionIdentifier> | null = null;

/**
 * @summary Encodes a(n) LawfulInterceptionIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LawfulInterceptionIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_LawfulInterceptionIdentifier (value: LawfulInterceptionIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LawfulInterceptionIdentifier) { _cached_encoder_for_LawfulInterceptionIdentifier = Common_Parameters._encode_LIID; }
    return _cached_encoder_for_LawfulInterceptionIdentifier(value, elGetter);
}


/* eslint-enable */
