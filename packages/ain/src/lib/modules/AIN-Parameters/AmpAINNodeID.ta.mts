/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SpcID, _decode_SpcID, _encode_SpcID } from "../AIN-Parameters/SpcID.ta.mjs";
// export { SpcID, _decode_SpcID, _encode_SpcID } from "../AIN-Parameters/SpcID.ta.mjs";
import { ISDNDeviceID, _decode_ISDNDeviceID, _encode_ISDNDeviceID } from "../AIN-Parameters/ISDNDeviceID.ta.mjs";
// export { ISDNDeviceID, _decode_ISDNDeviceID, _encode_ISDNDeviceID } from "../AIN-Parameters/ISDNDeviceID.ta.mjs";


/**
 * @summary AmpAINNodeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpAINNodeID  ::=  CHOICE{
 *         spcID           [1] IMPLICIT SpcID,
 *         iSDNDeviceID    [2] IMPLICIT ISDNDeviceID
 *     }
 * ```
 */
export
type AmpAINNodeID =
    { spcID: SpcID } /* CHOICE_ALT_ROOT */
    | { iSDNDeviceID: ISDNDeviceID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AmpAINNodeID: $.ASN1Decoder<AmpAINNodeID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmpAINNodeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmpAINNodeID (el: _Element): AmpAINNodeID {
    if (!_cached_decoder_for_AmpAINNodeID) { _cached_decoder_for_AmpAINNodeID = $._decode_inextensible_choice<AmpAINNodeID>({
    "CONTEXT 1": [ "spcID", $._decode_implicit<SpcID>(() => _decode_SpcID) ],
    "CONTEXT 2": [ "iSDNDeviceID", $._decode_implicit<ISDNDeviceID>(() => _decode_ISDNDeviceID) ]
}); }
    return _cached_decoder_for_AmpAINNodeID(el);
}

let _cached_encoder_for_AmpAINNodeID: $.ASN1Encoder<AmpAINNodeID> | null = null;

/**
 * @summary Encodes a(n) AmpAINNodeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmpAINNodeID, encoded as an ASN.1 Element.
 */
export
function _encode_AmpAINNodeID (value: AmpAINNodeID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmpAINNodeID) { _cached_encoder_for_AmpAINNodeID = $._encode_choice<AmpAINNodeID>({
    "spcID": $._encode_implicit(_TagClass.context, 1, () => _encode_SpcID, $.BER),
    "iSDNDeviceID": $._encode_implicit(_TagClass.context, 2, () => _encode_ISDNDeviceID, $.BER),
}, $.BER); }
    return _cached_encoder_for_AmpAINNodeID(value, elGetter);
}


/* eslint-enable */
