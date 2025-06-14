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
import { id_et } from '../IPMSObjectIdentifiers/id-et.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_et_teletex */
/**
 * @summary id_et_teletex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-et-teletex ID ::= {id-et  4}
 * ```
 *
 * @constant
 */
export const id_et_teletex: ID = new _OID([4], id_et);
/* END_OF_SYMBOL_DEFINITION id_et_teletex */

/* eslint-enable */
