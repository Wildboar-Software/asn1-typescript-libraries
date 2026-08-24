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
import { id_cat } from '../EDIMSObjectIdentifiers/id-cat.va.mjs';
/**
 * @summary id_cat_subject_edim
 * @description
 *
 * OBJECT IDENTIFIER `id_cat_subject_edim`. The Subject EDIM Identifier is the EDIM
 * Identifier either passed in the EDIN Receiver field, if Responsibility has been
 * forwarded, or the This EDIM field, if not. SubjectEDIMField ::= EDIMIdentifier NOTE –
 * EDIM Identifier is defined in 7.1. See ITU-T X.435 (1999), §9.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-subject-edim ID ::= {id-cat  9}
 * ```
 *
 * @constant
 */
export const id_cat_subject_edim: ID = _OID.fromParts([9], id_cat);

/* eslint-enable */
