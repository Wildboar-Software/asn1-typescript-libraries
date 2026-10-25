/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MiscCallInfo_messageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-messageType ::=
 * ENUMERATED {
 *   request(0),
 *   notification(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MiscCallInfo_messageType {
    request = 0,
    notification = 1,
}

/**
 * @summary MiscCallInfo_messageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-messageType ::=
 * ENUMERATED {
 *   request(0),
 *   notification(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MiscCallInfo_messageType = _enum_for_MiscCallInfo_messageType;

/**
 * @summary MiscCallInfo_messageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-messageType ::=
 * ENUMERATED {
 *   request(0),
 *   notification(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MiscCallInfo_messageType: typeof _enum_for_MiscCallInfo_messageType = _enum_for_MiscCallInfo_messageType;

/**
 * @summary MiscCallInfo_messageType_request
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_messageType_request: _enum_for_MiscCallInfo_messageType.request = MiscCallInfo_messageType.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export
const request: _enum_for_MiscCallInfo_messageType.request = MiscCallInfo_messageType.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_messageType_notification
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_messageType_notification: _enum_for_MiscCallInfo_messageType.notification = MiscCallInfo_messageType.notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification
 * @constant
 * @type {number}
 */
export
const notification: _enum_for_MiscCallInfo_messageType.notification = MiscCallInfo_messageType.notification; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_MiscCallInfo_messageType(el: _Element): MiscCallInfo_messageType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case MiscCallInfo_messageType.request: return MiscCallInfo_messageType.request;
        case MiscCallInfo_messageType.notification: return MiscCallInfo_messageType.notification;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for MiscCallInfo_messageType.",
                el,
            );
    }
}

export
const _encode_MiscCallInfo_messageType: $.ASN1Encoder<MiscCallInfo_messageType> = $._encodeEnumerated as $.ASN1Encoder<MiscCallInfo_messageType>;

/* eslint-enable */
