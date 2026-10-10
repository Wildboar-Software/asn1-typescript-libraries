/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     sMS(2),
 *     pDUSessionEstablishment(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFFailedProcedureType {
    registration = 1,
    sMS = 2,
    pDUSessionEstablishment = 3,
}

/**
 * @summary AMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     sMS(2),
 *     pDUSessionEstablishment(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFFailedProcedureType = _enum_for_AMFFailedProcedureType;

/**
 * @summary AMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     sMS(2),
 *     pDUSessionEstablishment(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFFailedProcedureType = _enum_for_AMFFailedProcedureType;

/**
 * @summary AMFFailedProcedureType_registration
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_registration: AMFFailedProcedureType = AMFFailedProcedureType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: AMFFailedProcedureType = AMFFailedProcedureType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFFailedProcedureType_sMS
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_sMS: AMFFailedProcedureType = AMFFailedProcedureType.sMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @constant
 * @type {number}
 */
export
const sMS: AMFFailedProcedureType = AMFFailedProcedureType.sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFFailedProcedureType_pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_pDUSessionEstablishment: AMFFailedProcedureType = AMFFailedProcedureType.pDUSessionEstablishment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablishment: AMFFailedProcedureType = AMFFailedProcedureType.pDUSessionEstablishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AMFFailedProcedureType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AMFFailedProcedureType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AMFFailedProcedureType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFFailedProcedureType, encoded as an ASN.1 Element.
 */
export const _encode_AMFFailedProcedureType = $._encodeEnumerated;


/* eslint-enable */
