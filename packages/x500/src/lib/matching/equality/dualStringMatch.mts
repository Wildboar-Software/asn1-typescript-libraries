import type { ASN1Element } from "@wildboar/asn1";
import {
    DualStringSyntax,
    _decode_DualStringSyntax,
} from "../../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import type {
    UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import type { DirectoryStringInput } from "../readValue.mjs";
import { isAsn1Element, readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";

/** Element, `DualStringSyntax`, or the two strings already extracted. */
export type DualStringInput =
    | ASN1Element
    | DualStringSyntax
    | {
        readonly operation: UnboundedDirectoryString | string;
        readonly object: UnboundedDirectoryString | string;
    };

function readDual (value: DualStringInput): { operation: string; object: string } {
    if (isAsn1Element(value)) {
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

/**
 * Rec. ITU-T X.509 (10/2019), clause 16.8.2 `dualStringMatch`.
 *
 * Case-sensitive equality of `DualStringSyntax`: the presented
 * `operation` and `object` strings must each equal the stored
 * pair. Used with the `permission` attribute (clause 16.8.1);
 * operation and object names are specified as case sensitive.
 *
 * Each argument may be an element, a `DualStringSyntax`, or
 * `{ operation, object }` whose fields are directory strings or
 * JavaScript strings.
 */
export
function dualStringMatch (
    assertion: DualStringInput,
    value: DualStringInput,
): boolean {
    const a = readDual(assertion);
    const v = readDual(value);
    return dualStringMatchTyped(a.operation, a.object, v.operation, v.object);
}

/**
 * `dualStringMatch` on the four character strings. Preparation is
 * used only to reject prohibited characters; the comparison itself
 * is case-sensitive and unprepared.
 *
 * @param assertionOperation Presented operation.
 * @param assertionObject Presented object.
 * @param valueOperation Stored operation.
 * @param valueObject Stored object.
 * @returns `true` when both pairs are equal.
 */
export
function dualStringMatchTyped (
    assertionOperation: string,
    assertionObject: string,
    valueOperation: string,
    valueObject: string,
): boolean {
    const aop = prepString(assertionOperation);
    const vop = prepString(valueOperation);
    const aob = prepString(assertionObject);
    const vob = prepString(valueObject);
    if (aop === undefined || aob === undefined || vop === undefined || vob === undefined) {
        return false;
    }
    return assertionOperation === valueOperation
        && assertionObject === valueObject;
}

export default dualStringMatch;
