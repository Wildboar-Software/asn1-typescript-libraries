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
 * @summary ParameterOffers_priority
 * @description
 *
 * Offered `CO-priority` values. Set bits are offered.
 * Default `"normal"`. Selects which PDU carries updates:
 * NDQ (normal, subject to delivery-control), HDQ (high),
 * UDQ (urgent). High/urgent are not quarantined and may
 * overtake earlier normal updates. Urgent Data FU affects
 * UDQ mapping, not PDU availability.
 * ISO/IEC 9040:1997 §20.1.4, §24.5;
 * ISO/IEC 9041-1:1997 §6.12, §6.14, §6.25.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-priority ::= BIT STRING { normal (0), high (1), urgent (2) }
 * ```
 */
export
type ParameterOffers_priority = BIT_STRING;

/**
 * @summary ParameterOffers_priority_normal
 * @description
 *
 * NDQ; subject to delivery-control; may have trigger.
 * Default. ISO/IEC 9040:1997 §20.1.4, table 11, §24.5;
 * ISO/IEC 9041-1:1997 §6.14.
 * @constant
 */
export
const ParameterOffers_priority_normal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary normal
 * @description
 *
 * NDQ; subject to delivery-control; may have trigger.
 * Default. ISO/IEC 9040:1997 §20.1.4, table 11, §24.5;
 * ISO/IEC 9041-1:1997 §6.14.
 * @constant
 */
export
const normal: number = ParameterOffers_priority_normal; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_priority_high
 * @description
 *
 * HDQ; not quarantined; may overtake earlier normal updates.
 * Cannot have trigger. ISO/IEC 9040:1997 §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.12.
 * @constant
 */
export
const ParameterOffers_priority_high: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary high
 * @description
 *
 * HDQ; not quarantined; may overtake earlier normal updates.
 * Cannot have trigger. ISO/IEC 9040:1997 §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.12.
 * @constant
 */
export
const high: number = ParameterOffers_priority_high; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_priority_urgent
 * @description
 *
 * UDQ; used for non-destructive interrupt. Urgent Data FU
 * affects mapping, not availability of the PDU. Cannot have
 * trigger. ISO/IEC 9040:1997 §7.7, §10.3, §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.25.
 * @constant
 */
export
const ParameterOffers_priority_urgent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary urgent
 * @description
 *
 * UDQ; used for non-destructive interrupt. Urgent Data FU
 * affects mapping, not availability of the PDU. Cannot have
 * trigger. ISO/IEC 9040:1997 §7.7, §10.3, §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.25.
 * @constant
 */
export
const urgent: number = ParameterOffers_priority_urgent; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_priority = $._decodeBitString;
export const _encode_ParameterOffers_priority = $._encodeBitString;


/* eslint-enable */
