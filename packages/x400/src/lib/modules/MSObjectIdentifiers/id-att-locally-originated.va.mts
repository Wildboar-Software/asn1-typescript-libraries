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
 * @summary id_att_locally_originated
 * @description
 *
 * OBJECT IDENTIFIER `id_att_locally_originated`. This general-attribute indicates, by
 * its presence or absence, whether this delivered-message entry was originated by this
 * MS-user. ms-locally-originated ATTRIBUTE ::= { WITH ATTRIBUTE-SYNTAX NULL, NUMERATION
 * single-valued, ID id-att-locally-originated } 11.2.34 Marked-for-deletion This
 * general-attribute indicates (by its presence or absence) whether the MS-user has
 * marked the entry for subsequent deletion. See ITU-T X.413 (1999), §11.2.33.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-locally-originated ID ::= {id-att  77}
 * ```
 *
 * @constant
 */
export const id_att_locally_originated: ID = _OID.fromParts([77], id_att);

/* eslint-enable */
