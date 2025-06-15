/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary User_session_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-session-requirements  ::=  BIT STRING {
 *   half-duplex(0), duplex(1), expedited-data(2), minor-synchronize(3),
 *   major-synchronize(4), resynchronize(5), activity-management(6),
 *   negotiated-release(7), capability-data(8), exceptions(9), typed-data(10),
 *   symmetric-synchronize(11), data-separation(12)}
 * ```
 */
export type User_session_requirements = BIT_STRING;


/**
 * @summary User_session_requirements_half_duplex
 * @constant
 */
export const User_session_requirements_half_duplex: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary half_duplex
 * @constant
 */
export const half_duplex: number = User_session_requirements_half_duplex; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_duplex
 * @constant
 */
export const User_session_requirements_duplex: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary duplex
 * @constant
 */
export const duplex: number = User_session_requirements_duplex; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_expedited_data
 * @constant
 */
export const User_session_requirements_expedited_data: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary expedited_data
 * @constant
 */
export const expedited_data: number = User_session_requirements_expedited_data; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_minor_synchronize
 * @constant
 */
export const User_session_requirements_minor_synchronize: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary minor_synchronize
 * @constant
 */
export const minor_synchronize: number = User_session_requirements_minor_synchronize; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_major_synchronize
 * @constant
 */
export const User_session_requirements_major_synchronize: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary major_synchronize
 * @constant
 */
export const major_synchronize: number = User_session_requirements_major_synchronize; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_resynchronize
 * @constant
 */
export const User_session_requirements_resynchronize: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary resynchronize
 * @constant
 */
export const resynchronize: number = User_session_requirements_resynchronize; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_activity_management
 * @constant
 */
export const User_session_requirements_activity_management: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary activity_management
 * @constant
 */
export const activity_management: number = User_session_requirements_activity_management; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_negotiated_release
 * @constant
 */
export const User_session_requirements_negotiated_release: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary negotiated_release
 * @constant
 */
export const negotiated_release: number = User_session_requirements_negotiated_release; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_capability_data
 * @constant
 */
export const User_session_requirements_capability_data: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary capability_data
 * @constant
 */
export const capability_data: number = User_session_requirements_capability_data; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_exceptions
 * @constant
 */
export const User_session_requirements_exceptions: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary exceptions
 * @constant
 */
export const exceptions: number = User_session_requirements_exceptions; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_typed_data
 * @constant
 */
export const User_session_requirements_typed_data: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary typed_data
 * @constant
 */
export const typed_data: number = User_session_requirements_typed_data; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_symmetric_synchronize
 * @constant
 */
export const User_session_requirements_symmetric_synchronize: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary symmetric_synchronize
 * @constant
 */
export const symmetric_synchronize: number = User_session_requirements_symmetric_synchronize; /* SHORT_NAMED_BIT */


/**
 * @summary User_session_requirements_data_separation
 * @constant
 */
export const User_session_requirements_data_separation: number = 12; /* LONG_NAMED_BIT */


/**
 * @summary data_separation
 * @constant
 */
export const data_separation: number = User_session_requirements_data_separation; /* SHORT_NAMED_BIT */




export const _decode_User_session_requirements = $._decodeBitString;




export const _encode_User_session_requirements = $._encodeBitString;


/* eslint-enable */
