/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HandoverType
 * @description
 * 
 * Identifies the type of handover indicated by the AMF to gaining RAN Node as
 * seen in the HANDOVER REQUEST message. See TS 38.413 [23] clause 9.3.1.22.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_HandoverType {
    intra5GS = 1,
    fiveGStoEPS = 2,
    ePSto5GS = 3,
    fiveGStoUTRA = 4,
}

/**
 * @summary HandoverType
 * @description
 * 
 * Identifies the type of handover indicated by the AMF to gaining RAN Node as
 * seen in the HANDOVER REQUEST message. See TS 38.413 [23] clause 9.3.1.22.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type HandoverType = _enum_for_HandoverType;

/**
 * @summary HandoverType
 * @description
 * 
 * Identifies the type of handover indicated by the AMF to gaining RAN Node as
 * seen in the HANDOVER REQUEST message. See TS 38.413 [23] clause 9.3.1.22.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverType  ::=  ENUMERATED
 * {
 *     intra5GS(1),
 *     fiveGStoEPS(2),
 *     ePSto5GS(3),
 *     fiveGStoUTRA(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const HandoverType = _enum_for_HandoverType;

/**
 * @summary HandoverType_intra5GS
 * @constant
 * @type {number}
 */
export
const HandoverType_intra5GS: HandoverType = HandoverType.intra5GS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intra5GS
 * @constant
 * @type {number}
 */
export
const intra5GS: HandoverType = HandoverType.intra5GS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_fiveGStoEPS
 * @constant
 * @type {number}
 */
export
const HandoverType_fiveGStoEPS: HandoverType = HandoverType.fiveGStoEPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGStoEPS
 * @constant
 * @type {number}
 */
export
const fiveGStoEPS: HandoverType = HandoverType.fiveGStoEPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_ePSto5GS
 * @constant
 * @type {number}
 */
export
const HandoverType_ePSto5GS: HandoverType = HandoverType.ePSto5GS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSto5GS
 * @constant
 * @type {number}
 */
export
const ePSto5GS: HandoverType = HandoverType.ePSto5GS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverType_fiveGStoUTRA
 * @constant
 * @type {number}
 */
export
const HandoverType_fiveGStoUTRA: HandoverType = HandoverType.fiveGStoUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGStoUTRA
 * @constant
 * @type {number}
 */
export
const fiveGStoUTRA: HandoverType = HandoverType.fiveGStoUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_HandoverType: $.ASN1Decoder<HandoverType> = $._decodeEnumerated;
export const _encode_HandoverType: $.ASN1Encoder<HandoverType> = $._encodeEnumerated;


/* eslint-enable */
