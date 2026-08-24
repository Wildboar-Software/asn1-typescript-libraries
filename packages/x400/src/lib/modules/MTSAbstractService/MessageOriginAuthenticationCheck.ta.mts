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
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
    _root_component_type_list_1_spec_for_SIGNATURE,
    _extension_additions_list_spec_for_SIGNATURE,
    _root_component_type_list_2_spec_for_SIGNATURE,
} from '@wildboar/x500/AuthenticationFramework';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_MessageOriginAuthenticationCheck,
    _encode_SIGNATURE as _encode_MessageOriginAuthenticationCheck,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary MessageOriginAuthenticationCheck
 * @description
 *
 * `MessageOriginAuthenticationCheck`. This argument provides the recipient(s) of the
 * message, and any MTA through which the message is transferred, with a means of
 * authenticating the origin of the message (to provide the Message Origin Authentication
 * element-of-service as defined in Authentication), assurance that the message content
 * has not been modified (the Content Integrity element-of-service as defined in The
 * message-origin-authentication-check… See ITU-T X.411 (1999), §8.2.1.1.1.29.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageOriginAuthenticationCheck  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  MessageOriginAuthenticationAlgorithmIdentifier,
 *                content                 Content,
 *                content-identifier      ContentIdentifier OPTIONAL,
 *                message-security-label  MessageSecurityLabel OPTIONAL}}
 * ```
 */
export type MessageOriginAuthenticationCheck = SIGNATURE; // DefinedType

/* eslint-enable */
