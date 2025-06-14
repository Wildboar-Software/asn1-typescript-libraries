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
import { id_ipms } from '../IPMSObjectIdentifiers/id-ipms.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_hat */
/**
 * @summary id_hat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat ID ::= {id-ipms  7}
 * ```
 *
 * @constant
 */
export const id_hat: ID = new _OID([7], id_ipms);
/* END_OF_SYMBOL_DEFINITION id_hat */

/* eslint-enable */
