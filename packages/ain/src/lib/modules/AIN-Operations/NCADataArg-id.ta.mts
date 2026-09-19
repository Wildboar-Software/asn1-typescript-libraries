/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { SrhrGroupID, _decode_SrhrGroupID, _encode_SrhrGroupID } from "../AIN-Parameters/SrhrGroupID.ta.mjs";
// export { SrhrGroupID, _decode_SrhrGroupID, _encode_SrhrGroupID } from "../AIN-Parameters/SrhrGroupID.ta.mjs";


/**
 * @summary NCADataArg_id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NCADataArg-id ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type NCADataArg_id =
    { calledPartyID: CalledPartyID } /* CHOICE_ALT_ROOT */
    | { srhrGroupID: SrhrGroupID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NCADataArg_id: $.ASN1Decoder<NCADataArg_id> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NCADataArg_id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NCADataArg_id (el: _Element): NCADataArg_id {
    if (!_cached_decoder_for_NCADataArg_id) { _cached_decoder_for_NCADataArg_id = $._decode_inextensible_choice<NCADataArg_id>({
    "CONTEXT 15": [ "calledPartyID", _decode_CalledPartyID ],
    "CONTEXT 77": [ "srhrGroupID", _decode_SrhrGroupID ]
}); }
    return _cached_decoder_for_NCADataArg_id(el);
}

let _cached_encoder_for_NCADataArg_id: $.ASN1Encoder<NCADataArg_id> | null = null;

/**
 * @summary Encodes a(n) NCADataArg_id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCADataArg_id, encoded as an ASN.1 Element.
 */
export
function _encode_NCADataArg_id (value: NCADataArg_id, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NCADataArg_id) { _cached_encoder_for_NCADataArg_id = $._encode_choice<NCADataArg_id>({
    "calledPartyID": _encode_CalledPartyID,
    "srhrGroupID": _encode_SrhrGroupID,
}, $.BER); }
    return _cached_encoder_for_NCADataArg_id(value, elGetter);
}


/* eslint-enable */
