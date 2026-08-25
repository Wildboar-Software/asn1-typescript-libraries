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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_proof_of_submission
 * @description
 *
 * This general-attribute contains the proof-of-submission result of the Message-submission
 * abstract-operation. It provides the MS-user with proof of submission of a message to the
 * MTS. See ITU-T X.413 (1999), §11.2.65.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-proof-of-submission ID ::= {id-att  70}
 * ```
 *
 * @constant
 */
export const id_att_proof_of_submission: ID = _OID.fromParts([70], id_att);

/* eslint-enable */
