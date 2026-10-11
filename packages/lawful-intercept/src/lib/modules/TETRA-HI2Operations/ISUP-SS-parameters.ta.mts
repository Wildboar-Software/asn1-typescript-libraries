/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISUP_SS_parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISUP-SS-parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type ISUP_SS_parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_ISUP_SS_parameters: $.ASN1Decoder<ISUP_SS_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISUP_SS_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISUP_SS_parameters (el: _Element): ISUP_SS_parameters {
    if (!_cached_decoder_for_ISUP_SS_parameters) { _cached_decoder_for_ISUP_SS_parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_ISUP_SS_parameters(el);
}

let _cached_encoder_for_ISUP_SS_parameters: $.ASN1Encoder<ISUP_SS_parameters> | null = null;

/**
 * @summary Encodes a(n) ISUP_SS_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISUP_SS_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_ISUP_SS_parameters (value: ISUP_SS_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISUP_SS_parameters) { _cached_encoder_for_ISUP_SS_parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ISUP_SS_parameters(value, elGetter);
}


/* eslint-enable */
