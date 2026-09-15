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
 * @summary MiscCallInfo_messageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-messageType ::= ENUMERATED {
 *     request(0), notification(1)
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
 * MiscCallInfo-messageType ::= ENUMERATED {
 *     request(0), notification(1)
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
 * MiscCallInfo-messageType ::= ENUMERATED {
 *     request(0), notification(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MiscCallInfo_messageType = _enum_for_MiscCallInfo_messageType;

/**
 * @summary MiscCallInfo_messageType_request
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_messageType_request: MiscCallInfo_messageType = MiscCallInfo_messageType.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export
const request: MiscCallInfo_messageType = MiscCallInfo_messageType.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_messageType_notification
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_messageType_notification: MiscCallInfo_messageType = MiscCallInfo_messageType.notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification
 * @constant
 * @type {number}
 */
export
const notification: MiscCallInfo_messageType = MiscCallInfo_messageType.notification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MiscCallInfo_messageType = $._decodeEnumerated;
export const _encode_MiscCallInfo_messageType = $._encodeEnumerated;


/* eslint-enable */
