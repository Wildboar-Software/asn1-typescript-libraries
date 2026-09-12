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
 * @summary GetNameList_Request_objectScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetNameList-Request-objectScope ::= CHOICE {
 *     vmdSpecific [0] IMPLICIT NULL,
 *     domainSpecific [1] IMPLICIT Identifier,
 *     aaSpecific [2] IMPLICIT NULL
 * }
 * ```
 */
export
type GetNameList_Request_objectScope =
    { vmdSpecific: NULL } /* CHOICE_ALT_ROOT */
    | { domainSpecific: Identifier } /* CHOICE_ALT_ROOT */
    | { aaSpecific: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetNameList_Request_objectScope: $.ASN1Decoder<GetNameList_Request_objectScope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetNameList_Request_objectScope
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetNameList_Request_objectScope (el: _Element): GetNameList_Request_objectScope {
    if (!_cached_decoder_for_GetNameList_Request_objectScope) { _cached_decoder_for_GetNameList_Request_objectScope = $._decode_inextensible_choice<GetNameList_Request_objectScope>({
    "CONTEXT 0": [ "vmdSpecific", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "domainSpecific", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 2": [ "aaSpecific", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_GetNameList_Request_objectScope(el);
}

let _cached_encoder_for_GetNameList_Request_objectScope: $.ASN1Encoder<GetNameList_Request_objectScope> | null = null;

/**
 * @summary Encodes a(n) GetNameList_Request_objectScope into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetNameList_Request_objectScope, encoded as an ASN.1 Element.
 */
export
function _encode_GetNameList_Request_objectScope (value: GetNameList_Request_objectScope, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetNameList_Request_objectScope) { _cached_encoder_for_GetNameList_Request_objectScope = $._encode_choice<GetNameList_Request_objectScope>({
    "vmdSpecific": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "domainSpecific": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "aaSpecific": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_GetNameList_Request_objectScope(value, elGetter);
}


/* eslint-enable */
