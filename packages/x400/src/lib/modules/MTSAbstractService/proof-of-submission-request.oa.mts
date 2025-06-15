/* eslint-disable */
import {
    TRUE_BIT,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ProofOfSubmissionRequest,
    _enum_for_ProofOfSubmissionRequest,
    proof_of_submission_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProofOfSubmissionRequest,
    _encode_ProofOfSubmissionRequest,
} from '../MTSAbstractService/ProofOfSubmissionRequest.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
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
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_submission] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 21,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
