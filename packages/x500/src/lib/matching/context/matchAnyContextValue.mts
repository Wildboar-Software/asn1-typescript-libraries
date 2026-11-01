import { type ASN1Element, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
} from "../../types/matching.mjs";

/**
 * TRUE iff `matches` accepts any stored context value.
 *
 * A thrown value is ignored and the scan continues. `MATCH_FLAG_DEBUG`
 * logs that value and `contextType`. `MATCH_FLAG_CONSTANT_TIME` reads
 * every value before returning. The two flags are independent: a
 * constant-time scan still logs invalid values when debugging is on.
 *
 * @param values Stored context values.
 * @param matches Comparison of one stored value. Throw to reject it as invalid.
 * @param contextType Context type whose value failed to match.
 * @param flags `MATCH_FLAG_DEBUG` and `MATCH_FLAG_CONSTANT_TIME`.
 */
export
function matchAnyContextValue (
    values: IterableIterator<ASN1Element>,
    matches: (value: ASN1Element) => boolean,
    contextType: OBJECT_IDENTIFIER,
    flags: number = 0,
): boolean {
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    const debug = Boolean(flags & MATCH_FLAG_DEBUG);
    let matched = false;
    let i = 0;
    for (const value of values) {
        try {
            if (matches(value)) {
                matched = true;
                if (!constantTime) {
                    return true;
                }
            }
        } catch (e) {
            if (debug) {
                console.error(
                    "@wildboar/x500: debug: context value matching error: value"
                    + ` at index ${i} of context type ${contextType.dotDelimitedNotation}: ${e}`,
                );
            }
            continue;
        } finally {
            i += 1;
        }
    }
    return matched;
}
