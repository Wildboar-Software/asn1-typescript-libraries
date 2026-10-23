/* eslint-disable */
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
const TriggerStatus_created: TriggerStatus = TriggerStatus.created; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary created
 * @constant
 * @type {number}
 */
export
const created: TriggerStatus = TriggerStatus.created; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_alreadyExist
 * @constant
 * @type {number}
 */
export
const TriggerStatus_alreadyExist: TriggerStatus = TriggerStatus.alreadyExist; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyExist
 * @constant
 * @type {number}
 */
export
const alreadyExist: TriggerStatus = TriggerStatus.alreadyExist; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_deleted
 * @constant
 * @type {number}
 */
export
const TriggerStatus_deleted: TriggerStatus = TriggerStatus.deleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export
const deleted: TriggerStatus = TriggerStatus.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerStatus_unknownTrigger
 * @constant
 * @type {number}
 */
export
const TriggerStatus_unknownTrigger: TriggerStatus = TriggerStatus.unknownTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownTrigger
 * @constant
 * @type {number}
 */
export
const unknownTrigger: TriggerStatus = TriggerStatus.unknownTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TriggerStatus: $.ASN1Decoder<TriggerStatus> = $._decodeEnumerated;

export
const _encode_TriggerStatus: $.ASN1Encoder<TriggerStatus> = $._encodeEnumerated;

/* eslint-enable */
