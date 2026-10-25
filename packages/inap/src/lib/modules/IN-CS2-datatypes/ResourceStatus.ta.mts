/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceStatus  ::=  ENUMERATED {busy(0), idle(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ResourceStatus {
    busy = 0,
    idle = 1,
}

/**
 * @summary ResourceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceStatus  ::=  ENUMERATED {busy(0), idle(1)}
 * ```
 * 
 * @enum {number}
 */
export
type ResourceStatus = _enum_for_ResourceStatus;

/**
 * @summary ResourceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceStatus  ::=  ENUMERATED {busy(0), idle(1)}
 * ```
 * 
 * @enum {number}
 */
export
const ResourceStatus = _enum_for_ResourceStatus;

/**
 * @summary ResourceStatus_busy
 * @constant
 * @type {number}
 */
export
const ResourceStatus_busy = ResourceStatus.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy = ResourceStatus.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResourceStatus_idle
 * @constant
 * @type {number}
 */
export
const ResourceStatus_idle = ResourceStatus.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle = ResourceStatus.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ResourceStatus(el: _Element): ResourceStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ResourceStatus.busy: return ResourceStatus.busy;
        case ResourceStatus.idle: return ResourceStatus.idle;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ResourceStatus.",
                el,
            );
    }
}

export
const _encode_ResourceStatus: $.ASN1Encoder<ResourceStatus> = $._encodeEnumerated as $.ASN1Encoder<ResourceStatus>;

/* eslint-enable */
