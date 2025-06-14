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
import { id_aa } from '../IPMSObjectIdentifiers/id-aa.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_aa_ipm_auto_discard */
/**
 * @summary id_aa_ipm_auto_discard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-ipm-auto-discard ID ::= {id-aa  2}
 * ```
 *
 * @constant
 */
export const id_aa_ipm_auto_discard: ID = new _OID([2], id_aa);
/* END_OF_SYMBOL_DEFINITION id_aa_ipm_auto_discard */

/* eslint-enable */
