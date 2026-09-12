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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAccessControl-Request-scopeOfChange-listOfObjects-objectScope ::= CHOICE {
 *     specific [0] IMPLICIT SEQUENCE OF ObjectName,
 *     -- Names of the objects (of class objectClass)
 *     -- whose access is to be changed
 *     aa-specific [1] IMPLICIT NULL,
 *     domain [2] IMPLICIT Identifier,
 *     -- Name of the Domain whose elements
 *     -- are to be changed
 *     vmd [3] IMPLICIT NULL
 * }
 * ```
 */
export
type ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope =
    { specific: ObjectName[] } /* CHOICE_ALT_ROOT */
    | { aa_specific: NULL } /* CHOICE_ALT_ROOT */
    | { domain: Identifier } /* CHOICE_ALT_ROOT */
    | { vmd: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope: $.ASN1Decoder<ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope (el: _Element): ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope {
    if (!_cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope) { _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope = $._decode_inextensible_choice<ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope>({
    "CONTEXT 0": [ "specific", $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName)) ],
    "CONTEXT 1": [ "aa_specific", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "domain", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 3": [ "vmd", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope(el);
}

let _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope: $.ASN1Encoder<ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope> | null = null;

/**
 * @summary Encodes a(n) ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope (value: ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope) { _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope = $._encode_choice<ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope>({
    "specific": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER),
    "aa_specific": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "domain": $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER),
    "vmd": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope(value, elGetter);
}


/* eslint-enable */
