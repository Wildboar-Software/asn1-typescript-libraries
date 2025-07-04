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
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
/**
 * @summary err_security_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * err-security-error Code ::= local:26
 * ```
 *
 * @constant
 */
export const err_security_error: Code = { local: 26 };

/* eslint-enable */
