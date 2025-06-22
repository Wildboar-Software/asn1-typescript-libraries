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
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
/**
 * @summary id_mhs_routing
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mhs-routing ID ::= {joint-iso-itu-t mhs(6) routing(10)}
 * ```
 *
 * @constant
 */
export const id_mhs_routing: ID = _OID.fromParts(
    [/* mhs */ 6, /* routing */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
