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
 * @summary id_ms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ms ID ::= {joint-iso-itu-t mhs(6) ms(4)}
 * ```
 *
 * @constant
 */
export const id_ms: ID = _OID.fromParts([/* mhs */ 6, /* ms */ 4], joint_iso_itu_t);

/* eslint-enable */
