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
 * @summary id_package_mdServiceMgtPOA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-mdServiceMgtPOA ID ::= {id-package  24}
 * ```
 *
 * @constant
 */
export const id_package_mdServiceMgtPOA: ID = _OID.fromParts([24], id_package);

/* eslint-enable */
