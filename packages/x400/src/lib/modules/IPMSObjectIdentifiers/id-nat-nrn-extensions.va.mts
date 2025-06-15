/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_nat } from '../IPMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_nrn_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-nrn-extensions ID ::= {id-nat  12}
 * ```
 *
 * @constant
 */
export const id_nat_nrn_extensions: ID = new _OID([12], id_nat);

/* eslint-enable */
