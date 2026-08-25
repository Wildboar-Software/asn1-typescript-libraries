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
 * @summary id_attribute_bindToken
 * @description
 *
 * A token may be used to convey to the recipient of the token protected security-relevant
 * information. The token provides authentication of public security-relevant information,
 * and confidentiality and authentication of secret security-relevant information. See
 * ITU-T X.411 (1999), §8.5.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-bindToken ID ::= {id-attribute  9}
 * ```
 *
 * @constant
 */
export const id_attribute_bindToken: ID = _OID.fromParts([9], id_attribute);

/* eslint-enable */
