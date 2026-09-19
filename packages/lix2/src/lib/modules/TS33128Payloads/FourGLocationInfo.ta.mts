/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSLocationInformation, _decode_EPSLocationInformation, _encode_EPSLocationInformation } from "../TS33128Payloads/EPSLocationInformation.ta.mjs";
// export { EPSLocationInformation, _decode_EPSLocationInformation, _encode_EPSLocationInformation } from "../TS33128Payloads/EPSLocationInformation.ta.mjs";
import { EPSUserLocationInformation, _decode_EPSUserLocationInformation, _encode_EPSUserLocationInformation } from "../TS33128Payloads/EPSUserLocationInformation.ta.mjs";
// export { EPSUserLocationInformation, _decode_EPSUserLocationInformation, _encode_EPSUserLocationInformation } from "../TS33128Payloads/EPSUserLocationInformation.ta.mjs";


/**
 * @summary FourGLocationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FourGLocationInfo  ::=  CHOICE
 * {
 *     ePSLocationInformation     [1] EPSLocationInformation,
 *     ePSUserLocationInformation [2] EPSUserLocationInformation
 * }
 * ```
 */
export
type FourGLocationInfo =
    { ePSLocationInformation: EPSLocationInformation } /* CHOICE_ALT_ROOT */
    | { ePSUserLocationInformation: EPSUserLocationInformation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FourGLocationInfo: $.ASN1Decoder<FourGLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FourGLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FourGLocationInfo (el: _Element): FourGLocationInfo {
    if (!_cached_decoder_for_FourGLocationInfo) { _cached_decoder_for_FourGLocationInfo = $._decode_inextensible_choice<FourGLocationInfo>({
    "CONTEXT 1": [ "ePSLocationInformation", $._decode_implicit<EPSLocationInformation>(() => _decode_EPSLocationInformation) ],
    "CONTEXT 2": [ "ePSUserLocationInformation", $._decode_implicit<EPSUserLocationInformation>(() => _decode_EPSUserLocationInformation) ]
}); }
    return _cached_decoder_for_FourGLocationInfo(el);
}

let _cached_encoder_for_FourGLocationInfo: $.ASN1Encoder<FourGLocationInfo> | null = null;

/**
 * @summary Encodes a(n) FourGLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FourGLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FourGLocationInfo (value: FourGLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FourGLocationInfo) { _cached_encoder_for_FourGLocationInfo = $._encode_choice<FourGLocationInfo>({
    "ePSLocationInformation": $._encode_implicit(_TagClass.context, 1, () => _encode_EPSLocationInformation, $.BER),
    "ePSUserLocationInformation": $._encode_implicit(_TagClass.context, 2, () => _encode_EPSUserLocationInformation, $.BER),
}, $.BER); }
    return _cached_encoder_for_FourGLocationInfo(value, elGetter);
}


/* eslint-enable */
