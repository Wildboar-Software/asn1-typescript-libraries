/* eslint-disable */
import {
    NULL,
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
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import { err_remote_bind_error } from '../MTSAccessProtocol/err-remote-bind-error.va.mjs';
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary remote_bind_error
 * @description
 *
 * Information object `remote_bind_error`. The Remote-bind-error abstract-error reports
 * that the requested abstract-operation cannot be provided by the MS because the MS is
 * unable to bind to the MTS, or because there is no association in existence between the
 * MS and the UA. This abstract-error occurs on an indirect submission to the MTS via an
 * MS, or on invocation by the MTS of a submission-control abstract-operation via an MS.
 * See ITU-T X.411 (1999), §8.2.2.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * remote-bind-error ABSTRACT-ERROR ::= {
 *   PARAMETER  NULL
 *   CODE       err-remote-bind-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<NULL>}
 * @implements {ABSTRACT_ERROR<NULL>}
 */
export const remote_bind_error: ABSTRACT_ERROR<NULL> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': $._decodeNull,
    },
    encoderFor: {
        '&ParameterType': $._encodeNull,
    },
    '&errorCode': err_remote_bind_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
