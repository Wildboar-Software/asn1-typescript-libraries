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
import { V91Diag_Item, _decode_V91Diag_Item, _encode_V91Diag_Item } from "../V59/V91Diag-Item.ta.mjs";
// export { V91Diag_Item, _decode_V91Diag_Item, _encode_V91Diag_Item } from "../V59/V91Diag-Item.ta.mjs";


/**
 * @summary V91Diag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V91Diag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV91             Capabilities,
 *               iNFO0TX             V59String,
 *               iNFO0RX             V59String,
 *               cP                  V59String,
 *               controlChannel      BOOLEAN,
 *               v91TxPowerLevel     TxPowerLevel,
 *               transparentMode     BOOLEAN,
 *               txDataHistory       V59String,
 *               rxDataHistory       V59String,
 *               noiseEstimate       V59String OPTIONAL,
 *               rxSignalQuality     V59String OPTIONAL,
 *               rBSpattern          RobBitPatt OPTIONAL,
 *               digitalPadLoss      V59String OPTIONAL,
 *               localCodecLaw       BOOLEAN OPTIONAL,
 *               remoteCodecLaw      BOOLEAN OPTIONAL,
 *               frameSlipsDetected  INTEGER(0..256) OPTIONAL,
 *               ...}
 * ```
 */
export
type V91Diag = V91Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V91Diag: $.ASN1Decoder<V91Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V91Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V91Diag (el: _Element): V91Diag {
    if (!_cached_decoder_for_V91Diag) { _cached_decoder_for_V91Diag = $._decodeSequenceOf<V91Diag_Item>(() => _decode_V91Diag_Item); }
    return _cached_decoder_for_V91Diag(el);
}

let _cached_encoder_for_V91Diag: $.ASN1Encoder<V91Diag> | null = null;

/**
 * @summary Encodes a(n) V91Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V91Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V91Diag (value: V91Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V91Diag) { _cached_encoder_for_V91Diag = $._encodeSequenceOf<V91Diag_Item>(() => _encode_V91Diag_Item, $.BER); }
    return _cached_encoder_for_V91Diag(value, elGetter);
}


/* eslint-enable */
