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
    _decode_SIGNATURE as _decode_ContentIntegrityCheck,
    _encode_SIGNATURE as _encode_ContentIntegrityCheck,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary ContentIntegrityCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIntegrityCheck  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  ContentIntegrityAlgorithmIdentifier OPTIONAL,
 *                content               Content}}
 * ```
 */
export type ContentIntegrityCheck = SIGNATURE; // DefinedType

/* eslint-enable */
