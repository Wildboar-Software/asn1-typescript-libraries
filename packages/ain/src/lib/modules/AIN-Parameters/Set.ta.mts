/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
import { SpeedCallingCode, _decode_SpeedCallingCode, _encode_SpeedCallingCode } from "../AIN-Parameters/SpeedCallingCode.ta.mjs";
// export { SpeedCallingCode, _decode_SpeedCallingCode, _encode_SpeedCallingCode } from "../AIN-Parameters/SpeedCallingCode.ta.mjs";


/**
 * @summary Set
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Set  ::=  CHOICE{
 *         dn [1] IMPLICIT Dn,
 *         speedCallingCode [4] IMPLICIT SpeedCallingCode
 *     }
 * ```
 */
export
type Set =
    { dn: Dn } /* CHOICE_ALT_ROOT */
    | { speedCallingCode: SpeedCallingCode } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Set: $.ASN1Decoder<Set> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Set
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Set (el: _Element): Set {
    if (!_cached_decoder_for_Set) { _cached_decoder_for_Set = $._decode_inextensible_choice<Set>({
    "CONTEXT 1": [ "dn", $._decode_implicit<Dn>(() => _decode_Dn) ],
    "CONTEXT 4": [ "speedCallingCode", $._decode_implicit<SpeedCallingCode>(() => _decode_SpeedCallingCode) ]
}); }
    return _cached_decoder_for_Set(el);
}

let _cached_encoder_for_Set: $.ASN1Encoder<Set> | null = null;

/**
 * @summary Encodes a(n) Set into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Set, encoded as an ASN.1 Element.
 */
export
function _encode_Set (value: Set, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Set) { _cached_encoder_for_Set = $._encode_choice<Set>({
    "dn": $._encode_implicit(_TagClass.context, 1, () => _encode_Dn, $.BER),
    "speedCallingCode": $._encode_implicit(_TagClass.context, 4, () => _encode_SpeedCallingCode, $.BER),
}, $.BER); }
    return _cached_encoder_for_Set(value, elGetter);
}


/* eslint-enable */
