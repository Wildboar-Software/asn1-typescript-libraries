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
import { SearchDomain_Item, _decode_SearchDomain_Item, _encode_SearchDomain_Item } from "../DFRAbstractService/SearchDomain-Item.ta.mjs";
// export { SearchDomain_Item, _decode_SearchDomain_Item, _encode_SearchDomain_Item } from "../DFRAbstractService/SearchDomain-Item.ta.mjs";


/**
 * @summary SearchDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchDomain  ::=  SEQUENCE OF CHOICE {
 *     previous-result [0] DfrEntryName,
 *     -- specifies an entry of "DFR-Search-Result-List" class
 *     scope           [1] SEQUENCE {
 *         root                [0] DfrEntryName,
 *         descent-depth       [1] INTEGER OPTIONAL,
 *         --default means the whole subtree
 *         dereferencing-depth [2] INTEGER DEFAULT 0
 *         -- default means no dereferencing
 *     }
 * }
 * ```
 */
export
type SearchDomain = SearchDomain_Item[]; // SequenceOfType

let _cached_decoder_for_SearchDomain: $.ASN1Decoder<SearchDomain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchDomain
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchDomain (el: _Element): SearchDomain {
    if (!_cached_decoder_for_SearchDomain) { _cached_decoder_for_SearchDomain = $._decodeSequenceOf<SearchDomain_Item>(() => _decode_SearchDomain_Item); }
    return _cached_decoder_for_SearchDomain(el);
}

let _cached_encoder_for_SearchDomain: $.ASN1Encoder<SearchDomain> | null = null;

/**
 * @summary Encodes a(n) SearchDomain into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchDomain, encoded as an ASN.1 Element.
 */
export
function _encode_SearchDomain (value: SearchDomain, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchDomain) { _cached_encoder_for_SearchDomain = $._encodeSequenceOf<SearchDomain_Item>(() => _encode_SearchDomain_Item, $.BER); }
    return _cached_encoder_for_SearchDomain(value, elGetter);
}


/* eslint-enable */
