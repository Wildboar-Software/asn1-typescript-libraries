/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EndDesignation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndDesignation  ::=  ENUMERATED {
 *     primaryEnd(0),
 *     secondaryEnd(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EndDesignation {
    primaryEnd = 0,
    secondaryEnd = 1,
}

/**
 * @summary EndDesignation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndDesignation  ::=  ENUMERATED {
 *     primaryEnd(0),
 *     secondaryEnd(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EndDesignation = _enum_for_EndDesignation;

/**
 * @summary EndDesignation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndDesignation  ::=  ENUMERATED {
 *     primaryEnd(0),
 *     secondaryEnd(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EndDesignation = _enum_for_EndDesignation;

/**
 * @summary EndDesignation_primaryEnd
 * @constant
 * @type {number}
 */
export
const EndDesignation_primaryEnd: EndDesignation = EndDesignation.primaryEnd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary primaryEnd
 * @constant
 * @type {number}
 */
export
const primaryEnd: EndDesignation = EndDesignation.primaryEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndDesignation_secondaryEnd
 * @constant
 * @type {number}
 */
export
const EndDesignation_secondaryEnd: EndDesignation = EndDesignation.secondaryEnd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary secondaryEnd
 * @constant
 * @type {number}
 */
export
const secondaryEnd: EndDesignation = EndDesignation.secondaryEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EndDesignation: $.ASN1Decoder<EndDesignation> = $._decodeEnumerated;

export
const _encode_EndDesignation: $.ASN1Encoder<EndDesignation> = $._encodeEnumerated;

/* eslint-enable */
