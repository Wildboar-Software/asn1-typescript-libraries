/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LCSClientType {
    emergencyServices = 0,
    valueAddedServices = 1,
    plmnOperatorServices = 2,
    lawfulInterceptServices = 3,
}

/**
 * @summary LCSClientType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientType  ::=  ENUMERATED {
 *    emergencyServices          ( 0 ),
 *    valueAddedServices         ( 1 ),
 *    plmnOperatorServices       ( 2 ),
 *    lawfulInterceptServices    ( 3 ),
 *    ...  }
 * ```
 * 
 * @enum {number}
 */
export
type LCSClientType = _enum_for_LCSClientType | ENUMERATED;

/**
 * @summary LCSClientType_emergencyServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_emergencyServices: LCSClientType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyServices
 * @constant
 * @type {number}
 */
export
const emergencyServices: LCSClientType = LCSClientType_emergencyServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_valueAddedServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_valueAddedServices: LCSClientType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary valueAddedServices
 * @constant
 * @type {number}
 */
export
const valueAddedServices: LCSClientType = LCSClientType_valueAddedServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_plmnOperatorServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_plmnOperatorServices: LCSClientType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmnOperatorServices
 * @constant
 * @type {number}
 */
export
const plmnOperatorServices: LCSClientType = LCSClientType_plmnOperatorServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientType_lawfulInterceptServices
 * @constant
 * @type {number}
 */
export
const LCSClientType_lawfulInterceptServices: LCSClientType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lawfulInterceptServices
 * @constant
 * @type {number}
 */
export
const lawfulInterceptServices: LCSClientType = LCSClientType_lawfulInterceptServices; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_LCSClientType: $.ASN1Decoder<LCSClientType> = $._decodeEnumerated;

export
const _encode_LCSClientType: $.ASN1Encoder<LCSClientType> = $._encodeEnumerated;

/* eslint-enable */
