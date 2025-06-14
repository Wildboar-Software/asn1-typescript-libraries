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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSProtocolObjectIdentifiers/ID.ta.mjs';
import { id_ase } from '../MHSProtocolObjectIdentifiers/id-ase.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_ase_mrse */
/**
 * @summary id_ase_mrse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ase-mrse ID ::= {id-ase  2}
 * ```
 *
 * @constant
 */
export const id_ase_mrse: ID = new _OID([2], id_ase);
/* END_OF_SYMBOL_DEFINITION id_ase_mrse */

/* eslint-enable */
