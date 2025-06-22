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
