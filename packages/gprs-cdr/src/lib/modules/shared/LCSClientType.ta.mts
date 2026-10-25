/* eslint-disable */
import {
    type ENUMERATED
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
 * Type of the LCS client that invoked the location request, present
 * when that type is available (category C). The GMLC writes it on
 * LCS-GMO-CDR, LCS-RGMT-CDR, LCS-HGMT-CDR, LCS-VGMT-CDR, and
 * LCS-GNI-CDR.
 *
 * An LCS client is software and/or hardware that interacts with an
 * LCS server to obtain location information for one or more mobile
 * stations. Clients subscribe to LCS, may or may not have a human
 * user, format and present the data, and may reside in the MS.
 *
 * MO-LR: the UE obtains its own location, or has it sent to another
 * LCS client. MT-LR: an external LCS client asks for the target
 * UE's location. NI-LR: positioning for an emergency call.
 *
 * TS 32.298 takes the values defined for this type in TS 29.002.
 * TS 32.271 does not define the enumerated values.
 *
 * 3GPP TS 32.271 V12.1.0 clause 3.1, clauses 5.2.3.1 to 5.2.3.3,
 * and tables 6.1.3.1.1, 6.1.3.2.1.1, 6.1.3.2.2.1, 6.1.3.2.3.1,
 * and 6.1.3.3.1.
 * 3GPP TS 32.298 V20.1.0 clauses 5.1.2.1.40, 5.1.2.2.21, and
 * 5.1.4.2.3.
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
