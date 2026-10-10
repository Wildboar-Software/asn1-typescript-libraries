/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGENbID
 * @description
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
    | { longMacroNGENbID: BIT_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NGENbID: $.ASN1Decoder<NGENbID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGENbID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGENbID (el: _Element): NGENbID {
    if (!_cached_decoder_for_NGENbID) { _cached_decoder_for_NGENbID = $._decode_inextensible_choice<NGENbID>({
    "CONTEXT 1": [ "macroNGENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 2": [ "shortMacroNGENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 3": [ "longMacroNGENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ]
}); }
    const _value = _cached_decoder_for_NGENbID(el);
    if (_value !== undefined && typeof _value === "object" && "macroNGENbID" in _value) {
        const _v = _value.macroNGENbID;
        if (_v.length < 20 || _v.length > 20) {
            throw new ASN1SizeError("NGENbID.macroNGENbID violates SIZE constraint");
        }
    }
    if (_value !== undefined && typeof _value === "object" && "shortMacroNGENbID" in _value) {
        const _v = _value.shortMacroNGENbID;
        if (_v.length < 18 || _v.length > 18) {
            throw new ASN1SizeError("NGENbID.shortMacroNGENbID violates SIZE constraint");
        }
    }
    if (_value !== undefined && typeof _value === "object" && "longMacroNGENbID" in _value) {
        const _v = _value.longMacroNGENbID;
        if (_v.length < 21 || _v.length > 21) {
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
