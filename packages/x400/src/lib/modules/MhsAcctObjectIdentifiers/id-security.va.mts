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
import { mhs_management } from '../MhsAcctObjectIdentifiers/mhs-management.va.mjs';
/**
 * @summary id_security
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-security ID ::= {mhs-management  4}
 * ```
 *
 * @constant
 */
export const id_security: ID = _OID.fromParts([4], mhs_management);

/* eslint-enable */
