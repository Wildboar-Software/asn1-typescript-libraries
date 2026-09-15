/* eslint-disable */
import {
    ENUMERATED,
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

export
enum _enum_for_V92ModDiag_Item_lastMOHaction {
    mohaccepted = 0,
    mohdeclined = 1,
    mohdenied = 2,
    mohclrdn = 3,
}

/**
 * @summary V92ModDiag_Item_lastMOHaction
 * @description
 *
 * Table 12/V.59: `mohaccepted`(0) both ends accepted hold, `mohdeclined`(1)
 * interrupted modem declines hold and tries to resume, `mohdenied`(2) remote
 * denied hold, `mohclrdn`(3) cleardown in response to the interrupt/hold
 * request. ITU-T Rec. V.59 (11/2000) §6.8.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V92ModDiag-Item-lastMOHaction ::= ENUMERATED {mohaccepted(0), mohdeclined(1), mohdenied(2),
 *                             mohclrdn(3), ...
 *                             }
 * ```
 * 
 * @enum {number}
 */
export
type V92ModDiag_Item_lastMOHaction = _enum_for_V92ModDiag_Item_lastMOHaction | ENUMERATED;

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohaccepted
 * @description
 *
 * Both V.92 modems signalled and accepted modem-on-hold. Table 12/V.59. ITU-T
 * Rec. V.59 (11/2000) §6.8.5.
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohaccepted: V92ModDiag_Item_lastMOHaction = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohaccepted
 * @constant
 * @type {number}
 */
export
const mohaccepted: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohaccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohdeclined
 * @description
 *
 * Modem receiving the interrupt declines hold and tries to resume. Table
 * 12/V.59. ITU-T Rec. V.59 (11/2000) §6.8.5.
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohdeclined: V92ModDiag_Item_lastMOHaction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohdeclined
 * @constant
 * @type {number}
 */
export
const mohdeclined: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohdeclined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohdenied
 * @description
 *
 * Hold request denied by the remote modem. Table 12/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.5.
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohdenied: V92ModDiag_Item_lastMOHaction = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohdenied
 * @constant
 * @type {number}
 */
export
const mohdenied: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohdenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohclrdn
 * @description
 *
 * Cleardown negotiated in response to the interrupt or hold request. Table
 * 12/V.59. ITU-T Rec. V.59 (11/2000) §6.8.5.
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohclrdn: V92ModDiag_Item_lastMOHaction = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohclrdn
 * @constant
 * @type {number}
 */
export
const mohclrdn: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohclrdn; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_V92ModDiag_Item_lastMOHaction = $._decodeEnumerated;
export const _encode_V92ModDiag_Item_lastMOHaction = $._encodeEnumerated;

/* eslint-enable */
