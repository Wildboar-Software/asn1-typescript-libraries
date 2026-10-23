/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParticipantActionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipantActionType  ::=  ENUMERATED {
 *    cREATE-CONF          ( 0 ),
 *    jOIN-CONF            ( 1 ),
 *    iNVITED-INTO-CONF    ( 2 ),
 *    qUIT-CONF            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ParticipantActionType {
    cREATE_CONF = 0,
    jOIN_CONF = 1,
    iNVITED_INTO_CONF = 2,
    qUIT_CONF = 3,
}

/**
 * @summary ParticipantActionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipantActionType  ::=  ENUMERATED {
 *    cREATE-CONF          ( 0 ),
 *    jOIN-CONF            ( 1 ),
 *    iNVITED-INTO-CONF    ( 2 ),
 *    qUIT-CONF            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ParticipantActionType = _enum_for_ParticipantActionType;

/**
 * @summary ParticipantActionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipantActionType  ::=  ENUMERATED {
 *    cREATE-CONF          ( 0 ),
 *    jOIN-CONF            ( 1 ),
 *    iNVITED-INTO-CONF    ( 2 ),
 *    qUIT-CONF            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ParticipantActionType = _enum_for_ParticipantActionType;

/**
 * @summary ParticipantActionType_cREATE_CONF
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_cREATE_CONF: ParticipantActionType = ParticipantActionType.cREATE_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cREATE_CONF
 * @constant
 * @type {number}
 */
export
const cREATE_CONF: ParticipantActionType = ParticipantActionType.cREATE_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipantActionType_jOIN_CONF
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_jOIN_CONF: ParticipantActionType = ParticipantActionType.jOIN_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary jOIN_CONF
 * @constant
 * @type {number}
 */
export
const jOIN_CONF: ParticipantActionType = ParticipantActionType.jOIN_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipantActionType_iNVITED_INTO_CONF
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_iNVITED_INTO_CONF: ParticipantActionType = ParticipantActionType.iNVITED_INTO_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iNVITED_INTO_CONF
 * @constant
 * @type {number}
 */
export
const iNVITED_INTO_CONF: ParticipantActionType = ParticipantActionType.iNVITED_INTO_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipantActionType_qUIT_CONF
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_qUIT_CONF: ParticipantActionType = ParticipantActionType.qUIT_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qUIT_CONF
 * @constant
 * @type {number}
 */
export
const qUIT_CONF: ParticipantActionType = ParticipantActionType.qUIT_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ParticipantActionType: $.ASN1Decoder<ParticipantActionType> = $._decodeEnumerated;

export
const _encode_ParticipantActionType: $.ASN1Encoder<ParticipantActionType> = $._encodeEnumerated;

/* eslint-enable */
