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
import { V92ModDiag_Item, _decode_V92ModDiag_Item, _encode_V92ModDiag_Item } from "../V59/V92ModDiag-Item.ta.mjs";
// export { V92ModDiag_Item, _decode_V92ModDiag_Item, _encode_V92ModDiag_Item } from "../V59/V92ModDiag-Item.ta.mjs";


/**
 * @summary V92ModDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V92ModDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV92           Capabilities,
 *               iNFO0d            V59String,
 *               iNFO0a            V59String,
 *               iNFO1d            V59String,
 *               iNFO1a-US         V59String,
 *               iNFO1a-SP2        V59String,
 *               jA                V59String,
 *               jD                V59String,
 *               jDP               V59String,
 *               cP                V59String,
 *               v92TxLevel        TxPowerLevel,
 *               v92SymbolRate     SymbolRate OPTIONAL,
 *               txDataHistory     V59String,
 *               rxDataHistory     V59String,
 *               rxLevelEstimate   V59String OPTIONAL,
 *               noiseEstimate     V59String OPTIONAL,
 *               rxSignalQuality   V59String OPTIONAL,
 *               nearEchoEstimate  V59String OPTIONAL,
 *               farEchoEstimate   V59String OPTIONAL,
 *               roundTripDelay    V59String OPTIONAL,
 *               rBSpattern        RobBitPatt OPTIONAL,
 *               digitalPadLoss    V59String OPTIONAL,
 *               localCodecLaw     BOOLEAN OPTIONAL,
 *               remoteCodecLaw    BOOLEAN OPTIONAL,
 *               sP1Enable         BOOLEAN,
 *               lastCallSP1       BOOLEAN,
 *               qC1a              IA5String(SIZE (1..10)),
 *               qC1d              IA5String(SIZE (1..10)),
 *               qC2a              IA5String(SIZE (1..2)),
 *               qC2d              IA5String(SIZE (1..2)),
 *               qCA1a             IA5String(SIZE (1..10)),
 *               qCA1d             IA5String(SIZE (1..10)),
 *               qCA2a             IA5String(SIZE (1..2)),
 *               qCA2d             IA5String(SIZE (1..2)),
 *               cWDEnable         BOOLEAN,
 *               mOHEnable         BOOLEAN,
 *               lastMOHaction
 *                 ENUMERATED {mohaccepted(0), mohdeclined(1), mohdenied(2),
 *                             mohclrdn(3), ...
 *                             },
 *               mohTimeout        V59String,
 *               lastMOHduration   V59String,
 *               mHreq             IA5String(SIZE (1..5)),
 *               mHack             IA5String(SIZE (1..5)),
 *               mHnak             IA5String(SIZE (1..5)),
 *               mHcld             IA5String(SIZE (1..5)),
 *               mHcda             IA5String(SIZE (1..5)),
 *               mHfrr             IA5String(SIZE (1..5)),
 *               ...}
 * ```
 */
export
type V92ModDiag = V92ModDiag_Item[]; // SequenceOfType

let _cached_decoder_for_V92ModDiag: $.ASN1Decoder<V92ModDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V92ModDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V92ModDiag (el: _Element): V92ModDiag {
    if (!_cached_decoder_for_V92ModDiag) { _cached_decoder_for_V92ModDiag = $._decodeSequenceOf<V92ModDiag_Item>(() => _decode_V92ModDiag_Item); }
    return _cached_decoder_for_V92ModDiag(el);
}

let _cached_encoder_for_V92ModDiag: $.ASN1Encoder<V92ModDiag> | null = null;

/**
 * @summary Encodes a(n) V92ModDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V92ModDiag, encoded as an ASN.1 Element.
 */
export
function _encode_V92ModDiag (value: V92ModDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V92ModDiag) { _cached_encoder_for_V92ModDiag = $._encodeSequenceOf<V92ModDiag_Item>(() => _encode_V92ModDiag_Item, $.BER); }
    return _cached_encoder_for_V92ModDiag(value, elGetter);
}


/* eslint-enable */
