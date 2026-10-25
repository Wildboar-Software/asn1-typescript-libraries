/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartyNumber
 * @description
 * 
 * Identity of a calling party, copied from the target's signalling when it
 * first becomes available. An identical value need not be repeated later in the
 * call. Table A.3.2 allows ISUP, DSS1, or MAP. Each alternative is an octet
 * string of size 1 to 25. If the signalling system provides less than those
 * standards, spare or default values may be used. Only parameters defined in
 * ETSI standards are used for a common implementation.
 *
 * `iSUP-Format` is the parameter field of the ISUP calling party number (EN 300
 * 356). `dSS1-Format` is the value part of the DSS1 Calling party number
 * information element (EN 300 403-1); the information-element identifier and
 * the length are not included. `mAP-Format` is the MAP `AddressString` (TS GSM
 * 09.02).
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.3, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyNumber  ::=  CHOICE
 * {
 *     iSUP-Format            [1] OCTET STRING (SIZE (1..25)),
 *         -- Encoded in the same format as the calling party number (parameter field)
 *         -- of the ISUP (see EN 300 356 [5]).
 *     dSS1-Format            [2] OCTET STRING (SIZE (1..25)),
 *         -- Encoded in the format defined for the value part of the Calling party number
 *         -- information element of DSS1 protocol EN 300 403-1 [6].
 *         -- The DSS1 Information element identifier and the DSS1 length are not included.
 *     ...,
 *     mAP-Format            [3] OCTET STRING (SIZE (1..25))
 *         -- Encoded as AddressString of the MAP protocol TS GSM 09.02 [32].
 * }
 * ```
 */
export
type CallingPartyNumber =
    { iSUP_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { dSS1_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { mAP_Format: OCTET_STRING } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CallingPartyNumber: $.ASN1Decoder<CallingPartyNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingPartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallingPartyNumber (el: _Element): CallingPartyNumber {
    if (!_cached_decoder_for_CallingPartyNumber) { _cached_decoder_for_CallingPartyNumber = $._decode_extensible_choice<CallingPartyNumber>({
    "CONTEXT 1": [ "iSUP_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "dSS1_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "mAP_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _value = _cached_decoder_for_CallingPartyNumber(el);
    if ("iSUP_Format" in _value && _value.iSUP_Format !== undefined) {
        const _alt = _value.iSUP_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("CallingPartyNumber.iSUP_Format violates SIZE constraint");
        }
    }
    if ("dSS1_Format" in _value && _value.dSS1_Format !== undefined) {
        const _alt = _value.dSS1_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("CallingPartyNumber.dSS1_Format violates SIZE constraint");
        }
    }
    if ("mAP_Format" in _value && _value.mAP_Format !== undefined) {
        const _alt = _value.mAP_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("CallingPartyNumber.mAP_Format violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_CallingPartyNumber: $.ASN1Encoder<CallingPartyNumber> | null = null;

/**
 * @summary Encodes a(n) CallingPartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingPartyNumber, encoded as an ASN.1 Element.
 */
export
function _encode_CallingPartyNumber (value: CallingPartyNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallingPartyNumber) { _cached_encoder_for_CallingPartyNumber = $._encode_choice<CallingPartyNumber>({
    "iSUP_Format": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "dSS1_Format": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "mAP_Format": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallingPartyNumber(value, elGetter);
}


/* eslint-enable */
