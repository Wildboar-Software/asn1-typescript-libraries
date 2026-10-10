/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Query, _decode_Query, _encode_Query } from "../Z39-50-APDU-2001/Query.ta.mjs";


/**
 * @summary ClientPartNotToKeep
 * @description
 * 
 * What the client asks to save: the query itself, or the name of another
 * persistent query whose query the server copies into this package. Not
 * retained as submitted.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep  ::=  CHOICE{
 *     package [1] IMPLICIT InternationalString,
 *     query   [2] Query
 * }
 * ```
 */
export
type ClientPartNotToKeep =
    { package_: InternationalString } /* CHOICE_ALT_ROOT */
    | { query: Query } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClientPartNotToKeep: $.ASN1Decoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep (el: _Element): ClientPartNotToKeep {
    if (!_cached_decoder_for_ClientPartNotToKeep) { _cached_decoder_for_ClientPartNotToKeep = $._decode_inextensible_choice<ClientPartNotToKeep>({
    "CONTEXT 1": [ "package_", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "query", $._decode_explicit<Query>(() => _decode_Query) ]
}); }
    return _cached_decoder_for_ClientPartNotToKeep(el);
}

let _cached_encoder_for_ClientPartNotToKeep: $.ASN1Encoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep) { _cached_encoder_for_ClientPartNotToKeep = $._encode_choice<ClientPartNotToKeep>({
    "package_": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "query": $._encode_explicit(_TagClass.context, 2, () => _encode_Query, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClientPartNotToKeep(value, elGetter);
}


/* eslint-enable */
