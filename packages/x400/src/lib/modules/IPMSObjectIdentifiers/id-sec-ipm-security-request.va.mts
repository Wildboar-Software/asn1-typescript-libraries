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
 * @summary id_sec_ipm_security_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sec-ipm-security-request ID ::= {id-sec  0}
 * ```
 *
 * @constant
 */
export const id_sec_ipm_security_request: ID = new _OID([0], id_sec);

/* eslint-enable */
