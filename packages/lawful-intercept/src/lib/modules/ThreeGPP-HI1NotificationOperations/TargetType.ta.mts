/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TargetType {
    mSISDN = 0,
    iMSI = 1,
    iMEI = 2,
    e164_Format = 3,
    nAI = 4,
    sip_URI = 5,
    tel_URI = 6,
    iMPU = 7,
    iMPI = 8,
}

/**
 * @summary TargetType
 * @description
 * 
 * Kind of identity named by the warrant. Does not carry the identity value.
 * Informative annex M says the notification excludes target identities and that
 * such values should be limited. 3GPP TS 33.108, annex M (informative).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetType  ::=  ENUMERATED
 * {
 *     mSISDN(0),
 *     iMSI(1),
 *     iMEI(2),
 *     e164-Format(3),
 *     nAI(4),
 *     sip-URI(5),
 *     tel-URI(6),
 *     iMPU (7),
 *     iMPI (8),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TargetType = _enum_for_TargetType | ENUMERATED;

/**
 * @summary TargetType_mSISDN
 * @description
 * 
 * The warrant identity is an MSISDN. 3GPP TS 33.108, annex M (informative)
 * schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_mSISDN = _enum_for_TargetType.mSISDN satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSISDN
 * @description
 * 
 * MSISDN. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const mSISDN = TargetType_mSISDN satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMSI
 * @description
 * 
 * The warrant identity is an IMSI. 3GPP TS 33.108, annex M (informative)
 * schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_iMSI = _enum_for_TargetType.iMSI satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSI
 * @description
 * 
 * IMSI. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const iMSI = TargetType_iMSI satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMEI
 * @description
 * 
 * The warrant identity is an IMEI. 3GPP TS 33.108, annex M (informative)
 * schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_iMEI = _enum_for_TargetType.iMEI satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMEI
 * @description
 * 
 * IMEI. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const iMEI = TargetType_iMEI satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_e164_Format
 * @description
 * 
 * The warrant identity is an E.164 number. 3GPP TS 33.108, annex M
 * (informative) schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_e164_Format = _enum_for_TargetType.e164_Format satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e164_Format
 * @description
 * 
 * E.164 number. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const e164_Format = TargetType_e164_Format satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_nAI
 * @description
 * 
 * The warrant identity is an NAI. 3GPP TS 33.108, annex M (informative) schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_nAI = _enum_for_TargetType.nAI satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAI
 * @description
 * 
 * NAI. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const nAI = TargetType_nAI satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_sip_URI
 * @description
 * 
 * The warrant identity is a SIP URI. 3GPP TS 33.108, annex M (informative)
 * schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_sip_URI = _enum_for_TargetType.sip_URI satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sip_URI
 * @description
 * 
 * SIP URI. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const sip_URI = TargetType_sip_URI satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_tel_URI
 * @description
 * 
 * The warrant identity is a tel URI. 3GPP TS 33.108, annex M (informative)
 * schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_tel_URI = _enum_for_TargetType.tel_URI satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tel_URI
 * @description
 * 
 * Tel URI. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const tel_URI = TargetType_tel_URI satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMPU
 * @description
 * 
 * The warrant identity is an IMS public user identity. 3GPP TS 33.108, annex M
 * (informative) schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_iMPU = _enum_for_TargetType.iMPU satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMPU
 * @description
 * 
 * IMS public user identity. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const iMPU = TargetType_iMPU satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMPI
 * @description
 * 
 * The warrant identity is an IMS private user identity. 3GPP TS 33.108, annex M
 * (informative) schema.
 * 
 * @constant
 * @type {number}
 */
export
const TargetType_iMPI = _enum_for_TargetType.iMPI satisfies TargetType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMPI
 * @description
 * 
 * IMS private user identity. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const iMPI = TargetType_iMPI satisfies TargetType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TargetType: $.ASN1Decoder<TargetType> = $._decodeEnumerated;
export const _encode_TargetType: $.ASN1Encoder<TargetType> = $._encodeEnumerated;


/* eslint-enable */
