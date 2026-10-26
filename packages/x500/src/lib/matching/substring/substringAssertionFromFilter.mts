import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import type { Attribute } from "../../modules/InformationFramework/Attribute.ta.mjs";
import {
    _decode_UnboundedDirectoryString,
    type UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { _decode_FacsimileTelephoneNumber } from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import type { SubstringAssertion_Item } from "../../modules/SelectedAttributeTypes/SubstringAssertion-Item.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import {
    substringAnchorsAreValid,
    type SubstringAnchorKind,
} from "./substringAnchors.mjs";

/**
 * One substrings-filter component after its CHOICE alternative is known.
 * `element` is still in the attribute syntax, not the assertion syntax.
 */
export type ClassifiedFilterSubstring =
    | {
        readonly kind: "initial" | "any" | "final";
        readonly element: ASN1Element;
    }
    | {
        readonly kind: "control";
        readonly control: Attribute;
    };

/**
 * Classify every component of a substrings filter item and reject a
 * sequence that violates the initial/any/final anchor rules.
 *
 * @param item DAP `FilterItem` substrings alternative.
 * @returns The classified components, or `undefined` when the filter
 * is not a usable substrings assertion.
 */
export
function classifyFilterSubstrings (
    item: FilterItem_substrings,
): readonly ClassifiedFilterSubstring[] | undefined {
    const strings = item.strings;
    if (strings.length === 0) {
        return undefined;
    }
    const classified: ClassifiedFilterSubstring[] = new Array(strings.length);
    const kinds: SubstringAnchorKind[] = new Array(strings.length);
    for (let i = 0; i < strings.length; i++) {
        const part = classifyOne(strings[i]);
        if (!part) {
            return undefined;
        }
        classified[i] = part;
        kinds[i] = part.kind;
    }
    if (!substringAnchorsAreValid(kinds)) {
        return undefined;
    }
    return classified;
}

function classifyOne (
    item: FilterItem_substrings_strings_Item,
): ClassifiedFilterSubstring | undefined {
    if (ASN1Element.isElement(item)) {
        return undefined;
    }
    if ("initial" in item) {
        return { kind: "initial", element: item.initial };
    }
    if ("any_" in item) {
        return { kind: "any", element: item.any_ };
    }
    if ("final" in item) {
        return { kind: "final", element: item.final };
    }
    if ("control" in item) {
        return { kind: "control", control: item.control };
    }
    return undefined;
}

/**
 * Build a `SubstringAssertion` from a DAP substrings filter.
 * `readComponent` transcodes one attribute-syntax element into an
 * `UnboundedDirectoryString`. A component that will not transcode,
 * or an empty string, makes the whole filter Undefined.
 *
 * @param item DAP `FilterItem` substrings alternative.
 * @param readComponent Attribute-syntax reader for this matching rule.
 * @returns The assertion array, or `undefined` when the filter is unusable.
 */
export
function substringAssertionFromFilter (
    item: FilterItem_substrings,
    readComponent: (element: ASN1Element) => UnboundedDirectoryString | undefined,
): SubstringAssertion | undefined {
    const classified = classifyFilterSubstrings(item);
    if (!classified) {
        return undefined;
    }
    const out: SubstringAssertion_Item[] = new Array(classified.length);
    for (let i = 0; i < classified.length; i++) {
        const part = classified[i];
        if (part.kind === "control") {
            out[i] = { control: part.control };
            continue;
        }
        let component: UnboundedDirectoryString | undefined;
        try {
            component = readComponent(part.element);
        } catch {
            return undefined;
        }
        if (!component || directoryStringToString(component).length === 0) {
            return undefined;
        }
        if (part.kind === "initial") {
            out[i] = { initial: component };
        } else if (part.kind === "any") {
            out[i] = { any_: component };
        } else {
            out[i] = { final: component };
        }
    }
    return out;
}

/**
 * Directory-string attribute syntax. The filter component is already
 * an `UnboundedDirectoryString` alternative.
 *
 * @param element Encoded directory string.
 * @returns The decoded choice, or throws when the tag does not match.
 */
export
function readUnboundedDirectoryStringComponent (
    element: ASN1Element,
): UnboundedDirectoryString | undefined {
    return _decode_UnboundedDirectoryString(element);
}

/**
 * `PostalAddress` / `CaseIgnoreList` component. A one-line sequence
 * contributes that line. A directory string is used as itself. More
 * than one line cannot be a single assertion piece.
 *
 * @param element Encoded list or directory string.
 * @returns One directory string, or `undefined` when the component
 * spans more than one line.
 */
export
function readCaseIgnoreListComponent (
    element: ASN1Element,
): UnboundedDirectoryString | undefined {
    if (
        element.tagClass === ASN1TagClass.universal
        && element.tagNumber === ASN1UniversalType.sequence
    ) {
        const elements = element.sequence;
        if (elements.length !== 1) {
            return undefined;
        }
        return _decode_UnboundedDirectoryString(elements[0]);
    }
    return _decode_UnboundedDirectoryString(element);
}

/**
 * `NumericString` transcoded to the `printableString` alternative.
 *
 * @param element Encoded numeric string.
 * @returns A directory string, or `undefined` when the tag differs.
 */
export
function readNumericStringComponent (
    element: ASN1Element,
): UnboundedDirectoryString | undefined {
    if (
        element.tagClass !== ASN1TagClass.universal
        || element.tagNumber !== ASN1UniversalType.numericString
    ) {
        return undefined;
    }
    const numeric = element.numericString;
    if (numeric.length === 0) {
        return undefined;
    }
    return { printableString: numeric };
}

/**
 * `TelephoneNumber` (`PrintableString`) as a directory string.
 *
 * @param element Encoded telephone number.
 * @returns A directory string, or `undefined` when the tag differs.
 */
export
function readTelephoneNumberComponent (
    element: ASN1Element,
): UnboundedDirectoryString | undefined {
    if (
        element.tagClass !== ASN1TagClass.universal
        || element.tagNumber !== ASN1UniversalType.printableString
    ) {
        return undefined;
    }
    const printable = element.printableString;
    if (printable.length === 0) {
        return undefined;
    }
    return { printableString: printable };
}

/**
 * `IA5String` transcoded to `uTF8String`. IA5 characters are a subset
 * of UTF-8, which `SubstringAssertion` can carry.
 *
 * @param element Encoded IA5 string.
 * @returns A directory string, or `undefined` when the tag differs.
 */
export
function readIA5StringComponent (
    element: ASN1Element,
): UnboundedDirectoryString | undefined {
    if (
        element.tagClass !== ASN1TagClass.universal
        || element.tagNumber !== ASN1UniversalType.ia5String
    ) {
        return undefined;
    }
    const ia5 = element.ia5String;
    if (ia5.length === 0) {
        return undefined;
    }
    return { uTF8String: ia5 };
}

/**
 * Facsimile substring component. A `FacsimileTelephoneNumber` contributes
 * its `telephoneNumber`; a bare `TelephoneNumber` is used as itself.
 * `parameters` are not part of the assertion.
 *
 * @param element Encoded facsimile number or telephone number.
 * @returns A directory string, or `undefined` when neither form decodes.
 */
export
function readFacsimileNumberComponent (
    element: ASN1Element,
): UnboundedDirectoryString | undefined {
    if (
        element.tagClass === ASN1TagClass.universal
        && element.tagNumber === ASN1UniversalType.sequence
    ) {
        const facsimile = _decode_FacsimileTelephoneNumber(element);
        if (facsimile.telephoneNumber.length === 0) {
            return undefined;
        }
        return { printableString: facsimile.telephoneNumber };
    }
    return readTelephoneNumberComponent(element);
}

/**
 * Attach a filter converter to a match function so one value can both
 * evaluate an assertion and build one from a DAP substrings filter.
 */
export
function attachFromFilter<F extends (...args: any[]) => boolean, C> (
    match: F,
    fromFilter: C,
): F & { readonly fromFilter: C } {
    return Object.assign(match, { fromFilter });
}
