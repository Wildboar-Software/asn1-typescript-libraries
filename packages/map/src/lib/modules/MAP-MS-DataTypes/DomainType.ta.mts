/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DomainType {
    cs_Domain = 0,
    ps_Domain = 1,
}

/**
 * @summary DomainType
 * @description
 *
 * Requested domain for subscriber-info retrieval: cs-Domain or ps-Domain.
 * Exception handling: reception of values > 1 shall be mapped to cs-Domain
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainType  ::=   ENUMERATED {
 *     cs-Domain    (0),
 *     ps-Domain    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type DomainType = _enum_for_DomainType | ENUMERATED;

/**
 * @summary DomainType_cs_Domain
 * @constant
 * @type {number}
 */
export
const DomainType_cs_Domain: DomainType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cs_Domain
 * @constant
 * @type {number}
 */
export
const cs_Domain: DomainType = DomainType_cs_Domain; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DomainType_ps_Domain
 * @constant
 * @type {number}
 */
export
const DomainType_ps_Domain: DomainType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ps_Domain
 * @constant
 * @type {number}
 */
export
const ps_Domain: DomainType = DomainType_ps_Domain; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DomainType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DomainType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DomainType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainType, encoded as an ASN.1 Element.
 */
export const _encode_DomainType = $._encodeEnumerated;


/* eslint-enable */
