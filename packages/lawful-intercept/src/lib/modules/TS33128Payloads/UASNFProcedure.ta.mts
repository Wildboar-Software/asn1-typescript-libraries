/* eslint-disable */
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
    /**
     * @description
     *
     * Create a new UAV Flight Assistance Configuration. See TS 29.522 [58]
     * clause 5.39.2.1.
     *
     * 3GPP TS 33.128, clause 7.7.8.1.2.
     */
    configurationCreate = 1,
    /**
     * @description
     *
     * Retrieve an existing "Individual UAV Flight Assistance Configuration"
     * resource. See TS 29.522 [58] clause 5.39.2.1.
     *
     * 3GPP TS 33.128, clause 7.7.8.1.2.
     */
    configurationRetrieve = 2,
    /**
     * @description
     *
     * Update an existing "Individual UAV Flight Assistance Configuration"
     * resource. See TS 29.522 [58] clause 5.39.2.1.
     *
     * 3GPP TS 33.128, clause 7.7.8.1.2.
     */
    configurationUpdate = 3,
    /**
     * @description
     *
     * Modify an existing "Individual UAV Flight Assistance Configuration"
     * resource. See TS 29.522 [58] clause 5.39.2.1.
     *
     * 3GPP TS 33.128, clause 7.7.8.1.2.
     */
    configurationModify = 4,
    /**
     * @description
     *
     * Delete an existing "Individual UAV Flight Assistance Configuration"
     * resource. See TS 29.522 [58] clause 5.39.2.1.
     *
     * 3GPP TS 33.128, clause 7.7.8.1.2.
     */
    configurationDelete = 5,
    /**
     * @description
     *
     * This service operation is used by an NF service consumer to request
     * authentication and authorization of the UAV and subscribe for event
     * notifications of reauthentication, reauthorization and revocation of the
     * UAV from the USS. See TS 29.255 [169] clause 4.2.2.1.
     *
     * 3GPP TS 33.128, clause 7.7.8.1.2.
     */
    authenticationAuthorize = 6,
    /**
     * @description
     *
     * This service operation is used by the USS to notify the NF service
     * consumer about reauthentication, reauthorization or revocation of the
     * UAV. See TS 29.255 [169] clause 4.2.2.1.
     *
     * 3GPP TS 33.128, clause 7.7.8.1.2.
     */
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
const UASNFProcedure: typeof _enum_for_UASNFProcedure = _enum_for_UASNFProcedure;

/**
 * @summary UASNFProcedure_configurationCreate
 * @description
 *
 * Create a new UAV Flight Assistance Configuration. See TS 29.522 [58] clause
 * 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationCreate: _enum_for_UASNFProcedure.configurationCreate = UASNFProcedure.configurationCreate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationCreate
 * @description
 *
 * Create a new UAV Flight Assistance Configuration. See TS 29.522 [58] clause
 * 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const configurationCreate: _enum_for_UASNFProcedure.configurationCreate = UASNFProcedure.configurationCreate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationRetrieve
 * @description
 *
 * Retrieve an existing "Individual UAV Flight Assistance Configuration"
 * resource. See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationRetrieve: _enum_for_UASNFProcedure.configurationRetrieve = UASNFProcedure.configurationRetrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationRetrieve
 * @description
 *
 * Retrieve an existing "Individual UAV Flight Assistance Configuration"
 * resource. See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const configurationRetrieve: _enum_for_UASNFProcedure.configurationRetrieve = UASNFProcedure.configurationRetrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationUpdate
 * @description
 *
 * Update an existing "Individual UAV Flight Assistance Configuration" resource.
 * See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationUpdate: _enum_for_UASNFProcedure.configurationUpdate = UASNFProcedure.configurationUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationUpdate
 * @description
 *
 * Update an existing "Individual UAV Flight Assistance Configuration" resource.
 * See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const configurationUpdate: _enum_for_UASNFProcedure.configurationUpdate = UASNFProcedure.configurationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationModify
 * @description
 *
 * Modify an existing "Individual UAV Flight Assistance Configuration" resource.
 * See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationModify: _enum_for_UASNFProcedure.configurationModify = UASNFProcedure.configurationModify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationModify
 * @description
 *
 * Modify an existing "Individual UAV Flight Assistance Configuration" resource.
 * See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const configurationModify: _enum_for_UASNFProcedure.configurationModify = UASNFProcedure.configurationModify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_configurationDelete
 * @description
 *
 * Delete an existing "Individual UAV Flight Assistance Configuration" resource.
 * See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_configurationDelete: _enum_for_UASNFProcedure.configurationDelete = UASNFProcedure.configurationDelete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary configurationDelete
 * @description
 *
 * Delete an existing "Individual UAV Flight Assistance Configuration" resource.
 * See TS 29.522 [58] clause 5.39.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const configurationDelete: _enum_for_UASNFProcedure.configurationDelete = UASNFProcedure.configurationDelete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_authenticationAuthorize
 * @description
 *
 * This service operation is used by an NF service consumer to request
 * authentication and authorization of the UAV and subscribe for event
 * notifications of reauthentication, reauthorization and revocation of the UAV
 * from the USS. See TS 29.255 [169] clause 4.2.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_authenticationAuthorize: _enum_for_UASNFProcedure.authenticationAuthorize = UASNFProcedure.authenticationAuthorize; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationAuthorize
 * @description
 *
 * This service operation is used by an NF service consumer to request
 * authentication and authorization of the UAV and subscribe for event
 * notifications of reauthentication, reauthorization and revocation of the UAV
 * from the USS. See TS 29.255 [169] clause 4.2.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const authenticationAuthorize: _enum_for_UASNFProcedure.authenticationAuthorize = UASNFProcedure.authenticationAuthorize; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UASNFProcedure_authenticationNotification
 * @description
 *
 * This service operation is used by the USS to notify the NF service consumer
 * about reauthentication, reauthorization or revocation of the UAV. See TS
 * 29.255 [169] clause 4.2.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const UASNFProcedure_authenticationNotification: _enum_for_UASNFProcedure.authenticationNotification = UASNFProcedure.authenticationNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationNotification
 * @description
 *
 * This service operation is used by the USS to notify the NF service consumer
 * about reauthentication, reauthorization or revocation of the UAV. See TS
 * 29.255 [169] clause 4.2.2.1.
 *
 * 3GPP TS 33.128, clause 7.7.8.1.2.
 *
 * @constant
 * @type {number}
 */
export
const authenticationNotification: _enum_for_UASNFProcedure.authenticationNotification = UASNFProcedure.authenticationNotification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UASNFProcedure: $.ASN1Decoder<UASNFProcedure> = $._decodeEnumerated;
export const _encode_UASNFProcedure: $.ASN1Encoder<UASNFProcedure> = $._encodeEnumerated;


/* eslint-enable */
