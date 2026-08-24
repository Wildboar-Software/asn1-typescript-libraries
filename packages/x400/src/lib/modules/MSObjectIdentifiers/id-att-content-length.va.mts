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
 * @summary id_att_content_length
 * @description
 *
 * OBJECT IDENTIFIER `id_att_content_length`. This general-attribute indicates the length
 * of the content, in octets, of a submitted message, a submitted probe, a draft-
 * message, a delivered message, or the returned-content of a delivery-report. For a
 * submitted probe, the attribute indicates the length in octets of the content of the
 * subject-message. See ITU-T X.413 (1999), §11.2.16.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-content-length ID ::= {id-att  6}
 * ```
 *
 * @constant
 */
export const id_att_content_length: ID = _OID.fromParts([6], id_att);

/* eslint-enable */
