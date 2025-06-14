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
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
/* START_OF_SYMBOL_DEFINITION err_service_error */
/**
 * @summary err_service_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * err-service-error Code ::= local:27
 * ```
 *
 * @constant
 */
export const err_service_error: Code = { local: 27 };
/* END_OF_SYMBOL_DEFINITION err_service_error */

/* eslint-enable */
