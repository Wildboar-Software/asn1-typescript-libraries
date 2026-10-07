import { ASN1Element, DERElement } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import type { Certificate } from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import {
    TimeSpecification,
    _decode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    id_ce_timeSpecification,
} from "../../modules/AttributeCertificateDefinitions/id-ce-timeSpecification.va.mjs";
import {
    _encode_Period,
    type Period,
} from "../../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DER } from "@wildboar/asn1/functional";
import { Buffer } from "node:buffer";
import { _decode_Certificate } from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import compareElements from "../../comparators/compareElements.mjs";
import { normalizePeriod } from "../../utils/normalizePeriod.mjs";

/**
 * @summary DER-hash key for a `Period` after X.520 clause 10.2
 *  canonicalization.
 * @description
 *
 * Used so `timeSpecificationMatch` can compare `SET OF Period` as a
 * set of equivalent encodings. `normalizePeriod` is applied first so
 * INTEGER vs BIT STRING and complete-set vs `allWeeks`/`allMonths`
 * compare equal when they denote the same times.
 *
 * @param {Period} period A stored or asserted periodic component.
 * @returns {string} Base64 of the DER encoding of the canonical `Period`.
 * @function
 * @author Cursor Grok 4.6
 */
function periodHashKey(period: Period): string {
    const encoding = _encode_Period(normalizePeriod(period), DER).toBytes();
    return Buffer.from(
        encoding.buffer,
        encoding.byteOffset,
        encoding.byteLength,
    ).toString("base64");
}

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.1.2.1.2
 * `timeSpecificationMatch`.
 *
 * TRUE iff the stored attribute certificate or public-key
 * certificate contains the `timeSpecification` extension and every
 * component present in the presented `TimeSpecification` matches
 * the corresponding stored extension component.
 */
function certificateExtensions (
    value: ASN1Element | AttributeCertificate | Certificate | TimeSpecification,
): Extension[] | undefined {
    if (!ASN1Element.isElement(value)) {
        if (!("toBeSigned" in value)) {
            return undefined;
        }
        return value.toBeSigned.extensions;
    }
    try {
        return _decode_AttributeCertificate(value).toBeSigned.extensions;
    } catch {
        return _decode_Certificate(value).toBeSigned.extensions;
    }
}

export
function timeSpecificationMatch (
    assertion: ASN1Element | TimeSpecification,
    value: ASN1Element | AttributeCertificate | Certificate | TimeSpecification,
): boolean {
    const assertedTime = readDecoded(assertion, _decode_TimeSpecification);
    if (!ASN1Element.isElement(value) && "time" in value && !("toBeSigned" in value)) {
        return timeSpecificationMatchTyped(assertedTime, value);
    }
    const ext: Extension | undefined = certificateExtensions(value)
        ?.find((item: Extension): boolean => item.extnId.isEqualTo(id_ce_timeSpecification));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    return timeSpecificationMatchTyped(assertedTime, _decode_TimeSpecification(el));
}

/**
 * `timeSpecificationMatch` on two decoded time specifications.
 *
 * @param assertedTime Presented time specification.
 * @param storedTime Stored time specification.
 * @returns `true` when every presented component matches.
 */
export
function timeSpecificationMatchTyped (
    assertedTime: TimeSpecification,
    storedTime: TimeSpecification,
): boolean {
    if (
        (storedTime.notThisTime ?? TimeSpecification._default_value_for_notThisTime)
        !== (assertedTime.notThisTime ?? TimeSpecification._default_value_for_notThisTime)
    ) {
        return false;
    }

    if (
        // If the timezone was actually asserted.
        (typeof assertedTime.timeZone === "number")
        // And they don't match.
        && (storedTime.timeZone !== assertedTime.timeZone)
    ) {
        return false;
    }

    const storedTimeExts = storedTime._unrecognizedExtensionsList;
    const assertedTimeExts = assertedTime._unrecognizedExtensionsList;
    if (storedTimeExts.length < assertedTimeExts.length) {
        return false; // Asserted a component we don't recognize.
    }

    if (("absolute" in storedTime.time) && ("absolute" in assertedTime.time)) {
        const staexts = storedTime.time.absolute._unrecognizedExtensionsList;
        const ataexts = assertedTime.time.absolute._unrecognizedExtensionsList;
        if (staexts.length < ataexts.length) {
            return false; // Asserted a component we don't recognize.
        }

        let storedStart   = storedTime.time.absolute.startTime?.valueOf();
        let storedEnd     = storedTime.time.absolute.endTime?.valueOf();
        let assertedStart = assertedTime.time.absolute.startTime?.valueOf();
        let assertedEnd   = assertedTime.time.absolute.endTime?.valueOf();

        // Truncate the milliseconds. Just compare up to second precision.
        if (typeof storedStart === "number") {
            storedStart = Math.trunc(storedStart / 1000);
        }
        if (typeof storedEnd === "number") {
            storedEnd = Math.trunc(storedEnd / 1000);
        }
        if (typeof assertedStart === "number") {
            assertedStart = Math.trunc(assertedStart / 1000);
        }
        if (typeof assertedEnd === "number") {
            assertedEnd = Math.trunc(assertedEnd / 1000);
        }
        if (storedStart !== assertedStart) {
            return false;
        }
        if (storedEnd !== assertedEnd) {
            return false;
        }
        // Compare unrecognized extensions in absolute times
        for (let i = 0; i < ataexts.length; i++) {
            if (!compareElements(staexts[i], ataexts[i])) {
                return false;
            }
        }
    } else if (("periodic" in storedTime.time) && ("periodic" in assertedTime.time)) {
        if (storedTime.time.periodic.length !== assertedTime.time.periodic.length) {
            return false;
        }
        const len = storedTime.time.periodic.length;
        const storedPeriods = storedTime.time.periodic.map(periodHashKey).sort();
        const assertedPeriods = assertedTime.time.periodic.map(periodHashKey).sort();
        for (let i = 0; i < len; i++) {
            if (storedPeriods[i] !== assertedPeriods[i]) {
                return false;
            }
        }
    } else {
        return false;
    }
    for (let i = 0; i < assertedTimeExts.length; i++) {
        if (!compareElements(storedTimeExts[i], assertedTimeExts[i])) {
            return false;
        }
    }
    return true;
}

export default timeSpecificationMatch;
