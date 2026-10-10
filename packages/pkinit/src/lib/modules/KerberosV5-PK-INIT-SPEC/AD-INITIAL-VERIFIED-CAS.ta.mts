/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";


/**
 * @summary AD_INITIAL_VERIFIED_CAS
 * @description
 *
 * Authorization data the KDC must place in the initial ticket.
 * The `ad-type` is {@link ad_initial_verified_cas} and `ad-data`
 * is the DER encoding of this sequence. Each entry is a CA, or
 * a CA certificate, on the path that validated the client
 * certificate. The KDC also sets the ticket's `initial` flag.
 *
 * An empty sequence is allowed only when the KDC itself vouches
 * for the client's certificate. When the list meets the realm's
 * policy, the AS wraps it in `AD-IF-RELEVANT`. That is the
 * `TRANSITED-POLICY-CHECKED` case. A TGS must copy this
 * authorization data from a ticket presented in `PA-TGS-REQ`
 * into the issued ticket. It may wrap the data in
 * `AD-IF-RELEVANT` when the list meets local policy, and may
 * unwrap it otherwise. An application server should apply local
 * policy when this element is not inside `AD-IF-RELEVANT`, and
 * may apply local policy when it is.
 *
 * [RFC 4556, section 3.2.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AD-INITIAL-VERIFIED-CAS  ::=  SEQUENCE OF
 *                 ExternalPrincipalIdentifier
 * ```
 */
export
type AD_INITIAL_VERIFIED_CAS = ExternalPrincipalIdentifier[]; // SequenceOfType

let _cached_decoder_for_AD_INITIAL_VERIFIED_CAS: $.ASN1Decoder<AD_INITIAL_VERIFIED_CAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AD_INITIAL_VERIFIED_CAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AD_INITIAL_VERIFIED_CAS (el: _Element): AD_INITIAL_VERIFIED_CAS {
    if (!_cached_decoder_for_AD_INITIAL_VERIFIED_CAS) { _cached_decoder_for_AD_INITIAL_VERIFIED_CAS = $._decodeSequenceOf<ExternalPrincipalIdentifier>(() => _decode_ExternalPrincipalIdentifier); }
    return _cached_decoder_for_AD_INITIAL_VERIFIED_CAS(el);
}

let _cached_encoder_for_AD_INITIAL_VERIFIED_CAS: $.ASN1Encoder<AD_INITIAL_VERIFIED_CAS> | null = null;

/**
 * @summary Encodes a(n) AD_INITIAL_VERIFIED_CAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_INITIAL_VERIFIED_CAS, encoded as an ASN.1 Element.
 */
export
function _encode_AD_INITIAL_VERIFIED_CAS (value: AD_INITIAL_VERIFIED_CAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AD_INITIAL_VERIFIED_CAS) { _cached_encoder_for_AD_INITIAL_VERIFIED_CAS = $._encodeSequenceOf<ExternalPrincipalIdentifier>(() => _encode_ExternalPrincipalIdentifier, $.BER); }
    return _cached_encoder_for_AD_INITIAL_VERIFIED_CAS(value, elGetter);
}


/* eslint-enable */
