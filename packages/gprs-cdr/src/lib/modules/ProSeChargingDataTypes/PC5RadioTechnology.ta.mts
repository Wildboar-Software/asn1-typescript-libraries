/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PC5RadioTechnology
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PC5RadioTechnology  ::=  ENUMERATED {
 *    eUTRA               ( 0 ),
 *    wLAN                ( 1 ),
 *    bothEUTRAAndWLAN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PC5RadioTechnology {
    eUTRA = 0,
    wLAN = 1,
    bothEUTRAAndWLAN = 2,
}

/**
 * @summary PC5RadioTechnology
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PC5RadioTechnology  ::=  ENUMERATED {
 *    eUTRA               ( 0 ),
 *    wLAN                ( 1 ),
 *    bothEUTRAAndWLAN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PC5RadioTechnology = _enum_for_PC5RadioTechnology;

/**
 * @summary PC5RadioTechnology
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PC5RadioTechnology  ::=  ENUMERATED {
 *    eUTRA               ( 0 ),
 *    wLAN                ( 1 ),
 *    bothEUTRAAndWLAN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PC5RadioTechnology = _enum_for_PC5RadioTechnology;

/**
 * @summary PC5RadioTechnology_eUTRA
 * @constant
 * @type {number}
 */
export
const PC5RadioTechnology_eUTRA: PC5RadioTechnology = PC5RadioTechnology.eUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUTRA
 * @constant
 * @type {number}
 */
export
const eUTRA: PC5RadioTechnology = PC5RadioTechnology.eUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PC5RadioTechnology_wLAN
 * @constant
 * @type {number}
 */
export
const PC5RadioTechnology_wLAN: PC5RadioTechnology = PC5RadioTechnology.wLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wLAN
 * @constant
 * @type {number}
 */
export
const wLAN: PC5RadioTechnology = PC5RadioTechnology.wLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PC5RadioTechnology_bothEUTRAAndWLAN
 * @constant
 * @type {number}
 */
export
const PC5RadioTechnology_bothEUTRAAndWLAN: PC5RadioTechnology = PC5RadioTechnology.bothEUTRAAndWLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothEUTRAAndWLAN
 * @constant
 * @type {number}
 */
export
const bothEUTRAAndWLAN: PC5RadioTechnology = PC5RadioTechnology.bothEUTRAAndWLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PC5RadioTechnology: $.ASN1Decoder<PC5RadioTechnology> = $._decodeEnumerated;

export
const _encode_PC5RadioTechnology: $.ASN1Encoder<PC5RadioTechnology> = $._encodeEnumerated;

/* eslint-enable */
