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
 * @summary Fixed
 * @description
 *
 * GDMO attribute-group `FIXED` construct. `TRUE` if the group has fixed
 * membership; `FALSE` if it is extensible (managed object classes may
 * add members). Syntax of `fixed`. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.3](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722 (01/92)
 * [§8.8.3.2](https://www.itu.int/rec/T-REC-X.722-199201-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Fixed  ::=  BOOLEAN
 * ```
 */
export type Fixed = BOOLEAN; // BooleanType




export const _decode_Fixed = $._decodeBoolean;




export const _encode_Fixed = $._encodeBoolean;


/* eslint-enable */
