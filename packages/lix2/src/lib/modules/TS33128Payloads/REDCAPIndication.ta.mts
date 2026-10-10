/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary REDCAPIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * REDCAPIndication  ::=  ENUMERATED
 * {
 *     redCAP(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_REDCAPIndication {
    redCAP = 1,
}

/**
 * @summary REDCAPIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * REDCAPIndication  ::=  ENUMERATED
 * {
 *     redCAP(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type REDCAPIndication = _enum_for_REDCAPIndication;

/**
 * @summary REDCAPIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * REDCAPIndication  ::=  ENUMERATED
 * {
 *     redCAP(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const REDCAPIndication = _enum_for_REDCAPIndication;

/**
 * @summary REDCAPIndication_redCAP
 * @constant
 * @type {number}
 */
export
const REDCAPIndication_redCAP: REDCAPIndication = REDCAPIndication.redCAP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redCAP
 * @constant
 * @type {number}
 */
export
const redCAP: REDCAPIndication = REDCAPIndication.redCAP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) REDCAPIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_REDCAPIndication = $._decodeEnumerated;

/**
 * @summary Encodes a(n) REDCAPIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The REDCAPIndication, encoded as an ASN.1 Element.
 */
export const _encode_REDCAPIndication = $._encodeEnumerated;


/* eslint-enable */
