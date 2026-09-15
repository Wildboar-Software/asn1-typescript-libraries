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
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { Person, _decode_Person, _encode_Person } from "../DFRExtensionAttributes/Person.ta.mjs";
// export { Person, _decode_Person, _encode_Person } from "../DFRExtensionAttributes/Person.ta.mjs";
import { id_att_authors } from "../DFRObjectIdentifiers/id-att-authors.va.mjs";
// export { id_att_authors } from "../DFRObjectIdentifiers/id-att-authors.va.mjs";


/**
 * @summary authors
 * @description
 *
 * Persons/organizations responsible for intellectual content. May be taken
 * from the ODA Document Profile (ISO 8613-4). User-assigned, copied by Copy.
 * ISO/IEC 10166-1:1991 §9.3.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authors ATTRIBUTE ::= {
 *     WITH SYNTAX             Person
 *     ID                      id-att-authors
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Person>}
 * @implements {ATTRIBUTE<Person>}
 */
export
const authors: ATTRIBUTE<Person> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Person,
    },
    encoderFor: {
        "&Type": _encode_Person,
    },
    "&id": id_att_authors /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
