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
import { id_att_user_reference_to_other_objects } from "../DFRObjectIdentifiers/id-att-user-reference-to-other-objects.va.mjs";


/**
 * @summary user_reference_to_other_objects
 * @description
 *
 * User-specific identifiers of other objects (values of their
 * `user-reference`). Multi-valued. Copied by Copy. ISO/IEC 10166-1:1991
 * §9.2.19.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * user-reference-to-other-objects ATTRIBUTE ::= {
 *     WITH SYNTAX             CharacterData
 *     ID                      id-att-user-reference-to-other-objects
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<CharacterData>}
 * @implements {ATTRIBUTE<CharacterData>}
 */
export
const user_reference_to_other_objects: ATTRIBUTE<CharacterData> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CharacterData,
    },
    encoderFor: {
        "&Type": _encode_CharacterData,
    },
    "&id": id_att_user_reference_to_other_objects /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
