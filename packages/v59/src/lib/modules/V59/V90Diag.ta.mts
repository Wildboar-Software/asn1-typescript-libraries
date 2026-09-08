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
import { V90Diag_Item, _decode_V90Diag_Item, _encode_V90Diag_Item } from "../V59/V90Diag-Item.ta.mjs";
// export { V90Diag_Item, _decode_V90Diag_Item, _encode_V90Diag_Item } from "../V59/V90Diag-Item.ta.mjs";


/**
 * @summary V90Diag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V90Diag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV90           Capabilities,
 *               iNFO0Tx           V59String,
 *               iNFO0Rx           V59String,
 *               iNFO1A            V59String,
 *               iNFO1d            V59String,
 *               mP                V59String,
 *               cP                V59String,
 *               cPt               V59String,
 *               jAsequence        V59String,
 *               jDsequence        V59String,
 *               v90TxLevel        TxPowerLevel,
 *               txSymbolRate      SymbolRate OPTIONAL,
 *               rxSymbolRate      SymbolRate OPTIONAL,
 *               txCarrierFreq     CarrierFreq OPTIONAL,
 *               rxCarrierFreq     CarrierFreq OPTIONAL,
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
 *               codecLaw          BOOLEAN OPTIONAL,
 *               ...}
 * ```
 */
export
type V90Diag = V90Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V90Diag: $.ASN1Decoder<V90Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V90Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V90Diag (el: _Element): V90Diag {
    if (!_cached_decoder_for_V90Diag) { _cached_decoder_for_V90Diag = $._decodeSequenceOf<V90Diag_Item>(() => _decode_V90Diag_Item); }
    return _cached_decoder_for_V90Diag(el);
}

let _cached_encoder_for_V90Diag: $.ASN1Encoder<V90Diag> | null = null;

/**
 * @summary Encodes a(n) V90Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V90Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V90Diag (value: V90Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V90Diag) { _cached_encoder_for_V90Diag = $._encodeSequenceOf<V90Diag_Item>(() => _encode_V90Diag_Item, $.BER); }
    return _cached_encoder_for_V90Diag(value, elGetter);
}


/* eslint-enable */
