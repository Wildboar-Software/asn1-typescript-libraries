/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { POP3AAAInformation, _decode_POP3AAAInformation, _encode_POP3AAAInformation } from "../EmailPDU/POP3AAAInformation.ta.mjs";
// export { POP3AAAInformation, _decode_POP3AAAInformation, _encode_POP3AAAInformation } from "../EmailPDU/POP3AAAInformation.ta.mjs";
import { ASMTPAAAInformation, _decode_ASMTPAAAInformation, _encode_ASMTPAAAInformation } from "../EmailPDU/ASMTPAAAInformation.ta.mjs";
// export { ASMTPAAAInformation, _decode_ASMTPAAAInformation, _encode_ASMTPAAAInformation } from "../EmailPDU/ASMTPAAAInformation.ta.mjs";
import { IMAPAAAInformation, _decode_IMAPAAAInformation, _encode_IMAPAAAInformation } from "../EmailPDU/IMAPAAAInformation.ta.mjs";
// export { IMAPAAAInformation, _decode_IMAPAAAInformation, _encode_IMAPAAAInformation } from "../EmailPDU/IMAPAAAInformation.ta.mjs";


/**
 * @summary AAAInformation
 * @description
 *
 * Authentication material from POP3, authenticated SMTP, or IMAP4, carried in
 * `EmailIRI` when national legislation allows it.
 *
 * Application-layer interception puts this in the IRI (requirement E.1.13).
 * IP-packet interception sends the same exchange as HI3 IP packets and does not
 * map it here (requirement E.2.3). Authenticated SMTP (clause 6.2.3, IETF RFC
 * 4954) uses the SMTP alternative. POP3, and IMAP4 with a clear-text username
 * and password, use the POP3 or IMAP alternative and carry username, password,
 * and result (clause 6.4.3).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3, 6.4.3, and 7.10.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAAInformation  ::=  CHOICE
 *     -- The AAAInformation field allows for POP3 and authenticated SMTP AAA information
 * {
 *     pOP3AAAInformation          [0] POP3AAAInformation,
 *     aSMTPAAAInformation     [1] ASMTPAAAInformation,
 *     ...,
 *     iMAPAAAInformation          [2] IMAPAAAInformation
 * }
 * ```
 */
export
type AAAInformation =
    /**
     * POP3 username and, when present, password and result. Clause 6.4.3.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3 and 7.10.
     */
    { pOP3AAAInformation: POP3AAAInformation } /* CHOICE_ALT_ROOT */
    /**
     * Authenticated SMTP (IETF RFC 4954): username, method, challenge,
     * response, and result. Clause 6.2.3.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6.2.3.
     */
    | { aSMTPAAAInformation: ASMTPAAAInformation } /* CHOICE_ALT_ROOT */
    /**
     * IMAP4 clear-text username and password, plus result, when clause 6.4.3
     * applies. SASL `AUTHENTICATE` (table C.1, IETF RFC 4422) has no separate
     * challenge or response field in this module.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3 and C.2.
     */
    | { iMAPAAAInformation: IMAPAAAInformation } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AAAInformation: $.ASN1Decoder<AAAInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAAInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAAInformation (el: _Element): AAAInformation {
    if (!_cached_decoder_for_AAAInformation) { _cached_decoder_for_AAAInformation = $._decode_extensible_choice<AAAInformation>({
    "CONTEXT 0": [ "pOP3AAAInformation", $._decode_implicit<POP3AAAInformation>(() => _decode_POP3AAAInformation) ],
    "CONTEXT 1": [ "aSMTPAAAInformation", $._decode_implicit<ASMTPAAAInformation>(() => _decode_ASMTPAAAInformation) ],
    "CONTEXT 2": [ "iMAPAAAInformation", $._decode_implicit<IMAPAAAInformation>(() => _decode_IMAPAAAInformation) ]
}); }
    return _cached_decoder_for_AAAInformation(el);
}

let _cached_encoder_for_AAAInformation: $.ASN1Encoder<AAAInformation> | null = null;

/**
 * @summary Encodes a(n) AAAInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAAInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AAAInformation (value: AAAInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAAInformation) { _cached_encoder_for_AAAInformation = $._encode_choice<AAAInformation>({
    "pOP3AAAInformation": $._encode_implicit(_TagClass.context, 0, () => _encode_POP3AAAInformation, $.BER),
    "aSMTPAAAInformation": $._encode_implicit(_TagClass.context, 1, () => _encode_ASMTPAAAInformation, $.BER),
    "iMAPAAAInformation": $._encode_implicit(_TagClass.context, 2, () => _encode_IMAPAAAInformation, $.BER),
}, $.BER); }
    return _cached_encoder_for_AAAInformation(value, elGetter);
}


/* eslint-enable */
