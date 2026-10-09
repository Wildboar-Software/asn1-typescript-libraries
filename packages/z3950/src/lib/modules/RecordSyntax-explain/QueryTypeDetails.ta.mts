/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrivateCapabilities, _decode_PrivateCapabilities, _encode_PrivateCapabilities } from "../RecordSyntax-explain/PrivateCapabilities.ta.mjs";
import { RpnCapabilities, _decode_RpnCapabilities, _encode_RpnCapabilities } from "../RecordSyntax-explain/RpnCapabilities.ta.mjs";
import { Iso8777Capabilities, _decode_Iso8777Capabilities, _encode_Iso8777Capabilities } from "../RecordSyntax-explain/Iso8777Capabilities.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary QueryTypeDetails
 * @description
 * One query type supported by the server or by a database, as listed in
 * AccessInfo. Context tags match the Query choice on Search. ANSI/NISO
 * Z39.50-2003 §3.2.10.3.1, §3.2.2.1.1.
 * 
 * `private` (tag 0) carries the details of a query that, like type-0, may
 * be used only under a prior agreement outside the standard. `rpn` (tag 1)
 * is the type-1 Reverse Polish Notation query (§3.7). `iso8777` (tag 2) is
 * the type-2 query, specified in ISO 8777. `z39-58` (tag 100) is
 * human-readable text for query type-100, the Common Command Language
 * query, whose syntax this standard does not specify. `erpn` (tag 101) is
 * the type-101 extended RPN query: the same as type-1, except proximity
 * and restriction are valid in version 2 as well as version 3.
 * `rankedList` (tag 102) is human-readable text for query type-102, the
 * Ranked List query, which the standard leaves to a later version.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryTypeDetails  ::=  CHOICE {
 *     private     [0] IMPLICIT PrivateCapabilities,
 *     rpn         [1] IMPLICIT RpnCapabilities,
 *     iso8777     [2] IMPLICIT Iso8777Capabilities,
 *     z39-58      [100] IMPLICIT HumanString,
 *     erpn        [101] IMPLICIT RpnCapabilities,
 *     rankedList  [102] IMPLICIT HumanString
 * }
 * ```
 */
export
type QueryTypeDetails =
    { private_: PrivateCapabilities } /* CHOICE_ALT_ROOT */
    | { rpn: RpnCapabilities } /* CHOICE_ALT_ROOT */
    | { iso8777: Iso8777Capabilities } /* CHOICE_ALT_ROOT */
    | { z39_58: HumanString } /* CHOICE_ALT_ROOT */
    | { erpn: RpnCapabilities } /* CHOICE_ALT_ROOT */
    | { rankedList: HumanString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_QueryTypeDetails: $.ASN1Decoder<QueryTypeDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QueryTypeDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QueryTypeDetails (el: _Element): QueryTypeDetails {
    if (!_cached_decoder_for_QueryTypeDetails) { _cached_decoder_for_QueryTypeDetails = $._decode_inextensible_choice<QueryTypeDetails>({
    "CONTEXT 0": [ "private_", $._decode_implicit<PrivateCapabilities>(() => _decode_PrivateCapabilities) ],
    "CONTEXT 1": [ "rpn", $._decode_implicit<RpnCapabilities>(() => _decode_RpnCapabilities) ],
    "CONTEXT 2": [ "iso8777", $._decode_implicit<Iso8777Capabilities>(() => _decode_Iso8777Capabilities) ],
    "CONTEXT 100": [ "z39_58", $._decode_implicit<HumanString>(() => _decode_HumanString) ],
    "CONTEXT 101": [ "erpn", $._decode_implicit<RpnCapabilities>(() => _decode_RpnCapabilities) ],
    "CONTEXT 102": [ "rankedList", $._decode_implicit<HumanString>(() => _decode_HumanString) ]
}); }
    return _cached_decoder_for_QueryTypeDetails(el);
}

let _cached_encoder_for_QueryTypeDetails: $.ASN1Encoder<QueryTypeDetails> | null = null;

/**
 * @summary Encodes a(n) QueryTypeDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryTypeDetails, encoded as an ASN.1 Element.
 */
export
function _encode_QueryTypeDetails (value: QueryTypeDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QueryTypeDetails) { _cached_encoder_for_QueryTypeDetails = $._encode_choice<QueryTypeDetails>({
    "private_": $._encode_implicit(_TagClass.context, 0, () => _encode_PrivateCapabilities, $.BER),
    "rpn": $._encode_implicit(_TagClass.context, 1, () => _encode_RpnCapabilities, $.BER),
    "iso8777": $._encode_implicit(_TagClass.context, 2, () => _encode_Iso8777Capabilities, $.BER),
    "z39_58": $._encode_implicit(_TagClass.context, 100, () => _encode_HumanString, $.BER),
    "erpn": $._encode_implicit(_TagClass.context, 101, () => _encode_RpnCapabilities, $.BER),
    "rankedList": $._encode_implicit(_TagClass.context, 102, () => _encode_HumanString, $.BER),
}, $.BER); }
    return _cached_encoder_for_QueryTypeDetails(value, elGetter);
}


/* eslint-enable */
