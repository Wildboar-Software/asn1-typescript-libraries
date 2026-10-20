/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS-1-Datatypes/IPRoutingAddress.ta.mjs";
// export { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS-1-Datatypes/IPRoutingAddress.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { ConnectToResourceArg_resourceAddress_both, _decode_ConnectToResourceArg_resourceAddress_both, _encode_ConnectToResourceArg_resourceAddress_both } from "../IN-CS-1-Datatypes/ConnectToResourceArg-resourceAddress-both.ta.mjs";
// export { ConnectToResourceArg_resourceAddress_both, _decode_ConnectToResourceArg_resourceAddress_both, _encode_ConnectToResourceArg_resourceAddress_both } from "../IN-CS-1-Datatypes/ConnectToResourceArg-resourceAddress-both.ta.mjs";


/**
 * @summary ConnectToResourceArg_resourceAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg-resourceAddress ::=
 * CHOICE {
 *   ipRoutingAddress [0] IPRoutingAddress,
 *   legID [1] LegID,
 *   both [2] SEQUENCE {
 *     ipRoutingAddress [0] IPRoutingAddress,
 *     legID [1] LegID
 *   },
 *   none [3] NULL
 * }
 * ```
 */
export
type ConnectToResourceArg_resourceAddress =
    { ipRoutingAddress: IPRoutingAddress } /* CHOICE_ALT_ROOT */
    | { legID: LegID } /* CHOICE_ALT_ROOT */
    | { both: ConnectToResourceArg_resourceAddress_both } /* CHOICE_ALT_ROOT */
    | { none: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConnectToResourceArg_resourceAddress: $.ASN1Decoder<ConnectToResourceArg_resourceAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectToResourceArg_resourceAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectToResourceArg_resourceAddress (el: _Element): ConnectToResourceArg_resourceAddress {
    if (!_cached_decoder_for_ConnectToResourceArg_resourceAddress) { _cached_decoder_for_ConnectToResourceArg_resourceAddress = $._decode_inextensible_choice<ConnectToResourceArg_resourceAddress>({
    "CONTEXT 0": [ "ipRoutingAddress", $._decode_implicit<IPRoutingAddress>(() => _decode_IPRoutingAddress) ],
    "CONTEXT 1": [ "legID", $._decode_explicit<LegID>(() => _decode_LegID) ],
    "CONTEXT 2": [ "both", $._decode_implicit<ConnectToResourceArg_resourceAddress_both>(() => _decode_ConnectToResourceArg_resourceAddress_both) ],
    "CONTEXT 3": [ "none", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ConnectToResourceArg_resourceAddress(el);
}

let _cached_encoder_for_ConnectToResourceArg_resourceAddress: $.ASN1Encoder<ConnectToResourceArg_resourceAddress> | null = null;

/**
 * @summary Encodes a(n) ConnectToResourceArg_resourceAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectToResourceArg_resourceAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectToResourceArg_resourceAddress (value: ConnectToResourceArg_resourceAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectToResourceArg_resourceAddress) { _cached_encoder_for_ConnectToResourceArg_resourceAddress = $._encode_choice<ConnectToResourceArg_resourceAddress>({
    "ipRoutingAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_IPRoutingAddress, $.BER),
    "legID": $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER),
    "both": $._encode_implicit(_TagClass.context, 2, () => _encode_ConnectToResourceArg_resourceAddress_both, $.BER),
    "none": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConnectToResourceArg_resourceAddress(value, elGetter);
}


/* eslint-enable */
