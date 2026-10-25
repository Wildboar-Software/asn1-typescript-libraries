/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSDetachType
 * @description
 * 
 * Indicates the type of detach as determined by the direction of the detach
 * request and the value of the DetachType information element, see table
 * 6.3.2.2.4-2.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDetachType  ::=  ENUMERATED
 * {
 *     ePSDetach(1),
 *     iMSIDetach(2),
 *     combinedEPSIMSIDetach(3),
 *     reAttachRequired(4),
 *     reAttachNotRequired(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSDetachType {
    ePSDetach = 1,
    iMSIDetach = 2,
    combinedEPSIMSIDetach = 3,
    reAttachRequired = 4,
    reAttachNotRequired = 5,
    reserved = 6,
}

/**
 * @summary EPSDetachType
 * @description
 * 
 * Indicates the type of detach as determined by the direction of the detach
 * request and the value of the DetachType information element, see table
 * 6.3.2.2.4-2.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDetachType  ::=  ENUMERATED
 * {
 *     ePSDetach(1),
 *     iMSIDetach(2),
 *     combinedEPSIMSIDetach(3),
 *     reAttachRequired(4),
 *     reAttachNotRequired(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSDetachType = _enum_for_EPSDetachType;

/**
 * @summary EPSDetachType
 * @description
 * 
 * Indicates the type of detach as determined by the direction of the detach
 * request and the value of the DetachType information element, see table
 * 6.3.2.2.4-2.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDetachType  ::=  ENUMERATED
 * {
 *     ePSDetach(1),
 *     iMSIDetach(2),
 *     combinedEPSIMSIDetach(3),
 *     reAttachRequired(4),
 *     reAttachNotRequired(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSDetachType = _enum_for_EPSDetachType;

/**
 * @summary EPSDetachType_ePSDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_ePSDetach = EPSDetachType.ePSDetach satisfies EPSDetachType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSDetach
 * @constant
 * @type {number}
 */
export
const ePSDetach = EPSDetachType.ePSDetach satisfies EPSDetachType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_iMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_iMSIDetach = EPSDetachType.iMSIDetach satisfies EPSDetachType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSIDetach
 * @constant
 * @type {number}
 */
export
const iMSIDetach = EPSDetachType.iMSIDetach satisfies EPSDetachType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_combinedEPSIMSIDetach = EPSDetachType.combinedEPSIMSIDetach satisfies EPSDetachType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSIDetach = EPSDetachType.combinedEPSIMSIDetach satisfies EPSDetachType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachRequired = EPSDetachType.reAttachRequired satisfies EPSDetachType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachRequired
 * @constant
 * @type {number}
 */
export
const reAttachRequired = EPSDetachType.reAttachRequired satisfies EPSDetachType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachNotRequired = EPSDetachType.reAttachNotRequired satisfies EPSDetachType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const reAttachNotRequired = EPSDetachType.reAttachNotRequired satisfies EPSDetachType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reserved
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reserved = EPSDetachType.reserved satisfies EPSDetachType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved = EPSDetachType.reserved satisfies EPSDetachType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSDetachType: $.ASN1Decoder<EPSDetachType> = $._decodeEnumerated;
export const _encode_EPSDetachType: $.ASN1Encoder<EPSDetachType> = $._encodeEnumerated;


/* eslint-enable */
