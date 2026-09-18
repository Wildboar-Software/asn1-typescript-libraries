/* eslint-disable */
import {
    INTEGER,
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
 * @summary ParameterValues_priority
 * @description
 *
 * Selected `CO-priority`. Default `"normal"`. Selects which
 * PDU carries updates: NDQ (normal), HDQ (high), UDQ
 * (urgent). High/urgent are not quarantined and may overtake
 * earlier normal updates. Urgent Data FU affects UDQ
 * mapping, not PDU availability.
 * ISO/IEC 9040:1997 §20.1.4, §24.5;
 * ISO/IEC 9041-1:1997 §6.12, §6.14, §6.25.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-priority ::= INTEGER { normal (0), high (1), urgent (2) }
 * ```
 */
export
type ParameterValues_priority = INTEGER;

/**
 * @summary ParameterValues_priority_normal
 * @description
 *
 * NDQ; subject to delivery-control; may have trigger.
 * Default. ISO/IEC 9040:1997 §20.1.4, table 11, §24.5;
 * ISO/IEC 9041-1:1997 §6.14.
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_normal: ParameterValues_priority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_normal
 * @description
 *
 * NDQ; subject to delivery-control; may have trigger.
 * Default. ISO/IEC 9040:1997 §20.1.4, table 11, §24.5;
 * ISO/IEC 9041-1:1997 §6.14.
 * @constant
 * @type {number}
 */
export
const normal: ParameterValues_priority = ParameterValues_priority_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_high
 * @description
 *
 * HDQ; not quarantined; may overtake earlier normal updates.
 * Cannot have trigger. ISO/IEC 9040:1997 §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.12.
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_high: ParameterValues_priority = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_high
 * @description
 *
 * HDQ; not quarantined; may overtake earlier normal updates.
 * Cannot have trigger. ISO/IEC 9040:1997 §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.12.
 * @constant
 * @type {number}
 */
export
const high: ParameterValues_priority = ParameterValues_priority_high; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_urgent
 * @description
 *
 * UDQ; used for non-destructive interrupt. Urgent Data FU
 * affects mapping, not availability of the PDU. Cannot have
 * trigger. ISO/IEC 9040:1997 §7.7, §10.3, §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.25.
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_urgent: ParameterValues_priority = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_urgent
 * @description
 *
 * UDQ; used for non-destructive interrupt. Urgent Data FU
 * affects mapping, not availability of the PDU. Cannot have
 * trigger. ISO/IEC 9040:1997 §7.7, §10.3, §20.1.4, table 11,
 * §24.5; ISO/IEC 9041-1:1997 §6.25.
 * @constant
 * @type {number}
 */
export
const urgent: ParameterValues_priority = ParameterValues_priority_urgent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterValues_priority = $._decodeInteger;
export const _encode_ParameterValues_priority = $._encodeInteger;


/* eslint-enable */
