/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ENbID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENbID  ::=  CHOICE
 * {
 *     macroENbID                  [1] BIT STRING (SIZE(20)),
 *     homeENbID                   [2] BIT STRING (SIZE(28)),
 *     shortMacroENbID             [3] BIT STRING (SIZE(18)),
 *     longMacroENbID              [4] BIT STRING (SIZE(21))
 * }
 * ```
 */
export
type ENbID =
    { macroENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { homeENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { shortMacroENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { longMacroENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ENbID: $.ASN1Decoder<ENbID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ENbID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ENbID (el: _Element): ENbID {
    if (!_cached_decoder_for_ENbID) { _cached_decoder_for_ENbID = $._decode_extensible_choice<ENbID>({
    "CONTEXT 1": [ "macroENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 2": [ "homeENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 3": [ "shortMacroENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 4": [ "longMacroENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ]
}); }
    const _value = _cached_decoder_for_ENbID(el);
    if ("macroENbID" in _value && _value.macroENbID !== undefined) {
        const _alt = _value.macroENbID;
        if (_alt.length < 20 || _alt.length > 20) {
            throw new ASN1SizeError("ENbID.macroENbID violates SIZE constraint");
        }
    }
    if ("homeENbID" in _value && _value.homeENbID !== undefined) {
        const _alt = _value.homeENbID;
        if (_alt.length < 28 || _alt.length > 28) {
            throw new ASN1SizeError("ENbID.homeENbID violates SIZE constraint");
        }
    }
    if ("shortMacroENbID" in _value && _value.shortMacroENbID !== undefined) {
        const _alt = _value.shortMacroENbID;
        if (_alt.length < 18 || _alt.length > 18) {
            throw new ASN1SizeError("ENbID.shortMacroENbID violates SIZE constraint");
        }
    }
    if ("longMacroENbID" in _value && _value.longMacroENbID !== undefined) {
        const _alt = _value.longMacroENbID;
        if (_alt.length < 21 || _alt.length > 21) {
            throw new ASN1SizeError("ENbID.longMacroENbID violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_ENbID: $.ASN1Encoder<ENbID> | null = null;

/**
 * @summary Encodes a(n) ENbID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENbID, encoded as an ASN.1 Element.
 */
export
function _encode_ENbID (value: ENbID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ENbID) { _cached_encoder_for_ENbID = $._encode_choice<ENbID>({
    "macroENbID": $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER),
    "homeENbID": $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER),
    "shortMacroENbID": $._encode_implicit(_TagClass.context, 3, () => $._encodeBitString, $.BER),
    "longMacroENbID": $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ENbID(value, elGetter);
}


/* eslint-enable */
