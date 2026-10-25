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
const EPSDetachType: typeof _enum_for_EPSDetachType = _enum_for_EPSDetachType;

/**
 * @summary EPSDetachType_ePSDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_ePSDetach: _enum_for_EPSDetachType.ePSDetach = EPSDetachType.ePSDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSDetach
 * @constant
 * @type {number}
 */
export
const ePSDetach: _enum_for_EPSDetachType.ePSDetach = EPSDetachType.ePSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_iMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_iMSIDetach: _enum_for_EPSDetachType.iMSIDetach = EPSDetachType.iMSIDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSIDetach
 * @constant
 * @type {number}
 */
export
const iMSIDetach: _enum_for_EPSDetachType.iMSIDetach = EPSDetachType.iMSIDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_combinedEPSIMSIDetach: _enum_for_EPSDetachType.combinedEPSIMSIDetach = EPSDetachType.combinedEPSIMSIDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSIDetach: _enum_for_EPSDetachType.combinedEPSIMSIDetach = EPSDetachType.combinedEPSIMSIDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachRequired: _enum_for_EPSDetachType.reAttachRequired = EPSDetachType.reAttachRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachRequired
 * @constant
 * @type {number}
 */
export
const reAttachRequired: _enum_for_EPSDetachType.reAttachRequired = EPSDetachType.reAttachRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachNotRequired: _enum_for_EPSDetachType.reAttachNotRequired = EPSDetachType.reAttachNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const reAttachNotRequired: _enum_for_EPSDetachType.reAttachNotRequired = EPSDetachType.reAttachNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reserved
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reserved: _enum_for_EPSDetachType.reserved = EPSDetachType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: _enum_for_EPSDetachType.reserved = EPSDetachType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSDetachType: $.ASN1Decoder<EPSDetachType> = $._decodeEnumerated;
export const _encode_EPSDetachType: $.ASN1Encoder<EPSDetachType> = $._encodeEnumerated;


/* eslint-enable */
