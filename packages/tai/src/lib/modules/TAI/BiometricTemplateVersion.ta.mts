/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BiometricTemplateVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricTemplateVersion  ::=  INTEGER {v0(0)}(v0, ...)
 * ```
 */
export
type BiometricTemplateVersion = INTEGER;

/**
 * @summary BiometricTemplateVersion_v0
 * @constant
 * @type {number}
 */
export
const BiometricTemplateVersion_v0: BiometricTemplateVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricTemplateVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: BiometricTemplateVersion = BiometricTemplateVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_BiometricTemplateVersion = $._decodeInteger;
export const _encode_BiometricTemplateVersion = $._encodeInteger;


/* eslint-enable */
