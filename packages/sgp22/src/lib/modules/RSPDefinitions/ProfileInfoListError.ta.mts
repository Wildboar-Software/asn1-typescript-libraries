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
const ProfileInfoListError_incorrectInputValues: 1 = 1 satisfies ProfileInfoListError; /* LONG_NAMED_INTEGER_VALUE */

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
const incorrectInputValues: 1 = ProfileInfoListError_incorrectInputValues; /* SHORT_NAMED_INTEGER_VALUE */

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
const ProfileInfoListError_undefinedError: 127 = 127 satisfies ProfileInfoListError; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedError: 127 = ProfileInfoListError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileInfoListError: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ProfileInfoListError: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
