/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeFunctionRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeFunctionRole  ::=  ENUMERATED {
 *    hPLMN        ( 0 ),
 *    vPLMN        ( 1 ),
 *    localPLMN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProSeFunctionRole {
    hPLMN = 0,
    vPLMN = 1,
    localPLMN = 2,
}

/**
 * @summary ProSeFunctionRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeFunctionRole  ::=  ENUMERATED {
 *    hPLMN        ( 0 ),
 *    vPLMN        ( 1 ),
 *    localPLMN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeFunctionRole = _enum_for_ProSeFunctionRole;

/**
 * @summary ProSeFunctionRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeFunctionRole  ::=  ENUMERATED {
 *    hPLMN        ( 0 ),
 *    vPLMN        ( 1 ),
 *    localPLMN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ProSeFunctionRole = _enum_for_ProSeFunctionRole;

/**
 * @summary ProSeFunctionRole_hPLMN
 * @constant
 * @type {number}
 */
export
const ProSeFunctionRole_hPLMN: ProSeFunctionRole = ProSeFunctionRole.hPLMN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hPLMN
 * @constant
 * @type {number}
 */
export
const hPLMN: ProSeFunctionRole = ProSeFunctionRole.hPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeFunctionRole_vPLMN
 * @constant
 * @type {number}
 */
export
const ProSeFunctionRole_vPLMN: ProSeFunctionRole = ProSeFunctionRole.vPLMN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vPLMN
 * @constant
 * @type {number}
 */
export
const vPLMN: ProSeFunctionRole = ProSeFunctionRole.vPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeFunctionRole_localPLMN
 * @constant
 * @type {number}
 */
export
const ProSeFunctionRole_localPLMN: ProSeFunctionRole = ProSeFunctionRole.localPLMN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localPLMN
 * @constant
 * @type {number}
 */
export
const localPLMN: ProSeFunctionRole = ProSeFunctionRole.localPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeFunctionRole: $.ASN1Decoder<ProSeFunctionRole> = $._decodeEnumerated;

export
const _encode_ProSeFunctionRole: $.ASN1Encoder<ProSeFunctionRole> = $._encodeEnumerated;

/* eslint-enable */
