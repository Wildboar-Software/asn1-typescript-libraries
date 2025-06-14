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
/* START_OF_SYMBOL_DEFINITION id_nat_ipm_intended_recipient */
/**
 * @summary id_nat_ipm_intended_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-ipm-intended-recipient ID ::= {id-nat  2}
 * ```
 *
 * @constant
 */
export const id_nat_ipm_intended_recipient: ID = new _OID([2], id_nat);
/* END_OF_SYMBOL_DEFINITION id_nat_ipm_intended_recipient */

/* eslint-enable */
