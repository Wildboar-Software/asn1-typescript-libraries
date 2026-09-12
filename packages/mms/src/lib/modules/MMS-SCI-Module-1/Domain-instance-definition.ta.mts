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
import { Domain_instance_definition_details, _decode_Domain_instance_definition_details, _encode_Domain_instance_definition_details } from "../MMS-SCI-Module-1/Domain-instance-definition-details.ta.mjs";
// export { Domain_instance_definition_details, _decode_Domain_instance_definition_details, _encode_Domain_instance_definition_details } from "../MMS-SCI-Module-1/Domain-instance-definition-details.ta.mjs";


/**
 * @summary Domain_instance_definition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Domain-instance-definition ::= CHOICE {
 *     reference [1] IMPLICIT OBJECT IDENTIFIER,
 *     details [2] IMPLICIT SEQUENCE {
 *         capabilities [3] IMPLICIT SEQUENCE OF MMSString,
 *         state [4] IMPLICIT DomainState,
 *         -- The aAssociation is not included
 *         accessControl [5] IMPLICIT Access-Control-List-instance,
 *         sharable [6] IMPLICIT BOOLEAN,
 *         programInvocations [7] IMPLICIT SEQUENCE OF Program-Invocation-instance -- uploadsInProgress  is not included
 *         ,
 *         namedVariables [8] IMPLICIT SEQUENCE OF Named-Variable-instance,
 *         namedVariableLists [9] IMPLICIT SEQUENCE OF Named-Variable-List-instance,
 *         namedVariableLists [9] IMPLICIT NULL,
 *         namedTypes [10] IMPLICIT SEQUENCE OF Named-Type-instance,
 *         namedVariables [8] IMPLICIT NULL,
 *         namedVariableLists [9] IMPLICIT NULL,
 *         namedTypes [10] IMPLICIT NULL,
 *         eventConditions [11] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *         eventActions [12] IMPLICIT SEQUENCE OF Event-Action-instance,
 *         eventEnrollments [13] IMPLICIT SEQUENCE OF Event-Enrollment-instance,
 *         eventConditionLists [14] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 *     }
 * }
 * ```
 */
export
type Domain_instance_definition =
    { reference: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { details: Domain_instance_definition_details } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Domain_instance_definition: $.ASN1Decoder<Domain_instance_definition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Domain_instance_definition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Domain_instance_definition (el: _Element): Domain_instance_definition {
    if (!_cached_decoder_for_Domain_instance_definition) { _cached_decoder_for_Domain_instance_definition = $._decode_inextensible_choice<Domain_instance_definition>({
    "CONTEXT 1": [ "reference", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 2": [ "details", $._decode_implicit<Domain_instance_definition_details>(() => _decode_Domain_instance_definition_details) ]
}); }
    return _cached_decoder_for_Domain_instance_definition(el);
}

let _cached_encoder_for_Domain_instance_definition: $.ASN1Encoder<Domain_instance_definition> | null = null;

/**
 * @summary Encodes a(n) Domain_instance_definition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Domain_instance_definition, encoded as an ASN.1 Element.
 */
export
function _encode_Domain_instance_definition (value: Domain_instance_definition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Domain_instance_definition) { _cached_encoder_for_Domain_instance_definition = $._encode_choice<Domain_instance_definition>({
    "reference": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
    "details": $._encode_implicit(_TagClass.context, 2, () => _encode_Domain_instance_definition_details, $.BER),
}, $.BER); }
    return _cached_encoder_for_Domain_instance_definition(value, elGetter);
}


/* eslint-enable */
