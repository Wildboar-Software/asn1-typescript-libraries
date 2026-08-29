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
    ExecutionParameterList,
    _decode_ExecutionParameterList,
    _encode_ExecutionParameterList,
} from '../CSModule/ExecutionParameterList.ta.mjs';
import {
    _decode_ExecutionParameter,
    _encode_ExecutionParameter,
} from '../CSModule/ExecutionParameter.ta.mjs';
/**
 * @summary emptyExecutionParameterList
 * @description
 *
 * DEFAULT VALUE of a launch pad's
 * `defaultExecutionParameterList`: no default scripts. If a
 * trigger omits its execution parameter list and this default
 * is empty, the launch pad returns `noScriptError`. ITU-T Rec.
 * X.753 (10/97)
 * [§7.1](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * A.2 (`triggerActionAccepter`), A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * emptyExecutionParameterList ExecutionParameterList ::= sequentialExecutionList:{}
 * ```
 *
 * @constant
 */
export const emptyExecutionParameterList: ExecutionParameterList = {
    sequentialExecutionList: [],
};

/* eslint-enable */
