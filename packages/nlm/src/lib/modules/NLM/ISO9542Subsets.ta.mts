/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary ISO9542Subsets
 * @description
 *
 * ISO 9542 subsets operational on a linkage. Syntax of
 * `iSO9542OperationalSubsets`. Bit 0 configuration, bit 1 redirection.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISO9542Subsets  ::=  BIT STRING {configuration(0), redirection(1)}
 * ```
 */
export type ISO9542Subsets = BIT_STRING;


/**
 * @summary ISO9542Subsets_configuration
 * @description
 *
 * ISO 9542 configuration subset (bit 0).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 */
export const ISO9542Subsets_configuration: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary configuration
 * @description
 *
 * ISO 9542 configuration subset (bit 0).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 */
export const configuration: number = ISO9542Subsets_configuration; /* SHORT_NAMED_BIT */


/**
 * @summary ISO9542Subsets_redirection
 * @description
 *
 * ISO 9542 redirection subset (bit 1).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 */
export const ISO9542Subsets_redirection: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary redirection
 * @description
 *
 * ISO 9542 redirection subset (bit 1).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 */
export const redirection: number = ISO9542Subsets_redirection; /* SHORT_NAMED_BIT */




export const _decode_ISO9542Subsets = $._decodeBitString;




export const _encode_ISO9542Subsets = $._encodeBitString;


/* eslint-enable */
