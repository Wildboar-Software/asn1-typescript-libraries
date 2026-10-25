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
const MessageClass: typeof _enum_for_MessageClass = _enum_for_MessageClass;

/**
 * @summary MessageClass_personal
 * @constant
 * @type {number}
 */
export
const MessageClass_personal: _enum_for_MessageClass.personal = MessageClass.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: _enum_for_MessageClass.personal = MessageClass.personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_advertisement
 * @constant
 * @type {number}
 */
export
const MessageClass_advertisement: _enum_for_MessageClass.advertisement = MessageClass.advertisement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @constant
 * @type {number}
 */
export
const advertisement: _enum_for_MessageClass.advertisement = MessageClass.advertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_information_service
 * @constant
 * @type {number}
 */
export
const MessageClass_information_service: _enum_for_MessageClass.information_service = MessageClass.information_service; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary information_service
 * @constant
 * @type {number}
 */
export
const information_service: _enum_for_MessageClass.information_service = MessageClass.information_service; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_auto
 * @constant
 * @type {number}
 */
export
const MessageClass_auto: _enum_for_MessageClass.auto = MessageClass.auto; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @constant
 * @type {number}
 */
export
const auto: _enum_for_MessageClass.auto = MessageClass.auto; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MessageClass: $.ASN1Decoder<MessageClass> = $._decodeEnumerated;

export
const _encode_MessageClass: $.ASN1Encoder<MessageClass> = $._encodeEnumerated;

/* eslint-enable */
