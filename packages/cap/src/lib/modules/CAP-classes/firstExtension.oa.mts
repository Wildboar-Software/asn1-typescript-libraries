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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _enum_for_CriticalityType, ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";
// export { CriticalityType, _enum_for_CriticalityType, CriticalityType_ignore /* IMPORTED_LONG_ENUMERATION_ITEM */, ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */, CriticalityType_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type EXTENSION } from "../CAP-classes/EXTENSION.oca.mjs";


/**
 * @summary firstExtension
 * @description
 *
 * Example `EXTENSION` only (`NULL`, criticality `ignore`, identified by
 * global OID `{itu-t(0) identified-organization(4) organisation(0)
 * gsm(1) capextension(2)}`). Not a real network-operator extension.
 * (3GPP TS 29.078 V19.0.0 clause 5.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * firstExtension EXTENSION ::= {
 *     EXTENSION-SYNTAX    NULL
 *     CRITICALITY        ignore
 *     IDENTIFIED BY    global : {itu-t(0) identified-organization(4) organisation(0) gsm(1)
 *             capextension(2)}
 *     }
 * ```
 * 
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export
const firstExtension: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtensionType": $._decodeNull,
    },
    encoderFor: {
        "&ExtensionType": $._encodeNull,
    },
    "&criticality": ignore /* OBJECT_FIELD_SETTING */,
    "&id": { global: _OID.fromParts([/* itu-t */ 0, /* identified-organization */ 4, /* organisation */ 0, /* gsm */ 1, /* capextension */ 2,]) } /* OBJECT_FIELD_SETTING */,
    "&ExtensionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
