/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UASNFProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFProcedure  ::=  ENUMERATED
 * {
 *     configurationCreate(1),
 *     configurationRetrieve(2),
 *     configurationUpdate(3),
 *     configurationModify(4),
 *     configurationDelete(5),
 *     authenticationAuthorize(6),
 *     authenticationNotification(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UASNFProcedure {
    configurationCreate = 1,
    configurationRetrieve = 2,
    configurationUpdate = 3,
    configurationModify = 4,
    configurationDelete = 5,
    authenticationAuthorize = 6,
    authenticationNotification = 7,
}

/**
 * @summary UASNFProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFProcedure  ::=  ENUMERATED
 * {
 *     configurationCreate(1),
 *     configurationRetrieve(2),
 *     configurationUpdate(3),
 *     configurationModify(4),
 *     configurationDelete(5),
 *     authenticationAuthorize(6),
 *     authenticationNotification(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UASNFProcedure = _enum_for_UASNFProcedure;

/**
 * @summary UASNFProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFProcedure  ::=  ENUMERATED
 * {
 *     configurationCreate(1),
 *     configurationRetrieve(2),
 *     configurationUpdate(3),
 *     configurationModify(4),
 *     configurationDelete(5),
 *     authenticationAuthorize(6),
 *     authenticationNotification(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UASNFProcedure = _enum_for_UASNFProcedure;

/**
 * @summary UASNFProcedure_configurationCreate
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationCreate: UASNFProcedure = UASNFProcedure.configurationCreate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationCreate
 * @constant
 * @type {number}
 */
export
const configurationCreate: UASNFProcedure = UASNFProcedure.configurationCreate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationRetrieve
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationRetrieve: UASNFProcedure = UASNFProcedure.configurationRetrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationRetrieve
 * @constant
 * @type {number}
 */
export
const configurationRetrieve: UASNFProcedure = UASNFProcedure.configurationRetrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationUpdate
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationUpdate: UASNFProcedure = UASNFProcedure.configurationUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationUpdate
 * @constant
 * @type {number}
 */
export
const configurationUpdate: UASNFProcedure = UASNFProcedure.configurationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationModify
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationModify: UASNFProcedure = UASNFProcedure.configurationModify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationModify
 * @constant
 * @type {number}
 */
export
const configurationModify: UASNFProcedure = UASNFProcedure.configurationModify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationDelete
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationDelete: UASNFProcedure = UASNFProcedure.configurationDelete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationDelete
 * @constant
 * @type {number}
 */
export
const configurationDelete: UASNFProcedure = UASNFProcedure.configurationDelete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_authenticationAuthorize
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_authenticationAuthorize: UASNFProcedure = UASNFProcedure.authenticationAuthorize; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationAuthorize
 * @constant
 * @type {number}
 */
export
const authenticationAuthorize: UASNFProcedure = UASNFProcedure.authenticationAuthorize; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_authenticationNotification
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_authenticationNotification: UASNFProcedure = UASNFProcedure.authenticationNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationNotification
 * @constant
 * @type {number}
 */
export
const authenticationNotification: UASNFProcedure = UASNFProcedure.authenticationNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_UASNFProcedure: $.ASN1Decoder<UASNFProcedure> = $._decodeEnumerated;

export const _encode_UASNFProcedure: $.ASN1Encoder<UASNFProcedure> = $._encodeEnumerated;


/* eslint-enable */
