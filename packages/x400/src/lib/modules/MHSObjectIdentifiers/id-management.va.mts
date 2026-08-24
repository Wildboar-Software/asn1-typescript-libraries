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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
/**
 * @summary id_management
 * @description
 *
 * OBJECT IDENTIFIER `id_management`. A private management domain (PRMD) comprises
 * messaging systems managed by a private organization. While there is no restriction on
 * a PRMD offering public messaging services, the PRMD has not accepted the
 * Administration responsibilities in order to ensure its customers can communicate with
 * any other MD attached to the Global MHS. See ITU-T X.402 (1999), §14.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-management ID ::= {joint-iso-itu-t mhs(6) management(9)}
 * ```
 *
 * @constant
 */
export const id_management: ID = _OID.fromParts(
    [/* mhs */ 6, /* management */ 9],
    joint_iso_itu_t
);

/* eslint-enable */
