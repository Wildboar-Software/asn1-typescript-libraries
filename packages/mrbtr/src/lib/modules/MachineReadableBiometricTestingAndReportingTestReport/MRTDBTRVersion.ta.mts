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
 * @summary MRTDBTRVersion
 * @description
 *
 * Version of this test-report format (Clause 6.4.1). Extensible
 * INTEGER; only `v0`(0) is defined in ISO/IEC 29120-1:2022.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MRTDBTRVersion  ::=  INTEGER { v0(0) } ( v0, ... )
 * ```
 */
export
type MRTDBTRVersion = INTEGER;

/**
 * @summary MRTDBTRVersion_v0
 * @description
 *
 * Version 0 of the ISO/IEC 29120-1 test-report format. Default when
 * `version` is omitted (Clauses 6.4.1, 6.5.1, 6.6).
 *
 * @constant
 * @type {number}
 */
export
const MRTDBTRVersion_v0: MRTDBTRVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MRTDBTRVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: MRTDBTRVersion = MRTDBTRVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) MRTDBTRVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MRTDBTRVersion = $._decodeInteger;


/**
 * @summary Encodes a(n) MRTDBTRVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRTDBTRVersion, encoded as an ASN.1 Element.
 */
export const _encode_MRTDBTRVersion = $._encodeInteger;


/* eslint-enable */
