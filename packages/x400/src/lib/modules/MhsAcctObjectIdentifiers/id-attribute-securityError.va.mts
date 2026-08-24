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
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_securityError
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_securityError`. The Security-error abstract-error
 * reports that the requested abstract-operation could not be provided by the MTS or
 * MTS-user because it would violate the security-policy in force. The Security-error
 * abstract-error has the following parameters: security-problem: an identifier for the
 * cause of the violation of the security-policy. See ITU-T X.411 (1999), §8.2.2.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-securityError ID ::= {id-attribute  111}
 * ```
 *
 * @constant
 */
export const id_attribute_securityError: ID = _OID.fromParts([111], id_attribute);

/* eslint-enable */
