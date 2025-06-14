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
/* START_OF_SYMBOL_DEFINITION id_package_registerMS */
/**
 * @summary id_package_registerMS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-registerMS ID ::= {id-package  43}
 * ```
 *
 * @constant
 */
export const id_package_registerMS: ID = new _OID([43], id_package);
/* END_OF_SYMBOL_DEFINITION id_package_registerMS */

/* eslint-enable */
