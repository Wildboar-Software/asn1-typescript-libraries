/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Procedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Procedure  ::=  ENUMERATED {
 *     cfu(0),
 *     cfb(1),
 *     cfnr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Procedure {
    cfu = 0,
    cfb = 1,
    cfnr = 2,
}

/**
 * @summary Procedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Procedure  ::=  ENUMERATED {
 *     cfu(0),
 *     cfb(1),
 *     cfnr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Procedure = _enum_for_Procedure;

/**
 * @summary Procedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Procedure  ::=  ENUMERATED {
 *     cfu(0),
 *     cfb(1),
 *     cfnr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Procedure = _enum_for_Procedure;

/**
 * @summary Procedure_cfu
 * @constant
 * @type {number}
 */
export
const Procedure_cfu: Procedure = Procedure.cfu; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfu
 * @constant
 * @type {number}
 */
export
const cfu: Procedure = Procedure.cfu; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Procedure_cfb
 * @constant
 * @type {number}
 */
export
const Procedure_cfb: Procedure = Procedure.cfb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfb
 * @constant
 * @type {number}
 */
export
const cfb: Procedure = Procedure.cfb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Procedure_cfnr
 * @constant
 * @type {number}
 */
export
const Procedure_cfnr: Procedure = Procedure.cfnr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cfnr
 * @constant
 * @type {number}
 */
export
const cfnr: Procedure = Procedure.cfnr; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Procedure: $.ASN1Decoder<Procedure> = $._decodeEnumerated;

export
const _encode_Procedure: $.ASN1Encoder<Procedure> = $._encodeEnumerated;

/* eslint-enable */
