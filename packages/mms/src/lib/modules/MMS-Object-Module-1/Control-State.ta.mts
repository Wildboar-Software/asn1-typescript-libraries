/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Control_State
 * @description
 * 
 * csr CBB: how this PI relates to equipment
 * control. normal = independent; controlling = task program directing
 * equipment; controlled = hardware-control PI coupled to a controlling
 * PI. ISO 9506-1:2003 §12.1.1.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Control-State  ::=  INTEGER {
 *     normal           (0),
 *     controlling      (1),
 *     controlled       (2)
 * } (0..2)
 * ```
 */
export
type Control_State = INTEGER;

/**
 * @summary Control_State_normal
 * @description
 *
 * Independent PI (not controlling/controlled). ISO 9506-1:2003 §12.1.1.12.
 *
 * @constant
 * @type {number}
 */
export
const Control_State_normal: 0 = 0 satisfies Control_State; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_normal
 * @description
 *
 * Independent PI (not controlling/controlled). ISO 9506-1:2003 §12.1.1.12.
 *
 * @constant
 * @type {number}
 */
export
const normal: 0 = Control_State_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlling
 * @description
 *
 * Task program directing equipment; may have controlled PIs. ISO 9506-1:2003
 * §12.1.1.12.
 *
 * @constant
 * @type {number}
 */
export
const Control_State_controlling: 1 = 1 satisfies Control_State; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlling
 * @description
 *
 * Task program directing equipment; may have controlled PIs. ISO 9506-1:2003
 * §12.1.1.12.
 *
 * @constant
 * @type {number}
 */
export
const controlling: 1 = Control_State_controlling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlled
 * @description
 *
 * Hardware-control PI coupled to a controlling PI. ISO 9506-1:2003 §12.1.1.12.
 *
 * @constant
 * @type {number}
 */
export
const Control_State_controlled: 2 = 2 satisfies Control_State; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlled
 * @description
 *
 * Hardware-control PI coupled to a controlling PI. ISO 9506-1:2003 §12.1.1.12.
 *
 * @constant
 * @type {number}
 */
export
const controlled: 2 = Control_State_controlled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Control_State: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_Control_State: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
