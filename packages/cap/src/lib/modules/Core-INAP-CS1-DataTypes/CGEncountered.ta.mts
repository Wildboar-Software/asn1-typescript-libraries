/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered      ::=  ENUMERATED {
 *           manualCGencountered(1),
 *           scpOverload(2)
 *           }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CGEncountered {
    manualCGencountered = 1,
    scpOverload = 2,
}

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered      ::=  ENUMERATED {
 *           manualCGencountered(1),
 *           scpOverload(2)
 *           }
 * ```
 * 
 * @enum {number}
 */
export
type CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered      ::=  ENUMERATED {
 *           manualCGencountered(1),
 *           scpOverload(2)
 *           }
 * ```
 * 
 * @enum {number}
 */
export
const CGEncountered: typeof _enum_for_CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered_manualCGencountered
 * @constant
 * @type {number}
 */
export
const CGEncountered_manualCGencountered: _enum_for_CGEncountered.manualCGencountered = CGEncountered.manualCGencountered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manualCGencountered
 * @constant
 * @type {number}
 */
export
const manualCGencountered: _enum_for_CGEncountered.manualCGencountered = CGEncountered.manualCGencountered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CGEncountered_scpOverload
 * @constant
 * @type {number}
 */
export
const CGEncountered_scpOverload: _enum_for_CGEncountered.scpOverload = CGEncountered.scpOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scpOverload
 * @constant
 * @type {number}
 */
export
const scpOverload: _enum_for_CGEncountered.scpOverload = CGEncountered.scpOverload; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CGEncountered: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_CGEncountered: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
