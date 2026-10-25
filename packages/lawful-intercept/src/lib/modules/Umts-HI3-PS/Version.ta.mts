/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Version {
    version1 = 1,
    version3 = 3,
    lastVersion = 8,
}

/**
 * @summary Version
 * @description
 * 
 * ASN.1 version of the ULIC version-1 header. ULIC version 0 is not a value of
 * this enumeration; it is the octet header in annex C.1.2. The parameter was
 * redundant from the first publication because `hi3DomainId` already identifies
 * the domain. Always send lastVersion (8), even if that OID version arc later
 * increases. Values 4 through 7 are omitted to align with UmtsHI2Operations.
 * The module does not define version1 or version3 beyond those numbers. EPS
 * does not use this parameter.
 * 
 * 3GPP TS 33.108, annex C.1.3 and annex B.4.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Version  ::=  ENUMERATED
 * {
 *     version1(1),
 *     ...,
 *     version3(3) ,
 *         -- versions 4-7 were omitted to align with UmtsHI2Operations.
 *     lastVersion(8)
 *         -- Mandatory parameter "version" (tag 1) was always redundant in 33.108, because
 *         -- the object identifier "hi3DomainId" was introduced into "ULIC-headerV in the initial
 *         -- version of 33.108v5.0.0 In order to keep backward compatibility, even when the
 *         -- version of the "hi3DomainId" parameter will be incremented it is recommended to
 *         -- always send to LEMF the same: enumeration value "lastVersion(8)".
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Version = _enum_for_Version | ENUMERATED;

/**
 * @summary Version_version1
 * @description
 * 
 * ASN.1 version value 1 of the redundant ULIC version parameter. ULIC header
 * version 0 is annex C.1.2; ULIC header version 1 is the ASN.1 header. The
 * module recommends sending lastVersion (8). 3GPP TS 33.108, annex B.4.
 * @constant
 * @type {number}
 */
export
const Version_version1 = _enum_for_Version.version1 satisfies Version; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version1
 * @description
 * 
 * ASN.1 version value 1; send lastVersion (8). Annex B.4.
 * @constant
 * @type {number}
 */
export
const version1 = Version_version1 satisfies Version; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Version_version3
 * @description
 * 
 * ASN.1 version value 3. Values 4 through 7 were omitted to align with
 * UmtsHI2Operations. ULIC header version 0 is annex C.1.2; ULIC header version
 * 1 is the ASN.1 header. Send lastVersion (8). 3GPP TS 33.108, annex B.4.
 * @constant
 * @type {number}
 */
export
const Version_version3 = _enum_for_Version.version3 satisfies Version; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version3
 * @description
 * 
 * ASN.1 version value 3; send lastVersion (8). Annex B.4.
 * @constant
 * @type {number}
 */
export
const version3 = Version_version3 satisfies Version; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Version_lastVersion
 * @description
 * 
 * Value 8. Recommended on every ULIC version-1 header, including after the
 * hi3DomainId version arc is incremented. 3GPP TS 33.108, annex B.4 and annex
 * C.1.3.
 * @constant
 * @type {number}
 */
export
const Version_lastVersion = _enum_for_Version.lastVersion satisfies Version; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastVersion
 * @description
 * 
 * Value 8, the recommended ULIC ASN.1 version. Annex B.4.
 * @constant
 * @type {number}
 */
export
const lastVersion = Version_lastVersion satisfies Version; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Version: $.ASN1Decoder<Version> = $._decodeEnumerated;
export const _encode_Version: $.ASN1Encoder<Version> = $._encodeEnumerated;


/* eslint-enable */
