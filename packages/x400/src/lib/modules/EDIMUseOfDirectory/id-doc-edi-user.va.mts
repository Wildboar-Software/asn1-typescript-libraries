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
 * @summary id_doc_edi_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doc-edi-user ID ::= {id-doc  0}
 * ```
 *
 * @constant
 */
export const id_doc_edi_user: ID = _OID.fromParts([0], id_doc);

/* eslint-enable */
