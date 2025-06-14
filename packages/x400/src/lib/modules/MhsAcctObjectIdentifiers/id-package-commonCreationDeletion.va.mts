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
import { id_package } from '../MhsAcctObjectIdentifiers/id-package.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_package_commonCreationDeletion */
/**
 * @summary id_package_commonCreationDeletion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-commonCreationDeletion ID ::= {id-package  6}
 * ```
 *
 * @constant
 */
export const id_package_commonCreationDeletion: ID = new _OID([6], id_package);
/* END_OF_SYMBOL_DEFINITION id_package_commonCreationDeletion */

/* eslint-enable */
