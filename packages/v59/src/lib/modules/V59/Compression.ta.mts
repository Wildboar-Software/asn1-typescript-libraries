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
import { Compression_Item, _decode_Compression_Item, _encode_Compression_Item } from "../V59/Compression-Item.ta.mjs";
// export { Compression_Item, _decode_Compression_Item, _encode_Compression_Item } from "../V59/Compression-Item.ta.mjs";


/**
 * @summary Compression
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {compressionNegotiationResult
 *                 ENUMERATED {none(0), v42bisOnly(1), v42bisBoth(2), v44Both(3),
 *                             v44Only(4), other(5)},
 *               modeV42B                      Capabilities,
 *               v42bisCompressionActive
 *                 ENUMERATED {none(0), initOnly(1), respOnly(2), both(3)},
 *               v42bisDictionarySize          INTEGER(512..65535) OPTIONAL,
 *               v42bisStringLength            INTEGER(6..250) OPTIONAL,
 *               modeV44                       Capabilities,
 *               v44CompressionActive
 *                 ENUMERATED {none(0), txOnly(1), rxOnly(2), both(3)},
 *               v44EncoderDictionarySize      INTEGER(256..65535) OPTIONAL,
 *               v44EncoderHistorySize         INTEGER(512..1677215) OPTIONAL,
 *               v44EncoderStringLength        INTEGER(32..255) OPTIONAL,
 *               v44DecoderDictionarySize      INTEGER(256..65535) OPTIONAL,
 *               v44DecoderHistorySize         INTEGER(512..1677215) OPTIONAL,
 *               v44DecoderStringLength        INTEGER(32..255) OPTIONAL,
 *               ...}
 * ```
 */
export
type Compression = Compression_Item[]; // SequenceOfType

let _cached_decoder_for_Compression: $.ASN1Decoder<Compression> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Compression
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Compression (el: _Element): Compression {
    if (!_cached_decoder_for_Compression) { _cached_decoder_for_Compression = $._decodeSequenceOf<Compression_Item>(() => _decode_Compression_Item); }
    return _cached_decoder_for_Compression(el);
}

let _cached_encoder_for_Compression: $.ASN1Encoder<Compression> | null = null;

/**
 * @summary Encodes a(n) Compression into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Compression, encoded as an ASN.1 Element.
 */
export
function _encode_Compression (value: Compression, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Compression) { _cached_encoder_for_Compression = $._encodeSequenceOf<Compression_Item>(() => _encode_Compression_Item, $.BER); }
    return _cached_encoder_for_Compression(value, elGetter);
}


/* eslint-enable */
