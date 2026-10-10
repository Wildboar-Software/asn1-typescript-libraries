/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSDetachType
 * @description
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
const EPSDetachType_ePSDetach: EPSDetachType = EPSDetachType.ePSDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSDetach
 * @constant
 * @type {number}
 */
export
const ePSDetach: EPSDetachType = EPSDetachType.ePSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_iMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_iMSIDetach: EPSDetachType = EPSDetachType.iMSIDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSIDetach
 * @constant
 * @type {number}
 */
export
const iMSIDetach: EPSDetachType = EPSDetachType.iMSIDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_combinedEPSIMSIDetach: EPSDetachType = EPSDetachType.combinedEPSIMSIDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSIDetach: EPSDetachType = EPSDetachType.combinedEPSIMSIDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachRequired: EPSDetachType = EPSDetachType.reAttachRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachRequired
 * @constant
 * @type {number}
 */
export
const reAttachRequired: EPSDetachType = EPSDetachType.reAttachRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachNotRequired: EPSDetachType = EPSDetachType.reAttachNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const reAttachNotRequired: EPSDetachType = EPSDetachType.reAttachNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reserved
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reserved: EPSDetachType = EPSDetachType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: EPSDetachType = EPSDetachType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) EPSDetachType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSDetachType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) EPSDetachType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSDetachType, encoded as an ASN.1 Element.
 */
export const _encode_EPSDetachType = $._encodeEnumerated;


/* eslint-enable */
