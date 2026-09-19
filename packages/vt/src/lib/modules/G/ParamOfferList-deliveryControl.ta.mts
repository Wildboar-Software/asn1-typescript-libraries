/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary ParamOfferList_deliveryControl
 * @description
 *
 * Offered delivery-control values. Bit=1 means offered; bit=0 means
 * not. Applies only to DO updates and COs with CO-priority
 * `"normal"`. Quarantine holds NDQs until a delivery point (DLQ).
 * ISO/IEC 9040:1997 §24, table 15; ISO/IEC 9041-1:1997 §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParamOfferList-deliveryControl ::= BIT STRING {
 *     none       (0), -- value 1 for a bit implies offer,
 *     simple     (1), -- value 0 implies no offer.
 *     quarantine (2)
 * }
 * ```
 */
export
type ParamOfferList_deliveryControl = BIT_STRING;

/**
 * @summary ParamOfferList_deliveryControl_none
 * @description
 *
 * Offers delivery-control `"none"`. ISO/IEC 9040:1997 §24, table 15.
 * @constant
 */
export
const ParamOfferList_deliveryControl_none: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary none
 * @description
 *
 * Offers delivery-control `"none"`. ISO/IEC 9040:1997 §24, table 15.
 * @constant
 */
export
const none: number = ParamOfferList_deliveryControl_none; /* SHORT_NAMED_BIT */

/**
 * @summary ParamOfferList_deliveryControl_simple
 * @description
 *
 * Offers delivery-control `"simple"`. ISO/IEC 9040:1997 §24,
 * table 15.
 * @constant
 */
export
const ParamOfferList_deliveryControl_simple: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary simple
 * @description
 *
 * Offers delivery-control `"simple"`. ISO/IEC 9040:1997 §24,
 * table 15.
 * @constant
 */
export
const simple: number = ParamOfferList_deliveryControl_simple; /* SHORT_NAMED_BIT */

/**
 * @summary ParamOfferList_deliveryControl_quarantine
 * @description
 *
 * Offers delivery-control `"quarantine"` (hold NDQs until a DLQ).
 * ISO/IEC 9040:1997 §24, table 15.
 * @constant
 */
export
const ParamOfferList_deliveryControl_quarantine: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary quarantine
 * @description
 *
 * Offers delivery-control `"quarantine"` (hold NDQs until a DLQ).
 * ISO/IEC 9040:1997 §24, table 15.
 * @constant
 */
export
const quarantine: number = ParamOfferList_deliveryControl_quarantine; /* SHORT_NAMED_BIT */
export const _decode_ParamOfferList_deliveryControl = $._decodeBitString;
export const _encode_ParamOfferList_deliveryControl = $._encodeBitString;


/* eslint-enable */
