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
const ChChSelectionMode_servingNodeSupplied = ChChSelectionMode.servingNodeSupplied satisfies ChChSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingNodeSupplied
 * @constant
 * @type {number}
 */
export
const servingNodeSupplied = ChChSelectionMode.servingNodeSupplied satisfies ChChSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_subscriptionSpecific
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_subscriptionSpecific = ChChSelectionMode.subscriptionSpecific satisfies ChChSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionSpecific
 * @constant
 * @type {number}
 */
export
const subscriptionSpecific = ChChSelectionMode.subscriptionSpecific satisfies ChChSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_aPNSpecific
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_aPNSpecific = ChChSelectionMode.aPNSpecific satisfies ChChSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aPNSpecific
 * @constant
 * @type {number}
 */
export
const aPNSpecific = ChChSelectionMode.aPNSpecific satisfies ChChSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_homeDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_homeDefault = ChChSelectionMode.homeDefault satisfies ChChSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary homeDefault
 * @constant
 * @type {number}
 */
export
const homeDefault = ChChSelectionMode.homeDefault satisfies ChChSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_roamingDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_roamingDefault = ChChSelectionMode.roamingDefault satisfies ChChSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingDefault
 * @constant
 * @type {number}
 */
export
const roamingDefault = ChChSelectionMode.roamingDefault satisfies ChChSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_visitingDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_visitingDefault = ChChSelectionMode.visitingDefault satisfies ChChSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary visitingDefault
 * @constant
 * @type {number}
 */
export
const visitingDefault = ChChSelectionMode.visitingDefault satisfies ChChSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_fixedDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_fixedDefault = ChChSelectionMode.fixedDefault satisfies ChChSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fixedDefault
 * @constant
 * @type {number}
 */
export
const fixedDefault = ChChSelectionMode.fixedDefault satisfies ChChSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChChSelectionMode: $.ASN1Decoder<ChChSelectionMode> = $._decodeEnumerated;

export
const _encode_ChChSelectionMode: $.ASN1Encoder<ChChSelectionMode> = $._encodeEnumerated;

/* eslint-enable */
