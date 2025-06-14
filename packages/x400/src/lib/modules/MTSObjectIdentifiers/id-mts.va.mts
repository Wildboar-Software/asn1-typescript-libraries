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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
/* START_OF_SYMBOL_DEFINITION id_mts */
/**
 * @summary id_mts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mts ID ::= {joint-iso-itu-t mhs(6) mts(3)}
 * ```
 *
 * @constant
 */
export const id_mts: ID = new _OID([/* mhs */ 6, /* mts */ 3], joint_iso_itu_t);
/* END_OF_SYMBOL_DEFINITION id_mts */

/* eslint-enable */
