import type { Name } from "../Name.ta.mjs";
import {
    rdnSequenceFromJSON,
    rdnSequenceToJER,
    rdnSequenceToJSON,
    type RDNSequenceJER,
    type RDNSequenceJSON,
} from "../rdnseq/tojson.mjs";

/**
 * Reversible JSON encoding of a {@link Name}: an object with the single key
 * `rdnSequence`, whose value is an {@link RDNSequenceJSON}.
 */
export type NameJSON = { rdnSequence: RDNSequenceJSON };

/**
 * Irreversible JER encoding of a {@link Name}: an object with the single key
 * `rdnSequence`, whose value is an {@link RDNSequenceJER}.
 */
export type NameJER = { rdnSequence: RDNSequenceJER };

/**
 * @summary Convert a `Name` to reversible JSON
 * @description
 *
 * Follows the shape of the `CHOICE`: an object keyed by the alternative,
 * `rdnSequence`, converted with {@link rdnSequenceToJSON}. This can be
 * reversed with {@link nameFromJSON}.
 *
 * @param name The directory name
 * @returns An object of the form `{ rdnSequence: [...] }`
 * @function
 */
export function nameToJSON (name: Name): NameJSON {
    return { rdnSequence: rdnSequenceToJSON(name.rdnSequence) };
}

/**
 * @summary Convert a `Name` to irreversible JER
 * @description
 *
 * Like {@link nameToJSON}, except the `rdnSequence` is converted with
 * {@link rdnSequenceToJER}.
 *
 * @param name The directory name
 * @returns An object of the form `{ rdnSequence: [...] }`
 * @function
 */
export function nameToJER (name: Name): NameJER {
    return { rdnSequence: rdnSequenceToJER(name.rdnSequence) };
}

/**
 * @summary Convert the output of {@link nameToJSON} back to a `Name`
 *
 * @param json An object with an `rdnSequence` key
 * @returns The directory name
 * @throws {SyntaxError} If `json` is not an object with an `rdnSequence` key,
 * or a component is malformed
 * @function
 */
export function nameFromJSON (json: NameJSON): Name {
    if (
        (typeof json !== "object")
        || (json === null)
        || !("rdnSequence" in json)
    ) {
        throw new SyntaxError("Name JSON must be an object with an rdnSequence key");
    }
    return { rdnSequence: rdnSequenceFromJSON(json.rdnSequence) };
}

export default nameToJSON;
