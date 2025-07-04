import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { AttributeUsage_directoryOperation } from "../InformationFramework/AttributeUsage.ta.mjs";

// pwdRecentlyExpired{ATTRIBUTE:passwordAttribute,OBJECT IDENTIFIER:id} ATTRIBUTE ::= {
//     WITH SYNTAX             passwordAttribute.&Type
//     EQUALITY MATCHING RULE  passwordAttribute.&equality-match
//     SINGLE VALUE            TRUE
//     USAGE                   directoryOperation
//     ID                      id}

export function pwdRecentlyExpired(
    passwordAttribute: ATTRIBUTE,
    id: OBJECT_IDENTIFIER
): ATTRIBUTE {
    return {
        class: "ATTRIBUTE",
        decoderFor: {
            "&Type": passwordAttribute.decoderFor["&Type"],
        },
        encoderFor: {
            "&Type": passwordAttribute.encoderFor["&Type"],
        },
        "&id": id,
        "&Type": passwordAttribute["&Type"],
        "&usage": AttributeUsage_directoryOperation,
        "&single-valued": true,
    };
}
