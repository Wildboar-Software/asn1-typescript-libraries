/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifier } from "../SelectedAttributeTypes/objectIdentifier.oa.mjs";
// export { objectIdentifier } from "../SelectedAttributeTypes/objectIdentifier.oa.mjs";
import { at_or_address_component_type } from "../MIXERAddressMapping/at-or-address-component-type.va.mjs";
// export { at_or_address_component_type } from "../MIXERAddressMapping/at-or-address-component-type.va.mjs";


/**
 * @summary oRAddressComponentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oRAddressComponentType ATTRIBUTE ::= {
 *     SUBTYPE OF          objectIdentifier
 *     SINGLE VALUE        TRUE
 *     ID                  at-or-address-component-type }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const oRAddressComponentType: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": objectIdentifier /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": at_or_address_component_type /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
