/* eslint-disable */
import {
    type VisibleString,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CCCId_sepCCCpair, _decode_CCCId_sepCCCpair, _encode_CCCId_sepCCCpair } from "../PCESP/CCCId-sepCCCpair.ta.mjs";
// export { CCCId_sepCCCpair, _decode_CCCId_sepCCCpair, _encode_CCCId_sepCCCpair } from "../PCESP/CCCId-sepCCCpair.ta.mjs";


/**
 * @summary CCCId
 * @description
 *
 * Identifier of a call-content packet stream.
 *
 * The Delivery Function must generate this from the CCC-Identifier used for the
 * corresponding call-content packet stream, by converting the 32-bit value to
 * an 8-character hex-encoded ASCII string of digits 0-9 and letters A-F.
 *
 * `combCCC` carries one such string. `sepCCCpair` carries `sepXmitCCC` and
 * `sepRecvCCC`. Each component is a `VisibleString` of size 1 to 20,
 * extensible. The module comment requires the 8-character hex form. This
 * edition does not say which alternative to select.
 *
 * `ConferencePartyChange` includes `cCCId` when the content of the resulting
 * call is delivered, to identify the associated CCC or CCCs.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCCId  ::=  CHOICE {
 *     combCCC                 [0] VisibleString (SIZE(1..20, ...)),
 *     sepCCCpair              [1] SEQUENCE{
 *         sepXmitCCC  [0] VisibleString (SIZE(1..20, ...)),
 *         sepRecvCCC  [1] VisibleString (SIZE(1..20, ...)),
 *         ...
 *     },
 *     ...
 * }
 * ```
 */
export
type CCCId =
    /**
     * One CCC identifier. `VisibleString` of size 1 to 20,
     * extensible. The module comment requires the 8-character hex
     * form of a 32-bit CCC-Identifier.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    { combCCC: VisibleString } /* CHOICE_ALT_ROOT */
    /**
     * Separate transmit and receive CCC identifiers. See
     * `CCCId_sepCCCpair`. This edition does not say which
     * alternative to select.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { sepCCCpair: CCCId_sepCCCpair } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CCCId: $.ASN1Decoder<CCCId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCCId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCCId (el: _Element): CCCId {
    if (!_cached_decoder_for_CCCId) { _cached_decoder_for_CCCId = $._decode_extensible_choice<CCCId>({
    "CONTEXT 0": [ "combCCC", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "sepCCCpair", $._decode_implicit<CCCId_sepCCCpair>(() => _decode_CCCId_sepCCCpair) ]
}); }
    return _cached_decoder_for_CCCId(el);
}

let _cached_encoder_for_CCCId: $.ASN1Encoder<CCCId> | null = null;

/**
 * @summary Encodes a(n) CCCId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCCId, encoded as an ASN.1 Element.
 */
export
function _encode_CCCId (value: CCCId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCCId) { _cached_encoder_for_CCCId = $._encode_choice<CCCId>({
    "combCCC": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "sepCCCpair": $._encode_implicit(_TagClass.context, 1, () => _encode_CCCId_sepCCCpair, $.BER),
}, $.BER); }
    return _cached_encoder_for_CCCId(value, elGetter);
}


/* eslint-enable */
