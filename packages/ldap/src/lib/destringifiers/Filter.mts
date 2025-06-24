import type { Filter } from "../modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import { AttributeValueAssertion } from "../modules/Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta.mjs";
import { MatchingRuleAssertion } from "../modules/Lightweight-Directory-Access-Protocol-V3/MatchingRuleAssertion.ta.mjs";
import { SubstringFilter } from "../modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.mjs";

interface ParserState {
    readonly input: string;
    index: number;
    filter: Filter;
}

/**
 * @summary Parse an LDAP Filter from a string according to RFC 4515.
 * @description
 * 
 * This function parses an LDAP Filter from a string, according to
 * [IETF RFC 4515](https://www.rfc-editor.org/rfc/rfc4515).
 *
 * @param state The parser state.
 * @returns The parser state.
 * @function
 */
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

