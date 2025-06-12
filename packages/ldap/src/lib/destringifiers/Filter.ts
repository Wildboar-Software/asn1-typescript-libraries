import type { Filter } from "../modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.js";
import { AttributeValueAssertion } from "../modules/Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta.js";
import { MatchingRuleAssertion } from "../modules/Lightweight-Directory-Access-Protocol-V3/MatchingRuleAssertion.ta.js";
import { SubstringFilter } from "../modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.js";

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

interface ParserState {
    readonly input: string;
    index: number;
    filter: Filter;
}

function isAttrChar (char: number): boolean {
    return (
        ((char >= 0x41) && (char <= 0x5A))
        || ((char >= 0x61) && (char <= 0x7A))
        || ((char >= 0x30) && (char <= 0x39))
        || (char === 0x3B) // semi-colon
        || (char === 0x2D) // hyphen
        || (char === 0x2E) // period
    );
}

function parseAttr (state: ParserState): ParserState {
    let char = state.input.charCodeAt(state.index);
    while (isAttrChar(char)) {
        state.index++;
        char = state.input.charCodeAt(state.index);
    }
    return state;
}

export
function parseFilter (state: ParserState): ParserState {
    state.index++;
    let char = state.input[state.index];
    switch (char) {
        case ("&"): {
            state.index++;
            char = state.input[state.index];
            const subs: Filter[] = [];
            let s = state;
            while (char === "(") {
                s = parseFilter(s);
                subs.push(s.filter);
                char = s.input[s.index];
            }
            s.index++;
            return {
                ...s,
                filter: {
                    and: subs,
                },
            };
        }
        case ("|"): {
            state.index++;
            char = state.input[state.index];
            const subs: Filter[] = [];
            let s = state;
            while (char === "(") {
                s = parseFilter(s);
                subs.push(s.filter);
                char = s.input[s.index];
            }
            s.index++;
            return {
                ...s,
                filter: {
                    or: subs,
                },
            };
        }
        case ("!"): {
            state.index++;
            const result = parseFilter(state);
            result.index++;
            return {
                ...result,
                filter: {
                    not: result.filter,
                },
            };
        }
        default: {
            const nextEquals = state.input.indexOf("=", state.index);
            if (nextEquals === -1) {
                throw new Error();
            }
            const lhs = state.input.slice(state.index, nextEquals);
            state.index += (lhs.length + 1);
            const nextClosingParen = state.input.indexOf(")", state.index);
            if (nextClosingParen === -1) {
                throw new Error();
            }
            const rhs = state.input.slice(state.index, nextClosingParen);
            state.index += (rhs.length + 1);
            const lhsComponents = lhs.split(":");
            if (lhsComponents.length === 1) {
                const attr = lhsComponents[0];
                if (rhs === "*") {
                    return {
                        ...state,
                        filter: {
                            present: Buffer.from(attr, "utf-8"),
                        },
                    };
                }
                if (rhs.indexOf("*") > -1) {
                    const subs = rhs.split("*");
                    const initial = (rhs.startsWith("*"))
                        ? undefined
                        : subs[0];
                    const final = (rhs.endsWith("*"))
                        ? undefined
                        : subs[subs.length - 1];
                    const anys = subs.slice(initial ? 1 : 0, final ? -1 : undefined);
                    return {
                        ...state,
                        filter: {
                            substrings: new SubstringFilter(
                                Buffer.from(lhs, "utf-8"),
                                [
                                    initial
                                        ? {
                                            initial: Buffer.from(initial, "utf-8"),
                                        }
                                        : undefined,
                                    final
                                        ? {
                                            initial: Buffer.from(final, "utf-8"),
                                        }
                                        : undefined,
                                    ...anys.map((a) => ({
                                        any_: Buffer.from(a, "utf-8"),
                                    })),
                                ].filter((s): s is any => !!s),
                            ),
                        },
                    };
                }
                if (attr.endsWith("~")) {
                    return {
                        ...state,
                        filter: {
                            approxMatch: new AttributeValueAssertion(
                                Buffer.from(attr.slice(0, -1), "utf-8"),
                                Buffer.from(rhs, "utf-8"),
                            ),
                        },
                    };
                } else if (attr.endsWith(">")) {
                    return {
                        ...state,
                        filter: {
                            greaterOrEqual: new AttributeValueAssertion(
                                Buffer.from(attr.slice(0, -1), "utf-8"),
                                Buffer.from(rhs, "utf-8"),
                            ),
                        },
                    };
                } else if (attr.endsWith("<")) {
                    return {
                        ...state,
                        filter: {
                            lessOrEqual: new AttributeValueAssertion(
                                Buffer.from(attr.slice(0, -1), "utf-8"),
                                Buffer.from(rhs, "utf-8"),
                            ),
                        },
                    };
                } else {
                    return {
                        ...state,
                        filter: {
                            equalityMatch: new AttributeValueAssertion(
                                Buffer.from(attr, "utf-8"),
                                Buffer.from(rhs, "utf-8"),
                            ),
                        },
                    };
                }
            } else { // Extensible.
                const attr = (lhs.startsWith(":"))
                    ? undefined
                    : lhsComponents.shift();
                const dn = (lhsComponents[0] === "dn");
                if (dn) {
                    lhsComponents.shift();
                }
                const mr = (lhsComponents.length > 0)
                    ? lhsComponents.shift()
                    : undefined;
                const value = rhs;
                return {
                    ...state,
                    filter: {
                        extensibleMatch: new MatchingRuleAssertion(
                            mr
                                ? Buffer.from(mr, "utf-8")
                                : undefined,
                            attr
                                ? Buffer.from(attr, "utf-8")
                                : undefined,
                            Buffer.from(value, "utf-8"),
                            dn,
                        ),
                    },
                };
            }
        }
    }
}

export default parseFilter;

