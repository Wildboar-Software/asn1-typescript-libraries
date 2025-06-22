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
import { mhs_management } from '../MhsMTAObjectIdentifiers/mhs-management.va.mjs';
/**
 * @summary id_mta
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mta ID ::= {mhs-management  8}
 * ```
 *
 * @constant
 */
export const id_mta: ID = _OID.fromParts([8], mhs_management);

/* eslint-enable */
