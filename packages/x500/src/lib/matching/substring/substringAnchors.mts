/**
 * Placement of one component in a substrings assertion or filter.
 * `control` is carried so a rule can ignore it; it is not a piece of
 * the string.
 */
export type SubstringAnchorKind = "initial" | "any" | "final" | "control";

/**
 * Rec. ITU-T X.520 `SubstringAssertion`: at most one `initial` (the
 * first component) and at most one `final` (the last). At least one
 * `initial`, `any`, or `final` must be present. `control` may sit
 * between those pieces and does not itself satisfy the requirement.
 *
 * @param kinds Component kinds in assertion order.
 * @returns `false` when the sequence is empty, anchor-free, or mis-ordered.
 */
export
function substringAnchorsAreValid (
    kinds: readonly SubstringAnchorKind[],
): boolean {
    if (kinds.length === 0) {
        return false;
    }
    let substantive = 0;
    for (let i = 0; i < kinds.length; i++) {
        const kind = kinds[i];
        if (kind === "initial") {
            if (i !== 0) {
                return false;
            }
            substantive++;
        } else if (kind === "final") {
            if (i !== kinds.length - 1) {
                return false;
            }
            substantive++;
        } else if (kind === "any") {
            substantive++;
        }
    }
    return substantive > 0;
}

/**
 * Same anchor rules as {@link substringAnchorsAreValid}, plus rejection
 * of unrecognized choices (`unknown` or any other kind).
 *
 * @param pieces Assertion pieces already normalized to a `kind` field.
 * @returns `false` when the pieces cannot be matched.
 */
export
function preparedAnchorsAreValid (
    pieces: readonly { readonly kind: string }[],
): boolean {
    if (pieces.length === 0) {
        return false;
    }
    let substantive = 0;
    for (let i = 0; i < pieces.length; i++) {
        const kind = pieces[i].kind;
        if (kind === "initial") {
            if (i !== 0) {
                return false;
            }
            substantive++;
        } else if (kind === "final") {
            if (i !== pieces.length - 1) {
                return false;
            }
            substantive++;
        } else if (kind === "any") {
            substantive++;
        } else if (kind !== "control") {
            return false;
        }
    }
    return substantive > 0;
}
