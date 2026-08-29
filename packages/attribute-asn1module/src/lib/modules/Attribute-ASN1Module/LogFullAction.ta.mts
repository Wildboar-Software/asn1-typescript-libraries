/* eslint-disable */
import {
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
 * @summary LogFullAction
 * @description
 *
 * What the log does when full: wrap (overwrite oldest) or halt (stop logging).
 * MATCHES FOR EQUALITY. `{smi2AttributeID 58}`. ITU-T Rec. X.721 (02/92)
 * §10.7.4.10; ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_LogFullAction {
    wrap = 0,
    halt = 1,
}

/**
 * @summary LogFullAction
 * @description
 *
 * What the log does when full: wrap (overwrite oldest) or halt (stop logging).
 * MATCHES FOR EQUALITY. `{smi2AttributeID 58}`. ITU-T Rec. X.721 (02/92)
 * §10.7.4.10; ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```
 *
 * @enum {number}
 */
export
type LogFullAction = _enum_for_LogFullAction;

/**
 * @summary LogFullAction
 * @description
 *
 * What the log does when full: wrap (overwrite oldest) or halt (stop logging).
 * MATCHES FOR EQUALITY. `{smi2AttributeID 58}`. ITU-T Rec. X.721 (02/92)
 * §10.7.4.10; ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```
 *
 * @enum {number}
 */
export
const LogFullAction = _enum_for_LogFullAction;

/**
 * @summary LogFullAction_wrap
 * @description
 *
 * When full, overwrite the oldest records. ITU-T Rec. X.721 (02/92) §10.7.4.10;
 * ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * @constant
 * @type {number}
 */
export
const LogFullAction_wrap: LogFullAction = LogFullAction.wrap; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrap
 * @description
 *
 * When full, overwrite the oldest records. ITU-T Rec. X.721 (02/92) §10.7.4.10;
 * ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * @constant
 * @type {number}
 */
export
const wrap: LogFullAction = LogFullAction.wrap; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogFullAction_halt
 * @description
 *
 * When full, stop accepting new records. ITU-T Rec. X.721 (02/92) §10.7.4.10;
 * ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * @constant
 * @type {number}
 */
export
const LogFullAction_halt: LogFullAction = LogFullAction.halt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary halt
 * @description
 *
 * When full, stop accepting new records. ITU-T Rec. X.721 (02/92) §10.7.4.10;
 * ITU-T Rec. X.735 | ISO/IEC 10164-6.
 *
 * @constant
 * @type {number}
 */
export
const halt: LogFullAction = LogFullAction.halt; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_LogFullAction = $._decodeEnumerated;


export const _encode_LogFullAction = $._encodeEnumerated;


/* eslint-enable */
