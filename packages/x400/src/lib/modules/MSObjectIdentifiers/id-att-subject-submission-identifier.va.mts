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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_subject_submission_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-subject-submission-identifier ID ::= {id-att  40}
 * ```
 *
 * @constant
 */
export const id_att_subject_submission_identifier: ID = _OID.fromParts([40], id_att);

/* eslint-enable */
