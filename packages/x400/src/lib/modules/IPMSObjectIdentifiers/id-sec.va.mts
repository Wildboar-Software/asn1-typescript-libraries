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
/* START_OF_SYMBOL_DEFINITION id_sec */
/**
 * @summary id_sec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sec ID ::= {id-ipms  18}
 * ```
 *
 * @constant
 */
export const id_sec: ID = new _OID([18], id_ipms);
/* END_OF_SYMBOL_DEFINITION id_sec */

/* eslint-enable */
