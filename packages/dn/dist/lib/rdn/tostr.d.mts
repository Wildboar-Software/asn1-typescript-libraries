import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
/**
 * @summary Stringify a relative distinguished name according to RFC 4514.
 * @description
 *
 * This function stringifies a relative distinguished name according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514).
 *
 * @param rdn The relative distinguished name to stringify.
 * @param getEncoder A function that can be used to get a string encoder.
 * @param typeNameGetter A function that can be used to get an attribute type name.
 * @returns The stringified relative distinguished name.
 * @function
 */
declare function stringifyRelativeDistinguishedName(rdn: AttributeTypeAndValue[]): string;
export default stringifyRelativeDistinguishedName;
//# sourceMappingURL=tostr.d.mts.map