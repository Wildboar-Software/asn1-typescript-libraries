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
 * @summary id_nat_returned_ipm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-returned-ipm ID ::= {id-nat  7}
 * ```
 *
 * @constant
 */
export const id_nat_returned_ipm: ID = new _OID([7], id_nat);

/* eslint-enable */
