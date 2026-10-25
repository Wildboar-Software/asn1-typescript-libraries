/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const TerminalType_unknown = TerminalType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown = TerminalType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_dialPulse
 * @constant
 * @type {number}
 */
export
const TerminalType_dialPulse = TerminalType.dialPulse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialPulse
 * @constant
 * @type {number}
 */
export
const dialPulse = TerminalType.dialPulse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_dtmf
 * @constant
 * @type {number}
 */
export
const TerminalType_dtmf = TerminalType.dtmf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmf
 * @constant
 * @type {number}
 */
export
const dtmf = TerminalType.dtmf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_isdn
 * @constant
 * @type {number}
 */
export
const TerminalType_isdn = TerminalType.isdn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isdn
 * @constant
 * @type {number}
 */
export
const isdn = TerminalType.isdn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_isdnNoDtmf
 * @constant
 * @type {number}
 */
export
const TerminalType_isdnNoDtmf = TerminalType.isdnNoDtmf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isdnNoDtmf
 * @constant
 * @type {number}
 */
export
const isdnNoDtmf = TerminalType.isdnNoDtmf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminalType_spare
 * @constant
 * @type {number}
 */
export
const TerminalType_spare = TerminalType.spare; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spare
 * @constant
 * @type {number}
 */
export
const spare = TerminalType.spare; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_TerminalType(el: _Element): TerminalType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case TerminalType.unknown: return TerminalType.unknown;
        case TerminalType.dialPulse: return TerminalType.dialPulse;
        case TerminalType.dtmf: return TerminalType.dtmf;
        case TerminalType.isdn: return TerminalType.isdn;
        case TerminalType.isdnNoDtmf: return TerminalType.isdnNoDtmf;
        case TerminalType.spare: return TerminalType.spare;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for TerminalType.",
                el,
            );
    }
}

export
const _encode_TerminalType: $.ASN1Encoder<TerminalType> = $._encodeEnumerated as $.ASN1Encoder<TerminalType>;

/* eslint-enable */
