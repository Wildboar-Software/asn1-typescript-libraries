/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RequestedInfo {
    anchorMSC_AddressAndASCI_CallReference = 0,
    imsiAndAdditionalInfoAndAdditionalSubscription = 1,
}

/**
 * @summary RequestedInfo
 * @description
 *
 * Info requested in MAP_SEND_GROUP_CALL_INFO. Unrecognized values shall be
 * rejected with unexpected data value (3GPP TS 29.002 V19.1.0 clauses 10.7A.3
 * and 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInfo  ::=  ENUMERATED {
 *     anchorMSC-AddressAndASCI-CallReference    (0),
 *     imsiAndAdditionalInfoAndAdditionalSubscription    (1),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type RequestedInfo = _enum_for_RequestedInfo | ENUMERATED;

/**
 * @summary RequestedInfo_anchorMSC_AddressAndASCI_CallReference
 * @description
 *
 * `anchorMSC-AddressAndASCI-CallReference (0)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const RequestedInfo_anchorMSC_AddressAndASCI_CallReference: RequestedInfo = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anchorMSC_AddressAndASCI_CallReference
 * @description
 *
 * `anchorMSC-AddressAndASCI-CallReference (0)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const anchorMSC_AddressAndASCI_CallReference: RequestedInfo = RequestedInfo_anchorMSC_AddressAndASCI_CallReference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInfo_imsiAndAdditionalInfoAndAdditionalSubscription
 * @description
 *
 * `imsiAndAdditionalInfoAndAdditionalSubscription (1)` (3GPP TS 29.002 V19.1.0
 * clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const RequestedInfo_imsiAndAdditionalInfoAndAdditionalSubscription: RequestedInfo = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsiAndAdditionalInfoAndAdditionalSubscription
 * @description
 *
 * `imsiAndAdditionalInfoAndAdditionalSubscription (1)` (3GPP TS 29.002 V19.1.0
 * clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const imsiAndAdditionalInfoAndAdditionalSubscription: RequestedInfo = RequestedInfo_imsiAndAdditionalInfoAndAdditionalSubscription; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestedInfo = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RequestedInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedInfo, encoded as an ASN.1 Element.
 */
export const _encode_RequestedInfo = $._encodeEnumerated;


/* eslint-enable */
