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
import { V17Diag_Item, _decode_V17Diag_Item, _encode_V17Diag_Item } from "../V59/V17Diag-Item.ta.mjs";
// export { V17Diag_Item, _decode_V17Diag_Item, _encode_V17Diag_Item } from "../V59/V17Diag-Item.ta.mjs";


/**
 * @summary V17Diag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V17Diag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV17          Capabilities,
 *               v17TxLevel       TxPowerLevel,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type V17Diag = V17Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V17Diag: $.ASN1Decoder<V17Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V17Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V17Diag (el: _Element): V17Diag {
    if (!_cached_decoder_for_V17Diag) { _cached_decoder_for_V17Diag = $._decodeSequenceOf<V17Diag_Item>(() => _decode_V17Diag_Item); }
    return _cached_decoder_for_V17Diag(el);
}

let _cached_encoder_for_V17Diag: $.ASN1Encoder<V17Diag> | null = null;

/**
 * @summary Encodes a(n) V17Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V17Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V17Diag (value: V17Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V17Diag) { _cached_encoder_for_V17Diag = $._encodeSequenceOf<V17Diag_Item>(() => _encode_V17Diag_Item, $.BER); }
    return _cached_encoder_for_V17Diag(value, elGetter);
}


/* eslint-enable */
