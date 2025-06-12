/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    RequestArgument,
    _decode_RequestArgument,
    _encode_RequestArgument,
} from '../TCAP-Examples/RequestArgument.ta.mjs';
export {
    RequestArgument,
    _decode_RequestArgument,
    _encode_RequestArgument,
} from '../TCAP-Examples/RequestArgument.ta.mjs';
import {
    RoutingInformation,
    _decode_RoutingInformation,
    _encode_RoutingInformation,
} from '../TCAP-Examples/RoutingInformation.ta.mjs';
export {
    RoutingInformation,
    _decode_RoutingInformation,
    _encode_RoutingInformation,
} from '../TCAP-Examples/RoutingInformation.ta.mjs';
import { invalidCalledNumber } from '../TCAP-Examples/invalidCalledNumber.oa.mjs';
export { invalidCalledNumber } from '../TCAP-Examples/invalidCalledNumber.oa.mjs';
import { subscriberNotReachable } from '../TCAP-Examples/subscriberNotReachable.oa.mjs';
export { subscriberNotReachable } from '../TCAP-Examples/subscriberNotReachable.oa.mjs';
import { calledBarred } from '../TCAP-Examples/calledBarred.oa.mjs';
export { calledBarred } from '../TCAP-Examples/calledBarred.oa.mjs';
import { processingFailure } from '../TCAP-Examples/processingFailure.oa.mjs';
export { processingFailure } from '../TCAP-Examples/processingFailure.oa.mjs';
import { getCallingPartyAddress } from '../TCAP-Examples/getCallingPartyAddress.oa.mjs';
export { getCallingPartyAddress } from '../TCAP-Examples/getCallingPartyAddress.oa.mjs';

/* START_OF_SYMBOL_DEFINITION provideRoutingInformation */
/**
 * @summary provideRoutingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * provideRoutingInformation OPERATION ::= {
 *   ARGUMENT  RequestArgument
 *   RESULT    RoutingInformation
 *   ERRORS
 *     {invalidCalledNumber | subscriberNotReachable | calledBarred |
 *       processingFailure}
 *   LINKED    {getCallingPartyAddress}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<RequestArgument, RoutingInformation>}
 * @implements {OPERATION<RequestArgument, RoutingInformation>}
 */
export const provideRoutingInformation: OPERATION<
    RequestArgument,
    RoutingInformation
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_RequestArgument,
        '&ResultType': _decode_RoutingInformation,
    },
    encoderFor: {
        '&ArgumentType': _encode_RequestArgument,
        '&ResultType': _encode_RoutingInformation,
    },
    '&Errors': [
        invalidCalledNumber,
        subscriberNotReachable,
        calledBarred,
        processingFailure,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [getCallingPartyAddress] /* OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION provideRoutingInformation */

/* eslint-enable */
