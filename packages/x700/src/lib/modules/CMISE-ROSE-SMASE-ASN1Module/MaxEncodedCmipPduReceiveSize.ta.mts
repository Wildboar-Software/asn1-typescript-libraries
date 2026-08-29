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
 * @summary MaxEncodedCmipPduReceiveSize
 * @description
 *
 * Maximum encoded CMIP PDU receive size, in bytes. Defined in
 * the X.727 ASN.1 module; Annex A does not define a GDMO
 * attribute that uses this syntax. ITU-T Rec. X.727 (03/99)
 * [Annex A](https://www.itu.int/rec/T-REC-X.727-199903-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxEncodedCmipPduReceiveSize  ::=  INTEGER(0..MAX)
 * ```
 */
export type MaxEncodedCmipPduReceiveSize = INTEGER;


export const _decode_MaxEncodedCmipPduReceiveSize = $._decodeInteger;


export const _encode_MaxEncodedCmipPduReceiveSize = $._encodeInteger;


/* eslint-enable */
