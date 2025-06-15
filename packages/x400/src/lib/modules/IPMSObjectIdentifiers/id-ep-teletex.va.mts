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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_ep } from '../IPMSObjectIdentifiers/id-ep.va.mjs';
/**
 * @summary id_ep_teletex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ep-teletex ID ::= {id-ep  4}
 * ```
 *
 * @constant
 */
export const id_ep_teletex: ID = new _OID([4], id_ep);

/* eslint-enable */
