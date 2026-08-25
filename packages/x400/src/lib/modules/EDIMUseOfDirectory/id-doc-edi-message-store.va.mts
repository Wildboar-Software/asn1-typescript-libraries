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
import { id_doc } from '../EDIMUseOfDirectory/id-doc.va.mjs';
/**
 * @summary id_doc_edi_message_store
 * @description
 *
 * An EDI message store (EDI-MS) is an MS tailored so as to better assist a single UA
 * engaged in EDI Messaging. It helps it submit, take delivery of, or both submit and take
 * delivery of messages containing Information Objects of the types defined in 6. See ITU-T
 * X.435 (1999), §15.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doc-edi-message-store ID ::= {id-doc  2}
 * ```
 *
 * @constant
 */
export const id_doc_edi_message_store: ID = _OID.fromParts([2], id_doc);

/* eslint-enable */
