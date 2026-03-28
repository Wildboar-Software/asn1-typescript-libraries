import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element, DERElement } from "@wildboar/asn1";
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

function periodHashKey(period: Period): string {
    const encoding = _encode_Period(period, DER).toBytes();
    return Buffer.from(
        encoding.buffer,
        encoding.byteOffset,
        encoding.byteLength,
    ).toString("base64");
}

export
const timeSpecificationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => ext.extnId.isEqualTo(id_ce_timeSpecification));
    if (!ext) {
        return false;
    }

    const assertedTime: TimeSpecification = _decode_TimeSpecification(assertion);
    const storedTime: TimeSpecification = ((): TimeSpecification => {
        const el: DERElement = new DERElement();
        el.fromBytes(ext.extnValue);
        return _decode_TimeSpecification(el);
    })();

    if (
        (storedTime.notThisTime ?? TimeSpecification._default_value_for_notThisTime)
        !== (assertedTime.notThisTime ?? TimeSpecification._default_value_for_notThisTime)
    ) {
        return false;
    }

    if (storedTime.timeZone !== assertedTime.timeZone) {
        return false;
    }

    if (("absolute" in storedTime.time) && ("absolute" in assertedTime.time)) {
        const storedStart   = storedTime.time.absolute.startTime;
        const storedEnd     = storedTime.time.absolute.endTime;
        const assertedStart = assertedTime.time.absolute.startTime;
        const assertedEnd   = assertedTime.time.absolute.endTime;
        if (storedStart?.valueOf() !== assertedStart?.valueOf()) {
            return false;
        }
        if (storedEnd?.valueOf() !== assertedEnd?.valueOf()) {
            return false;
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
    return true;
}

export default timeSpecificationMatch;
