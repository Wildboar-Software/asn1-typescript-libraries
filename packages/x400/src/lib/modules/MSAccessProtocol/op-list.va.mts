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
/* START_OF_SYMBOL_DEFINITION op_list */
/**
 * @summary op_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * op-list Code ::= local:21
 * ```
 *
 * @constant
 */
export const op_list: Code = { local: 21 };
/* END_OF_SYMBOL_DEFINITION op_list */

/* eslint-enable */
