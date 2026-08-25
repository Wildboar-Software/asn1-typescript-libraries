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
 * @summary id_doc_edi_user_agent
 * @description
 *
 * An EDI user agent (EDI-UA) is a UA tailored so as to better assist a single user to
 * engage in EDI Messaging. It helps him originate, receive, or both originate and receive
 * messages containing Information Objects of the types defined in clause 6. See ITU-T
 * X.435 (1999), §15.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doc-edi-user-agent ID ::= {id-doc  1}
 * ```
 *
 * @constant
 */
export const id_doc_edi_user_agent: ID = _OID.fromParts([1], id_doc);

/* eslint-enable */
