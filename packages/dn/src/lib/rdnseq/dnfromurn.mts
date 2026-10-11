import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodePrintableString } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { RDNSequenceDescending } from "../brands.mjs";
import {
    urnCOID,
    type UrnCATAV,
    type UrnCRDNSequence,
} from "../attributeTypes.mjs";
import { asDITDescending } from "./order.mjs";

const urnCType: ObjectIdentifier = ObjectIdentifier.fromString(urnCOID);

/**
 * The characters of a `PrintableString`, except the colon, which delimits the
 * components of a URN.
 */
const COMPONENT: RegExp = /^[A-Za-z0-9 '()+,\-./=?]+$/;

/**
 * @summary Convert a URN to an `RDNSequence` of `urnC` values.
 * @description
 *
 * Converts a Uniform Resource Name (URN)
 * ([IETF RFC 8141](https://www.rfc-editor.org/rfc/rfc8141)) such as
 * `urn:isbn:0451450523` to a distinguished name of the form
 * `urnC=isbn,urnC=0451450523`. The `urn` prefix is not represented as an RDN:
 * it is implied, and is recognized without regard to case. Each
 * colon-delimited component after it becomes an RDN, from the highest down.
 * This is the reverse of {@link dnToURN}.
 *
 * The `urnC` attribute type (ITU-T Recommendation X.520) has a
 * `PrintableString` syntax, so the components are not percent-decoded or
 * case-folded, and must only consist of the characters of a
 * `PrintableString`: letters, digits, space, and `'()+,-./=?`. The colon is
 * the delimiter, so it never appears in a component. A URN that has any other
 * character, such as a percent sign or underscore, cannot be converted. The
 * namespace identifier and namespace-specific string are not otherwise
 * validated, and the optional r-, q-, and f-components are not treated
 * specially.
 *
 * `"urn:"` converts to an empty `RDNSequence`. This returns `null` if:
 *
 * - `urn` does not start with `urn:`;
 * - any component is empty, as in `urn:a::b` or `urn:a:`; or
 * - any component has a character that a `PrintableString` cannot have.
 *
 * @param urn The URN to convert.
 * @returns The RDNs, in DIT descending order, or `null` if `urn` does not meet
 *  the constraints above.
 * @function
 */
export
function dnFromURN (urn: string): (RDNSequenceDescending & UrnCRDNSequence) | null {
    if (urn.length < 4 || urn.slice(0, 4).toLowerCase() !== "urn:") {
        return null;
    }
    const rest: string = urn.slice(4);
    if (rest.length === 0) {
        return asDITDescending([]) as RDNSequenceDescending & UrnCRDNSequence;
    }
    const components: string[] = rest.split(":");
    const rdns: UrnCRDNSequence = new Array(components.length);
    for (let i = 0; i < components.length; i++) {
        if (!COMPONENT.test(components[i])) {
            return null;
        }
        rdns[i] = [
            new AttributeTypeAndValue(
                urnCType,
                _encodePrintableString(components[i], BER),
            ) as UrnCATAV,
        ];
    }
    return asDITDescending(rdns) as RDNSequenceDescending & UrnCRDNSequence;
}

export default dnFromURN;
