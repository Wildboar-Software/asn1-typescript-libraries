/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GenericName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericName  ::=  [33] IMPLICIT OCTET STRING
 * ```
 */
export
type GenericName = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GenericName: $.ASN1Decoder<GenericName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericName (el: _Element): GenericName {
    if (!_cached_decoder_for_GenericName) { _cached_decoder_for_GenericName = $._decode_implicit<GenericName>(() => $._decodeOctetString); }
    return _cached_decoder_for_GenericName(el);
}

let _cached_encoder_for_GenericName: $.ASN1Encoder<GenericName> | null = null;

/**
 * @summary Encodes a(n) GenericName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericName, encoded as an ASN.1 Element.
 */
export
function _encode_GenericName (value: GenericName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericName) { _cached_encoder_for_GenericName = $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_GenericName(value, elGetter);
}


/* eslint-enable */
