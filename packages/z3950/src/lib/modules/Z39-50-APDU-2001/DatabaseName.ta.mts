/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary DatabaseName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DatabaseName     ::=  [105] IMPLICIT InternationalString
 * ```
 */
export
type DatabaseName = InternationalString; // DefinedType

let _cached_decoder_for_DatabaseName: $.ASN1Decoder<DatabaseName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DatabaseName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DatabaseName (el: _Element): DatabaseName {
    if (!_cached_decoder_for_DatabaseName) { _cached_decoder_for_DatabaseName = $._decode_implicit<DatabaseName>(() => _decode_InternationalString); }
    return _cached_decoder_for_DatabaseName(el);
}

let _cached_encoder_for_DatabaseName: $.ASN1Encoder<DatabaseName> | null = null;

/**
 * @summary Encodes a(n) DatabaseName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DatabaseName, encoded as an ASN.1 Element.
 */
export
function _encode_DatabaseName (value: DatabaseName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DatabaseName) { _cached_encoder_for_DatabaseName = $._encode_implicit(_TagClass.context, 105, () => $._encode_implicit(_TagClass.context, 105, () => _encode_InternationalString, $.BER), $.BER); }
    return _cached_encoder_for_DatabaseName(value, elGetter);
}


/* eslint-enable */
