/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpecifiedECDomainVersion
 * @description
 * 
 * Version of `SpecifiedECDomain`. `ecdpVer1` (1): no verifiable generation
 * requirement. `ecdpVer2` (2): curve and base point generated verifiably at
 * random; `curve.seed` shall be present. `ecdpVer3` (3): only the base point is
 * verifiably random; `curve.seed` shall be present. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecifiedECDomainVersion  ::=  INTEGER {
 *     ecdpVer1(1),
 *     ecdpVer2(2),
 *     ecdpVer3(3)
 * }
 * ```
 */
export
type SpecifiedECDomainVersion = INTEGER;

/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @description
 *
 * Version 1: no verifiable-generation requirement on the curve or base point.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
 *
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer1: SpecifiedECDomainVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @description
 *
 * Version 1: no verifiable-generation requirement. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
 *
 * @constant
 * @type {number}
 */
export
const ecdpVer1: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @description
 *
 * Version 2: curve and base point generated verifiably at random; `curve.seed`
 * shall be present. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
 *
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer2: SpecifiedECDomainVersion = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @description
 *
 * Version 2: curve and G verifiably random; `curve.seed` required. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf)
 * §C.2.
 *
 * @constant
 * @type {number}
 */
export
const ecdpVer2: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @description
 *
 * Version 3: only the base point is generated verifiably at random;
 * `curve.seed` shall be present. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
 *
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer3: SpecifiedECDomainVersion = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @description
 *
 * Version 3: only G verifiably random; `curve.seed` required. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
 *
 * @constant
 * @type {number}
 */
export
const ecdpVer3: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer3; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SpecifiedECDomainVersion = $._decodeInteger;


export const _encode_SpecifiedECDomainVersion = $._encodeInteger;


/* eslint-enable */
