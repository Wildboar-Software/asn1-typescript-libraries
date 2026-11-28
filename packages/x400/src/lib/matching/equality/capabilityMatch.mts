import { Buffer } from "node:buffer";
import {
    ASN1Construction,
    ASN1ConstructionError,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import { stringsEqual } from "../constantTime.mjs";
import {
    type Capability,
    _decode_Capability,
} from "@wildboar/x400/MHSDirectoryObjectsAndAttributes";
import type {
    EncodedInformationTypesConstraints,
    ExtendedEncodedInformationTypes,
    SecurityCategory,
    SecurityLabel,
} from "@wildboar/x400/MTSAbstractService";
import { normalizeMSString } from "./orAddressUtilities.mjs";

const DECONSTRUCTABLE_UNIVERSAL_TYPES = new Set<number>([
    ASN1UniversalType.octetString,
    ASN1UniversalType.objectDescriptor,
    ASN1UniversalType.utf8String,
    ASN1UniversalType.numericString,
    ASN1UniversalType.printableString,
    ASN1UniversalType.teletexString,
    ASN1UniversalType.videotexString,
    ASN1UniversalType.ia5String,
    ASN1UniversalType.utcTime,
    ASN1UniversalType.generalizedTime,
    ASN1UniversalType.graphicString,
    ASN1UniversalType.visibleString,
    ASN1UniversalType.generalString,
    ASN1UniversalType.universalString,
    ASN1UniversalType.bmpString,
]);

function bytesToHex (bytes: Uint8Array): string {
    return Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("hex");
}

const MAX_OPEN_TYPE_CHILDREN = 256;

function elementToKey (el: ASN1Element, depth: number = 0): string {
    const head = `${el.tagClass}:${el.tagNumber}:`;
    if (el.construction !== ASN1Construction.constructed || depth > 16) {
        return head + bytesToHex(el.value);
    }
    if (
        el.tagClass === ASN1TagClass.universal
        && DECONSTRUCTABLE_UNIVERSAL_TYPES.has(el.tagNumber)
    ) {
        return head + bytesToHex(el.deconstruct("?"));
    }
    const bytes = el.value;
    const child = new BERElement();
    const children: string[] = [];
    let i = 0;
    while (i < bytes.length) {
        if (children.length >= MAX_OPEN_TYPE_CHILDREN) {
            throw new ASN1ConstructionError("capabilityMatch: open-type element exceeds child limit", el);
        }
        i += child.fromBytes(bytes.subarray(i), true);
        children.push(elementToKey(child, depth + 1));
    }
    if (el.tagClass === ASN1TagClass.universal && el.tagNumber === ASN1UniversalType.set) {
        children.sort();
    }
    return `${head}[${children.join(",")}]`;
}

function canonicalizeOidSet (oids?: ExtendedEncodedInformationTypes): string[] | null {
    if (!oids) {
        return null;
    }
    const unique = new Set<string>();
    for (const oid of oids) {
        unique.add(oid.toString());
    }
    return Array.from(unique).sort();
}

function canonicalizeEitConstraints (
    eits?: EncodedInformationTypesConstraints,
): [string[] | null, string[] | null, string[] | null] | null {
    if (!eits) {
        return null;
    }
    return [
        canonicalizeOidSet(eits.unacceptable_eits),
        canonicalizeOidSet(eits.acceptable_eits),
        canonicalizeOidSet(eits.exclusively_acceptable_eits),
    ];
}

function canonicalizeSecurityCategory (cat: SecurityCategory): string {
    return JSON.stringify([
        cat.type_.toString(),
        elementToKey(cat.value),
    ]);
}

function canonicalizeSecurityLabel (label: SecurityLabel, normalize: boolean): string {
    const categories = label.security_categories
        ? Array.from(new Set(label.security_categories.map(canonicalizeSecurityCategory))).sort()
        : null;
    return JSON.stringify([
        label.security_policy_identifier?.toString() ?? null,
        label.security_classification !== undefined
            ? label.security_classification.toString()
            : null,
        label.privacy_mark !== undefined
            ? (normalize ? normalizeMSString(label.privacy_mark, true) : label.privacy_mark)
            : null,
        categories,
    ]);
}

/**
 * Produce an order-independent, duplicate-insensitive canonical key for an
 * X.402 `Capability` value (ITU-T Rec. X.402 Annex A.3.4).
 */
export
function capabilityToCanonicalKey (cap: Capability, normalize: boolean = true): string {
    const contentTypes = cap.content_types
        ? Array.from(new Set(cap.content_types.map((roid) => roid.join(".")))).sort()
        : null;
    const maxLen = cap.maximum_content_length !== undefined
        ? cap.maximum_content_length.toString()
        : null;
    const eitConstraints = canonicalizeEitConstraints(cap.encoded_information_types_constraints);
    const securityLabels = cap.security_labels
        ? Array.from(new Set(cap.security_labels.map((lbl) => canonicalizeSecurityLabel(lbl, normalize)))).sort()
        : null;
    const unrecognized = cap._unrecognizedExtensionsList?.length
        ? cap._unrecognizedExtensionsList.map((el) => elementToKey(el)).sort()
        : null;
    return JSON.stringify([
        contentTypes,
        maxLen,
        eitConstraints,
        securityLabels,
        unrecognized,
    ]);
}

interface PreparedCapability {
    readonly cap: Capability;
    key?: string;
}

export
const capabilityMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): PreparedCapability => ({ cap: _decode_Capability(el) }),
    (assertion: PreparedCapability, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        const assertionKey = (assertion.key ??= capabilityToCanonicalKey(assertion.cap, false));
        const vKey = capabilityToCanonicalKey(
            _decode_Capability(value),
            !(flags & MATCH_FLAG_VALUE_NORMALIZED),
        );
        return stringsEqual(assertionKey, vKey, flags & MATCH_FLAG_CONSTANT_TIME);
    },
    undefined,
    false,
    (assertion: PreparedCapability): PreparedCapability => ({
        cap: assertion.cap,
        key: capabilityToCanonicalKey(assertion.cap, true),
    }),
);

export default capabilityMatch;
