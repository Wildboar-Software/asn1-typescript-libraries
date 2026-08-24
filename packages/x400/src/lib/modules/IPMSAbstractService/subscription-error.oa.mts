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
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import {
    subscription_error_ParameterType,
    _decode_subscription_error_ParameterType,
    _encode_subscription_error_ParameterType,
} from '../IPMSAbstractService/subscription-error-ParameterType.ta.mjs';
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary subscription_error
 * @description
 *
 * Information object `subscription_error`. The Subscription Error abstract error reports
 * that the user has not subscribed to one or more of the elements of service implicit in
 * his invocation of the abstract operation whose performance is aborted.
 * subscription-error ABSTRACT-ERROR ::= { PARAMETER SET { problem [0]
 * SubscriptionProblem} } This abstract error has the following parameters: a) Problem
 * (M): The subscription-related problem encountered. See ITU-T X.420 (1999), §13.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subscription-error ABSTRACT-ERROR ::= {
 *   PARAMETER  SET {problem  [0]  SubscriptionProblem}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<subscription_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<subscription_error_ParameterType>}
 */
export const subscription_error: ABSTRACT_ERROR<subscription_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_subscription_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_subscription_error_ParameterType,
    },
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
