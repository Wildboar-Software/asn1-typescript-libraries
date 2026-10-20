/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary POCEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCEventType  ::=  ENUMERATED {
 *    normal                   ( 0 ),
 *    instantPersonalAlert     ( 1 ),
 *    pOCGroupAdvertisement    ( 2 ),
 *    earlySessionSettingup    ( 3 ),
 *    pOCTalkBurst             ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_POCEventType {
    normal = 0,
    instantPersonalAlert = 1,
    pOCGroupAdvertisement = 2,
    earlySessionSettingup = 3,
    pOCTalkBurst = 4,
}

/**
 * @summary POCEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCEventType  ::=  ENUMERATED {
 *    normal                   ( 0 ),
 *    instantPersonalAlert     ( 1 ),
 *    pOCGroupAdvertisement    ( 2 ),
 *    earlySessionSettingup    ( 3 ),
 *    pOCTalkBurst             ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
type POCEventType = _enum_for_POCEventType;

/**
 * @summary POCEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCEventType  ::=  ENUMERATED {
 *    normal                   ( 0 ),
 *    instantPersonalAlert     ( 1 ),
 *    pOCGroupAdvertisement    ( 2 ),
 *    earlySessionSettingup    ( 3 ),
 *    pOCTalkBurst             ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const POCEventType = _enum_for_POCEventType;

/**
 * @summary POCEventType_normal
 * @constant
 * @type {number}
 */
export
const POCEventType_normal: POCEventType = POCEventType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: POCEventType = POCEventType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_instantPersonalAlert
 * @constant
 * @type {number}
 */
export
const POCEventType_instantPersonalAlert: POCEventType = POCEventType.instantPersonalAlert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary instantPersonalAlert
 * @constant
 * @type {number}
 */
export
const instantPersonalAlert: POCEventType = POCEventType.instantPersonalAlert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_pOCGroupAdvertisement
 * @constant
 * @type {number}
 */
export
const POCEventType_pOCGroupAdvertisement: POCEventType = POCEventType.pOCGroupAdvertisement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOCGroupAdvertisement
 * @constant
 * @type {number}
 */
export
const pOCGroupAdvertisement: POCEventType = POCEventType.pOCGroupAdvertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_earlySessionSettingup
 * @constant
 * @type {number}
 */
export
const POCEventType_earlySessionSettingup: POCEventType = POCEventType.earlySessionSettingup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlySessionSettingup
 * @constant
 * @type {number}
 */
export
const earlySessionSettingup: POCEventType = POCEventType.earlySessionSettingup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_pOCTalkBurst
 * @constant
 * @type {number}
 */
export
const POCEventType_pOCTalkBurst: POCEventType = POCEventType.pOCTalkBurst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOCTalkBurst
 * @constant
 * @type {number}
 */
export
const pOCTalkBurst: POCEventType = POCEventType.pOCTalkBurst; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_POCEventType: $.ASN1Decoder<POCEventType> = $._decodeEnumerated;

export
const _encode_POCEventType: $.ASN1Encoder<POCEventType> = $._encodeEnumerated;

/* eslint-enable */
