import type { Filter } from "../modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import bytesToAscii from "../utils/bytesToAscii.mjs";

const mustBeEscaped = new Set([
    "\x00",
    "(",
    ")",
    "*",
    "\x7F",
].map((char) => char.charCodeAt(0)));

function escapedValue (value: Uint8Array): string {
    return Array.from(value)
        .map((byte: number) => (
            mustBeEscaped.has(byte)
                ? `\x7F${byte.toString(16).padStart(2, "0")}`
                : String.fromCharCode(byte)
        ))
        .join("");
}

export
function stringifyFilter (filter: Filter): string {
    if ("and" in filter) {
        return `(&${filter.and.map(stringifyFilter)})`;
    } else if ("or" in filter) {
        return `(|${filter.or.map(stringifyFilter)})`;
    } else if ("not" in filter) {
        return `(!${stringifyFilter(filter.not)})`;
    } else if ("equalityMatch" in filter) {
        const normAttr = bytesToAscii(filter.equalityMatch.attributeDesc);
        const normValue = escapedValue(filter.equalityMatch.assertionValue);
        return `(${normAttr}=${normValue})`;
    } else if ("substrings" in filter) {
        const normAttr = bytesToAscii(filter.substrings.type_);
        // There is only supposed to be one initial and final.
        const initial = filter.substrings.substrings.find((sub) => ("initial" in sub));
        const final = filter.substrings.substrings.find((sub) => ("final" in sub));
        const anys = filter.substrings.substrings.filter((sub) => ("any_" in sub));
        let value = "";
        if (initial && ("initial" in initial)) {
            const s = initial.initial;
            value += escapedValue(s);
        }
        anys.forEach((any_) => {
            if (!("any_" in any_)) {
                return;
            }
            value += `*${escapedValue(any_.any_)}*`;
        });
        if (final && ("final" in final)) {
            const s = final.final;
            value += escapedValue(s);
        }
        return `(${normAttr}=${value})`;
    } else if ("greaterOrEqual" in filter) {
        const normAttr = bytesToAscii(filter.greaterOrEqual.attributeDesc);
        const normValue = escapedValue(filter.greaterOrEqual.assertionValue);
        return `(${normAttr}>=${normValue})`;
    } else if ("lessOrEqual" in filter) {
        const normAttr = bytesToAscii(filter.lessOrEqual.attributeDesc);
        const normValue = escapedValue(filter.lessOrEqual.assertionValue);
        return `(${normAttr}<=${normValue})`;
    } else if ("present" in filter) {
        const normAttr = bytesToAscii(filter.present);
        return `(${normAttr}=*)`;
    } else if ("approxMatch" in filter) {
        const normAttr = bytesToAscii(filter.approxMatch.attributeDesc);
        const normValue = escapedValue(filter.approxMatch.assertionValue);
        return `(${normAttr}~=${normValue})`;
    } else if ("extensibleMatch" in filter) {
        const attr = filter.extensibleMatch.type_
            ? bytesToAscii(filter.extensibleMatch.type_)
            : "";
        const dnattrs = filter.extensibleMatch.dnAttributes
            ? ":dn"
            : "";
        const matchingrule = filter.extensibleMatch.matchingRule
            ? `:${bytesToAscii(filter.extensibleMatch.matchingRule)}`
            : ""
        const assertionvalue = escapedValue(filter.extensibleMatch.matchValue);
        return `(${attr}${dnattrs}${matchingrule}:=${assertionvalue})`;
    } else {
        return "";
    }
}

export default stringifyFilter;

