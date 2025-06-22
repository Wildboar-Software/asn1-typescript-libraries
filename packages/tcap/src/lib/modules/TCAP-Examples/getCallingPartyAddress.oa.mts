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
    CallingPartyAddress,
    _decode_CallingPartyAddress,
    _encode_CallingPartyAddress,
} from '../TCAP-Examples/CallingPartyAddress.ta.mjs';
import { callingPartyAddressNotAvailable } from '../TCAP-Examples/callingPartyAddressNotAvailable.oa.mjs';
import { processingFailure } from '../TCAP-Examples/processingFailure.oa.mjs';
/**
 * @summary getCallingPartyAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * getCallingPartyAddress OPERATION ::= {
 *   RESULT  CallingPartyAddress
 *   ERRORS  {callingPartyAddressNotAvailable | processingFailure}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<CallingPartyAddress>}
 * @implements {OPERATION<CallingPartyAddress>}
 */
export const getCallingPartyAddress: OPERATION<CallingPartyAddress> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': undefined,
        '&ResultType': _decode_CallingPartyAddress,
    },
    encoderFor: {
        '&ArgumentType': undefined,
        '&ResultType': _encode_CallingPartyAddress,
    },
    '&Errors': [
        callingPartyAddressNotAvailable,
        processingFailure,
    ] /* OBJECT_FIELD_SETTING */,
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
