import type { RDNSequence } from "../RDNSequence.ta.mjs";
import {
    relativeDistinguishedNameFromJSON,
    relativeDistinguishedNameToJER,
    relativeDistinguishedNameToJSON,
    type RelativeDistinguishedNameJER,
    type RelativeDistinguishedNameJSON,
} from "../rdn/tojson.mjs";

/**
 * Reversible JSON encoding of a {@link RDNSequence}: an array of
 * {@link RelativeDistinguishedNameJSON}.
 */
export type RDNSequenceJSON = RelativeDistinguishedNameJSON[];

/**
 * Irreversible JER encoding of a {@link RDNSequence}: an array of
 * {@link RelativeDistinguishedNameJER}.
 */
export type RDNSequenceJER = RelativeDistinguishedNameJER[];

/**
 * @summary Convert an `RDNSequence` to reversible JSON
 * @description
 *
 * Each RDN is converted with {@link relativeDistinguishedNameToJSON}, and the
 * order of the RDNs is preserved. This can be reversed with
 * {@link rdnSequenceFromJSON}.
 *
 * @param rdns The RDN sequence
 * @returns An array of RDN JSON arrays
 * @function
 */
export function rdnSequenceToJSON (rdns: RDNSequence): RDNSequenceJSON {
    return rdns.map(relativeDistinguishedNameToJSON);
}

/**
 * @summary Convert an `RDNSequence` to irreversible JER
 * @description
 *
 * Like {@link rdnSequenceToJSON}, except each RDN is converted with
 * {@link relativeDistinguishedNameToJER}.
 *
 * @param rdns The RDN sequence
 * @returns An array of RDN JER arrays
 * @function
 */
export function rdnSequenceToJER (rdns: RDNSequence): RDNSequenceJER {
    return rdns.map(relativeDistinguishedNameToJER);
}

/**
 * @summary Convert the output of {@link rdnSequenceToJSON} back to an `RDNSequence`
 *
 * @param json An array of RDN JSON arrays
 * @returns The RDN sequence
 * @throws {SyntaxError} If `json` is not an array or a component is malformed
 * @function
 */
export function rdnSequenceFromJSON (json: RDNSequenceJSON): RDNSequence {
    if (!Array.isArray(json)) {
        throw new SyntaxError("RDNSequence JSON must be an array");
    }
    return json.map(relativeDistinguishedNameFromJSON);
}

export default rdnSequenceToJSON;
