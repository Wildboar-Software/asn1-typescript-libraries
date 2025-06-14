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
/* START_OF_SYMBOL_DEFINITION id_nat */
/**
 * @summary id_nat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat ID ::= {id-edims  9}
 * ```
 *
 * @constant
 */
export const id_nat: ID = new _OID([9], id_edims);
/* END_OF_SYMBOL_DEFINITION id_nat */

/* eslint-enable */
