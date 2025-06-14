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
/* START_OF_SYMBOL_DEFINITION id_nat_auto_forward_comment */
/**
 * @summary id_nat_auto_forward_comment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-auto-forward-comment ID ::= {id-nat  6}
 * ```
 *
 * @constant
 */
export const id_nat_auto_forward_comment: ID = new _OID([6], id_nat);
/* END_OF_SYMBOL_DEFINITION id_nat_auto_forward_comment */

/* eslint-enable */
