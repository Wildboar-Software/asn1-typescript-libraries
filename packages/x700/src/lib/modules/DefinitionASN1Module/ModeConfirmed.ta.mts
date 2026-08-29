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
 * @summary ModeConfirmed
 * @description
 *
 * GDMO `MODE CONFIRMED` construct. `TRUE` if the action or notification
 * is confirmed; `FALSE` if the construct is absent (an action may then
 * be confirmed or unconfirmed at the manager's discretion; for
 * notifications, confirmed vs unconfirmed is an agent policy on
 * M-EVENT-REPORT). ITU-T Rec. X.750 (10/96)
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO:
 * X.722 (01/92)
 * [§8.10.3.2](https://www.itu.int/rec/T-REC-X.722-199201-I),
 * [§8.11.3.4](https://www.itu.int/rec/T-REC-X.722-199201-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModeConfirmed  ::=  BOOLEAN
 * ```
 */
export type ModeConfirmed = BOOLEAN; // BooleanType




export const _decode_ModeConfirmed = $._decodeBoolean;




export const _encode_ModeConfirmed = $._encodeBoolean;


/* eslint-enable */
