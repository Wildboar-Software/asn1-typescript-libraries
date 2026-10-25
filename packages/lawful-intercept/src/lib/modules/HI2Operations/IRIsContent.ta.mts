/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IRIContent, _decode_IRIContent, _encode_IRIContent } from "../HI2Operations/IRIContent.ta.mjs";
// export { IRIContent, _decode_IRIContent, _encode_IRIContent } from "../HI2Operations/IRIContent.ta.mjs";
import { type IRISequence, _decode_IRISequence, _encode_IRISequence } from "../HI2Operations/IRISequence.ta.mjs";
// export { IRISequence, _decode_IRISequence, _encode_IRISequence } from "../HI2Operations/IRISequence.ta.mjs";


/**
 * @summary IRIsContent
 * @description
 * 
 * Argument of `sending-of-IRI`. `iRIContent` is one IRI record. `iRISequence`
 * is the optional aggregation of several records that are ready at the same
 * time for the same LEA. Records are sent immediately and are not held in the
 * DF or MF in order to aggregate. When aggregation is not used, choose
 * `iRIContent`.
 *
 * FTP may also pack several complete records into one file. That packaging is
 * separate from this choice. A single IRI record is not divided across files.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 5.2, clause C.2.2, clause C.2.4,
 * clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIsContent  ::=  CHOICE
 * {
 *     iRIContent        IRIContent,
 *     iRISequence        IRISequence
 * }
 * ```
 */
export
type IRIsContent =
    { iRIContent: IRIContent } /* CHOICE_ALT_ROOT */
    | { iRISequence: IRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IRIsContent: $.ASN1Decoder<IRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIsContent (el: _Element): IRIsContent {
    if (!_cached_decoder_for_IRIsContent) { _cached_decoder_for_IRIsContent = $._decode_inextensible_choice<IRIsContent>({
    "CONTEXT 1": [ "iRIContent", _decode_IRIContent ],
    "CONTEXT 2": [ "iRIContent", _decode_IRIContent ],
    "CONTEXT 3": [ "iRIContent", _decode_IRIContent ],
    "CONTEXT 4": [ "iRIContent", _decode_IRIContent ],
    "UNIVERSAL 16": [ "iRISequence", _decode_IRISequence ]
}); }
    return _cached_decoder_for_IRIsContent(el);
}

let _cached_encoder_for_IRIsContent: $.ASN1Encoder<IRIsContent> | null = null;

/**
 * @summary Encodes a(n) IRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_IRIsContent (value: IRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIsContent) { _cached_encoder_for_IRIsContent = $._encode_choice<IRIsContent>({
    "iRIContent": _encode_IRIContent,
    "iRISequence": _encode_IRISequence,
}, $.BER); }
    return _cached_encoder_for_IRIsContent(value, elGetter);
}


/* eslint-enable */
