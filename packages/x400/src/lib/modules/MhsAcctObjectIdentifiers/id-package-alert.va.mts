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
 * @summary id_package_alert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-alert ID ::= {id-package  1}
 * ```
 *
 * @constant
 */
export const id_package_alert: ID = _OID.fromParts([1], id_package);

/* eslint-enable */
