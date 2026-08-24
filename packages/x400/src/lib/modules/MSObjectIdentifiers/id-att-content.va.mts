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
 * @summary id_att_content
 * @description
 *
 * OBJECT IDENTIFIER `id_att_content`. This general-attribute contains the complete
 * content of a message as submitted by the MS-message-submission abstract- operation, or
 * as delivered by the Message-delivery abstract-operation, or as presented in the
 * returned-content of the Report-delivery abstract-operation. In this last case, the
 * content general-attribute is created in the returned-content child- entry, and not in
 * the delivered-report entry itself. See ITU-T X.413 (1999), §11.2.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-content ID ::= {id-att  1}
 * ```
 *
 * @constant
 */
export const id_att_content: ID = _OID.fromParts([1], id_att);

/* eslint-enable */
