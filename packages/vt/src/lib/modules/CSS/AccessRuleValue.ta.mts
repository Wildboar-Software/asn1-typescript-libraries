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
 * @summary AccessRuleValue
 * @description
 *
 * Selected `CO-access` rule (one integer). Default `"NSAC"`.
 * Combined rules and `"no-access"` (and WACI/WACA in S-mode)
 * need Enhanced Access-rules FU. Display objects cannot use
 * combined rules; COs can (with the FU). WAVAR* rules are
 * S-mode only. ISO/IEC 9040:1997 §9, §10.5, §20.1.3,
 * table 1, table 11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRuleValue  ::=  INTEGER {
 *     wavar           (0),
 *     waci            (1),
 *     waca            (2),
 *     nsac            (3),
 *     wavar-and-waci  (4),
 *     wavar-and-waca  (5),
 *     no-access       (6)
 * }
 * ```
 */
export
type AccessRuleValue = INTEGER;

/**
 * @summary AccessRuleValue_wavar
 * @description
 *
 * Only the WAVAR-token owner may update (S-mode).
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar = 0 satisfies AccessRuleValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar
 * @description
 *
 * Only the WAVAR-token owner may update (S-mode).
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const wavar = AccessRuleValue_wavar satisfies AccessRuleValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waci
 * @description
 *
 * Only the association initiator may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_waci = 1 satisfies AccessRuleValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waci
 * @description
 *
 * Only the association initiator may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const waci = AccessRuleValue_waci satisfies AccessRuleValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waca
 * @description
 *
 * Only the association acceptor may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_waca = 2 satisfies AccessRuleValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waca
 * @description
 *
 * Only the association acceptor may update.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const waca = AccessRuleValue_waca satisfies AccessRuleValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_nsac
 * @description
 *
 * Either VT-user may update at any time. Default `"NSAC"`.
 * Collisions are not prevented by the service provider.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_nsac = 3 satisfies AccessRuleValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_nsac
 * @description
 *
 * Either VT-user may update at any time. Default `"NSAC"`.
 * Collisions are not prevented by the service provider.
 * ISO/IEC 9040:1997 §9, table 1, §20.1.3.
 * @constant
 * @type {number}
 */
export
const nsac = AccessRuleValue_nsac satisfies AccessRuleValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waci
 * @description
 *
 * Initiator and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar_and_waci = 4 satisfies AccessRuleValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waci
 * @description
 *
 * Initiator and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 * @type {number}
 */
export
const wavar_and_waci = AccessRuleValue_wavar_and_waci satisfies AccessRuleValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waca
 * @description
 *
 * Acceptor and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar_and_waca = 5 satisfies AccessRuleValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waca
 * @description
 *
 * Acceptor and currently owns WAVAR (S-mode). Requires
 * Enhanced Access-rules FU. Display objects cannot use this
 * combined rule. ISO/IEC 9040:1997 §9, §10.5, table 1,
 * table 11.
 * @constant
 * @type {number}
 */
export
const wavar_and_waca = AccessRuleValue_wavar_and_waca satisfies AccessRuleValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_no_access
 * @description
 *
 * Neither VT-user may update. Content is defined in a
 * register entry or profile. Requires Enhanced Access-rules
 * FU. ISO/IEC 9040:1997 §9, §10.5, §20.1.3, table 1.
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_no_access = 6 satisfies AccessRuleValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_no_access
 * @description
 *
 * Neither VT-user may update. Content is defined in a
 * register entry or profile. Requires Enhanced Access-rules
 * FU. ISO/IEC 9040:1997 §9, §10.5, §20.1.3, table 1.
 * @constant
 * @type {number}
 */
export
const no_access = AccessRuleValue_no_access satisfies AccessRuleValue; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AccessRuleValue = $._decodeInteger;
export const _encode_AccessRuleValue = $._encodeInteger;


/* eslint-enable */
