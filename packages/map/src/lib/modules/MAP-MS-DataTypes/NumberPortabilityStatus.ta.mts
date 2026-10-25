/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_NumberPortabilityStatus {
    notKnownToBePorted = 0,
    ownNumberPortedOut = 1,
    foreignNumberPortedToForeignNetwork = 2,
    ownNumberNotPortedOut = 4,
    foreignNumberPortedIn = 5,
}

/**
 * @summary NumberPortabilityStatus
 * @description
 *
 * Number portability status of the subscriber (3GPP TS 23.066). Unknown values:
 * ignore the whole parameter. `ownNumberNotPortedOut` and
 * `foreignNumberPortedIn` may only be included in Any Time Interrogation. (3GPP
 * TS 29.002 V19.1.0 clauses 7.6.5.14 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberPortabilityStatus  ::=  ENUMERATED {
 *     notKnownToBePorted    (0),
 *     ownNumberPortedOut    (1),
 *     foreignNumberPortedToForeignNetwork    (2),
 *     ...,
 *     ownNumberNotPortedOut    (4),
 *     foreignNumberPortedIn    (5)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type NumberPortabilityStatus = _enum_for_NumberPortabilityStatus | ENUMERATED;

/**
 * @summary NumberPortabilityStatus_notKnownToBePorted
 * @description
 *
 * Not known to be ported. (3GPP TS 29.002 V19.1.0 clause 7.6.5.14)
 *
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_notKnownToBePorted: _enum_for_NumberPortabilityStatus.notKnownToBePorted = _enum_for_NumberPortabilityStatus.notKnownToBePorted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notKnownToBePorted
 * @description
 *
 * Not known to be ported. (3GPP TS 29.002 V19.1.0 clause 7.6.5.14)
 *
 * @constant
 * @type {number}
 */
export
const notKnownToBePorted: _enum_for_NumberPortabilityStatus.notKnownToBePorted = NumberPortabilityStatus_notKnownToBePorted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_ownNumberPortedOut
 * @description
 *
 * Own number ported out. (3GPP TS 29.002 V19.1.0 clause 7.6.5.14)
 *
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_ownNumberPortedOut: _enum_for_NumberPortabilityStatus.ownNumberPortedOut = _enum_for_NumberPortabilityStatus.ownNumberPortedOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ownNumberPortedOut
 * @description
 *
 * Own number ported out. (3GPP TS 29.002 V19.1.0 clause 7.6.5.14)
 *
 * @constant
 * @type {number}
 */
export
const ownNumberPortedOut: _enum_for_NumberPortabilityStatus.ownNumberPortedOut = NumberPortabilityStatus_ownNumberPortedOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_foreignNumberPortedToForeignNetwork
 * @description
 *
 * Foreign number ported to a foreign network. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.5.14)
 *
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_foreignNumberPortedToForeignNetwork: _enum_for_NumberPortabilityStatus.foreignNumberPortedToForeignNetwork = _enum_for_NumberPortabilityStatus.foreignNumberPortedToForeignNetwork; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary foreignNumberPortedToForeignNetwork
 * @description
 *
 * Foreign number ported to a foreign network. (3GPP TS 29.002 V19.1.0 clause
 * 7.6.5.14)
 *
 * @constant
 * @type {number}
 */
export
const foreignNumberPortedToForeignNetwork: _enum_for_NumberPortabilityStatus.foreignNumberPortedToForeignNetwork = NumberPortabilityStatus_foreignNumberPortedToForeignNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_ownNumberNotPortedOut
 * @description
 *
 * Own number not ported out. May only be included in Any Time Interrogation.
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_ownNumberNotPortedOut: _enum_for_NumberPortabilityStatus.ownNumberNotPortedOut = _enum_for_NumberPortabilityStatus.ownNumberNotPortedOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ownNumberNotPortedOut
 * @description
 *
 * Own number not ported out. May only be included in Any Time Interrogation.
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const ownNumberNotPortedOut: _enum_for_NumberPortabilityStatus.ownNumberNotPortedOut = NumberPortabilityStatus_ownNumberNotPortedOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_foreignNumberPortedIn
 * @description
 *
 * Foreign number ported in. May only be included in Any Time Interrogation.
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_foreignNumberPortedIn: _enum_for_NumberPortabilityStatus.foreignNumberPortedIn = _enum_for_NumberPortabilityStatus.foreignNumberPortedIn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary foreignNumberPortedIn
 * @description
 *
 * Foreign number ported in. May only be included in Any Time Interrogation.
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const foreignNumberPortedIn: _enum_for_NumberPortabilityStatus.foreignNumberPortedIn = NumberPortabilityStatus_foreignNumberPortedIn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) NumberPortabilityStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NumberPortabilityStatus: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) NumberPortabilityStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberPortabilityStatus, encoded as an ASN.1 Element.
 */
export const _encode_NumberPortabilityStatus: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
