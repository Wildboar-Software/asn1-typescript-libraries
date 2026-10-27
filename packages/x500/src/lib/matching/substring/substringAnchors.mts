import { ASN1Element } from "@wildboar/asn1";

/**
 * At most one `initial` and one `final`. `final` is the last component.
 * `initial` may follow `control` (it does not have to be index 0).
 * At least one `initial`, `any`, or `final` is required. Any other
 * choice, including an unrecognized extension, is invalid.
 *
 * Accepts filter components, decoded assertion items, or prepared
 * pieces (`{ kind }`). Walks them in place.
 *
 * @param items Components in assertion order.
 * @returns `false` when the sequence is empty, anchor-free, or mis-ordered.
 */
export
function substringAnchorsAreValid (
    items: readonly unknown[],
): boolean {
    if (items.length === 0) {
        return false;
    }
    let substantive = 0;
    let seenInitial = false;
    for (let i = 0; i < items.length; i++) {
        const kind = anchorKind(items[i]);
        if (kind === "initial") {
            if (seenInitial) {
                return false;
            }
            seenInitial = true;
            substantive++;
        } else if (kind === "final") {
            if (i !== items.length - 1) {
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

function anchorKind (item: unknown): string | undefined {
    if (ASN1Element.isElement(item)) {
        return undefined;
    }
    if (!item || typeof item !== "object") {
        return undefined;
    }
    if ("kind" in item && typeof item.kind === "string") {
        return item.kind;
    }
    if ("initial" in item && item.initial !== undefined) {
        return "initial";
    }
    if ("any_" in item && item.any_ !== undefined) {
        return "any";
    }
    if ("final" in item && item.final !== undefined) {
        return "final";
    }
    if ("control" in item) {
        return "control";
    }
    return undefined;
}
