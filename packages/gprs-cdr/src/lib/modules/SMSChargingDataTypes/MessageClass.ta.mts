/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageClass  ::=  ENUMERATED {
 *    personal               ( 0 ),
 *    advertisement          ( 1 ),
 *    information-service    ( 2 ),
 *    auto                   ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MessageClass {
    personal = 0,
    advertisement = 1,
    information_service = 2,
    auto = 3,
}

/**
 * @summary MessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageClass  ::=  ENUMERATED {
 *    personal               ( 0 ),
 *    advertisement          ( 1 ),
 *    information-service    ( 2 ),
 *    auto                   ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MessageClass = _enum_for_MessageClass;

/**
 * @summary MessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageClass  ::=  ENUMERATED {
 *    personal               ( 0 ),
 *    advertisement          ( 1 ),
 *    information-service    ( 2 ),
 *    auto                   ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MessageClass = _enum_for_MessageClass;

/**
 * @summary MessageClass_personal
 * @constant
 * @type {number}
 */
export
const MessageClass_personal: MessageClass = MessageClass.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: MessageClass = MessageClass.personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_advertisement
 * @constant
 * @type {number}
 */
export
const MessageClass_advertisement: MessageClass = MessageClass.advertisement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @constant
 * @type {number}
 */
export
const advertisement: MessageClass = MessageClass.advertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_information_service
 * @constant
 * @type {number}
 */
export
const MessageClass_information_service: MessageClass = MessageClass.information_service; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary information_service
 * @constant
 * @type {number}
 */
export
const information_service: MessageClass = MessageClass.information_service; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_auto
 * @constant
 * @type {number}
 */
export
const MessageClass_auto: MessageClass = MessageClass.auto; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @constant
 * @type {number}
 */
export
const auto: MessageClass = MessageClass.auto; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MessageClass: $.ASN1Decoder<MessageClass> = $._decodeEnumerated;

export
const _encode_MessageClass: $.ASN1Encoder<MessageClass> = $._encodeEnumerated;

/* eslint-enable */
