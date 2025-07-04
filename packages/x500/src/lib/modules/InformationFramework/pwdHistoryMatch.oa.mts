import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";

// pwdHistoryMatch{ATTRIBUTE:passwordAttribute,OBJECT IDENTIFIER:id}
// MATCHING-RULE ::= {
//   SYNTAX     passwordAttribute.&Type
//   ID         id}

export function pwdHistoryMatch(
    passwordAttribute: ATTRIBUTE,
    id: OBJECT_IDENTIFIER
): MATCHING_RULE {
    return {
        class: "MATCHING-RULE",
        decoderFor: {
            "&AssertionType": passwordAttribute.decoderFor["&Type"],
        },
        encoderFor: {
            "&AssertionType": passwordAttribute.encoderFor["&Type"],
        },
        "&id": id,
        "&AssertionType": passwordAttribute["&Type"],
    };
}
