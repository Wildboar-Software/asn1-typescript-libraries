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
import { ChangeAccessControl_Request_scopeOfChange_listOfObjects, _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects, _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects } from "../ISO-9506-MMS-1/ChangeAccessControl-Request-scopeOfChange-listOfObjects.ta.mjs";
// export { ChangeAccessControl_Request_scopeOfChange_listOfObjects, _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects, _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects } from "../ISO-9506-MMS-1/ChangeAccessControl-Request-scopeOfChange-listOfObjects.ta.mjs";


/**
 * @summary ChangeAccessControl_Request_scopeOfChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAccessControl-Request-scopeOfChange ::= CHOICE {
 *     vMDOnly [0] IMPLICIT NULL,
 *     listOfObjects [1] IMPLICIT SEQUENCE {
 *         objectClass [0] ObjectClass,
 *         objectScope [1] CHOICE {
 *             specific [0] IMPLICIT SEQUENCE OF ObjectName,
 *             -- Names of the objects (of class objectClass)
 *             -- whose access is to be changed
 *             aa-specific [1] IMPLICIT NULL,
 *             domain [2] IMPLICIT Identifier,
 *             -- Name of the Domain whose elements
 *             -- are to be changed
 *             vmd [3] IMPLICIT NULL
 *         }
 *     }
 * }
 * ```
 */
export
type ChangeAccessControl_Request_scopeOfChange =
    { vMDOnly: NULL } /* CHOICE_ALT_ROOT */
    | { listOfObjects: ChangeAccessControl_Request_scopeOfChange_listOfObjects } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange: $.ASN1Decoder<ChangeAccessControl_Request_scopeOfChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAccessControl_Request_scopeOfChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAccessControl_Request_scopeOfChange (el: _Element): ChangeAccessControl_Request_scopeOfChange {
    if (!_cached_decoder_for_ChangeAccessControl_Request_scopeOfChange) { _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange = $._decode_inextensible_choice<ChangeAccessControl_Request_scopeOfChange>({
    "CONTEXT 0": [ "vMDOnly", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "listOfObjects", $._decode_implicit<ChangeAccessControl_Request_scopeOfChange_listOfObjects>(() => _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects) ]
}); }
    return _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange(el);
}

let _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange: $.ASN1Encoder<ChangeAccessControl_Request_scopeOfChange> | null = null;

/**
 * @summary Encodes a(n) ChangeAccessControl_Request_scopeOfChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAccessControl_Request_scopeOfChange, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAccessControl_Request_scopeOfChange (value: ChangeAccessControl_Request_scopeOfChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAccessControl_Request_scopeOfChange) { _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange = $._encode_choice<ChangeAccessControl_Request_scopeOfChange>({
    "vMDOnly": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "listOfObjects": $._encode_implicit(_TagClass.context, 1, () => _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange(value, elGetter);
}


/* eslint-enable */
