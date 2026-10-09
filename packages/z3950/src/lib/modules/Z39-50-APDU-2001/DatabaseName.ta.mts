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
 * Name of a database at the server. Case-insensitive. There is no
 * default database. The server designates, through Explain or outside
 * this standard, which names may appear on a Search and in which
 * combinations. Multi-database search in one request is optional; the
 * server may fail it with diagnostic 111 (too many databases; addinfo
 * maximum 1) or diagnostic 23 (combination not supported). A server
 * may expose virtual databases instead of combinations.
 * §3.2.2.1.2.
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
