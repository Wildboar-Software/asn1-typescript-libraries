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
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
/**
 * @summary err_invalid_parameters_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * err-invalid-parameters-error Code ::= local:29
 * ```
 *
 * @constant
 */
export const err_invalid_parameters_error: Code = { local: 29 };

/* eslint-enable */
