import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { AttributeUsage_directoryOperation } from "../InformationFramework/AttributeUsage.ta.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import {
    PwdHistory,
    _decode_PwdHistory,
    _encode_PwdHistory,
} from "../InformationFramework/PwdHistory.ta.mjs";

// pwdHistory{ATTRIBUTE:passwordAttribute,MATCHING-RULE:historyMatch,OBJECT IDENTIFIER:id}
// ATTRIBUTE ::= {
//   WITH SYNTAX             PwdHistory{passwordAttribute}
//   EQUALITY MATCHING RULE  historyMatch
//   USAGE                   directoryOperation
//   ID                      id}

export function pwdHistory(
    _passwordAttribute: ATTRIBUTE,
    historyMatch: MATCHING_RULE,
    id: OBJECT_IDENTIFIER
): ATTRIBUTE {
    return {
        class: "ATTRIBUTE",
        decoderFor: {
            "&Type": _decode_PwdHistory,
        },
        encoderFor: {
            "&Type": _encode_PwdHistory,
        },
        "&id": id,
        "&Type": PwdHistory,
        "&equality-match": historyMatch,
        "&usage": AttributeUsage_directoryOperation,
    };
}
