/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary ECPrivateKey_version
 * @description
 *
 * Syntax version number for `ECPrivateKey`
 * ([RFC 5915 §3](https://datatracker.ietf.org/doc/html/rfc5915#section-3)).
 * For this version of the document it SHALL be `ecPrivkeyVer1`, whose
 * INTEGER value is one (1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPrivateKey-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ECPrivateKey_version = INTEGER;


/**
 * @summary ECPrivateKey_version_ecPrivkeyVer1
 * @description
 *
 * Named INTEGER value `ecPrivkeyVer1(1)` — the only syntax version
 * defined for `ECPrivateKey`
 * ([RFC 5915 §3](https://datatracker.ietf.org/doc/html/rfc5915#section-3)).
 *
 * @constant
 * @type {number}
 */
export
const ECPrivateKey_version_ecPrivkeyVer1: 1 = 1 satisfies ECPrivateKey_version; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ecPrivkeyVer1
 * @description
 *
 * Short name for `ECPrivateKey_version_ecPrivkeyVer1` (value 1)
 * ([RFC 5915 §3](https://datatracker.ietf.org/doc/html/rfc5915#section-3)).
 *
 * @constant
 * @type {number}
 */
export
const ecPrivkeyVer1: 1 = ECPrivateKey_version_ecPrivkeyVer1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ECPrivateKey_version: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_ECPrivateKey_version: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
