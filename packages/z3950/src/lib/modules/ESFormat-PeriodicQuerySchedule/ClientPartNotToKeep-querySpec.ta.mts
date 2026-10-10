/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Query, _decode_Query, _encode_Query } from "../Z39-50-APDU-2001/Query.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ClientPartNotToKeep_querySpec
 * @description
 * 
 * The query to run on the schedule: either the query itself or the name of
 * a Persistent Query package whose query the server copies. Mandatory on
 * create. If this is a query, or the named package lists no databases,
 * database names are required.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep-querySpec ::= CHOICE {
 *     actualQuery [1] Query,
 *     packageName [2] IMPLICIT InternationalString
 * }
 * ```
 */
export
type ClientPartNotToKeep_querySpec =
    { actualQuery: Query } /* CHOICE_ALT_ROOT */
    | { packageName: InternationalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClientPartNotToKeep_querySpec: $.ASN1Decoder<ClientPartNotToKeep_querySpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep_querySpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep_querySpec (el: _Element): ClientPartNotToKeep_querySpec {
    if (!_cached_decoder_for_ClientPartNotToKeep_querySpec) { _cached_decoder_for_ClientPartNotToKeep_querySpec = $._decode_inextensible_choice<ClientPartNotToKeep_querySpec>({
    "CONTEXT 1": [ "actualQuery", $._decode_explicit<Query>(() => _decode_Query) ],
    "CONTEXT 2": [ "packageName", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ]
}); }
    return _cached_decoder_for_ClientPartNotToKeep_querySpec(el);
}

let _cached_encoder_for_ClientPartNotToKeep_querySpec: $.ASN1Encoder<ClientPartNotToKeep_querySpec> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep_querySpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep_querySpec, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep_querySpec (value: ClientPartNotToKeep_querySpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep_querySpec) { _cached_encoder_for_ClientPartNotToKeep_querySpec = $._encode_choice<ClientPartNotToKeep_querySpec>({
    "actualQuery": $._encode_explicit(_TagClass.context, 1, () => _encode_Query, $.BER),
    "packageName": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClientPartNotToKeep_querySpec(value, elGetter);
}


/* eslint-enable */
