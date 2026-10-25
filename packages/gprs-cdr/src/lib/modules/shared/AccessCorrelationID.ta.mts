/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type GraphicString,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessCorrelationID  ::=  CHOICE {
 *    gPRS-Charging-Id                    [2] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    accessNetworkChargingIdentifier     [4] IMPLICIT GraphicString}
 * ```
 */
export
type AccessCorrelationID =
    { gPRS_Charging_Id: INTEGER } /* CHOICE_ALT_ROOT */
    | { accessNetworkChargingIdentifier: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessCorrelationID: $.ASN1Decoder<AccessCorrelationID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessCorrelationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessCorrelationID (el: _Element): AccessCorrelationID {
    if (!_cached_decoder_for_AccessCorrelationID) { _cached_decoder_for_AccessCorrelationID = $._decode_inextensible_choice<AccessCorrelationID>({
    "CONTEXT 2": [ "gPRS_Charging_Id", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 4": [ "accessNetworkChargingIdentifier", $._decode_implicit<GraphicString>(() => $._decodeGraphicString) ]
}); }
    const _decoded_AccessCorrelationID = _cached_decoder_for_AccessCorrelationID(el);
    if ("gPRS_Charging_Id" in _decoded_AccessCorrelationID && (_decoded_AccessCorrelationID.gPRS_Charging_Id < 0 || _decoded_AccessCorrelationID.gPRS_Charging_Id > 4294967295)) {
        throw new ASN1OverflowError("AccessCorrelationID.gPRS_Charging_Id violates INTEGER range");
    }
    return _decoded_AccessCorrelationID;
}

let _cached_encoder_for_AccessCorrelationID: $.ASN1Encoder<AccessCorrelationID> | null = null;

/**
 * @summary Encodes a(n) AccessCorrelationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessCorrelationID, encoded as an ASN.1 Element.
 */
export
function _encode_AccessCorrelationID (value: AccessCorrelationID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessCorrelationID) { _cached_encoder_for_AccessCorrelationID = $._encode_choice<AccessCorrelationID>({
    "gPRS_Charging_Id": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "accessNetworkChargingIdentifier": $._encode_implicit(_TagClass.context, 4, () => $._encodeGraphicString, $.BER),
}, $.BER); }
    return _cached_encoder_for_AccessCorrelationID(value, elGetter);
}


/* eslint-enable */
