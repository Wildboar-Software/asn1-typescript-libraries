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
/**
 * @summary id_package_d36_commonAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-d36-commonAttributes ID ::= {id-package  11}
 * ```
 *
 * @constant
 */
export const id_package_d36_commonAttributes: ID = _OID.fromParts([11], id_package);

/* eslint-enable */
