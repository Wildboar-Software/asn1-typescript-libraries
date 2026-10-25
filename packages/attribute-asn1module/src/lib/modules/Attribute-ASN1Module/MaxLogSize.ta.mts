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
 * @summary MaxLogSize
 * @description
 * 
 * Maximum log size in octets. `unlimited(0)` denotes infinite size and is
 * largest under ORDERING (otherwise as sequentially increasing positive
 * integers). MATCHES FOR EQUALITY, ORDERING. `{smi2AttributeID 62}`. ITU-T Rec.
 * X.721 (02/92) §10.7.4.14, §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxLogSize  ::=  INTEGER {unlimited(0)}
 * ```
 */
export
type MaxLogSize = INTEGER;

/**
 * @summary MaxLogSize_unlimited
 * @description
 *
 * Infinite size; largest under ORDERING. ITU-T Rec. X.721 (02/92) §10.7.4.14.
 *
 * @constant
 * @type {number}
 */
export
const MaxLogSize_unlimited: 0 = 0 satisfies MaxLogSize; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MaxLogSize_unlimited
 * @description
 *
 * Infinite size; largest under ORDERING. ITU-T Rec. X.721 (02/92) §10.7.4.14.
 *
 * @constant
 * @type {number}
 */
export
const unlimited: 0 = MaxLogSize_unlimited; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MaxLogSize: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_MaxLogSize: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
