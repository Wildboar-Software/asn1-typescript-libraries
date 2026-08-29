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
 * @summary Epochs
 * @description
 *
 * Which ~600-year period a timestamp occupies. Epoch 0 is the
 * period beginning 0 h, 0 min, 0 s GMT on 1 January 1970. Each
 * epoch is 4 294 967 296 seconds. The integer range −128..127
 * extends the timeline to about 74 800 BCE through AD 79 400
 * (~154 000 years). ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Epochs  ::=  INTEGER(-128..127)
 * ```
 */
export type Epochs = INTEGER;


export const _decode_Epochs = $._decodeInteger;


export const _encode_Epochs = $._encodeInteger;


/* eslint-enable */
