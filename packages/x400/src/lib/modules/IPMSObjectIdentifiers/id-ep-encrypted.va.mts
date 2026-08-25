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
 * @summary id_ep_encrypted
 * @description
 *
 * An Encrypted body part represents the result of encrypting a body part of a type defined
 * by this Specification. It has Parameters and Data components. See ITU-T X.420 (1999),
 * §7.4.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ep-encrypted ID ::= {id-ep  6}
 * ```
 *
 * @constant
 */
export const id_ep_encrypted: ID = _OID.fromParts([6], id_ep);

/* eslint-enable */
