/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACREventIDs {
    targetInformation = 1,
    aCRComplete = 2,
}

/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ACREventIDs = _enum_for_ACREventIDs;

/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ACREventIDs = _enum_for_ACREventIDs;

/**
 * @summary ACREventIDs_targetInformation
 * @constant
 * @type {number}
 */
export
const ACREventIDs_targetInformation: ACREventIDs = ACREventIDs.targetInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetInformation
 * @constant
 * @type {number}
 */
export
const targetInformation: ACREventIDs = ACREventIDs.targetInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACREventIDs_aCRComplete
 * @constant
 * @type {number}
 */
export
const ACREventIDs_aCRComplete: ACREventIDs = ACREventIDs.aCRComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCRComplete
 * @constant
 * @type {number}
 */
export
const aCRComplete: ACREventIDs = ACREventIDs.aCRComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ACREventIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ACREventIDs = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ACREventIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACREventIDs, encoded as an ASN.1 Element.
 */
export const _encode_ACREventIDs = $._encodeEnumerated;


/* eslint-enable */
