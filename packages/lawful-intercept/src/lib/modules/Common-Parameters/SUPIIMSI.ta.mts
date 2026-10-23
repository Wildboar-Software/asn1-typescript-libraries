/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../Common-Parameters/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../Common-Parameters/IMSI.ta.mjs";


/**
 * @summary SUPIIMSI
 * @description
 *
 * Subscription Permanent Identifier, as defined in 3GPP TS 23.501,
 * clause 5.9.2, in IMSI representation. In 3GPP Release 15 a SUPI is
 * either an IMSI or an NAI. This form is the IMSI. The value follows
 * `IMSI`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.39, citing 3GPP TS 23.501
 * and 3GPP TS 23.003, clause 2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIIMSI  ::=  IMSI
 * ```
 */
export
type SUPIIMSI = IMSI; // DefinedType

let _cached_decoder_for_SUPIIMSI: $.ASN1Decoder<SUPIIMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPIIMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUPIIMSI (el: _Element): SUPIIMSI {
    if (!_cached_decoder_for_SUPIIMSI) { _cached_decoder_for_SUPIIMSI = _decode_IMSI; }
    return _cached_decoder_for_SUPIIMSI(el);
}

let _cached_encoder_for_SUPIIMSI: $.ASN1Encoder<SUPIIMSI> | null = null;

/**
 * @summary Encodes a(n) SUPIIMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPIIMSI, encoded as an ASN.1 Element.
 */
export
function _encode_SUPIIMSI (value: SUPIIMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUPIIMSI) { _cached_encoder_for_SUPIIMSI = _encode_IMSI; }
    return _cached_encoder_for_SUPIIMSI(value, elGetter);
}


/* eslint-enable */
