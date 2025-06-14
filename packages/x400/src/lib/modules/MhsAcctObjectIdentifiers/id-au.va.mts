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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { mhs_management } from '../MhsAcctObjectIdentifiers/mhs-management.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_au */
/**
 * @summary id_au
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-au ID ::= {mhs-management  11}
 * ```
 *
 * @constant
 */
export const id_au: ID = new _OID([11], mhs_management);
/* END_OF_SYMBOL_DEFINITION id_au */

/* eslint-enable */
