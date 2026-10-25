/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type AuthenticationLevel, _decode_AuthenticationLevel, _encode_AuthenticationLevel } from "../BasicAccessControl/AuthenticationLevel.ta.mjs";
// export { AuthenticationLevel, _decode_AuthenticationLevel, _encode_AuthenticationLevel } from "../BasicAccessControl/AuthenticationLevel.ta.mjs";
import { id_at_bindLevelIfOK } from "../IN-object-identifiers/id-at-bindLevelIfOK.va.mjs";
// export { id_at_bindLevelIfOK } from "../IN-object-identifiers/id-at-bindLevelIfOK.va.mjs";


/**
 * @summary bindLevelIfOK
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bindLevelIfOK ATTRIBUTE ::= {
 *   WITH SYNTAX   AuthenticationLevel
 *   SINGLE VALUE  TRUE
 *   ID            id-at-bindLevelIfOK
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<AuthenticationLevel>}
 * @implements {ATTRIBUTE<AuthenticationLevel>}
 */
export
const bindLevelIfOK: ATTRIBUTE<AuthenticationLevel> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AuthenticationLevel,
    },
    encoderFor: {
        "&Type": _encode_AuthenticationLevel,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_bindLevelIfOK /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
