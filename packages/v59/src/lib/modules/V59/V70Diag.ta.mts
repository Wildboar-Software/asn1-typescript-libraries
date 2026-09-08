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
import { V70Diag_Item, _decode_V70Diag_Item, _encode_V70Diag_Item } from "../V59/V70Diag-Item.ta.mjs";
// export { V70Diag_Item, _decode_V70Diag_Item, _encode_V70Diag_Item } from "../V59/V70Diag-Item.ta.mjs";


/**
 * @summary V70Diag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V70Diag  ::=  SEQUENCE OF SEQUENCE {...}
 * ```
 */
export
type V70Diag = V70Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V70Diag: $.ASN1Decoder<V70Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V70Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V70Diag (el: _Element): V70Diag {
    if (!_cached_decoder_for_V70Diag) { _cached_decoder_for_V70Diag = $._decodeSequenceOf<V70Diag_Item>(() => _decode_V70Diag_Item); }
    return _cached_decoder_for_V70Diag(el);
}

let _cached_encoder_for_V70Diag: $.ASN1Encoder<V70Diag> | null = null;

/**
 * @summary Encodes a(n) V70Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V70Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V70Diag (value: V70Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V70Diag) { _cached_encoder_for_V70Diag = $._encodeSequenceOf<V70Diag_Item>(() => _encode_V70Diag_Item, $.BER); }
    return _cached_encoder_for_V70Diag(value, elGetter);
}


/* eslint-enable */
