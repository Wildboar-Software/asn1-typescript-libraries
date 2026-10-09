import type { RelativeDistinguishedName as RDN } from "../RelativeDistinguishedName.ta.mjs";
import {
    AttributeTypeAndValue,
    type AttributeTypeAndValueJER,
    type AttributeTypeAndValueJSON,
} from "../AttributeTypeAndValue.ta.mjs";

/**
 * Reversible JSON encoding of a {@link RDN}: an array of
 * {@link AttributeTypeAndValueJSON}.
 */
export type RelativeDistinguishedNameJSON = AttributeTypeAndValueJSON[];

/**
 * Irreversible JER encoding of a {@link RDN}: an array of
 * {@link AttributeTypeAndValueJER}.
 */
export type RelativeDistinguishedNameJER = AttributeTypeAndValueJER[];

/**
 * @summary Convert a `RelativeDistinguishedName` to reversible JSON
 * @description
 *
 * Each attribute type and value is converted with
 * {@link AttributeTypeAndValue.toJSON}: a numeric OID type and a `#hex` BER
 * value. The order of the pairs is preserved. This can be reversed with
 * {@link relativeDistinguishedNameFromJSON}.
 *
 * @param rdn The relative distinguished name
 * @returns An array of attribute type and value JSON objects
 * @function
 */
export function relativeDistinguishedNameToJSON (rdn: RDN): RelativeDistinguishedNameJSON {
    return rdn.map((atav) => atav.toJSON());
}

/**
 * @summary Convert a `RelativeDistinguishedName` to irreversible JER
 * @description
 *
 * Like {@link relativeDistinguishedNameToJSON}, except each attribute type
 * and value is converted with {@link AttributeTypeAndValue.toJER}.
 *
 * @param rdn The relative distinguished name
 * @returns An array of attribute type and value JER objects
 * @function
 */
export function relativeDistinguishedNameToJER (rdn: RDN): RelativeDistinguishedNameJER {
    return rdn.map((atav) => atav.toJER());
}

/**
 * @summary Convert the output of {@link relativeDistinguishedNameToJSON} back to a `RelativeDistinguishedName`
 *
 * @param json An array of attribute type and value JSON objects
 * @returns The relative distinguished name
 * @throws {SyntaxError} If `json` is not an array or an element is malformed
 * @function
 */
export function relativeDistinguishedNameFromJSON (json: RelativeDistinguishedNameJSON): RDN {
    if (!Array.isArray(json)) {
        throw new SyntaxError("RelativeDistinguishedName JSON must be an array");
    }
    return json.map((atav) => AttributeTypeAndValue.fromJSON(atav));
}

export default relativeDistinguishedNameToJSON;
