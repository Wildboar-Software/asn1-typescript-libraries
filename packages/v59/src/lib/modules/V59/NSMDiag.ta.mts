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
import { NSMDiag_Item, _decode_NSMDiag_Item, _encode_NSMDiag_Item } from "../V59/NSMDiag-Item.ta.mjs";
// export { NSMDiag_Item, _decode_NSMDiag_Item, _encode_NSMDiag_Item } from "../V59/NSMDiag-Item.ta.mjs";


/**
 * @summary NSMDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSMDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {proprietaryMode  V59String OPTIONAL,
 *               fieldData        IA5String(SIZE (1..256)) OPTIONAL,
 *               ...}
 * ```
 */
export
type NSMDiag = NSMDiag_Item[]; // SequenceOfType

let _cached_decoder_for_NSMDiag: $.ASN1Decoder<NSMDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NSMDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NSMDiag (el: _Element): NSMDiag {
    if (!_cached_decoder_for_NSMDiag) { _cached_decoder_for_NSMDiag = $._decodeSequenceOf<NSMDiag_Item>(() => _decode_NSMDiag_Item); }
    return _cached_decoder_for_NSMDiag(el);
}

let _cached_encoder_for_NSMDiag: $.ASN1Encoder<NSMDiag> | null = null;

/**
 * @summary Encodes a(n) NSMDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NSMDiag, encoded as an ASN.1 Element.
 */
export
function _encode_NSMDiag (value: NSMDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NSMDiag) { _cached_encoder_for_NSMDiag = $._encodeSequenceOf<NSMDiag_Item>(() => _encode_NSMDiag_Item, $.BER); }
    return _cached_encoder_for_NSMDiag(value, elGetter);
}


/* eslint-enable */
