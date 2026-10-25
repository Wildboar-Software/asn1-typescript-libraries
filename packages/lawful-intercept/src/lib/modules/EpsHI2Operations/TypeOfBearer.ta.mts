/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TypeOfBearer {
    defaultBearer = 1,
    dedicatedBearer = 2,
}

/**
 * @summary TypeOfBearer
 * @description
 * 
 * Whether the EPS bearer being activated or deactivated is the default bearer
 * or a dedicated bearer (clause 10.5.2). Conditional on the bearer activation,
 * modification, and deactivation records. For a dedicated bearer, the linked
 * EPS bearer identity (a different parameter) identifies the associated default
 * bearer.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfBearer  ::=  ENUMERATED
 * {
 *     defaultBearer          (1),
 *     dedicatedBearer        (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfBearer = _enum_for_TypeOfBearer | ENUMERATED;

/**
 * @summary TypeOfBearer_defaultBearer
 * @description
 * 
 * Default EPS bearer. Clause 10.5.2 bearer activation type and bearer
 * deactivation type. The APN and protocol configuration options in several
 * bearer tables apply only to the default bearer.
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_defaultBearer = _enum_for_TypeOfBearer.defaultBearer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary defaultBearer
 * @description
 * 
 * Default EPS bearer (clause 10.5.2).
 * @constant
 * @type {number}
 */
export
const defaultBearer = TypeOfBearer_defaultBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfBearer_dedicatedBearer
 * @description
 * 
 * Dedicated EPS bearer. Clause 10.5.2. The linked EPS bearer identity then
 * identifies the associated default bearer, and is not applicable for a default
 * bearer.
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_dedicatedBearer = _enum_for_TypeOfBearer.dedicatedBearer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dedicatedBearer
 * @description
 * 
 * Dedicated EPS bearer (clause 10.5.2).
 * @constant
 * @type {number}
 */
export
const dedicatedBearer = TypeOfBearer_dedicatedBearer; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TypeOfBearer: $.ASN1Decoder<TypeOfBearer> = $._decodeEnumerated;
export const _encode_TypeOfBearer: $.ASN1Encoder<TypeOfBearer> = $._encodeEnumerated;


/* eslint-enable */
