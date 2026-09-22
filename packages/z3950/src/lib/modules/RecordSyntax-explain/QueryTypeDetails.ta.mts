/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrivateCapabilities, _decode_PrivateCapabilities, _encode_PrivateCapabilities } from "../RecordSyntax-explain/PrivateCapabilities.ta.mjs";
// export { PrivateCapabilities, _decode_PrivateCapabilities, _encode_PrivateCapabilities } from "../RecordSyntax-explain/PrivateCapabilities.ta.mjs";
import { RpnCapabilities, _decode_RpnCapabilities, _encode_RpnCapabilities } from "../RecordSyntax-explain/RpnCapabilities.ta.mjs";
// export { RpnCapabilities, _decode_RpnCapabilities, _encode_RpnCapabilities } from "../RecordSyntax-explain/RpnCapabilities.ta.mjs";
import { Iso8777Capabilities, _decode_Iso8777Capabilities, _encode_Iso8777Capabilities } from "../RecordSyntax-explain/Iso8777Capabilities.ta.mjs";
// export { Iso8777Capabilities, _decode_Iso8777Capabilities, _encode_Iso8777Capabilities } from "../RecordSyntax-explain/Iso8777Capabilities.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary QueryTypeDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryTypeDetails  ::=  CHOICE {
 *   private       [0]     IMPLICIT PrivateCapabilities,
 *   rpn           [1]     IMPLICIT RpnCapabilities,
 *   iso8777       [2]     IMPLICIT Iso8777Capabilities,
 *   z39-58        [100]   IMPLICIT HumanString,
 *   erpn          [101]   IMPLICIT RpnCapabilities,
 *   rankedList    [102]   IMPLICIT HumanString}
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
