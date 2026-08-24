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
 * @summary id_package_register
 * @description
 *
 * OBJECT IDENTIFIER `id_package_register`. The Register abstract-operation enables an
 * MTS-user to make long-term changes to various parameters of the MTS-user held by the
 * MTS concerned with delivery of messages to the MTS-user, and to retrieve the current
 * settings of these parameters. Such changes remain in effect until overridden by
 * re-invocation of the Register abstract-operation. See ITU-T X.411 (1999), §8.4.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-register ID ::= {id-package  42}
 * ```
 *
 * @constant
 */
export const id_package_register: ID = _OID.fromParts([42], id_package);

/* eslint-enable */
