/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { AddressListDesignator, _decode_AddressListDesignator, _encode_AddressListDesignator } from "../MMSHeadingExtensions/AddressListDesignator.ta.mjs";
import { id_nato_mmhs_hat_address_list_indicator } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-address-list-indicator.va.mjs";


/**
 * @summary address_list_indicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * address-list-indicator ATTRIBUTE ::= {
 *   WITH SYNTAX   AddressListDesignator
 *   ID            id-nato-mmhs-hat-address-list-indicator }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<AddressListDesignator>}
 * @implements {ATTRIBUTE<AddressListDesignator>}
 */
export
const address_list_indicator: ATTRIBUTE<AddressListDesignator> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AddressListDesignator,
    },
    encoderFor: {
        "&Type": _encode_AddressListDesignator,
    },
    "&id": id_nato_mmhs_hat_address_list_indicator /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
