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
/* START_OF_SYMBOL_DEFINITION id_routing */
/**
 * @summary id_routing
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-routing ID ::= {joint-iso-itu-t mhs(6) routing(10)}
 * ```
 *
 * @constant
 */
export const id_routing: ID = new _OID(
    [/* mhs */ 6, /* routing */ 10],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION id_routing */

/* eslint-enable */
