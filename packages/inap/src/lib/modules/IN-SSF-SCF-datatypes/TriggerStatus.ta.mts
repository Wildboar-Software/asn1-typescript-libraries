/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerStatus  ::=  ENUMERATED {
 *   created(0), alreadyExist(1), deleted(2), unknownTrigger(3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TriggerStatus {
    created = 0,
    alreadyExist = 1,
    deleted = 2,
    unknownTrigger = 3,
}

/**
 * @summary TriggerStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerStatus  ::=  ENUMERATED {
 *   created(0), alreadyExist(1), deleted(2), unknownTrigger(3)}
 * ```
 * 
 * @enum {number}
 */
export
type TriggerStatus = _enum_for_TriggerStatus;

/**
 * @summary TriggerStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerStatus  ::=  ENUMERATED {
 *   created(0), alreadyExist(1), deleted(2), unknownTrigger(3)}
 * ```
 * 
 * @enum {number}
 */
export
const TriggerStatus = _enum_for_TriggerStatus;

/**
 * @summary TriggerStatus_created
 * @constant
 * @type {number}
 */
export
const TriggerStatus_created = TriggerStatus.created satisfies TriggerStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary created
 * @constant
 * @type {number}
 */
export
const created = TriggerStatus.created satisfies TriggerStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_alreadyExist
 * @constant
 * @type {number}
 */
export
const TriggerStatus_alreadyExist = TriggerStatus.alreadyExist satisfies TriggerStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyExist
 * @constant
 * @type {number}
 */
export
const alreadyExist = TriggerStatus.alreadyExist satisfies TriggerStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_deleted
 * @constant
 * @type {number}
 */
export
const TriggerStatus_deleted = TriggerStatus.deleted satisfies TriggerStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export
const deleted = TriggerStatus.deleted satisfies TriggerStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_unknownTrigger
 * @constant
 * @type {number}
 */
export
const TriggerStatus_unknownTrigger = TriggerStatus.unknownTrigger satisfies TriggerStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownTrigger
 * @constant
 * @type {number}
 */
export
const unknownTrigger = TriggerStatus.unknownTrigger satisfies TriggerStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_TriggerStatus(el: _Element): TriggerStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case TriggerStatus.created: return TriggerStatus.created;
        case TriggerStatus.alreadyExist: return TriggerStatus.alreadyExist;
        case TriggerStatus.deleted: return TriggerStatus.deleted;
        case TriggerStatus.unknownTrigger: return TriggerStatus.unknownTrigger;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for TriggerStatus.",
                el,
            );
    }
}

export
const _encode_TriggerStatus: $.ASN1Encoder<TriggerStatus> = $._encodeEnumerated as $.ASN1Encoder<TriggerStatus>;

/* eslint-enable */
