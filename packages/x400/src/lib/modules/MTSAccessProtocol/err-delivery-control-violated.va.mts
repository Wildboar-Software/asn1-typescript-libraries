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
/* START_OF_SYMBOL_DEFINITION err_delivery_control_violated */
/**
 * @summary err_delivery_control_violated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * err-delivery-control-violated Code ::= local:1
 * ```
 *
 * @constant
 */
export const err_delivery_control_violated: Code = { local: 1 };
/* END_OF_SYMBOL_DEFINITION err_delivery_control_violated */

/* eslint-enable */
