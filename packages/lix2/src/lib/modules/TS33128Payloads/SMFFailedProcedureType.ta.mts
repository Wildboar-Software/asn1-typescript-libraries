/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     pDUSessionEstablishment(1),
 *     pDUSessionModification(2),
 *     pDUSessionRelease(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMFFailedProcedureType {
    pDUSessionEstablishment = 1,
    pDUSessionModification = 2,
    pDUSessionRelease = 3,
}

/**
 * @summary SMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     pDUSessionEstablishment(1),
 *     pDUSessionModification(2),
 *     pDUSessionRelease(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMFFailedProcedureType = _enum_for_SMFFailedProcedureType;

/**
 * @summary SMFFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFFailedProcedureType  ::=  ENUMERATED
 * {
 *     pDUSessionEstablishment(1),
 *     pDUSessionModification(2),
 *     pDUSessionRelease(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMFFailedProcedureType = _enum_for_SMFFailedProcedureType;

/**
 * @summary SMFFailedProcedureType_pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionEstablishment: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionEstablishment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablishment: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionEstablishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMFFailedProcedureType_pDUSessionModification
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionModification: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionModification
 * @constant
 * @type {number}
 */
export
const pDUSessionModification: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMFFailedProcedureType_pDUSessionRelease
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionRelease: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionRelease
 * @constant
 * @type {number}
 */
export
const pDUSessionRelease: SMFFailedProcedureType = SMFFailedProcedureType.pDUSessionRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SMFFailedProcedureType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMFFailedProcedureType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SMFFailedProcedureType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFFailedProcedureType, encoded as an ASN.1 Element.
 */
export const _encode_SMFFailedProcedureType = $._encodeEnumerated;


/* eslint-enable */
