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
 * @summary id_att_message_security_label
 * @description
 *
 * OBJECT IDENTIFIER `id_att_message_security_label`. This general-attribute contains the
 * message-security-label argument of the Message-submission, Probe-submission,
 * Message-delivery, and Report-delivery abstract-operations. It comprises a set of
 * security attributes which may include a security-policy-identifier, a
 * security-classification, a privacy-mark, and a set of security-categories. See ITU-T
 * X.413 (1999), §11.2.41.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-message-security-label ID ::= {id-att  22}
 * ```
 *
 * @constant
 */
export const id_att_message_security_label: ID = _OID.fromParts([22], id_att);

/* eslint-enable */
