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
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_responderCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-responderCredentials ID ::= {id-attribute  107}
 * ```
 *
 * @constant
 */
export const id_attribute_responderCredentials: ID = new _OID(
    [107],
    id_attribute
);

/* eslint-enable */
