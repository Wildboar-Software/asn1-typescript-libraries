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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_ep } from '../IPMSObjectIdentifiers/id-ep.va.mjs';
/**
 * @summary id_ep_file_transfer
 * @description
 *
 * This Specification cites the following File Transfer specifications: – ISO 8571-1:1988,
 * Information processing systems – Open Systems Interconnection – File Transfer, Access
 * and Management – Part 1: General Introduction. – ISO 8571-2:1988, Information processing
 * systems – Open Systems Interconnection – File Transfer, Access and Management – Part 2:
 * Virtual Filestore Definition. See ITU-T X.420 (1999), §2.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ep-file-transfer ID ::= {id-ep  12}
 * ```
 *
 * @constant
 */
export const id_ep_file_transfer: ID = _OID.fromParts([12], id_ep);

/* eslint-enable */
