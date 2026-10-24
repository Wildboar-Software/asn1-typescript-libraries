/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProSeMaskSequence, _decode_ProSeMaskSequence, _encode_ProSeMaskSequence } from "../ProSeHI2Operations/ProSeMaskSequence.ta.mjs";
// export { ProSeMaskSequence, _decode_ProSeMaskSequence, _encode_ProSeMaskSequence } from "../ProSeHI2Operations/ProSeMaskSequence.ta.mjs";


/**
 * @summary ProSeAppMask
 * @description
 * 
 * One mask, or a list of masks, for a ProSe application code at a monitoring
 * UE.
 *
 * `proseMask` is a single 23-octet mask formatted like the application code.
 * Together with that code it forms a filter. `proseMaskSequence` carries more
 * than one such mask. 3GPP TS 33.108, annex B.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeAppMask         ::=  CHOICE
 * {
 *     proseMask                [1] OCTET STRING (SIZE (23)),
 *     -- formatted like the proseappcode; used in conjuction with the corresponding
 *     -- proseappcode bitstring to form a filter.
 *     proseMaskSequence        [2] ProSeMaskSequence
 * }
 * ```
 */
export
type ProSeAppMask =
    { proseMask: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { proseMaskSequence: ProSeMaskSequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProSeAppMask: $.ASN1Decoder<ProSeAppMask> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeAppMask
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeAppMask (el: _Element): ProSeAppMask {
    if (!_cached_decoder_for_ProSeAppMask) { _cached_decoder_for_ProSeAppMask = $._decode_inextensible_choice<ProSeAppMask>({
    "CONTEXT 1": [ "proseMask", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "proseMaskSequence", $._decode_implicit<ProSeMaskSequence>(() => _decode_ProSeMaskSequence) ]
}); }
    const _value = _cached_decoder_for_ProSeAppMask(el);
    if ("proseMask" in _value && _value.proseMask !== undefined) {
        const _alt = _value.proseMask;
        if (_alt.length < 23 || _alt.length > 23) {
            throw new ASN1SizeError("ProSeAppMask.proseMask violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_ProSeAppMask: $.ASN1Encoder<ProSeAppMask> | null = null;

/**
 * @summary Encodes a(n) ProSeAppMask into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeAppMask, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeAppMask (value: ProSeAppMask, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeAppMask) { _cached_encoder_for_ProSeAppMask = $._encode_choice<ProSeAppMask>({
    "proseMask": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "proseMaskSequence": $._encode_implicit(_TagClass.context, 2, () => _encode_ProSeMaskSequence, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProSeAppMask(value, elGetter);
}


/* eslint-enable */
