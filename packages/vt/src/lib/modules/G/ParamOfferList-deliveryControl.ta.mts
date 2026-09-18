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
 * @constant
 */
export
const ParamOfferList_deliveryControl_none: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary none
 * @constant
 */
export
const none: number = ParamOfferList_deliveryControl_none; /* SHORT_NAMED_BIT */

/**
 * @summary ParamOfferList_deliveryControl_simple
 * @constant
 */
export
const ParamOfferList_deliveryControl_simple: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary simple
 * @constant
 */
export
const simple: number = ParamOfferList_deliveryControl_simple; /* SHORT_NAMED_BIT */

/**
 * @summary ParamOfferList_deliveryControl_quarantine
 * @constant
 */
export
const ParamOfferList_deliveryControl_quarantine: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary quarantine
 * @constant
 */
export
const quarantine: number = ParamOfferList_deliveryControl_quarantine; /* SHORT_NAMED_BIT */
export const _decode_ParamOfferList_deliveryControl = $._decodeBitString;
export const _encode_ParamOfferList_deliveryControl = $._encodeBitString;


/* eslint-enable */
