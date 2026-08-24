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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_proofOfSubmissionRequest
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_proofOfSubmissionRequest`. This argument indicates
 * whether or not the originator of the message requires proof-of-submission (to provide
 * the Proof of Submission element-of-service) as defined in This argument may have one
 * of the following values: proof-of-submission-requested or proof-of-submission-not-
 * requested. In the absence of this argument, the default
 * proof-of-submission-not-requested shall be assumed. See ITU-T X.411 (1999),
 * §8.2.1.1.1.31.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-proofOfSubmissionRequest ID ::= {id-attribute  97}
 * ```
 *
 * @constant
 */
export const id_attribute_proofOfSubmissionRequest: ID = _OID.fromParts(
    [97],
    id_attribute
);

/* eslint-enable */
