/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    RequestArgument,
    _decode_RequestArgument,
    _encode_RequestArgument,
} from '../TCAP-Examples/RequestArgument.ta.mjs';
import {
    RoutingInformation,
    _decode_RoutingInformation,
    _encode_RoutingInformation,
} from '../TCAP-Examples/RoutingInformation.ta.mjs';
import { invalidCalledNumber } from '../TCAP-Examples/invalidCalledNumber.oa.mjs';
import { subscriberNotReachable } from '../TCAP-Examples/subscriberNotReachable.oa.mjs';
import { calledBarred } from '../TCAP-Examples/calledBarred.oa.mjs';
import { processingFailure } from '../TCAP-Examples/processingFailure.oa.mjs';
import { getCallingPartyAddress } from '../TCAP-Examples/getCallingPartyAddress.oa.mjs';
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

/* eslint-enable */
