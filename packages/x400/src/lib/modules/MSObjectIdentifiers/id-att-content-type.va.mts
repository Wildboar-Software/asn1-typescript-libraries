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
 * @summary id_att_content_type
 * @description
 *
 * This general-attribute identifies the type of the content of a message, and is generated
 * from the content-type argument of the Message-submission, Probe-submission,
 * Message-delivery, and Report-delivery abstract-operations. See 8.2.1.1.1.34 of presence
 * of the attribute is conditional. See ITU-T X.413 (1999), §11.2.18.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-content-type ID ::= {id-att  8}
 * ```
 *
 * @constant
 */
export const id_att_content_type: ID = _OID.fromParts([8], id_att);

/* eslint-enable */
