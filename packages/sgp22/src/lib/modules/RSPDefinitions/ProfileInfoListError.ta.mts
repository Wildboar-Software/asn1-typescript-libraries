/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileInfoListError
 * @description
 * 
 * ES10c.GetProfilesInfo failed. SGP.22 v3.1 §5.7.15 also defines
 * `profileChangeOngoing` (11) for RPM, which this module does not declare.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListError  ::=  INTEGER {incorrectInputValues(1), undefinedError(127)}
 * ```
 */
export
type ProfileInfoListError = INTEGER;

/**
 * @summary ProfileInfoListError_incorrectInputValues
 * @description
 * 
 * Search criteria or tag list is not acceptable. SGP.22 v3.1 §5.7.15.
 * 
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_incorrectInputValues: ProfileInfoListError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_incorrectInputValues
 * @description
 * 
 * Search criteria or tag list is not acceptable. SGP.22 v3.1 §5.7.15.
 * 
 * @constant
 * @type {number}
 */
export
const incorrectInputValues: ProfileInfoListError = ProfileInfoListError_incorrectInputValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_undefinedError
 * @description
 * 
 * GetProfilesInfo failed for another reason. SGP.22 v3.1 §5.7.15.
 * 
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_undefinedError: ProfileInfoListError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_undefinedError
 * @description
 * 
 * GetProfilesInfo failed for another reason. SGP.22 v3.1 §5.7.15.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: ProfileInfoListError = ProfileInfoListError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileInfoListError = $._decodeInteger;
export const _encode_ProfileInfoListError = $._encodeInteger;


/* eslint-enable */
