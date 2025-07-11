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
 * @summary id_package_transitDomainTransferOut
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-transitDomainTransferOut ID ::= {id-package  55}
 * ```
 *
 * @constant
 */
export const id_package_transitDomainTransferOut: ID = _OID.fromParts(
    [55],
    id_package
);

/* eslint-enable */
