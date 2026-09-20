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
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { _enum_for_AttributeUsage, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { CharacterData, _decode_CharacterData, _encode_CharacterData } from "../DFRAbstractService/CharacterData.ta.mjs";
import { id_att_keywords } from "../DFRObjectIdentifiers/id-att-keywords.va.mjs";


/**
 * @summary keywords
 * @description
 *
 * Character strings for associating related content. Multi-valued. May be
 * taken from the ODA Document Profile (ISO 8613-4). User-assigned, copied by
 * Copy. ISO/IEC 10166-1:1991 §9.3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * keywords ATTRIBUTE ::= {
 *     WITH SYNTAX             CharacterData
 *     ID                      id-att-keywords
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<CharacterData>}
 * @implements {ATTRIBUTE<CharacterData>}
 */
export
const keywords: ATTRIBUTE<CharacterData> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CharacterData,
    },
    encoderFor: {
        "&Type": _encode_CharacterData,
    },
    "&id": id_att_keywords /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
