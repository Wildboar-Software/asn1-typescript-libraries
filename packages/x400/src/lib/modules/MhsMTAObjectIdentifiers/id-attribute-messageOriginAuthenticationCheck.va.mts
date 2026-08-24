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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsMTAObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_messageOriginAuthenticationCheck
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_messageOriginAuthenticationCheck`. This argument
 * provides the recipient(s) of the message, and any MTA through which the message is
 * transferred, with a means of authenticating the origin of the message (to provide the
 * Message Origin Authentication element-of-service as defined in Authentication),
 * assurance that the message content has not been modified (the Content Integrity
 * element-of-service as defined in The message-origin-authentication-check… See ITU-T
 * X.411 (1999), §8.2.1.1.1.29.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-messageOriginAuthenticationCheck ID ::= {id-attribute  75}
 * ```
 *
 * @constant
 */
export const id_attribute_messageOriginAuthenticationCheck: ID = _OID.fromParts(
    [75],
    id_attribute
);

/* eslint-enable */
