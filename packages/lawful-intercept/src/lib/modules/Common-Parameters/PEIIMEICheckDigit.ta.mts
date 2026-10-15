/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMEICheckDigit, _decode_IMEICheckDigit, _encode_IMEICheckDigit } from "../Common-Parameters/IMEICheckDigit.ta.mjs";
// export { IMEICheckDigit, _decode_IMEICheckDigit, _encode_IMEICheckDigit } from "../Common-Parameters/IMEICheckDigit.ta.mjs";


/**
 * @summary PEIIMEICheckDigit
 * @description
 *
 * Permanent Equipment Identifier, as defined in 3GPP TS 23.501,
 * clause 5.9.3, in IMEI representation with the Luhn check digit. In
 * 3GPP Release 15 a PEI is either an IMEI or an IMEISV. This form is
 * the IMEI including the Luhn check digit. The value follows
 * `IMEICheckDigit`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.43, citing 3GPP TS 23.501,
 * clause 5.9.3, and 3GPP TS 23.003, clause 6.2.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PEIIMEICheckDigit  ::=  IMEICheckDigit
 * ```
 */
export
type PEIIMEICheckDigit = IMEICheckDigit; // DefinedType

let _cached_decoder_for_PEIIMEICheckDigit: $.ASN1Decoder<PEIIMEICheckDigit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PEIIMEICheckDigit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PEIIMEICheckDigit (el: _Element): PEIIMEICheckDigit {
    if (!_cached_decoder_for_PEIIMEICheckDigit) { _cached_decoder_for_PEIIMEICheckDigit = _decode_IMEICheckDigit; }
    return _cached_decoder_for_PEIIMEICheckDigit(el);
}

let _cached_encoder_for_PEIIMEICheckDigit: $.ASN1Encoder<PEIIMEICheckDigit> | null = null;

/**
 * @summary Encodes a(n) PEIIMEICheckDigit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PEIIMEICheckDigit, encoded as an ASN.1 Element.
 */
export
function _encode_PEIIMEICheckDigit (value: PEIIMEICheckDigit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PEIIMEICheckDigit) { _cached_encoder_for_PEIIMEICheckDigit = _encode_IMEICheckDigit; }
    return _cached_encoder_for_PEIIMEICheckDigit(value, elGetter);
}


/* eslint-enable */
