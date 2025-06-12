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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ProofOfSubmissionRequest,
    _enum_for_ProofOfSubmissionRequest,
    ProofOfSubmissionRequest_proof_of_submission_not_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_submission_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProofOfSubmissionRequest_proof_of_submission_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_submission_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProofOfSubmissionRequest,
    _encode_ProofOfSubmissionRequest,
} from '../MTSAbstractService/ProofOfSubmissionRequest.ta.mjs';
export {
    ProofOfSubmissionRequest,
    _enum_for_ProofOfSubmissionRequest,
    ProofOfSubmissionRequest_proof_of_submission_not_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_submission_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProofOfSubmissionRequest_proof_of_submission_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_submission_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProofOfSubmissionRequest,
    _encode_ProofOfSubmissionRequest,
} from '../MTSAbstractService/ProofOfSubmissionRequest.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION proof_of_submission_request */
/**
 * @summary proof_of_submission_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proof-of-submission-request EXTENSION ::= {
 *   ProofOfSubmissionRequest
 *   IF ABSENT                proof-of-submission-not-requested,
 *   RECOMMENDED CRITICALITY  {for-submission},
 *   IDENTIFIED BY            standard-extension:21
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ProofOfSubmissionRequest>}
 * @implements {EXTENSION<ProofOfSubmissionRequest>}
 */
export const proof_of_submission_request: EXTENSION<ProofOfSubmissionRequest> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ProofOfSubmissionRequest,
    },
    encoderFor: {
        '&Type': _encode_ProofOfSubmissionRequest,
    },
    '&absent': proof_of_submission_not_requested /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(Math.max(0, 1, 2));
        _ret[Criticality_for_submission] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 21,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION proof_of_submission_request */

/* eslint-enable */
