/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary False
 * @description
 *
 * Constrained `BOOLEAN` that may only be `FALSE`. Defined in §6.2; distinct
 * from the value `false`.
 * ITU-T Rec. X.283 (12/97)
 * [§6.2](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * False  ::=  BOOLEAN(FALSE)
 * ```
 */
export type False = BOOLEAN; // BooleanType




export const _decode_False = $._decodeBoolean;




export const _encode_False = $._encodeBoolean;


/* eslint-enable */
