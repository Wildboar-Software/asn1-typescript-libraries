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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RIOupdate_Item, _decode_RIOupdate_Item, _encode_RIOupdate_Item } from "../G/RIOupdate-Item.ta.mjs";
// export { RIOupdate_Item, _decode_RIOupdate_Item, _encode_RIOupdate_Item } from "../G/RIOupdate-Item.ta.mjs";


/**
 * @summary RIOupdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOupdate  ::=  SEQUENCE OF SEQUENCE {
 *     recordId    [0] IMPLICIT PrintableString OPTIONAL,
 *     operation   [1] IMPLICIT INTEGER {
 *         eraseRIO     (0),
 *         deleteRecord (1),
 *         createRecord (2)
 *     },
 *     updates     [2] IMPLICIT SEQUENCE OF ISO9041-VTP.ObjectUpdate OPTIONAL
 * }
 * ```
 */
export
type RIOupdate = RIOupdate_Item[]; // SequenceOfType

let _cached_decoder_for_RIOupdate: $.ASN1Decoder<RIOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIOupdate (el: _Element): RIOupdate {
    if (!_cached_decoder_for_RIOupdate) { _cached_decoder_for_RIOupdate = $._decodeSequenceOf<RIOupdate_Item>(() => _decode_RIOupdate_Item); }
    return _cached_decoder_for_RIOupdate(el);
}

let _cached_encoder_for_RIOupdate: $.ASN1Encoder<RIOupdate> | null = null;

/**
 * @summary Encodes a(n) RIOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_RIOupdate (value: RIOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIOupdate) { _cached_encoder_for_RIOupdate = $._encodeSequenceOf<RIOupdate_Item>(() => _encode_RIOupdate_Item, $.BER); }
    return _cached_encoder_for_RIOupdate(value, elGetter);
}


/* eslint-enable */
