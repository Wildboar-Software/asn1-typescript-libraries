/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IRI_Parameters_iRIversion {
    version2 = 2,
    version3 = 3,
    version4 = 4,
    version6 = 6,
    lastVersion = 8,
}

/**
 * @summary IRI_Parameters_iRIversion
 * @description
 * 
 * Version of these IRI parameters. If the component is absent, version 1 is
 * meant.
 * 
 * The parameter has been redundant since hi2DomainId was added in TS 33.108
 * v5.0.0. Annex B.3 recommends always sending lastVersion (8), even when the
 * version arc of that OID changes, so an older LEMF still accepts the record.
 * Value 5 shall not be used: it was skipped in version 5 of this module. Value
 * 7 was omitted to stay aligned with ETSI TS 101 671.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-iRIversion ::= ENUMERATED {
 *     version2 (2),
 *     ...,
 *     version3 (3),
 *     version4 (4),
 *     -- note that version5 (5) cannot be used as it was missed in the version 5 of this
 *     -- ASN.1 module.
 *     version6 (6),
 *     -- vesion7(7) was ommited to align with ETSI TS 101 671.
 *     lastVersion (8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_iRIversion = _enum_for_IRI_Parameters_iRIversion | ENUMERATED;

/**
 * @summary IRI_Parameters_iRIversion_version2
 * @description
 * 
 * IRI parameter version 2. If this component is absent, the record is version
 * 1.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version2: IRI_Parameters_iRIversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version2
 * @description
 * 
 * IRI parameter version 2. Absence of the component means version 1 (annex
 * B.3).
 * @constant
 * @type {number}
 */
export
const version2: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version3
 * @description
 * 
 * IRI parameter version 3, carried as an extension addition.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version3: IRI_Parameters_iRIversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version3
 * @description
 * 
 * IRI parameter version 3 (annex B.3).
 * @constant
 * @type {number}
 */
export
const version3: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version4
 * @description
 * 
 * IRI parameter version 4. Value 5 shall not be used: it was skipped in version
 * 5 of this module.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version4: IRI_Parameters_iRIversion = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version4
 * @description
 * 
 * IRI parameter version 4. Value 5 was skipped and shall not be used (annex
 * B.3).
 * @constant
 * @type {number}
 */
export
const version4: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version6
 * @description
 * 
 * IRI parameter version 6. Value 7 was omitted so the numbering matches ETSI TS
 * 101 671.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version6: IRI_Parameters_iRIversion = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version6
 * @description
 * 
 * IRI parameter version 6. Value 7 was omitted to match ETSI TS 101 671 (annex
 * B.3).
 * @constant
 * @type {number}
 */
export
const version6: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_lastVersion
 * @description
 * 
 * Value 8. Annex B.3 recommends always sending this, even when the HI2 domain
 * identifier's version arc changes, so an older LEMF still accepts the record.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_lastVersion: IRI_Parameters_iRIversion = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastVersion
 * @description
 * 
 * Value 8, the version annex B.3 says to send even after the domain OID
 * changes.
 * @constant
 * @type {number}
 */
export
const lastVersion: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_lastVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_iRIversion: $.ASN1Decoder<IRI_Parameters_iRIversion> = $._decodeEnumerated;
export const _encode_IRI_Parameters_iRIversion: $.ASN1Encoder<IRI_Parameters_iRIversion> = $._encodeEnumerated;


/* eslint-enable */
