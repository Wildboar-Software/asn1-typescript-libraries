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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { SearchDomain_Item_scope, _decode_SearchDomain_Item_scope, _encode_SearchDomain_Item_scope } from "../DFRAbstractService/SearchDomain-Item-scope.ta.mjs";
// export { SearchDomain_Item_scope, _decode_SearchDomain_Item_scope, _encode_SearchDomain_Item_scope } from "../DFRAbstractService/SearchDomain-Item-scope.ta.mjs";


/**
 * @summary SearchDomain_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchDomain-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SearchDomain_Item =
    { previous_result: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { scope: SearchDomain_Item_scope } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SearchDomain_Item: $.ASN1Decoder<SearchDomain_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchDomain_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchDomain_Item (el: _Element): SearchDomain_Item {
    if (!_cached_decoder_for_SearchDomain_Item) { _cached_decoder_for_SearchDomain_Item = $._decode_inextensible_choice<SearchDomain_Item>({
    "CONTEXT 0": [ "previous_result", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 1": [ "scope", $._decode_implicit<SearchDomain_Item_scope>(() => _decode_SearchDomain_Item_scope) ]
}); }
    return _cached_decoder_for_SearchDomain_Item(el);
}

let _cached_encoder_for_SearchDomain_Item: $.ASN1Encoder<SearchDomain_Item> | null = null;

/**
 * @summary Encodes a(n) SearchDomain_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchDomain_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SearchDomain_Item (value: SearchDomain_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchDomain_Item) { _cached_encoder_for_SearchDomain_Item = $._encode_choice<SearchDomain_Item>({
    "previous_result": $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER),
    "scope": $._encode_implicit(_TagClass.context, 1, () => _encode_SearchDomain_Item_scope, $.BER),
}, $.BER); }
    return _cached_encoder_for_SearchDomain_Item(value, elGetter);
}


/* eslint-enable */
