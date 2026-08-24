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
 * @summary id_att_originator_report_request
 * @description
 *
 * OBJECT IDENTIFIER `id_att_originator_report_request`. This general-attribute, which is
 * multi-valued, contains the originator-report-request argument of the Message-
 * submission and Probe-submission abstract-operations. See 8.2.1.1.1.22 of attribute.
 * See ITU-T X.413 (1999), §11.2.53.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-originator-report-request ID ::= {id-att  63}
 * ```
 *
 * @constant
 */
export const id_att_originator_report_request: ID = _OID.fromParts([63], id_att);

/* eslint-enable */
