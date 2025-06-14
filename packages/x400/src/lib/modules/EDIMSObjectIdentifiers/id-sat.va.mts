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
import { id_edims } from '../EDIMSObjectIdentifiers/id-edims.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_sat */
/**
 * @summary id_sat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat ID ::= {id-edims  5}
 * ```
 *
 * @constant
 */
export const id_sat: ID = new _OID([5], id_edims);
/* END_OF_SYMBOL_DEFINITION id_sat */

/* eslint-enable */
