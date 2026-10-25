/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFFailedProcedureType
 * @description
 * 
 * Specifies the procedure which failed or is aborted at the SMF.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the procedure which failed or is aborted at the SMF.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the procedure which failed or is aborted at the SMF.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const SMFFailedProcedureType_pDUSessionEstablishment = SMFFailedProcedureType.pDUSessionEstablishment satisfies SMFFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablishment
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablishment = SMFFailedProcedureType.pDUSessionEstablishment satisfies SMFFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMFFailedProcedureType_pDUSessionModification
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionModification = SMFFailedProcedureType.pDUSessionModification satisfies SMFFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionModification
 * @constant
 * @type {number}
 */
export
const pDUSessionModification = SMFFailedProcedureType.pDUSessionModification satisfies SMFFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMFFailedProcedureType_pDUSessionRelease
 * @constant
 * @type {number}
 */
export
const SMFFailedProcedureType_pDUSessionRelease = SMFFailedProcedureType.pDUSessionRelease satisfies SMFFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionRelease
 * @constant
 * @type {number}
 */
export
const pDUSessionRelease = SMFFailedProcedureType.pDUSessionRelease satisfies SMFFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMFFailedProcedureType: $.ASN1Decoder<SMFFailedProcedureType> = $._decodeEnumerated;
export const _encode_SMFFailedProcedureType: $.ASN1Encoder<SMFFailedProcedureType> = $._encodeEnumerated;


/* eslint-enable */
