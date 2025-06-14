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
import { id_mr } from '../IPMSObjectIdentifiers/id-mr.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mr_distribution_code */
/**
 * @summary id_mr_distribution_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-distribution-code ID ::= {id-mr  15}
 * ```
 *
 * @constant
 */
export const id_mr_distribution_code: ID = new _OID([15], id_mr);
/* END_OF_SYMBOL_DEFINITION id_mr_distribution_code */

/* eslint-enable */
