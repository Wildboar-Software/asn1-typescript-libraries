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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
/**
 * @summary mhs_management
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-management ID ::= {joint-iso-itu-t mhs(6) management(9)}
 * ```
 *
 * @constant
 */
export const mhs_management: ID = _OID.fromParts(
    [/* mhs */ 6, /* management */ 9],
    joint_iso_itu_t
);

/* eslint-enable */
