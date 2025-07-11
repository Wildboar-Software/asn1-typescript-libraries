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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_package } from '../MhsMTAObjectIdentifiers/id-package.va.mjs';
/**
 * @summary id_package_secMessagePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-secMessagePackage ID ::= {id-package  21}
 * ```
 *
 * @constant
 */
export const id_package_secMessagePackage: ID = _OID.fromParts([21], id_package);

/* eslint-enable */
