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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary TimeZone
 * @description
 *
 * Local time zone of a timestamp, as minutes east of GMT.
 * Values outside −780..780 are undefined or unknown; named
 * value `unknown` (781) is that condition. Identifies the
 * timezone in which the timestamp was created (for conversion
 * to other formats, including local civil time). ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER {unknown(781)}(-780..781)
 * ```
 */
export type TimeZone = INTEGER;

/**
 * @summary TimeZone_unknown
 * @description
 *
 * Timezone undefined or unknown (outside −780..780 minutes
 * east of GMT). ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.6.
 * @constant
 * @type {number}
 */
export const TimeZone_unknown: TimeZone = 781; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TimeZone_unknown
 * @description
 *
 * Timezone undefined or unknown (outside −780..780 minutes
 * east of GMT). ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.6.
 * @constant
 * @type {number}
 */
export const unknown: TimeZone = TimeZone_unknown; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TimeZone = $._decodeInteger;


export const _encode_TimeZone = $._encodeInteger;


/* eslint-enable */
