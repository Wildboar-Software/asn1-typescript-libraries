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
 * @summary ECPoint
 * @description
 * 
 * An elliptic-curve point as an octet string per §2.3.3: `00` for the point at
 * infinity; `02`/`03` plus x for compressed; `04` plus x then y for
 * uncompressed. Length is 1, `ceil(log2 q / 8)+1`, or `2*ceil(log2 q / 8)+1`.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §2.3.3, §C.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPoint  ::=  OCTET STRING
 * ```
 */
export
type ECPoint = OCTET_STRING; // OctetStringType


export const _decode_ECPoint = $._decodeOctetString;


export const _encode_ECPoint = $._encodeOctetString;


/* eslint-enable */
