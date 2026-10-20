/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParticipatingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipatingType  ::=  ENUMERATED {
 *    normal        ( 0 ),
 *    nW-PoC-Box    ( 1 ),
 *    uE-PoC-Box    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ParticipatingType {
    normal = 0,
    nW_PoC_Box = 1,
    uE_PoC_Box = 2,
}

/**
 * @summary ParticipatingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipatingType  ::=  ENUMERATED {
 *    normal        ( 0 ),
 *    nW-PoC-Box    ( 1 ),
 *    uE-PoC-Box    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ParticipatingType = _enum_for_ParticipatingType;

/**
 * @summary ParticipatingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipatingType  ::=  ENUMERATED {
 *    normal        ( 0 ),
 *    nW-PoC-Box    ( 1 ),
 *    uE-PoC-Box    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ParticipatingType = _enum_for_ParticipatingType;

/**
 * @summary ParticipatingType_normal
 * @constant
 * @type {number}
 */
export
const ParticipatingType_normal: ParticipatingType = ParticipatingType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: ParticipatingType = ParticipatingType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipatingType_nW_PoC_Box
 * @constant
 * @type {number}
 */
export
const ParticipatingType_nW_PoC_Box: ParticipatingType = ParticipatingType.nW_PoC_Box; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nW_PoC_Box
 * @constant
 * @type {number}
 */
export
const nW_PoC_Box: ParticipatingType = ParticipatingType.nW_PoC_Box; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipatingType_uE_PoC_Box
 * @constant
 * @type {number}
 */
export
const ParticipatingType_uE_PoC_Box: ParticipatingType = ParticipatingType.uE_PoC_Box; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE_PoC_Box
 * @constant
 * @type {number}
 */
export
const uE_PoC_Box: ParticipatingType = ParticipatingType.uE_PoC_Box; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ParticipatingType: $.ASN1Decoder<ParticipatingType> = $._decodeEnumerated;

export
const _encode_ParticipatingType: $.ASN1Encoder<ParticipatingType> = $._encodeEnumerated;

/* eslint-enable */
