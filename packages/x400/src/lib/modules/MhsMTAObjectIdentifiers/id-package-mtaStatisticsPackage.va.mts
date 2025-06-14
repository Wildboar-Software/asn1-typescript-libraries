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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_package } from '../MhsMTAObjectIdentifiers/id-package.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_package_mtaStatisticsPackage */
/**
 * @summary id_package_mtaStatisticsPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-mtaStatisticsPackage ID ::= {id-package  13}
 * ```
 *
 * @constant
 */
export const id_package_mtaStatisticsPackage: ID = new _OID([13], id_package);
/* END_OF_SYMBOL_DEFINITION id_package_mtaStatisticsPackage */

/* eslint-enable */
