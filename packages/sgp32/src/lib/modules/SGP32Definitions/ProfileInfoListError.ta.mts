/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileInfoListError
 * @description
 * 
 * Failure of listProfileInfo. profileChangeOngoing is defined when that
 * command follows an enable, disable, or delete in the same eUICC Package.
 * SGP.32 v1.2, sections 2.11.1.1 and 2.11.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListError  ::=  INTEGER {
 *     incorrectInputValues(1),
 *     profileChangeOngoing (11),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type ProfileInfoListError = INTEGER;

/**
 * @summary ProfileInfoListError_incorrectInputValues
 * @description
 * SGP.32 v1.2 lists incorrectInputValues(1) on ProfileInfoListError and does
 * not further define the condition. Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_incorrectInputValues = 1 satisfies ProfileInfoListError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_incorrectInputValues
 * @description
 * SGP.32 v1.2 does not further define incorrectInputValues(1). Section
 * 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const incorrectInputValues = ProfileInfoListError_incorrectInputValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_profileChangeOngoing
 * @description
 * listProfileInfo was placed after an enable, disable, or delete in the same
 * eUICC Package. SGP.32 v1.2, section 2.11.1.1.
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_profileChangeOngoing = 11 satisfies ProfileInfoListError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_profileChangeOngoing
 * @description
 * listProfileInfo followed enable, disable, or delete in the same eUICC
 * Package. SGP.32 v1.2, section 2.11.1.1.
 * @constant
 * @type {number}
 */
export
const profileChangeOngoing = ProfileInfoListError_profileChangeOngoing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_undefinedError
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on ProfileInfoListError and does not
 * further define the condition. Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_undefinedError = 127 satisfies ProfileInfoListError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const undefinedError = ProfileInfoListError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileInfoListError: $.ASN1Decoder<ProfileInfoListError> = $._decodeInteger;
export const _encode_ProfileInfoListError: $.ASN1Encoder<ProfileInfoListError> = $._encodeInteger;


/* eslint-enable */
