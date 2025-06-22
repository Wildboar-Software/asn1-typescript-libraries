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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_package } from '../MhsAcctObjectIdentifiers/id-package.va.mjs';
/**
 * @summary id_package_interworkingMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-interworkingMD ID ::= {id-package  19}
 * ```
 *
 * @constant
 */
export const id_package_interworkingMD: ID = _OID.fromParts([19], id_package);

/* eslint-enable */
