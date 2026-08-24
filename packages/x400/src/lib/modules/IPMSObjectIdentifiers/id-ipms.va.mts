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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
/**
 * @summary id_ipms
 * @description
 *
 * OBJECT IDENTIFIER `id_ipms`. The Obsoleted IPMs heading field (D no subfields (i.e.,
 * elements)) identifies zero or more IPMs that the authorizing users of the present IPM
 * consider it to obsolete. It comprises a Sequence of sub-fields, each an IPM
 * identifier, one for each IPM. See ITU-T X.420 (1999), §7.2.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ipms ID ::= {joint-iso-itu-t mhs(6) ipms(1)}
 * ```
 *
 * @constant
 */
export const id_ipms: ID = _OID.fromParts(
    [/* mhs */ 6, /* ipms */ 1],
    joint_iso_itu_t
);

/* eslint-enable */
