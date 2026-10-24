/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGENbID
 * @description
 * 
 * The nGENbID type is derived from the data present in the NgeNbId type defined
 * in TS 29.571 [17] table 5.4.2-1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.27.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGENbID  ::=  CHOICE
 * {
 *     macroNGENbID                [1] BIT STRING (SIZE(20)),
 *     shortMacroNGENbID           [2] BIT STRING (SIZE(18)),
 *     longMacroNGENbID            [3] BIT STRING (SIZE(21))
 * }
 * ```
 */
export
type NGENbID =
    { macroNGENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { shortMacroNGENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { longMacroNGENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_NGENbID: $.ASN1Decoder<NGENbID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGENbID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGENbID (el: _Element): NGENbID {
    if (!_cached_decoder_for_NGENbID) { _cached_decoder_for_NGENbID = $._decode_extensible_choice<NGENbID>({
    "CONTEXT 1": [ "macroNGENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 2": [ "shortMacroNGENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 3": [ "longMacroNGENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ]
}); }
    const _value = _cached_decoder_for_NGENbID(el);
    if ("macroNGENbID" in _value && _value.macroNGENbID !== undefined) {
        const _alt = _value.macroNGENbID;
        if (_alt.length < 20 || _alt.length > 20) {
            throw new ASN1SizeError("NGENbID.macroNGENbID violates SIZE constraint");
        }
    }
    if ("shortMacroNGENbID" in _value && _value.shortMacroNGENbID !== undefined) {
        const _alt = _value.shortMacroNGENbID;
        if (_alt.length < 18 || _alt.length > 18) {
            throw new ASN1SizeError("NGENbID.shortMacroNGENbID violates SIZE constraint");
        }
    }
    if ("longMacroNGENbID" in _value && _value.longMacroNGENbID !== undefined) {
        const _alt = _value.longMacroNGENbID;
        if (_alt.length < 21 || _alt.length > 21) {
            throw new ASN1SizeError("NGENbID.longMacroNGENbID violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_NGENbID: $.ASN1Encoder<NGENbID> | null = null;

/**
 * @summary Encodes a(n) NGENbID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGENbID, encoded as an ASN.1 Element.
 */
export
function _encode_NGENbID (value: NGENbID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NGENbID) { _cached_encoder_for_NGENbID = $._encode_choice<NGENbID>({
    "macroNGENbID": $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER),
    "shortMacroNGENbID": $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER),
    "longMacroNGENbID": $._encode_implicit(_TagClass.context, 3, () => $._encodeBitString, $.BER),
}, $.BER); }
    return _cached_encoder_for_NGENbID(value, elGetter);
}


/* eslint-enable */
