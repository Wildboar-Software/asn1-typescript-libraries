/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IRI_Parameters_iRIversion {
    version1 = 1,
    version2 = 2,
    version3 = 3,
    lastVersion = 8,
}

/**
 * @summary IRI_Parameters_iRIversion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-iRIversion ::= ENUMERATED {
 *     version1(1),
 *     ...,
 *     version2(2),
 *     version3(3),
 *     -- versions 4-7 were ommited to align with UmtsHI2Operations.
 *     lastVersion(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_iRIversion = _enum_for_IRI_Parameters_iRIversion | ENUMERATED;

/**
 * @summary IRI_Parameters_iRIversion_version1
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version1: IRI_Parameters_iRIversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version1
 * @constant
 * @type {number}
 */
export
const version1: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version2
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version2: IRI_Parameters_iRIversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version2
 * @constant
 * @type {number}
 */
export
const version2: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version3
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version3: IRI_Parameters_iRIversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version3
 * @constant
 * @type {number}
 */
export
const version3: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_lastVersion
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_lastVersion: IRI_Parameters_iRIversion = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastVersion
 * @constant
 * @type {number}
 */
export
const lastVersion: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_lastVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_iRIversion: $.ASN1Decoder<IRI_Parameters_iRIversion> = $._decodeEnumerated;
export const _encode_IRI_Parameters_iRIversion: $.ASN1Encoder<IRI_Parameters_iRIversion> = $._encodeEnumerated;


/* eslint-enable */
