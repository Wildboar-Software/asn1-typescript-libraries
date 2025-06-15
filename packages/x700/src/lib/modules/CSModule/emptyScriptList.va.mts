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
    AvailableScriptList,
    _decode_AvailableScriptList,
    _encode_AvailableScriptList,
} from '../CSModule/AvailableScriptList.ta.mjs';
import {
    _decode_ScriptList,
    _encode_ScriptList,
} from '../CSModule/ScriptList.ta.mjs';
/**
 * @summary emptyScriptList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * emptyScriptList AvailableScriptList ::= {}
 * ```
 *
 * @constant
 */
export const emptyScriptList: AvailableScriptList = [];

/* eslint-enable */
