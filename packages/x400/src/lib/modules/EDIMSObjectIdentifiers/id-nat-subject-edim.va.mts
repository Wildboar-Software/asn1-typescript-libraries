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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_nat } from '../EDIMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_subject_edim
 * @description
 *
 * The Subject EDIM Identifier is the EDIM Identifier either passed in the EDIN Receiver
 * field, if Responsibility has been forwarded, or the This EDIM field, if not.
 * SubjectEDIMField ::= EDIMIdentifier NOTE – EDIM Identifier is defined in 7.1. See ITU-T
 * X.435 (1999), §9.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-subject-edim ID ::= {id-nat  0}
 * ```
 *
 * @constant
 */
export const id_nat_subject_edim: ID = _OID.fromParts([0], id_nat);

/* eslint-enable */
