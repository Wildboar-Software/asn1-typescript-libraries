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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportPoolSemaphoreStatus-Response-listOfNamedTokens-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item =
    { freeNamedToken: Identifier } /* CHOICE_ALT_ROOT */
    | { ownedNamedToken: Identifier } /* CHOICE_ALT_ROOT */
    | { hungNamedToken: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item: $.ASN1Decoder<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item (el: _Element): ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item {
    if (!_cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item) { _cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item = $._decode_inextensible_choice<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item>({
    "CONTEXT 0": [ "freeNamedToken", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 1": [ "ownedNamedToken", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 2": [ "hungNamedToken", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item(el);
}

let _cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item: $.ASN1Encoder<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item> | null = null;

/**
 * @summary Encodes a(n) ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item (value: ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item) { _cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item = $._encode_choice<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item>({
    "freeNamedToken": $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER),
    "ownedNamedToken": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "hungNamedToken": $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item(value, elGetter);
}


/* eslint-enable */
