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
import { FDCOupdate_Item, _decode_FDCOupdate_Item, _encode_FDCOupdate_Item } from "../G/FDCOupdate-Item.ta.mjs";
// export { FDCOupdate_Item, _decode_FDCOupdate_Item, _encode_FDCOupdate_Item } from "../G/FDCOupdate-Item.ta.mjs";


/**
 * @summary FDCOupdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate  ::=  SEQUENCE OF SEQUENCE {
 *     labelFCoordinate    [0] IMPLICIT INTEGER,
 *     labelZCoordinate    [1] IMPLICIT INTEGER OPTIONAL,
 *     status              [2] IMPLICIT INTEGER {
 *         active   (0),
 *         inactive (1),
 *         void     (2)
 *     } OPTIONAL,
 *     extent              [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *         position  [0] IMPLICIT MeasurePair,
 *         dimension [1] IMPLICIT MeasurePair
 *     } OPTIONAL,
 *     attributes          [4] IMPLICIT SEQUENCE {
 *         graphicCharacterRepertoire [0] IMPLICIT INTEGER OPTIONAL,
 *         foregroundColour           [1] IMPLICIT INTEGER OPTIONAL,
 *         backgroundColour           [2] IMPLICIT INTEGER OPTIONAL,
 *         emphasis                   [3] IMPLICIT PrintableString OPTIONAL,
 *         font                       [4] IMPLICIT INTEGER OPTIONAL
 *         -- value of zero for any of the integer items in attributes implies the "null"value,
 *     } OPTIONAL,
 *     nextField           [5] IMPLICIT INTEGER OPTIONAL,
 *     previousField       [6] IMPLICIT INTEGER OPTIONAL,
 *     -- for tags 5 & 6, a zero value implies end of navigation path; a negative value implies "void"
 *     transmissionPolicy  [7] IMPLICIT INTEGER {
 *         all                (0),
 *         modifiedAllContent (1),
 *         modifiedPart       (2),
 *         none               (3),
 *         refTPCO            (4)
 *     } OPTIONAL,
 *     entryControlList    [8] IMPLICIT SEQUENCE OF EntryControl OPTIONAL
 * }
 * ```
 */
export
type FDCOupdate = FDCOupdate_Item[]; // SequenceOfType

let _cached_decoder_for_FDCOupdate: $.ASN1Decoder<FDCOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FDCOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FDCOupdate (el: _Element): FDCOupdate {
    if (!_cached_decoder_for_FDCOupdate) { _cached_decoder_for_FDCOupdate = $._decodeSequenceOf<FDCOupdate_Item>(() => _decode_FDCOupdate_Item); }
    return _cached_decoder_for_FDCOupdate(el);
}

let _cached_encoder_for_FDCOupdate: $.ASN1Encoder<FDCOupdate> | null = null;

/**
 * @summary Encodes a(n) FDCOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDCOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_FDCOupdate (value: FDCOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FDCOupdate) { _cached_encoder_for_FDCOupdate = $._encodeSequenceOf<FDCOupdate_Item>(() => _encode_FDCOupdate_Item, $.BER); }
    return _cached_encoder_for_FDCOupdate(value, elGetter);
}


/* eslint-enable */
