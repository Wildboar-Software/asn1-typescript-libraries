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
 * @summary id_performance
 * @description
 *
 * OBJECT IDENTIFIER `id_performance`. Defined in ITU-T X.411 (1999) (accounting
 * objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-performance ID ::= {mhs-management  7}
 * ```
 *
 * @constant
 */
export const id_performance: ID = _OID.fromParts([7], mhs_management);

/* eslint-enable */
