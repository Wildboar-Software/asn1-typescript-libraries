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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary TSelect
 * @description
 *
 * Four-octet value defined in the TimeMF ASN.1 module. The
 * rec does not assign this type to a GDMO attribute or
 * describe its use. ITU-T Rec. X.743 (06/98)
 * [§A.5](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSelect  ::=  OCTET STRING(SIZE (4))
 * ```
 */
export type TSelect = OCTET_STRING; // OctetStringType


export const _decode_TSelect = $._decodeOctetString;


export const _encode_TSelect = $._encodeOctetString;


/* eslint-enable */
