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
 * Version of the HI2 CS IRI. Absence of the component means version 1. Annex
 * B.3a recommends always sending lastVersion. Versions 4 to 7 are not assigned,
 * so the numbering stays aligned with the packet-switched HI2 module. 3GPP TS
 * 33.108, clause 5.2.2.1 and annex B.3a.
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
 * @description
 * 
 * Version 1 of the HI2 CS IRI. Also the meaning when the version component is
 * absent. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version1: IRI_Parameters_iRIversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version1
 * @description
 * 
 * HI2 CS IRI version 1. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const version1: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version2
 * @description
 * 
 * Version 2 of the HI2 CS IRI. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version2: IRI_Parameters_iRIversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version2
 * @description
 * 
 * HI2 CS IRI version 2. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const version2: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version3
 * @description
 * 
 * Version 3 of the HI2 CS IRI. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version3: IRI_Parameters_iRIversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version3
 * @description
 * 
 * HI2 CS IRI version 3. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const version3: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_lastVersion
 * @description
 * 
 * Value annex B.3a recommends sending on every IRI, including after the domain
 * identifier's version arc changes. Numbered 8 because versions 4 to 7 were
 * left unused to match the packet-switched module. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_lastVersion: IRI_Parameters_iRIversion = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastVersion
 * @description
 * 
 * Recommended HI2 CS IRI version value. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const lastVersion: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_lastVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_iRIversion: $.ASN1Decoder<IRI_Parameters_iRIversion> = $._decodeEnumerated;
export const _encode_IRI_Parameters_iRIversion: $.ASN1Encoder<IRI_Parameters_iRIversion> = $._encodeEnumerated;


/* eslint-enable */
