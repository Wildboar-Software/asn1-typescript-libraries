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
 * @summary id_att_this_recipient_name
 * @description
 *
 * OBJECT IDENTIFIER `id_att_this_recipient_name`. This general-attribute contains the
 * this-recipient-name argument of the Message-delivery abstract-operation, and
 * identifies the MS-user. See 8.3.1.1.1.3 of WITH ATTRIBUTE-SYNTAX ORName, EQUALITY
 * MATCHING-RULE oRNameMatch, OTHER MATCHING-RULES {oRNameElementsMatch |
 * oRNameSubstringElementsMatch | oRNameSingleElementMatch, ...}, NUMERATION
 * single-valued, ID id-att-this-recipient-name } 11.2.82 Trace-information… See ITU-T
 * X.413 (1999), §11.2.81.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-this-recipient-name ID ::= {id-att  41}
 * ```
 *
 * @constant
 */
export const id_att_this_recipient_name: ID = _OID.fromParts([41], id_att);

/* eslint-enable */
