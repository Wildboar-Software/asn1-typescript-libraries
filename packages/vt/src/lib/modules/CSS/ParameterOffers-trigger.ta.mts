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
 * @summary ParameterOffers_trigger
 * @description
 *
 * Offered `CO-trigger` values. Set bits are offered.
 * `"selected"` is valid only if `CO-priority` is `"normal"`.
 * An update to a trigger CO delivers queued updates and, in
 * S-mode, transfers WAVAR to the peer. Default
 * `"not selected"`. ISO/IEC 9040:1997 §3.3.43, §20.1.5,
 * §24.1, §31.1.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-trigger ::= BIT STRING { yes (0), no (1) }
 * ```
 */
export
type ParameterOffers_trigger = BIT_STRING;

/**
 * @summary ParameterOffers_trigger_yes
 * @description
 *
 * Offer `"selected"` (bit 0). Valid only if `CO-priority` is
 * `"normal"`. ISO/IEC 9040:1997 §3.3.43, §20.1.5.
 * @constant
 */
export
const ParameterOffers_trigger_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @description
 *
 * Offer `"selected"` (bit 0). Valid only if `CO-priority` is
 * `"normal"`. ISO/IEC 9040:1997 §3.3.43, §20.1.5.
 * @constant
 */
export
const yes: number = ParameterOffers_trigger_yes; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_trigger_no
 * @description
 *
 * Offer `"not selected"` (bit 1). Default.
 * ISO/IEC 9040:1997 table 9, §20.1.5.
 * @constant
 */
export
const ParameterOffers_trigger_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @description
 *
 * Offer `"not selected"` (bit 1). Default.
 * ISO/IEC 9040:1997 table 9, §20.1.5.
 * @constant
 */
export
const no: number = ParameterOffers_trigger_no; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_trigger = $._decodeBitString;
export const _encode_ParameterOffers_trigger = $._encodeBitString;


/* eslint-enable */
