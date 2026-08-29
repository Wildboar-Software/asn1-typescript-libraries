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
 * DEFAULT VALUE of `availableScriptList`: no scripts until
 * configured. ITU-T Rec. X.753 (10/97)
 * [A.2](https://www.itu.int/rec/T-REC-X.753-199710-I), A.8.
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
