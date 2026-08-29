/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary FieldElement
 * @description
 * 
 * An element of F_q as an octet string of length `ceil(log2 q / 8)`. For F_p,
 * the integer in `[0, p-1]` encoded per §2.3.7. For F_2^m, coefficients of the
 * degree-`< m` polynomial, highest degree on the left. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §2.3.5, §C.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldElement  ::=  OCTET STRING
 * ```
 */
export
type FieldElement = OCTET_STRING; // OctetStringType


export const _decode_FieldElement = $._decodeOctetString;


export const _encode_FieldElement = $._encodeOctetString;


/* eslint-enable */
