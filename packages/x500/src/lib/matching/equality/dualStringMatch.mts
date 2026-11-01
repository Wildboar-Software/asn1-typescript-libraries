import { ASN1Element, ASN1CharactersError } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    DualStringSyntax,
    _decode_DualStringSyntax,
} from "../../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import type {
    UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prohibitedCharacters } from "../../utils/prepString.mjs";
import { ctStringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/** Element, `DualStringSyntax`, or the two strings already extracted. */
export type DualStringInput =
    | ASN1Element
    | DualStringSyntax
    | {
        readonly operation: UnboundedDirectoryString | string;
        readonly object: UnboundedDirectoryString | string;
    };

interface DualStrings {
    readonly operation: string;
    readonly object: string;
}

function readDual (value: DualStringInput): DualStrings {
    if (ASN1Element.isElement(value)) {
        const decoded = _decode_DualStringSyntax(value);
        return {
            operation: readDirectoryString(decoded.operation),
            object: readDirectoryString(decoded.object),
        };
    }
    return {
        operation: readDirectoryString(value.operation as DirectoryStringInput),
        object: readDirectoryString(value.object as DirectoryStringInput),
    };
}

function prepareDualAssertion (el: ASN1Element): DualStrings {
    const decoded = readDual(el);
    if (
        prohibitedCharacters.test(decoded.operation)
        || prohibitedCharacters.test(decoded.object)
    ) {
        throw new ASN1CharactersError(
            "dualStringMatch assertion contains a prohibited character",
            el,
        );
    }
    return decoded;
}

/**
 * Rec. ITU-T X.509 (10/2019), clause 16.8.2 `dualStringMatch`.
 *
 * Case-sensitive equality of `DualStringSyntax`: the presented
 * `operation` and `object` strings must each equal the stored
 * pair. Used with the `permission` attribute (clause 16.8.1);
 * operation and object names are specified as case sensitive.
 * A prohibited character in a stored string is UNDEFINED.
 *
 * @param assertion Presented operation and object.
 * @param value Stored pair, or that pair already decoded.
 */
export
function dualStringMatchTyped (
    assertion: DualStrings,
    value: DualStringInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = readDual(value);
    const badOperation = prohibitedCharacters.test(stored.operation);
    const badObject = prohibitedCharacters.test(stored.object);
    if (badOperation || badObject) {
        return undefined;
    }
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        const opEqual = ctStringsEqual(assertion.operation, stored.operation);
        const objEqual = ctStringsEqual(assertion.object, stored.object);
        return opEqual && objEqual;
    }
    return assertion.operation === stored.operation
        && assertion.object === stored.object;
}

dualStringMatchTyped satisfies TypedEquationFunction<DualStrings>;

/**
 * `dualStringMatch` as a `Matcher`. A prohibited character in the
 * assertion throws `ASN1CharactersError`.
 */
export
const dualStringMatch: Matcher = createEqualityMatcher(
    prepareDualAssertion,
    dualStringMatchTyped,
);

export default dualStringMatch;
