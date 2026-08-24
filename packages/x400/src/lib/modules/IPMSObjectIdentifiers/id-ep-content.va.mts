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
 * @summary id_ep_content
 * @description
 *
 * OBJECT IDENTIFIER `id_ep_content`. A secondary object that submits a message
 * containing an IPM or IPN shall supply as the octets of the Octet String that
 * constitutes the content of the message the result of encoding the InformationObject of
 * section two in accordance with the Basic Encoding Rules of 20.2 Content Type A
 * secondary object that submits a message containing an IPM or IPN shall select its
 * content type as follows. If the IPM or IPN… See ITU-T X.420 (1999), §20.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ep-content ID ::= {id-ep  17}
 * ```
 *
 * @constant
 */
export const id_ep_content: ID = _OID.fromParts([17], id_ep);

/* eslint-enable */
