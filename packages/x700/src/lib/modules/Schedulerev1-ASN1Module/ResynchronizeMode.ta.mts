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
 * @summary ResynchronizeMode
 * @description
 *
 * Syntax of `resynchronizeMode` (`{schedAtt 3}`). How a
 * periodic scheduler resynchronizes triggering when it is
 * activated (administrative state unlocked and operational
 * state enabled). `FALSE`: synchronize to the initial
 * triggering point, or to the pre-suspension points on
 * resume. `TRUE`: trigger on resumption and synchronize the
 * period to the resumption time. Mutually exclusive with the
 * period-synchronization package. ITU-T Rec. X.746 (02/00)
 * [§8.3.8](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * 7.3.2.1, A.4.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResynchronizeMode  ::=  BOOLEAN
 * ```
 */
export type ResynchronizeMode = BOOLEAN; // BooleanType




export const _decode_ResynchronizeMode = $._decodeBoolean;




export const _encode_ResynchronizeMode = $._encodeBoolean;


/* eslint-enable */
