import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.js";
import {
    type AdministrationDomainName,
    type CountryName,
    type MTSIdentifier,
    type PrivateDomainIdentifier,
    _decode_MTSIdentifier,
} from "@wildboar/x400/MTSAbstractService";
import {
    normalizeCountryChoice,
    normalizeMSString,
    normalizeNumericOnly,
    normalizeNumericOrPrintable,
} from "./orAddressUtilities.js";

interface PreparedMTSIdentifier {
    readonly countryChoice?: CountryName;
    readonly country: string;
    readonly admdIsNumeric: boolean;
    readonly admd: string;
    readonly prmdIsNumeric?: boolean;
    readonly prmd?: string;
    readonly localId: string;
}

function rawDomainChoice (
    domain: AdministrationDomainName | PrivateDomainIdentifier,
): { isNumeric: boolean; text: string } {
    if ("numeric" in domain) {
        return { isNumeric: true, text: domain.numeric };
    }
    return { isNumeric: false, text: domain.printable };
}

function decodeRawMTSIdentifier (mts: MTSIdentifier, el: ASN1Element): PreparedMTSIdentifier {
    const glob = mts.global_domain_identifier;
    const rawCountry = ("x121_dcc_code" in glob.country_name)
        ? glob.country_name.x121_dcc_code
        : glob.country_name.iso_3166_alpha2_code;
    if (rawCountry.trim().length === 0) {
        throw new ASN1CharactersError("mTSIdentifierMatch: empty country-name", el);
    }
    const admd = rawDomainChoice(glob.administration_domain_name);
    let prmd: { isNumeric: boolean; text: string } | undefined;
    if (glob.private_domain_identifier !== undefined) {
        prmd = rawDomainChoice(glob.private_domain_identifier);
        if (prmd.text.length === 0) {
            throw new ASN1CharactersError("mTSIdentifierMatch: empty private-domain-identifier", el);
        }
    }
    if (mts.local_identifier.length === 0) {
        throw new ASN1CharactersError("mTSIdentifierMatch: empty local-identifier", el);
    }
    return {
        countryChoice: glob.country_name,
        country: rawCountry,
        admdIsNumeric: admd.isNumeric,
        admd: admd.text,
        prmdIsNumeric: prmd?.isNumeric,
        prmd: prmd?.text,
        localId: mts.local_identifier,
    };
}

function normalizePreparedMTSIdentifier (
    raw: PreparedMTSIdentifier,
    el?: ASN1Element,
): PreparedMTSIdentifier {
    const country = raw.countryChoice
        ? normalizeCountryChoice(raw.countryChoice)
        : normalizeMSString(raw.country, true);
    if (!country) {
        throw new ASN1CharactersError("mTSIdentifierMatch: invalid country-name", el);
    }
    const admd = raw.admdIsNumeric
        ? normalizeNumericOnly(raw.admd)
        : normalizeNumericOrPrintable(raw.admd);
    const prmd = raw.prmd !== undefined
        ? (raw.prmdIsNumeric
            ? normalizeNumericOnly(raw.prmd)
            : normalizeNumericOrPrintable(raw.prmd))
        : undefined;
    const localId = normalizeMSString(raw.localId, true);
    return {
        country,
        admdIsNumeric: raw.admdIsNumeric,
        admd,
        prmdIsNumeric: raw.prmdIsNumeric,
        prmd,
        localId,
    };
}

function decodeMTSIdentifierAssertion (el: ASN1Element): PreparedMTSIdentifier {
    return decodeRawMTSIdentifier(_decode_MTSIdentifier(el), el);
}

function matchMTSIdentifierFast (
    assertion: PreparedMTSIdentifier,
    v: PreparedMTSIdentifier,
): boolean {
    return (
        assertion.country === v.country
        && assertion.admd === v.admd
        && assertion.prmd === v.prmd
        && assertion.localId === v.localId
    );
}

function matchMTSIdentifierConstantTime (
    assertion: PreparedMTSIdentifier,
    v: PreparedMTSIdentifier,
): boolean {
    const prmdPresenceOk = (assertion.prmd === undefined) === (v.prmd === undefined);
    const countryOk = ctStringsEqual(assertion.country, v.country);
    const admdOk = ctStringsEqual(assertion.admd, v.admd);
    const prmdOk = assertion.prmd !== undefined
        ? ctStringsEqual(assertion.prmd, v.prmd ?? "")
        : true;
    const localOk = ctStringsEqual(assertion.localId, v.localId);
    return prmdPresenceOk && countryOk && admdOk && prmdOk && localOk;
}

/**
 * ITU-T Rec. X.413 (06/1999), clause 12.4.13 `mTSIdentifierMatch`.
 */
export
const mTSIdentifierMatch: Matcher = createEqualityMatcher(
    decodeMTSIdentifierAssertion,
    (assertion: PreparedMTSIdentifier, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        const rawV = decodeRawMTSIdentifier(_decode_MTSIdentifier(value), value);
        const v = (flags & MATCH_FLAG_VALUE_NORMALIZED)
            ? rawV
            : normalizePreparedMTSIdentifier(rawV, value);
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchMTSIdentifierConstantTime(assertion, v)
            : matchMTSIdentifierFast(assertion, v);
    },
    undefined,
    false,
    normalizePreparedMTSIdentifier,
);

export default mTSIdentifierMatch;
