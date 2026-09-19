/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { N3IWFIDSBI, _decode_N3IWFIDSBI, _encode_N3IWFIDSBI } from "../TS33128Payloads/N3IWFIDSBI.ta.mjs";
// export { N3IWFIDSBI, _decode_N3IWFIDSBI, _encode_N3IWFIDSBI } from "../TS33128Payloads/N3IWFIDSBI.ta.mjs";
import { GNbID, _decode_GNbID, _encode_GNbID } from "../TS33128Payloads/GNbID.ta.mjs";
// export { GNbID, _decode_GNbID, _encode_GNbID } from "../TS33128Payloads/GNbID.ta.mjs";
import { NGENbID, _decode_NGENbID, _encode_NGENbID } from "../TS33128Payloads/NGENbID.ta.mjs";
// export { NGENbID, _decode_NGENbID, _encode_NGENbID } from "../TS33128Payloads/NGENbID.ta.mjs";
import { ENbID, _decode_ENbID, _encode_ENbID } from "../TS33128Payloads/ENbID.ta.mjs";
// export { ENbID, _decode_ENbID, _encode_ENbID } from "../TS33128Payloads/ENbID.ta.mjs";
import { WAGFID, _decode_WAGFID, _encode_WAGFID } from "../TS33128Payloads/WAGFID.ta.mjs";
// export { WAGFID, _decode_WAGFID, _encode_WAGFID } from "../TS33128Payloads/WAGFID.ta.mjs";
import { TNGFID, _decode_TNGFID, _encode_TNGFID } from "../TS33128Payloads/TNGFID.ta.mjs";
// export { TNGFID, _decode_TNGFID, _encode_TNGFID } from "../TS33128Payloads/TNGFID.ta.mjs";


/**
 * @summary ANNodeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ANNodeID  ::=  CHOICE
 * {
 *     n3IWFID [1] N3IWFIDSBI,
 *     gNbID   [2] GNbID,
 *     nGENbID [3] NGENbID,
 *     eNbID   [4] ENbID,
 *     wAGFID  [5] WAGFID,
 *     tNGFID  [6] TNGFID
 * }
 * ```
 */
export
type ANNodeID =
    { n3IWFID: N3IWFIDSBI } /* CHOICE_ALT_ROOT */
    | { gNbID: GNbID } /* CHOICE_ALT_ROOT */
    | { nGENbID: NGENbID } /* CHOICE_ALT_ROOT */
    | { eNbID: ENbID } /* CHOICE_ALT_ROOT */
    | { wAGFID: WAGFID } /* CHOICE_ALT_ROOT */
    | { tNGFID: TNGFID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ANNodeID: $.ASN1Decoder<ANNodeID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ANNodeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ANNodeID (el: _Element): ANNodeID {
    if (!_cached_decoder_for_ANNodeID) { _cached_decoder_for_ANNodeID = $._decode_inextensible_choice<ANNodeID>({
    "CONTEXT 1": [ "n3IWFID", $._decode_implicit<N3IWFIDSBI>(() => _decode_N3IWFIDSBI) ],
    "CONTEXT 2": [ "gNbID", $._decode_implicit<GNbID>(() => _decode_GNbID) ],
    "CONTEXT 3": [ "nGENbID", $._decode_explicit<NGENbID>(() => _decode_NGENbID) ],
    "CONTEXT 4": [ "eNbID", $._decode_explicit<ENbID>(() => _decode_ENbID) ],
    "CONTEXT 5": [ "wAGFID", $._decode_implicit<WAGFID>(() => _decode_WAGFID) ],
    "CONTEXT 6": [ "tNGFID", $._decode_implicit<TNGFID>(() => _decode_TNGFID) ]
}); }
    return _cached_decoder_for_ANNodeID(el);
}

let _cached_encoder_for_ANNodeID: $.ASN1Encoder<ANNodeID> | null = null;

/**
 * @summary Encodes a(n) ANNodeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ANNodeID, encoded as an ASN.1 Element.
 */
export
function _encode_ANNodeID (value: ANNodeID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ANNodeID) { _cached_encoder_for_ANNodeID = $._encode_choice<ANNodeID>({
    "n3IWFID": $._encode_implicit(_TagClass.context, 1, () => _encode_N3IWFIDSBI, $.BER),
    "gNbID": $._encode_implicit(_TagClass.context, 2, () => _encode_GNbID, $.BER),
    "nGENbID": $._encode_explicit(_TagClass.context, 3, () => _encode_NGENbID, $.BER),
    "eNbID": $._encode_explicit(_TagClass.context, 4, () => _encode_ENbID, $.BER),
    "wAGFID": $._encode_implicit(_TagClass.context, 5, () => _encode_WAGFID, $.BER),
    "tNGFID": $._encode_implicit(_TagClass.context, 6, () => _encode_TNGFID, $.BER),
}, $.BER); }
    return _cached_encoder_for_ANNodeID(value, elGetter);
}


/* eslint-enable */
