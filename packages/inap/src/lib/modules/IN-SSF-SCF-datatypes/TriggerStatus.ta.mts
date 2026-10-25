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
const TriggerStatus: typeof _enum_for_TriggerStatus = _enum_for_TriggerStatus;

/**
 * @summary TriggerStatus_created
 * @constant
 * @type {number}
 */
export
const TriggerStatus_created: _enum_for_TriggerStatus.created = TriggerStatus.created; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary created
 * @constant
 * @type {number}
 */
export
const created: _enum_for_TriggerStatus.created = TriggerStatus.created; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_alreadyExist
 * @constant
 * @type {number}
 */
export
const TriggerStatus_alreadyExist: _enum_for_TriggerStatus.alreadyExist = TriggerStatus.alreadyExist; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyExist
 * @constant
 * @type {number}
 */
export
const alreadyExist: _enum_for_TriggerStatus.alreadyExist = TriggerStatus.alreadyExist; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_deleted
 * @constant
 * @type {number}
 */
export
const TriggerStatus_deleted: _enum_for_TriggerStatus.deleted = TriggerStatus.deleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export
const deleted: _enum_for_TriggerStatus.deleted = TriggerStatus.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_unknownTrigger
 * @constant
 * @type {number}
 */
export
const TriggerStatus_unknownTrigger: _enum_for_TriggerStatus.unknownTrigger = TriggerStatus.unknownTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownTrigger
 * @constant
 * @type {number}
 */
export
const unknownTrigger: _enum_for_TriggerStatus.unknownTrigger = TriggerStatus.unknownTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

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
