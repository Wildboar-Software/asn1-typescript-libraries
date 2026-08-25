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
 * @summary id_routing
 * @description
 *
 * In a routing event, an MTA selects the "adjacent" MTA to which it will transfer a
 * message, probe, or report. This event incrementally determines an information object's
 * route through the MTS and (obviously) may be taken only if the MTS comprises several
 * MTAs. See ITU-T X.402 (1999), §9.4.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-routing ID ::= {joint-iso-itu-t mhs(6) routing(10)}
 * ```
 *
 * @constant
 */
export const id_routing: ID = _OID.fromParts(
    [/* mhs */ 6, /* routing */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
