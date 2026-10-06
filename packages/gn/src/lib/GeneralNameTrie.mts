import type { GeneralName } from "./GeneralName.ta.mjs";
import { domainToASCII } from "node:url";
import { relativeDistinguishedNameToKey } from "@wildboar/dn";

const ASCII_UNIT_SEPARATOR: "\x1F" = "\x1F";

/**
 * @summary A prefix trie of hierarchical `GeneralName`s
 * @description
 *
 * Indexes `dNSName`, `directoryName`, and `registeredID`. DNS labels are
 * reversed, so a stored name is a prefix of the names under it: a value at
 * `example.com` is found while descending `www.example.com`. Directory names
 * are not reversed; the root RDN comes first, the way an X.500 name is
 * written with the root on the left in the encoding. Object identifier arcs
 * are taken from the root arc outward.
 *
 * A trailing dot on a DNS name is stripped, and `.` and the empty string are
 * the DNS root. A DNS name that contains U+001F cannot be stored: that
 * character separates the labels in the key. `setValue` returns `false` for
 * such a name, and for any alternative that is not hierarchical.
 *
 * @typeParam V The value stored at each name
 */
export class GeneralNameTrie<V> {
    /** @internal */
    protected dnsRoot: Map<string, V> = new Map();
    /** @internal */
    protected x500Root: Map<string, V> = new Map();
    /** @internal */
    protected oidRoot: Map<string, V> = new Map();

    private getNeedleAndHaystack(gn: GeneralName): [ string[], Map<string, V> ] | null {
        if ("dNSName" in gn) {
            if (gn.dNSName.indexOf("\x1F") > -1) {
                return null;
            }
            let dnsName: string = gn.dNSName.trim();
            if (dnsName.endsWith(".")) {
                dnsName = dnsName.slice(0, -1);
            }
            const needle: string[] = domainToASCII(dnsName)
                .toLowerCase()
                .split(".")
                .reverse();
            return [ needle, this.dnsRoot ];
        } else if ("directoryName" in gn && ("rdnSequence" in gn.directoryName)) {
            const needle: string[] = gn.directoryName.rdnSequence
                .map(relativeDistinguishedNameToKey);
            return [ needle, this.x500Root ];
        } else if ("registeredID" in gn) {
            const needle: string[] = gn.registeredID.nodes.map((n) => n.toString());
            return [ needle, this.oidRoot ];
        } else {
            return null;
        }
    }

    /**
     * @summary Insert a general name and its associated value into the trie
     * @description
     *
     * This only inserts `GeneralName`s having these variants:
     *
     * - `dNSName`
     * - `directoryName`
     * - `registeredID` (an object identifier)
     *
     * @param gn The general name to index, which must have a variant that has a
     *  well-defined hierarchical structure.
     * @param value The value to set for the given general name.
     * @returns `true` if the general name was inserted, or `false` if it did
     *  not have a known, hierarchical variant.
     */
    public setValue (gn: GeneralName, value: V): boolean {
        const needleAndHaystack: [ string[], Map<string, V> ] | null
            = this.getNeedleAndHaystack(gn);
        if (!needleAndHaystack) {
            return false;
        }
        const [ needle, haystack ] = needleAndHaystack;
        const key: string = needle.join(ASCII_UNIT_SEPARATOR);
        haystack.set(key, value);
        return true;
    }

    /**
     * @summary The value stored at exactly this name
     * @param gn The general name
     * @returns The value, or `undefined` if this name was not stored
     */
    public getValue(gn: GeneralName): V | undefined {
        const maybe: [ string[], Map<string, V> ] | null = this.getNeedleAndHaystack(gn);
        if (!maybe) {
            return undefined;
        }
        const [ needle, haystack ] = maybe;
        const key: string = needle.join(ASCII_UNIT_SEPARATOR);
        return haystack.get(key);
    }

    /**
     * @summary Walk from the root of the name out to `gn`, one level at a time
     * @description
     *
     * Yields one entry per level, including levels where nothing was stored
     * (`undefined`). The root is yielded only when a value was stored there,
     * including a falsy value such as `0`. A missing root is not yielded, so
     * the first yielded entry is the first label, arc, or RDN.
     *
     * @param gn The name to descend
     * @yields The value at each level, or `undefined` where nothing was stored
     */
    public* descendOptionalValues(gn: GeneralName): IterableIterator<V | undefined> {
        const maybe: [ string[], Map<string, V> ] | null = this.getNeedleAndHaystack(gn);
        if (!maybe) {
            return undefined;
        }
        const [ needle, haystack ] = maybe;
        if (haystack.has("")) {
            yield haystack.get("") as V;
        }
        let key: string = "";
        for (let i: number = 0; i < needle.length; i++) {
            if (i > 0) {
                key += (ASCII_UNIT_SEPARATOR + needle[i]);
            } else {
                key += needle[i];
            }
            yield haystack.get(key);
        }
    }

    /**
     * @summary Like {@link descendOptionalValues}, skipping levels with no value
     * @param gn The name to descend
     * @yields Each stored value from the root out to `gn`
     */
    public* descendValues(gn: GeneralName): IterableIterator<V> {
        for (const maybeValue of this.descendOptionalValues(gn)) {
            if (typeof maybeValue !== "undefined") {
                yield maybeValue;
            }
        }
    }

    /**
     * @internal
     */
    public z__testingInternals(): Map<string, V>[] {
        return [
            this.dnsRoot,
            this.x500Root,
            this.oidRoot,
        ];
    }

}

export default GeneralNameTrie;
