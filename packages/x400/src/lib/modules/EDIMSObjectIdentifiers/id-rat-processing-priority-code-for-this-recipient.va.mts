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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_rat } from '../EDIMSObjectIdentifiers/id-rat.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_rat_processing_priority_code_for_this_recipient */
/**
 * @summary id_rat_processing_priority_code_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rat-processing-priority-code-for-this-recipient ID ::= {id-rat  7}
 * ```
 *
 * @constant
 */
export const id_rat_processing_priority_code_for_this_recipient: ID = new _OID(
    [7],
    id_rat
);
/* END_OF_SYMBOL_DEFINITION id_rat_processing_priority_code_for_this_recipient */

/* eslint-enable */
