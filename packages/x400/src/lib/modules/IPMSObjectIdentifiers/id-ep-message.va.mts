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
 * @summary id_ep_message
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ep-message ID ::= {id-ep  7}
 * ```
 *
 * @constant
 */
export const id_ep_message: ID = _OID.fromParts([7], id_ep);

/* eslint-enable */
