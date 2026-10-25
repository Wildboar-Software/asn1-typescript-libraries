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
const ChChSelectionMode: typeof _enum_for_ChChSelectionMode = _enum_for_ChChSelectionMode;

/**
 * @summary ChChSelectionMode_servingNodeSupplied
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_servingNodeSupplied: _enum_for_ChChSelectionMode.servingNodeSupplied = ChChSelectionMode.servingNodeSupplied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingNodeSupplied
 * @constant
 * @type {number}
 */
export
const servingNodeSupplied: _enum_for_ChChSelectionMode.servingNodeSupplied = ChChSelectionMode.servingNodeSupplied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_subscriptionSpecific
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_subscriptionSpecific: _enum_for_ChChSelectionMode.subscriptionSpecific = ChChSelectionMode.subscriptionSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionSpecific
 * @constant
 * @type {number}
 */
export
const subscriptionSpecific: _enum_for_ChChSelectionMode.subscriptionSpecific = ChChSelectionMode.subscriptionSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_aPNSpecific
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_aPNSpecific: _enum_for_ChChSelectionMode.aPNSpecific = ChChSelectionMode.aPNSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aPNSpecific
 * @constant
 * @type {number}
 */
export
const aPNSpecific: _enum_for_ChChSelectionMode.aPNSpecific = ChChSelectionMode.aPNSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_homeDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_homeDefault: _enum_for_ChChSelectionMode.homeDefault = ChChSelectionMode.homeDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary homeDefault
 * @constant
 * @type {number}
 */
export
const homeDefault: _enum_for_ChChSelectionMode.homeDefault = ChChSelectionMode.homeDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_roamingDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_roamingDefault: _enum_for_ChChSelectionMode.roamingDefault = ChChSelectionMode.roamingDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingDefault
 * @constant
 * @type {number}
 */
export
const roamingDefault: _enum_for_ChChSelectionMode.roamingDefault = ChChSelectionMode.roamingDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_visitingDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_visitingDefault: _enum_for_ChChSelectionMode.visitingDefault = ChChSelectionMode.visitingDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary visitingDefault
 * @constant
 * @type {number}
 */
export
const visitingDefault: _enum_for_ChChSelectionMode.visitingDefault = ChChSelectionMode.visitingDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChChSelectionMode_fixedDefault
 * @constant
 * @type {number}
 */
export
const ChChSelectionMode_fixedDefault: _enum_for_ChChSelectionMode.fixedDefault = ChChSelectionMode.fixedDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fixedDefault
 * @constant
 * @type {number}
 */
export
const fixedDefault: _enum_for_ChChSelectionMode.fixedDefault = ChChSelectionMode.fixedDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChChSelectionMode: $.ASN1Decoder<ChChSelectionMode> = $._decodeEnumerated;

export
const _encode_ChChSelectionMode: $.ASN1Encoder<ChChSelectionMode> = $._encodeEnumerated;

/* eslint-enable */
