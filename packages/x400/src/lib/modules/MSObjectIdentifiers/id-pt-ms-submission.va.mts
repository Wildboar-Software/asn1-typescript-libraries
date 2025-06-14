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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_pt } from '../MSObjectIdentifiers/id-pt.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_pt_ms_submission */
/**
 * @summary id_pt_ms_submission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pt-ms-submission ID ::= {id-pt  2}
 * ```
 *
 * @constant
 */
export const id_pt_ms_submission: ID = new _OID([2], id_pt);
/* END_OF_SYMBOL_DEFINITION id_pt_ms_submission */

/* eslint-enable */
