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
/**
 * @summary id_package_distributionListPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-distributionListPackage ID ::= {id-package  5}
 * ```
 *
 * @constant
 */
export const id_package_distributionListPackage: ID = new _OID([5], id_package);

/* eslint-enable */
