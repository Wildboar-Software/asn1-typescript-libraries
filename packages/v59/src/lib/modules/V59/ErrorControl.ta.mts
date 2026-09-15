/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorControl_Item, _decode_ErrorControl_Item, _encode_ErrorControl_Item } from "../V59/ErrorControl-Item.ta.mjs";

/**
 * @summary ErrorControl
 * @description
 *
 * Error-control diagnostics (Tag-ID `2Fxx`). ITU-T Rec. V.59 (11/2000) §6.3,
 * §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {protocolNegotiation
 *                 ENUMERATED {disabled(0), lapm(1), v42annexA(2), ...
 *                             },
 *               v42featureNegotiation
 *                 BIT STRING {singleSREJ(0), multipleSREJ(1), hDLCBalMode(2),
 *                             testFrameSup(3), fcs16(4), fcs32(5),
 *                             v42phaseDetused(6), odpAdpbypassed(7),
 *                             v42fallbackDisc(8), v42fallbackBuf(9),
 *                             v42fallbackUnBuf(10)},
 *               txFrameSize            INTEGER(1..65535),
 *               rxFrameSize            INTEGER(1..65535),
 *               txWindow               INTEGER(1..65535),
 *               rxWindow               INTEGER(1..65535),
 *               linkTimeout            INTEGER(0..511) OPTIONAL,
 *               ecStatistics
 *                 SEQUENCE {framesSentAck          INTEGER(0..65535) OPTIONAL,
 *                           framesRetransmitted    INTEGER(0..65535) OPTIONAL,
 *                           framesReceivedAck      INTEGER(0..65535) OPTIONAL,
 *                           framesReceivedDiscard  INTEGER(0..65535) OPTIONAL
 *               },
 *               txErrors               INTEGER(0..65535) OPTIONAL,
 *               rxErrors               INTEGER(0..65535) OPTIONAL,
 *               txThroughput           INTEGER(0..32767) OPTIONAL,
 *               rxThroughput           INTEGER(0..32767) OPTIONAL,
 *               ...}
 * ```
 */
export
type ErrorControl = ErrorControl_Item[]; // SequenceOfType

let _cached_decoder_for_ErrorControl: $.ASN1Decoder<ErrorControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorControl (el: _Element): ErrorControl {
    if (!_cached_decoder_for_ErrorControl) { _cached_decoder_for_ErrorControl = $._decodeSequenceOf<ErrorControl_Item>(() => _decode_ErrorControl_Item); }
    return _cached_decoder_for_ErrorControl(el);
}

let _cached_encoder_for_ErrorControl: $.ASN1Encoder<ErrorControl> | null = null;

/**
 * @summary Encodes a(n) ErrorControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorControl, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorControl (value: ErrorControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorControl) { _cached_encoder_for_ErrorControl = $._encodeSequenceOf<ErrorControl_Item>(() => _encode_ErrorControl_Item, $.BER); }
    return _cached_encoder_for_ErrorControl(value, elGetter);
}

/* eslint-enable */
