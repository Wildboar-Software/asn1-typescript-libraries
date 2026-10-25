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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParamValueList_deliveryControl
 * @description
 *
 * Selected delivery-control. Applies only to DO updates and COs with
 * CO-priority `"normal"`. Quarantine holds NDQs until a delivery
 * point (DLQ). ISO/IEC 9040:1997 §24, table 15; ISO/IEC 9041-1:1997
 * §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParamValueList-deliveryControl ::= INTEGER {
 *     none       (0), -- value 1 for a bit implies offer,
 *     simple     (1), -- value 0 implies no offer.
 *     quarantine (2)
 * }
 * ```
 */
export
type ParamValueList_deliveryControl = INTEGER;

/**
 * @summary ParamValueList_deliveryControl_none
 * @description
 *
 * Delivery-control `"none"`. ISO/IEC 9040:1997 §24, table 15.
 * @constant
 * @type {number}
 */
export
const ParamValueList_deliveryControl_none: 0 = 0 satisfies ParamValueList_deliveryControl; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_none
 * @description
 *
 * Delivery-control `"none"`. ISO/IEC 9040:1997 §24, table 15.
 * @constant
 * @type {number}
 */
export
const none: 0 = ParamValueList_deliveryControl_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_simple
 * @description
 *
 * Delivery-control `"simple"`. ISO/IEC 9040:1997 §24, table 15.
 * @constant
 * @type {number}
 */
export
const ParamValueList_deliveryControl_simple: 1 = 1 satisfies ParamValueList_deliveryControl; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_simple
 * @description
 *
 * Delivery-control `"simple"`. ISO/IEC 9040:1997 §24, table 15.
 * @constant
 * @type {number}
 */
export
const simple: 1 = ParamValueList_deliveryControl_simple; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_quarantine
 * @description
 *
 * Delivery-control `"quarantine"` (hold NDQs until a DLQ). ISO/IEC
 * 9040:1997 §24, table 15.
 * @constant
 * @type {number}
 */
export
const ParamValueList_deliveryControl_quarantine: 2 = 2 satisfies ParamValueList_deliveryControl; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_quarantine
 * @description
 *
 * Delivery-control `"quarantine"` (hold NDQs until a DLQ). ISO/IEC
 * 9040:1997 §24, table 15.
 * @constant
 * @type {number}
 */
export
const quarantine: 2 = ParamValueList_deliveryControl_quarantine; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParamValueList_deliveryControl: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ParamValueList_deliveryControl: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
