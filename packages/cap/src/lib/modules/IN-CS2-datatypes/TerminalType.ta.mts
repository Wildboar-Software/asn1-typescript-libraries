/* eslint-disable */
import {
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
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  ENUMERATED {
 *   unknown(0), dialPulse(1), dtmf(2), isdn(3), isdnNoDtmf(4), spare(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TerminalType {
    unknown = 0,
    dialPulse = 1,
    dtmf = 2,
    isdn = 3,
    isdnNoDtmf = 4,
    spare = 16,
}

/**
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  ENUMERATED {
 *   unknown(0), dialPulse(1), dtmf(2), isdn(3), isdnNoDtmf(4), spare(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TerminalType = _enum_for_TerminalType;

/**
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  ENUMERATED {
 *   unknown(0), dialPulse(1), dtmf(2), isdn(3), isdnNoDtmf(4), spare(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TerminalType = _enum_for_TerminalType;

/**
 * @summary TerminalType_unknown
 * @constant
 * @type {number}
 */
export
const TerminalType_unknown = TerminalType.unknown satisfies TerminalType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown = TerminalType.unknown satisfies TerminalType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_dialPulse
 * @constant
 * @type {number}
 */
export
const TerminalType_dialPulse = TerminalType.dialPulse satisfies TerminalType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialPulse
 * @constant
 * @type {number}
 */
export
const dialPulse = TerminalType.dialPulse satisfies TerminalType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_dtmf
 * @constant
 * @type {number}
 */
export
const TerminalType_dtmf = TerminalType.dtmf satisfies TerminalType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmf
 * @constant
 * @type {number}
 */
export
const dtmf = TerminalType.dtmf satisfies TerminalType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_isdn
 * @constant
 * @type {number}
 */
export
const TerminalType_isdn = TerminalType.isdn satisfies TerminalType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isdn
 * @constant
 * @type {number}
 */
export
const isdn = TerminalType.isdn satisfies TerminalType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_isdnNoDtmf
 * @constant
 * @type {number}
 */
export
const TerminalType_isdnNoDtmf = TerminalType.isdnNoDtmf satisfies TerminalType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isdnNoDtmf
 * @constant
 * @type {number}
 */
export
const isdnNoDtmf = TerminalType.isdnNoDtmf satisfies TerminalType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_spare
 * @constant
 * @type {number}
 */
export
const TerminalType_spare = TerminalType.spare satisfies TerminalType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spare
 * @constant
 * @type {number}
 */
export
const spare = TerminalType.spare satisfies TerminalType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TerminalType = $._decodeEnumerated;
export const _encode_TerminalType = $._encodeEnumerated;


/* eslint-enable */
