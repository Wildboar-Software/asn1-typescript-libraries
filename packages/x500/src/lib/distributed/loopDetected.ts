import type {
    TraceInformation,
} from "../modules/DistributedOperations/TraceInformation.ta.js";
import type {
    Name,
} from "../modules/InformationFramework/Name.ta.js";

function cheaplyNormalizeName (name: Name): string {
    return name.rdnSequence
        .map((rdn) => rdn
            .map((atav) => (atav.type_.toString() + "=#" + Buffer.from(atav.value.octetString).toString("hex")))
            .sort()
            .join("+")
        ).join(",");
}

/**
 * @summary Detects loops using `TraceInformation`
 * @description
 *
 * Uses the procedures outlined in ITU Recommendation X.518, Section 15.4 to
 * detect loops through the use of `TraceInformation` taken from
 * `ChainingArguments`.
 *
 * @param traceItems The trace items detailing the history of distributed
 *  operations as they travel between DSAs.
 * @returns {boolean} `true` if a loop was detected; `false` if one was not.
 */
export
function loopDetected (
    traceItems: TraceInformation,
): boolean {
    const encountered: Set<string> = new Set();
    for (const item of traceItems) {
        const normalizedName = cheaplyNormalizeName(item.dsa);
        const normalizedObjectName = item.targetObject
            ? cheaplyNormalizeName(item.targetObject)
            : "";
        const op = item.operationProgress;
        const key = `${normalizedName}:${normalizedObjectName}:${op.nameResolutionPhase}:${op.nextRDNToBeResolved}`;
        if (encountered.has(key)) {
            return true;
        }
        encountered.add(key);
    }
    return false;
}
