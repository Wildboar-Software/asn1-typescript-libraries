/* eslint-disable */
import {
    GeneralString,
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

/**
 * @summary ScriptContent
 * @description
 *
 * Body of a `generalStringScript`: the script as a general
 * string. Annexes F and G define SMSL as one language for this
 * form; other languages may be named via
 * `scriptLanguageName`. ITU-T Rec. X.753 (10/97)
 * [§7.1](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §8.1.9.2.2, A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptContent  ::=  GeneralString
 * ```
 */
export type ScriptContent = GeneralString; // GeneralString


export const _decode_ScriptContent = $._decodeGeneralString;


export const _encode_ScriptContent = $._encodeGeneralString;


/* eslint-enable */
