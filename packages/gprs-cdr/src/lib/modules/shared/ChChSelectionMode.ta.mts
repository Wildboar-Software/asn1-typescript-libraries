/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChChSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChChSelectionMode  ::=  ENUMERATED {
 *    servingNodeSupplied     ( 0 ),
 *    subscriptionSpecific    ( 1 ),
 *    aPNSpecific             ( 2 ),
 *    homeDefault             ( 3 ),
 *    roamingDefault          ( 4 ),
 *    visitingDefault         ( 5 ),
 *    fixedDefault            ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChChSelectionMode {
    servingNodeSupplied = 0,
    subscriptionSpecific = 1,
    aPNSpecific = 2,
    homeDefault = 3,
    roamingDefault = 4,
    visitingDefault = 5,
    fixedDefault = 6,
}

/**
 * @summary ChChSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChChSelectionMode  ::=  ENUMERATED {
 *    servingNodeSupplied     ( 0 ),
 *    subscriptionSpecific    ( 1 ),
 *    aPNSpecific             ( 2 ),
 *    homeDefault             ( 3 ),
 *    roamingDefault          ( 4 ),
 *    visitingDefault         ( 5 ),
 *    fixedDefault            ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChChSelectionMode = _enum_for_ChChSelectionMode;

/**
 * @summary ChChSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChChSelectionMode  ::=  ENUMERATED {
 *    servingNodeSupplied     ( 0 ),
 *    subscriptionSpecific    ( 1 ),
 *    aPNSpecific             ( 2 ),
 *    homeDefault             ( 3 ),
 *    roamingDefault          ( 4 ),
 *    visitingDefault         ( 5 ),
 *    fixedDefault            ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChChSelectionMode = _enum_for_ChChSelectionMode;

/**
 * @summary ChChSelectionMode_servingNodeSupplied
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_servingNodeSupplied = ChChSelectionMode.servingNodeSupplied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingNodeSupplied
 * @constant
 * @type {number}
 */
export
const servingNodeSupplied = ChChSelectionMode.servingNodeSupplied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_subscriptionSpecific
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_subscriptionSpecific = ChChSelectionMode.subscriptionSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionSpecific
 * @constant
 * @type {number}
 */
export
const subscriptionSpecific = ChChSelectionMode.subscriptionSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_aPNSpecific
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_aPNSpecific = ChChSelectionMode.aPNSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aPNSpecific
 * @constant
 * @type {number}
 */
export
const aPNSpecific = ChChSelectionMode.aPNSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_homeDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_homeDefault = ChChSelectionMode.homeDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary homeDefault
 * @constant
 * @type {number}
 */
export
const homeDefault = ChChSelectionMode.homeDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_roamingDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_roamingDefault = ChChSelectionMode.roamingDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingDefault
 * @constant
 * @type {number}
 */
export
const roamingDefault = ChChSelectionMode.roamingDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_visitingDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_visitingDefault = ChChSelectionMode.visitingDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary visitingDefault
 * @constant
 * @type {number}
 */
export
const visitingDefault = ChChSelectionMode.visitingDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_fixedDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_fixedDefault = ChChSelectionMode.fixedDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fixedDefault
 * @constant
 * @type {number}
 */
export
const fixedDefault = ChChSelectionMode.fixedDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChChSelectionMode: $.ASN1Decoder<ChChSelectionMode> = $._decodeEnumerated;

export
const _encode_ChChSelectionMode: $.ASN1Encoder<ChChSelectionMode> = $._encodeEnumerated;

/* eslint-enable */
