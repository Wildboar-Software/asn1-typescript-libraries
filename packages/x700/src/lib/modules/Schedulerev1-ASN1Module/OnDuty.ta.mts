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
 * @summary OnDuty
 * @description
 *
 * Syntax of `onDuty` (`{schedAtt 2}`). Read-only status of a
 * scheduled activity in an SMO: `TRUE` = scheduled to be
 * active, `FALSE` = inactive. Its attribute identifier is
 * included in the SO's `scheduledManagedObjects` list. Each
 * separately scheduled SMO activity shall derive its own
 * on-duty attribute from this one. ITU-T Rec. X.746 (02/00)
 * [§8.4.1.2](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.4.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OnDuty  ::=  BOOLEAN
 * ```
 */
export type OnDuty = BOOLEAN; // BooleanType




export const _decode_OnDuty = $._decodeBoolean;




export const _encode_OnDuty = $._encodeBoolean;


/* eslint-enable */
