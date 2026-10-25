/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_Parameters_iRIversion
 * @description
 * 
 * Version indication of the HI2 interface (table A.3.1). Optional. From TS 101
 * 671 v2.5.1 it is redundant with `domainID`, which was introduced in that
 * edition. For backward compatibility, even when the version of `domainID` is
 * incremented, the module recommends always sending `lastVersion(8)`. If the
 * parameter is absent, version 1 is handled. The enumerated values begin at
 * `version2(2)`. TS 101 671 does not define what changed in `version2` through
 * `version7`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-iRIversion ::= ENUMERATED {
 *     version2(2),
 *     ...,
 *     version3(3),
 *     version4(4),
 *     version5(5),
 *     version6(6),
 *     version7(7),
 *     lastVersion(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IRI_Parameters_iRIversion {
    /**
     * Named version of the HI2 interface. TS 101 671 does not define which
     * changes this value represents. `iRIversion` is optional and, from v2.5.1,
     * redundant with `domainID`. The module recommends sending `lastVersion(8)`
     * even when the version inside `domainID` is incremented. If the parameter
     * is absent, version 1 is handled.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    version2 = 2,
    /**
     * Named version of the HI2 interface. TS 101 671 does not define which
     * changes this value represents. `iRIversion` is optional and, from v2.5.1,
     * redundant with `domainID`. The module recommends sending `lastVersion(8)`
     * even when the version inside `domainID` is incremented. If the parameter
     * is absent, version 1 is handled.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    version3 = 3,
    /**
     * Named version of the HI2 interface. TS 101 671 does not define which
     * changes this value represents. `iRIversion` is optional and, from v2.5.1,
     * redundant with `domainID`. The module recommends sending `lastVersion(8)`
     * even when the version inside `domainID` is incremented. If the parameter
     * is absent, version 1 is handled.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    version4 = 4,
    /**
     * Named version of the HI2 interface. TS 101 671 does not define which
     * changes this value represents. `iRIversion` is optional and, from v2.5.1,
     * redundant with `domainID`. The module recommends sending `lastVersion(8)`
     * even when the version inside `domainID` is incremented. If the parameter
     * is absent, version 1 is handled.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    version5 = 5,
    /**
     * Named version of the HI2 interface. TS 101 671 does not define which
     * changes this value represents. `iRIversion` is optional and, from v2.5.1,
     * redundant with `domainID`. The module recommends sending `lastVersion(8)`
     * even when the version inside `domainID` is incremented. If the parameter
     * is absent, version 1 is handled.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    version6 = 6,
    /**
     * Named version of the HI2 interface. TS 101 671 does not define which
     * changes this value represents. `iRIversion` is optional and, from v2.5.1,
     * redundant with `domainID`. The module recommends sending `lastVersion(8)`
     * even when the version inside `domainID` is incremented. If the parameter
     * is absent, version 1 is handled.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    version7 = 7,
    /**
     * Value the module recommends sending to the LEMF, including when the
     * version inside `domainID` is incremented, so the enumeration stays stable
     * for receivers. `iRIversion` is optional and has been redundant with
     * `domainID` since TS 101 671 v2.5.1. If the parameter is absent, version 1
     * is handled.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    lastVersion = 8,
}

/**
 * @summary IRI_Parameters_iRIversion
 * @description
 * 
 * Version indication of the HI2 interface (table A.3.1). Optional. From TS 101
 * 671 v2.5.1 it is redundant with `domainID`, which was introduced in that
 * edition. For backward compatibility, even when the version of `domainID` is
 * incremented, the module recommends always sending `lastVersion(8)`. If the
 * parameter is absent, version 1 is handled. The enumerated values begin at
 * `version2(2)`. TS 101 671 does not define what changed in `version2` through
 * `version7`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-iRIversion ::= ENUMERATED {
 *     version2(2),
 *     ...,
 *     version3(3),
 *     version4(4),
 *     version5(5),
 *     version6(6),
 *     version7(7),
 *     lastVersion(8)
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
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version2: _enum_for_IRI_Parameters_iRIversion.version2 = _enum_for_IRI_Parameters_iRIversion.version2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version2
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const version2: _enum_for_IRI_Parameters_iRIversion.version2 = IRI_Parameters_iRIversion_version2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version3
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version3: _enum_for_IRI_Parameters_iRIversion.version3 = _enum_for_IRI_Parameters_iRIversion.version3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version3
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const version3: _enum_for_IRI_Parameters_iRIversion.version3 = IRI_Parameters_iRIversion_version3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version4
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version4: _enum_for_IRI_Parameters_iRIversion.version4 = _enum_for_IRI_Parameters_iRIversion.version4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version4
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const version4: _enum_for_IRI_Parameters_iRIversion.version4 = IRI_Parameters_iRIversion_version4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version5
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version5: _enum_for_IRI_Parameters_iRIversion.version5 = _enum_for_IRI_Parameters_iRIversion.version5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version5
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const version5: _enum_for_IRI_Parameters_iRIversion.version5 = IRI_Parameters_iRIversion_version5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version6
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version6: _enum_for_IRI_Parameters_iRIversion.version6 = _enum_for_IRI_Parameters_iRIversion.version6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version6
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const version6: _enum_for_IRI_Parameters_iRIversion.version6 = IRI_Parameters_iRIversion_version6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version7
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version7: _enum_for_IRI_Parameters_iRIversion.version7 = _enum_for_IRI_Parameters_iRIversion.version7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version7
 * @description
 *
 * Named version of the HI2 interface. TS 101 671 does not define which changes
 * this value represents. `iRIversion` is optional and, from v2.5.1, redundant
 * with `domainID`. The module recommends sending `lastVersion(8)` even when the
 * version inside `domainID` is incremented. If the parameter is absent, version
 * 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const version7: _enum_for_IRI_Parameters_iRIversion.version7 = IRI_Parameters_iRIversion_version7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_lastVersion
 * @description
 *
 * Value the module recommends sending to the LEMF, including when the version
 * inside `domainID` is incremented, so the enumeration stays stable for
 * receivers. `iRIversion` is optional and has been redundant with `domainID`
 * since TS 101 671 v2.5.1. If the parameter is absent, version 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_lastVersion: _enum_for_IRI_Parameters_iRIversion.lastVersion = _enum_for_IRI_Parameters_iRIversion.lastVersion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastVersion
 * @description
 *
 * Value the module recommends sending to the LEMF, including when the version
 * inside `domainID` is incremented, so the enumeration stays stable for
 * receivers. `iRIversion` is optional and has been redundant with `domainID`
 * since TS 101 671 v2.5.1. If the parameter is absent, version 1 is handled.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lastVersion: _enum_for_IRI_Parameters_iRIversion.lastVersion = IRI_Parameters_iRIversion_lastVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_iRIversion: $.ASN1Decoder<IRI_Parameters_iRIversion> = $._decodeEnumerated;
export const _encode_IRI_Parameters_iRIversion: $.ASN1Encoder<IRI_Parameters_iRIversion> = $._encodeEnumerated;


/* eslint-enable */
