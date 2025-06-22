import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;
import {
    _decode_SubstringAssertion,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";

// SubstringAssertion ::= SEQUENCE OF CHOICE {
//     initial  [0]  UnboundedDirectoryString,
//     any      [1]  UnboundedDirectoryString,
//     final    [2]  UnboundedDirectoryString,
//       -- at most one initial and one final component
//     control       Attribute{{SupportedAttributes}},
//       -- Used to specify interpretation of the following items
//     ... }

// caseIgnoreListSubstringsMatch MATCHING-RULE ::= {
//     SYNTAX       SubstringAssertion
//     LDAP-SYNTAX  substringAssertion.&id
//     LDAP-NAME    {"caseIgnoreListSubstringsMatch"}
//     ID           id-mr-caseIgnoreListSubstringsMatch }

export
const caseIgnoreListSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    // const sel: SubstringSelection = selection ?? SubstringSelection.any_;
    const a = _decode_SubstringAssertion(assertion);
    const v = value.sequenceOf.map((e) => directoryStringToString(_decode_UDS(e)));
    if (v.length === 0) {
        return false;
    }
    // NOTE: According to how the MR is defined, initial and final should only
    // match against the first and last lines, respectively.
    const firstStr: string = v[0];
    const lastStr: string = v[v.length - 1];
    for (const substr of a) {
        if ("any_" in substr) {
            const s: string = directoryStringToString(substr.any_);
            let matched: boolean = false;
            for (const str of v) {
                if (str.indexOf(s) >= 0) {
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                return false;
            }
        } else if ("initial" in substr) {
            const s: string = directoryStringToString(substr.initial);
            if (!firstStr.startsWith(s)) {
                return false;
            }
        } else if ("final" in substr) {
            const s: string = directoryStringToString(substr.final);
            if (!lastStr.endsWith(s)) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

export default caseIgnoreListSubstringsMatch;
