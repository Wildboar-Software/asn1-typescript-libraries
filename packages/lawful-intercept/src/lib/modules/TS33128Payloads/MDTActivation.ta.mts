/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MDTActivation {
    immediateMDTOnly = 1,
    loggedMDTOnly = 2,
    immediateMDTandTrace = 3,
}

/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MDTActivation = _enum_for_MDTActivation;

/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MDTActivation: typeof _enum_for_MDTActivation = _enum_for_MDTActivation;

/**
 * @summary MDTActivation_immediateMDTOnly
 * @constant
 * @type {number}
 */
export
const MDTActivation_immediateMDTOnly: _enum_for_MDTActivation.immediateMDTOnly = MDTActivation.immediateMDTOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateMDTOnly
 * @constant
 * @type {number}
 */
export
const immediateMDTOnly: _enum_for_MDTActivation.immediateMDTOnly = MDTActivation.immediateMDTOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTActivation_loggedMDTOnly
 * @constant
 * @type {number}
 */
export
const MDTActivation_loggedMDTOnly: _enum_for_MDTActivation.loggedMDTOnly = MDTActivation.loggedMDTOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loggedMDTOnly
 * @constant
 * @type {number}
 */
export
const loggedMDTOnly: _enum_for_MDTActivation.loggedMDTOnly = MDTActivation.loggedMDTOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTActivation_immediateMDTandTrace
 * @constant
 * @type {number}
 */
export
const MDTActivation_immediateMDTandTrace: _enum_for_MDTActivation.immediateMDTandTrace = MDTActivation.immediateMDTandTrace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateMDTandTrace
 * @constant
 * @type {number}
 */
export
const immediateMDTandTrace: _enum_for_MDTActivation.immediateMDTandTrace = MDTActivation.immediateMDTandTrace; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MDTActivation: $.ASN1Decoder<MDTActivation> = $._decodeEnumerated;
export const _encode_MDTActivation: $.ASN1Encoder<MDTActivation> = $._encodeEnumerated;


/* eslint-enable */
