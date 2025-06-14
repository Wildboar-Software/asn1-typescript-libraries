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
/* START_OF_SYMBOL_DEFINITION id_ase_mtse */
/**
 * @summary id_ase_mtse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ase-mtse ID ::= {id-ase  4}
 * ```
 *
 * @constant
 */
export const id_ase_mtse: ID = new _OID([4], id_ase);
/* END_OF_SYMBOL_DEFINITION id_ase_mtse */

/* eslint-enable */
