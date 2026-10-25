/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFFailedProcedureType
 * @description
 * 
 * Specifies the procedure which failed at the AMF.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the procedure which failed at the AMF.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the procedure which failed at the AMF.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const AMFFailedProcedureType_registration = AMFFailedProcedureType.registration satisfies AMFFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration = AMFFailedProcedureType.registration satisfies AMFFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFFailedProcedureType_sMS
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_sMS = AMFFailedProcedureType.sMS satisfies AMFFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @constant
 * @type {number}
 */
export
const sMS = AMFFailedProcedureType.sMS satisfies AMFFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFFailedProcedureType_pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const AMFFailedProcedureType_pDUSessionEstablishment = AMFFailedProcedureType.pDUSessionEstablishment satisfies AMFFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablishment = AMFFailedProcedureType.pDUSessionEstablishment satisfies AMFFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFFailedProcedureType: $.ASN1Decoder<AMFFailedProcedureType> = $._decodeEnumerated;
export const _encode_AMFFailedProcedureType: $.ASN1Encoder<AMFFailedProcedureType> = $._encodeEnumerated;


/* eslint-enable */
