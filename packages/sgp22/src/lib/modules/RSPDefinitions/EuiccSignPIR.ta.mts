/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccSignPIR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccSignPIR  ::=  [APPLICATION 55] OCTET STRING
 * ```
 */
export
type EuiccSignPIR = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EuiccSignPIR: $.ASN1Decoder<EuiccSignPIR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccSignPIR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccSignPIR (el: _Element): EuiccSignPIR {
    if (!_cached_decoder_for_EuiccSignPIR) { _cached_decoder_for_EuiccSignPIR = $._decode_implicit<EuiccSignPIR>(() => $._decodeOctetString); }
    return _cached_decoder_for_EuiccSignPIR(el);
}

let _cached_encoder_for_EuiccSignPIR: $.ASN1Encoder<EuiccSignPIR> | null = null;

/**
 * @summary Encodes a(n) EuiccSignPIR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccSignPIR, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccSignPIR (value: EuiccSignPIR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccSignPIR) { _cached_encoder_for_EuiccSignPIR = $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_EuiccSignPIR(value, elGetter);
}


/* eslint-enable */
