/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledPartyNumber
 * @description
 * 
 * Called-party or forwarded-to identity. ISUP uses the called-party number
 * parameter field of EN 300 356. MAP uses `AddressString` of TS GSM 09.02. DSS1
 * uses the value part of the called-party number information element of EN 300
 * 403-1, without the information-element identifier and without the DSS1
 * length. An extension marker follows the named alternatives. Imported formats
 * keep the half-octet order of the source standard.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyNumber  ::=  CHOICE
 * {
 *     iSUP-Format        [1] OCTET STRING (SIZE (1..25)),
 *         -- Encoded in the same format as the called party number (parameter field)
 *         -- of the ISUP (see EN 300 356 [5]).
 *     mAP-Format        [2] OCTET STRING (SIZE (1..25)),
 *         -- Encoded as AddressString of the MAP protocol TS GSM 09.02 [32].
 *     dSS1-Format        [3] OCTET STRING (SIZE (1..25)),
 *         -- Encoded in the format defined for the value part of the Called party number information
 *         -- element of DSS1 protocol EN 300 403-1 [6].
 *         -- The DSS1 Information element identifier and the DSS1 length are not included.
 *     ...
 * }
 * ```
 */
export
type CalledPartyNumber =
    { iSUP_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { mAP_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { dSS1_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CalledPartyNumber: $.ASN1Decoder<CalledPartyNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalledPartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalledPartyNumber (el: _Element): CalledPartyNumber {
    if (!_cached_decoder_for_CalledPartyNumber) { _cached_decoder_for_CalledPartyNumber = $._decode_extensible_choice<CalledPartyNumber>({
    "CONTEXT 1": [ "iSUP_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "mAP_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "dSS1_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _value = _cached_decoder_for_CalledPartyNumber(el);
    if ("iSUP_Format" in _value && _value.iSUP_Format !== undefined) {
        const _alt = _value.iSUP_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("CalledPartyNumber.iSUP_Format violates SIZE constraint");
        }
    }
    if ("mAP_Format" in _value && _value.mAP_Format !== undefined) {
        const _alt = _value.mAP_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("CalledPartyNumber.mAP_Format violates SIZE constraint");
        }
    }
    if ("dSS1_Format" in _value && _value.dSS1_Format !== undefined) {
        const _alt = _value.dSS1_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("CalledPartyNumber.dSS1_Format violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_CalledPartyNumber: $.ASN1Encoder<CalledPartyNumber> | null = null;

/**
 * @summary Encodes a(n) CalledPartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledPartyNumber, encoded as an ASN.1 Element.
 */
export
function _encode_CalledPartyNumber (value: CalledPartyNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalledPartyNumber) { _cached_encoder_for_CalledPartyNumber = $._encode_choice<CalledPartyNumber>({
    "iSUP_Format": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "mAP_Format": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "dSS1_Format": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_CalledPartyNumber(value, elGetter);
}


/* eslint-enable */
