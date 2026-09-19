/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Parms, _decode_Parms, _encode_Parms } from "../AIN-Parameters/Parms.ta.mjs";
// export { Parms, _decode_Parms, _encode_Parms } from "../AIN-Parameters/Parms.ta.mjs";


/**
 * @summary InvParms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvParms  ::=  SEQUENCE SIZE(1) OF Parms
 * ```
 */
export
type InvParms = Parms[]; // SequenceOfType

let _cached_decoder_for_InvParms: $.ASN1Decoder<InvParms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvParms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvParms (el: _Element): InvParms {
    if (!_cached_decoder_for_InvParms) { _cached_decoder_for_InvParms = $._decodeSequenceOf<Parms>(() => _decode_Parms); }
    return _cached_decoder_for_InvParms(el);
}

let _cached_encoder_for_InvParms: $.ASN1Encoder<InvParms> | null = null;

/**
 * @summary Encodes a(n) InvParms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvParms, encoded as an ASN.1 Element.
 */
export
function _encode_InvParms (value: InvParms, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvParms) { _cached_encoder_for_InvParms = $._encodeSequenceOf<Parms>(() => _encode_Parms, $.BER); }
    return _cached_encoder_for_InvParms(value, elGetter);
}


/* eslint-enable */
