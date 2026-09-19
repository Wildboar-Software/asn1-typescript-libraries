/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLSCipherSuite, _decode_TLSCipherSuite, _encode_TLSCipherSuite } from "../TS33128Payloads/TLSCipherSuite.ta.mjs";
// export { TLSCipherSuite, _decode_TLSCipherSuite, _encode_TLSCipherSuite } from "../TS33128Payloads/TLSCipherSuite.ta.mjs";


/**
 * @summary TLS13CipherSuite
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CipherSuite  ::=  CHOICE
 * {
 *     rfc8446               [1] TLSCipherSuite
 *     -- Extensible for possible future purposes
 * }
 * ```
 */
export
type TLS13CipherSuite =
    { rfc8446: TLSCipherSuite } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TLS13CipherSuite: $.ASN1Decoder<TLS13CipherSuite> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13CipherSuite
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13CipherSuite (el: _Element): TLS13CipherSuite {
    if (!_cached_decoder_for_TLS13CipherSuite) { _cached_decoder_for_TLS13CipherSuite = $._decode_inextensible_choice<TLS13CipherSuite>({
    "CONTEXT 1": [ "rfc8446", $._decode_implicit<TLSCipherSuite>(() => _decode_TLSCipherSuite) ]
}); }
    return _cached_decoder_for_TLS13CipherSuite(el);
}

let _cached_encoder_for_TLS13CipherSuite: $.ASN1Encoder<TLS13CipherSuite> | null = null;

/**
 * @summary Encodes a(n) TLS13CipherSuite into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13CipherSuite, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13CipherSuite (value: TLS13CipherSuite, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13CipherSuite) { _cached_encoder_for_TLS13CipherSuite = $._encode_choice<TLS13CipherSuite>({
    "rfc8446": $._encode_implicit(_TagClass.context, 1, () => _encode_TLSCipherSuite, $.BER),
}, $.BER); }
    return _cached_encoder_for_TLS13CipherSuite(value, elGetter);
}


/* eslint-enable */
