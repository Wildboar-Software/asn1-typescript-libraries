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
} from '@wildboar/x500/AuthenticationFramework';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_ProbeOriginAuthenticationCheck,
    _encode_SIGNATURE as _encode_ProbeOriginAuthenticationCheck,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary ProbeOriginAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeOriginAuthenticationCheck  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  ProbeOriginAuthenticationAlgorithmIdentifier,
 *                content-identifier      ContentIdentifier OPTIONAL,
 *                message-security-label  MessageSecurityLabel OPTIONAL}}
 * ```
 */
export type ProbeOriginAuthenticationCheck = SIGNATURE; // DefinedType

/* eslint-enable */
