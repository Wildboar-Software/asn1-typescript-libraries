/* eslint-disable */
import {
    iso,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers2/ID.ta.mjs';
/* START_OF_SYMBOL_DEFINITION id_iso_ipms */
/**
 * @summary id_iso_ipms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-iso-ipms ID ::= {iso standard mhs(10021) ipms(7)}
 * ```
 *
 * @constant
 */
export const id_iso_ipms: ID = new _OID(
    [0 /* standard */, /* mhs */ 10021, /* ipms */ 7],
    iso
);
/* END_OF_SYMBOL_DEFINITION id_iso_ipms */

/* eslint-enable */
