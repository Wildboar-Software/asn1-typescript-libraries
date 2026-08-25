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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_nat } from '../IPMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_subject_ipm
 * @description
 *
 * The Subject IPM common field (M) contains the value of the This IPM field of the subject
 * IPM. It comprises an IPM identifier. See ITU-T X.420 (1999), §8.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-subject-ipm ID ::= {id-nat  0}
 * ```
 *
 * @constant
 */
export const id_nat_subject_ipm: ID = _OID.fromParts([0], id_nat);

/* eslint-enable */
