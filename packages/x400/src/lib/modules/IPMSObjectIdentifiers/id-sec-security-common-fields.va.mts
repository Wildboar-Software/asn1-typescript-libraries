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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_sec } from '../IPMSObjectIdentifiers/id-sec.va.mjs';
/**
 * @summary id_sec_security_common_fields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sec-security-common-fields ID ::= {id-sec  1}
 * ```
 *
 * @constant
 */
export const id_sec_security_common_fields: ID = new _OID([1], id_sec);

/* eslint-enable */
