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
} from 'asn1-ts';
import {
    ExecutionParameterList,
    _decode_ExecutionParameterList,
    _encode_ExecutionParameterList,
} from '../CSModule/ExecutionParameterList.ta.mjs';
import {
    _decode_ExecutionParameter,
    _encode_ExecutionParameter,
} from '../CSModule/ExecutionParameter.ta.mjs';
/* START_OF_SYMBOL_DEFINITION emptyParameterList */
/**
 * @summary emptyParameterList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * emptyParameterList ExecutionParameterList ::= sequentialExecutionList:{}
 * ```
 *
 * @constant
 */
export const emptyParameterList: ExecutionParameterList = {
    sequentialExecutionList: [],
};
/* END_OF_SYMBOL_DEFINITION emptyParameterList */

/* eslint-enable */
