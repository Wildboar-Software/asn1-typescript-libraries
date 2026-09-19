/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Mlhg, _decode_Mlhg, _encode_Mlhg } from "../AIN-Parameters/Mlhg.ta.mjs";
// export { Mlhg, _decode_Mlhg, _encode_Mlhg } from "../AIN-Parameters/Mlhg.ta.mjs";


/**
 * @summary FacilityGID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FacilityGID  ::=  CHOICE{
 *         mlhg Mlhg
 *     }
 * ```
 */
export
type FacilityGID =
    { mlhg: Mlhg } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FacilityGID: $.ASN1Decoder<FacilityGID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FacilityGID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FacilityGID (el: _Element): FacilityGID {
    if (!_cached_decoder_for_FacilityGID) { _cached_decoder_for_FacilityGID = $._decode_inextensible_choice<FacilityGID>({
    "CONTEXT 29": [ "mlhg", _decode_Mlhg ]
}); }
    return _cached_decoder_for_FacilityGID(el);
}

let _cached_encoder_for_FacilityGID: $.ASN1Encoder<FacilityGID> | null = null;

/**
 * @summary Encodes a(n) FacilityGID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacilityGID, encoded as an ASN.1 Element.
 */
export
function _encode_FacilityGID (value: FacilityGID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FacilityGID) { _cached_encoder_for_FacilityGID = $._encode_choice<FacilityGID>({
    "mlhg": _encode_Mlhg,
}, $.BER); }
    return _cached_encoder_for_FacilityGID(value, elGetter);
}


/* eslint-enable */
