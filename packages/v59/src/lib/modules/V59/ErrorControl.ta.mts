/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ErrorControl_Item, _decode_ErrorControl_Item, _encode_ErrorControl_Item } from "../V59/ErrorControl-Item.ta.mjs";
// export { ErrorControl_Item, _decode_ErrorControl_Item, _encode_ErrorControl_Item } from "../V59/ErrorControl-Item.ta.mjs";


/**
 * @summary ErrorControl
 * @description
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
