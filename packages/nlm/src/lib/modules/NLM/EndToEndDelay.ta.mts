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
 * @summary EndToEndDelay
 * @description
 *
 * End-to-end delay in milliseconds (0..65535). Per 8208/X.25, 65535 means
 * unknown or greater than 65534 ms. Defined in §6.2; X.283 GDMO does not bind
 * it to a published attribute.
 * ITU-T Rec. X.283 (12/97)
 * [§6.2](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndToEndDelay  ::=  INTEGER(0..65535)
 * ```
 */
export type EndToEndDelay = INTEGER;




export const _decode_EndToEndDelay = $._decodeInteger;




export const _encode_EndToEndDelay = $._encodeInteger;


/* eslint-enable */
