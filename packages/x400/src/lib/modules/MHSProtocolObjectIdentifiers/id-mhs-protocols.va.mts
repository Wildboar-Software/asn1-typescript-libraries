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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSProtocolObjectIdentifiers/ID.ta.mjs';
/**
 * @summary id_mhs_protocols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mhs-protocols ID ::= {joint-iso-itu-t mhs(6) protocols(0)}
 * ```
 *
 * @constant
 */
export const id_mhs_protocols: ID = new _OID(
    [/* mhs */ 6, /* protocols */ 0],
    joint_iso_itu_t
);

/* eslint-enable */
