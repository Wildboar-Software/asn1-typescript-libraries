/* eslint-disable */
import {
    NumericString,
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
 * @summary AccountNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccountNumber  ::=  NumericString(SIZE (1..151))
 * ```
 */
export
type AccountNumber = NumericString; // NumericString
export const _decode_AccountNumber = $._decodeNumericString;
export const _encode_AccountNumber = $._encodeNumericString;


/* eslint-enable */
