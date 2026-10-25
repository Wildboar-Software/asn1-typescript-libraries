/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)
 *                         -- others ffs
 *                         }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TimerID {
    tssf = 0,
}

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)
 *                         -- others ffs
 *                         }
 * ```
 * 
 * @enum {number}
 */
export
type TimerID = _enum_for_TimerID;

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)
 *                         -- others ffs
 *                         }
 * ```
 * 
 * @enum {number}
 */
export
const TimerID = _enum_for_TimerID;

/**
 * @summary TimerID_tssf
 * @constant
 * @type {number}
 */
export
const TimerID_tssf = TimerID.tssf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tssf
 * @constant
 * @type {number}
 */
export
const tssf = TimerID.tssf; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_TimerID(el: _Element): TimerID {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case TimerID.tssf: return TimerID.tssf;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for TimerID.",
                el,
            );
    }
}

export
const _encode_TimerID: $.ASN1Encoder<TimerID> = $._encodeEnumerated as $.ASN1Encoder<TimerID>;

/* eslint-enable */
