/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/AuthenticationFramework';
export {
    _decode_SIGNATURE as _decode_ProofOfSubmission,
    _encode_SIGNATURE as _encode_ProofOfSubmission,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary ProofOfSubmission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfSubmission  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  ProofOfSubmissionAlgorithmIdentifier,
 *                message-submission-envelope    MessageSubmissionEnvelope,
 *                content                        Content,
 *                message-submission-identifier  MessageSubmissionIdentifier,
 *                message-submission-time        MessageSubmissionTime}}
 * ```
 */
export type ProofOfSubmission = SIGNATURE; // DefinedType

/* eslint-enable */
