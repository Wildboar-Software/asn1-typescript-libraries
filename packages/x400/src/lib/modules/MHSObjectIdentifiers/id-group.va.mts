/* eslint-disable */
import {
    joint_iso_itu_t,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
/**
 * @summary id_group
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-group ID ::= {joint-iso-itu-t mhs(6) group(6)}
 * ```
 *
 * @constant
 */
export const id_group: ID = new _OID(
    [/* mhs */ 6, /* group */ 6],
    joint_iso_itu_t
);

/* eslint-enable */
