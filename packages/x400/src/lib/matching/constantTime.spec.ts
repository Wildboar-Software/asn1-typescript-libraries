import { type ASN1Element, DERElement, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue as DNAtav } from "@wildboar/dn";
import { Attribute, AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_ORDERING_GREATER,
    MATCH_FLAG_ORDERING_OR_EQUAL,
    MATCH_FLAG_USED_FOR_NAME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import {
    AddressCapabilities,
    Capability,
    _encode_AddressCapabilities,
    _encode_Capability,
} from "@wildboar/x400/MHSDirectoryObjectsAndAttributes";
import {
    BuiltInDomainDefinedAttribute,
    BuiltInStandardAttributes,
    DLExpansion,
    ExtensionAttribute,
    GlobalDomainIdentifier,
    IntendedRecipientName,
    MTSIdentifier,
    ORAddress,
    ORName,
    PersonalName,
    Redirection,
    RedirectionReason_recipient_assigned_alternate_recipient,
    RedirectionReason_originator_requested_alternate_recipient,
    SecurityLabel,
    UniversalOrBMPString,
    _encode_ContentCorrelator,
    _encode_ContentIdentifier,
    _encode_DLExpansion,
    _encode_MTSIdentifier,
    _encode_ORAddress,
    _encode_ORName,
    _encode_Redirection,
    _encode_RedirectionReason,
    common_name,
    pds_name,
} from "@wildboar/x400/MTSAbstractService";
import {
    IPMIdentifier,
    ORDescriptor,
    RecipientSpecifier,
    _encode_IPMIdentifier,
    _encode_ORDescriptor,
    _encode_RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    CirculationMember,
    DistributionCode,
    InformationCategory,
    _encode_CirculationMember,
    _encode_DistributionCode,
    _encode_InformationCategory,
} from "@wildboar/x400/IPMSHeadingExtensions";
import { _encode_IPMLocation } from "@wildboar/x400/IPMSMessageStoreAttributes";
import { _encode_SequenceNumber } from "@wildboar/x400/MSAbstractService";
import {
    _encode_MSString,
    _encode_SubstringAssertion,
} from "@wildboar/x400/MSMatchingRules";
import {
    bytesEqual,
    ctBytesEqual,
    ctCompareCodePoints,
    ctStringsEqual,
    jsTimingSafeEqual,
    stringsEqual,
} from "./constantTime.js";
import addressCapabilitiesMatch from "./equality/addressCapabilitiesMatch.js";
import capabilityMatch from "./equality/capabilityMatch.js";
import circulationMemberCheckmarkMatch from "./equality/circulationMemberCheckmarkMatch.js";
import circulationMemberElementsMatch from "./equality/circulationMemberElementsMatch.js";
import circulationMemberMatch from "./equality/circulationMemberMatch.js";
import circulationMemberSingleElementMatch from "./equality/circulationMemberSingleElementMatch.js";
import circulationMemberSubstringElementsMatch from "./equality/circulationMemberSubstringElementsMatch.js";
import contentCorrelatorMatch from "./equality/contentCorrelatorMatch.js";
import contentIdentifierMatch from "./equality/contentIdentifierMatch.js";
import distributionCodeMatch from "./equality/distributionCodeMatch.js";
import informationCategoryMatch from "./equality/informationCategoryMatch.js";
import iPMIdentifierMatch from "./equality/iPMIdentifierMatch.js";
import iPMLocationMatch from "./equality/iPMLocationMatch.js";
import mSSingleSubstringListElementsMatch from "./equality/mSSingleSubstringListElementsMatch.js";
import mSSingleSubstringListMatch from "./equality/mSSingleSubstringListMatch.js";
import mSStringCaseSensitiveMatch from "./equality/msStringCaseSensitiveMatch.js";
import mSStringListElementsMatch from "./equality/msStringListElementsMatch.js";
import mSStringListMatch from "./equality/mSStringListMatch.js";
import mSStringMatch from "./equality/mSStringMatch.js";
import mSSubstringsMatch from "./equality/mSSubstringsMatch.js";
import mTSIdentifierMatch from "./equality/mTSIdentifierMatch.js";
import oRAddressElementsMatch from "./equality/oRAddressElementsMatch.js";
import oRAddressMatch from "./equality/oRAddressMatch.js";
import oRAddressSubstringElementsMatch from "./equality/oRAddressSubstringElementsMatch.js";
import oRDescriptorElementsMatch from "./equality/oRDescriptorElementsMatch.js";
import oRDescriptorMatch from "./equality/oRDescriptorMatch.js";
import oRDescriptorSingleElementMatch from "./equality/oRDescriptorSingleElementMatch.js";
import oRDescriptorSubstringElementsMatch from "./equality/oRDescriptorSubstringElementsMatch.js";
import oRNameElementsMatch from "./equality/oRNameElementsMatch.js";
import oRNameExactMatch from "./equality/oRNameExactMatch.js";
import oRNameMatch from "./equality/oRNameMatch.js";
import oRNameSingleElementMatch from "./equality/oRNameSingleElementMatch.js";
import oRNameSubstringElementsMatch from "./equality/oRNameSubstringElementsMatch.js";
import recipientSpecifierElementsMatch from "./equality/recipientSpecifierElementsMatch.js";
import recipientSpecifierMatch from "./equality/recipientSpecifierMatch.js";
import recipientSpecifierSingleElementMatch from "./equality/recipientSpecifierSingleElementMatch.js";
import recipientSpecifierSubstringElementsMatch from "./equality/recipientSpecifierSubstringElementsMatch.js";
import redirectionOrDLExpansionElementsMatch from "./equality/redirectionOrDLExpansionElementsMatch.js";
import redirectionOrDLExpansionMatch from "./equality/redirectionOrDLExpansionMatch.js";
import redirectionOrDLExpansionSingleElementMatch from "./equality/redirectionOrDLExpansionSingleElementMatch.js";
import redirectionOrDLExpansionSubstringElementsMatch from "./equality/redirectionOrDLExpansionSubstringElementsMatch.js";
import redirectionReasonMatch from "./equality/redirectionReasonMatch.js";
import valueCountMatch from "./equality/valueCountMatch.js";
import mSStringOrderingMatch from "./ordering/mSStringOrderingMatch.js";
import mSSingleSubstringMatch from "./substring/mSSingleSubstringMatch.js";

const type_ = ObjectIdentifier.fromString("2.5.4.3");
const encodeSeq = $._encodeSequenceOf<ASN1Element>(() => (el) => el, DER);

function atav (el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, el);
}

function ms (text: string): ASN1Element {
    return _encode_MSString({ printable: text }, DER);
}

describe("X.400 constantTime primitives", () => {
    it("compares strings, bytes, and code points in constant time", () => {
        expect(ctStringsEqual("ABC", "ABC")).toBe(true);
        expect(ctStringsEqual("ABC", "ABD")).toBe(false);
        expect(ctStringsEqual("ABC", "")).toBe(false);
        expect(stringsEqual("x", "x", MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(stringsEqual("x", "y", 0)).toBe(false);

        const a = new Uint8Array([1, 2, 3]);
        const b = new Uint8Array([1, 2, 3]);
        const c = new Uint8Array([1, 2, 4]);
        expect(jsTimingSafeEqual(a, b)).toBe(true);
        expect(jsTimingSafeEqual(a, c)).toBe(false);
        expect(ctBytesEqual(a, b)).toBe(true);
        expect(ctBytesEqual(a, new Uint8Array([1]))).toBe(false);
        expect(bytesEqual(a, b, MATCH_FLAG_CONSTANT_TIME)).toBe(true);

        expect(ctCompareCodePoints("ABC", "ABC")).toBe(0);
        expect(ctCompareCodePoints("ABC", "ABD")).toBeLessThan(0);
        expect(ctCompareCodePoints("ABD", "ABC")).toBeGreaterThan(0);
    });
});

describe.each([
    ["fast", 0],
    ["constant-time", MATCH_FLAG_CONSTANT_TIME],
] as const)("X.400 matching rules (%s mode)", (_label, modeFlag) => {
    const aliceAddr = new ORAddress(
        new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "US" },
            { printable: "ATT" },
            undefined,
            undefined,
            { printable: "PRMD1" },
            "Acme Corp",
            undefined,
            new PersonalName("Smith", "Alice", "A", "II"),
            ["Engineering", "Mail"],
        ),
        [new BuiltInDomainDefinedAttribute("dept", "rd-1")],
        [
            new ExtensionAttribute(Number(common_name["&id"]!), $._encodePrintableString("Alice Smith", DER)),
            new ExtensionAttribute(Number(pds_name["&id"]!), $._encodePrintableString("PDS1", DER)),
        ],
    );
    const bobAddr = new ORAddress(
        new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "GB" },
            { printable: "BT" },
            undefined,
            undefined,
            undefined,
            "Other Org",
            undefined,
            new PersonalName("Jones", "Bob"),
            ["Sales"],
        ),
    );
    const subsetAddr = new ORAddress(
        new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "US" },
            undefined,
            undefined,
            undefined,
            undefined,
            "Acme Corp",
            undefined,
            new PersonalName("Smith"),
            ["Engineering"],
        ),
    );
    const subAddr = new ORAddress(
        new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "US" },
            undefined,
            undefined,
            undefined,
            undefined,
            "acme",
            undefined,
            new PersonalName("smi"),
            ["eng"],
        ),
    );

    const aliceDN = { rdnSequence: [[new DNAtav(type_, $._encodePrintableString("Alice", DER))]] };
    const bobDN = { rdnSequence: [[new DNAtav(type_, $._encodePrintableString("Bob", DER))]] };
    const aliceName = new ORName(
        aliceAddr.built_in_standard_attributes,
        aliceAddr.built_in_domain_defined_attributes,
        aliceAddr.extension_attributes,
        aliceDN,
    );
    const bobName = new ORName(bobAddr.built_in_standard_attributes, undefined, undefined, bobDN);
    const subsetName = new ORName(subsetAddr.built_in_standard_attributes);
    const subName = new ORName(subAddr.built_in_standard_attributes);

    it("agrees across MSString, list, ordering, and substring matchers", () => {
        expect(mSStringMatch(ms("  hello  world "), atav(ms("HELLO WORLD")), undefined, modeFlag)).toBe(true);
        expect(mSStringMatch(ms("hello"), atav(ms("world")), undefined, modeFlag)).toBe(false);

        expect(mSStringCaseSensitiveMatch(ms("  Hello  World "), atav(ms("Hello World")), undefined, modeFlag)).toBe(true);
        expect(mSStringCaseSensitiveMatch(ms("hello world"), atav(ms("Hello World")), undefined, modeFlag)).toBe(false);

        expect(mSStringOrderingMatch(ms("b"), atav(ms("a")), undefined, modeFlag)).toBe(true);
        expect(mSStringOrderingMatch(ms("a"), atav(ms("b")), undefined, modeFlag | MATCH_FLAG_ORDERING_GREATER)).toBe(true);
        expect(mSStringOrderingMatch(ms("a"), atav(ms("a")), undefined, modeFlag | MATCH_FLAG_ORDERING_OR_EQUAL)).toBe(true);

        const subAssertion = _encode_SubstringAssertion(
            [{ initial: { printable: "mes" } }, { any_: { printable: "sto" } }, { final: { printable: "re" } }],
            DER,
        );
        expect(mSSubstringsMatch(subAssertion, atav(ms("Message Store")), undefined, modeFlag)).toBe(true);
        expect(mSSubstringsMatch(subAssertion, atav(ms("Message Box")), undefined, modeFlag)).toBe(false);

        expect(mSSingleSubstringMatch(ms("sto"), atav(ms("Message Store")), undefined, modeFlag)).toBe(true);
        expect(mSSingleSubstringMatch(ms("xyz"), atav(ms("Message Store")), undefined, modeFlag)).toBe(false);

        const listFull = encodeSeq([ms("Projects"), ms("X400")], DER);
        const listPrefix = encodeSeq([ms("projects")], DER);
        const listSub = encodeSeq([ms("proj"), ms("400")], DER);
        const listSubPrefix = encodeSeq([ms("proj")], DER);
        const listOther = encodeSeq([ms("Other")], DER);

        expect(mSStringListMatch(listFull, atav(listFull), undefined, modeFlag)).toBe(true);
        expect(mSStringListMatch(listPrefix, atav(listFull), undefined, modeFlag)).toBe(false);
        expect(mSStringListElementsMatch(listPrefix, atav(listFull), undefined, modeFlag)).toBe(true);
        expect(mSStringListElementsMatch(listOther, atav(listFull), undefined, modeFlag)).toBe(false);
        expect(mSSingleSubstringListMatch(listSub, atav(listFull), undefined, modeFlag)).toBe(true);
        expect(mSSingleSubstringListMatch(listSubPrefix, atav(listFull), undefined, modeFlag)).toBe(false);
        expect(mSSingleSubstringListElementsMatch(listSubPrefix, atav(listFull), undefined, modeFlag)).toBe(true);
        expect(mSSingleSubstringListElementsMatch(listOther, atav(listFull), undefined, modeFlag)).toBe(false);
    });

    it("agrees across ORAddress, ORName, and Redirection/DLExpansion matchers", () => {
        const aliceAddrEl = _encode_ORAddress(aliceAddr, DER);
        const bobAddrEl = _encode_ORAddress(bobAddr, DER);
        const subsetAddrEl = _encode_ORAddress(subsetAddr, DER);
        const subAddrEl = _encode_ORAddress(subAddr, DER);

        expect(oRAddressMatch(aliceAddrEl, atav(aliceAddrEl), undefined, modeFlag)).toBe(true);
        expect(oRAddressMatch(aliceAddrEl, atav(bobAddrEl), undefined, modeFlag)).toBe(false);
        expect(oRAddressElementsMatch(subsetAddrEl, atav(aliceAddrEl), undefined, modeFlag)).toBe(true);
        expect(oRAddressElementsMatch(subsetAddrEl, atav(bobAddrEl), undefined, modeFlag)).toBe(false);
        expect(oRAddressSubstringElementsMatch(subAddrEl, atav(aliceAddrEl), undefined, modeFlag)).toBe(true);
        expect(oRAddressSubstringElementsMatch(subAddrEl, atav(bobAddrEl), undefined, modeFlag)).toBe(false);

        const aliceNameEl = _encode_ORName(aliceName, DER);
        const bobNameEl = _encode_ORName(bobName, DER);
        const subsetNameEl = _encode_ORName(subsetName, DER);
        const subNameEl = _encode_ORName(subName, DER);

        expect(oRNameExactMatch(aliceNameEl, atav(aliceNameEl), undefined, modeFlag)).toBe(true);
        expect(oRNameExactMatch(subsetNameEl, atav(aliceNameEl), undefined, modeFlag)).toBe(false);
        expect(oRNameMatch(aliceNameEl, atav(aliceNameEl), undefined, modeFlag)).toBe(true);
        expect(oRNameMatch(aliceNameEl, atav(bobNameEl), undefined, modeFlag)).toBe(false);
        expect(oRNameElementsMatch(subsetNameEl, atav(aliceNameEl), undefined, modeFlag)).toBe(true);
        expect(oRNameElementsMatch(subsetNameEl, atav(bobNameEl), undefined, modeFlag)).toBe(false);
        expect(oRNameSubstringElementsMatch(subNameEl, atav(aliceNameEl), undefined, modeFlag)).toBe(true);
        expect(oRNameSubstringElementsMatch(subNameEl, atav(bobNameEl), undefined, modeFlag)).toBe(false);
        expect(oRNameSingleElementMatch(ms("alice smith"), atav(aliceNameEl), undefined, modeFlag)).toBe(true);
        expect(oRNameSingleElementMatch(ms("nobody"), atav(aliceNameEl), undefined, modeFlag)).toBe(false);

        const dlExp = _encode_DLExpansion(new DLExpansion(aliceName, new Date("2026-01-01T00:00:00Z")), DER);
        const redir = _encode_Redirection(
            new Redirection(
                new IntendedRecipientName(aliceName, new Date("2026-01-01T00:00:00Z")),
                RedirectionReason_recipient_assigned_alternate_recipient,
            ),
            DER,
        );
        expect(redirectionOrDLExpansionMatch(aliceNameEl, atav(dlExp), undefined, modeFlag)).toBe(true);
        expect(redirectionOrDLExpansionMatch(bobNameEl, atav(dlExp), undefined, modeFlag)).toBe(false);
        expect(redirectionOrDLExpansionElementsMatch(subsetNameEl, atav(redir), undefined, modeFlag)).toBe(true);
        expect(redirectionOrDLExpansionElementsMatch(bobNameEl, atav(redir), undefined, modeFlag)).toBe(false);
        expect(redirectionOrDLExpansionSubstringElementsMatch(subNameEl, atav(dlExp), undefined, modeFlag)).toBe(true);
        expect(redirectionOrDLExpansionSubstringElementsMatch(bobNameEl, atav(dlExp), undefined, modeFlag)).toBe(false);
        expect(redirectionOrDLExpansionSingleElementMatch(ms("smith"), atav(redir), undefined, modeFlag)).toBe(true);
        expect(redirectionOrDLExpansionSingleElementMatch(ms("nobody"), atav(redir), undefined, modeFlag)).toBe(false);

        const reasonMatch = _encode_RedirectionReason(RedirectionReason_recipient_assigned_alternate_recipient, DER);
        const reasonOther = _encode_RedirectionReason(RedirectionReason_originator_requested_alternate_recipient, DER);
        expect(redirectionReasonMatch(reasonMatch, atav(redir), undefined, modeFlag)).toBe(true);
        expect(redirectionReasonMatch(reasonOther, atav(redir), undefined, modeFlag)).toBe(false);
    });

    it("agrees across ORDescriptor, RecipientSpecifier, CirculationMember, and remaining X.400 matchers", () => {
        const descFull = new ORDescriptor(aliceName, new Uint8Array([0x41, 0x6c, 0x69, 0x63, 0x65]), "+1 555 0100");
        const descSubset = new ORDescriptor(subsetName);
        const descSub = new ORDescriptor(subName);
        const descOther = new ORDescriptor(bobName, new Uint8Array([0x42, 0x6f, 0x62]), "+44 20 7946");

        const descFullEl = _encode_ORDescriptor(descFull, DER);
        const descSubsetEl = _encode_ORDescriptor(descSubset, DER);
        const descSubEl = _encode_ORDescriptor(descSub, DER);
        const descOtherEl = _encode_ORDescriptor(descOther, DER);

        expect(oRDescriptorMatch(descFullEl, atav(descFullEl), undefined, modeFlag)).toBe(true);
        expect(oRDescriptorMatch(descFullEl, atav(descOtherEl), undefined, modeFlag)).toBe(false);
        expect(oRDescriptorElementsMatch(descSubsetEl, atav(descFullEl), undefined, modeFlag)).toBe(true);
        expect(oRDescriptorElementsMatch(descSubsetEl, atav(descOtherEl), undefined, modeFlag)).toBe(false);
        expect(oRDescriptorSubstringElementsMatch(descSubEl, atav(descFullEl), undefined, modeFlag)).toBe(true);
        expect(oRDescriptorSubstringElementsMatch(descSubEl, atav(descOtherEl), undefined, modeFlag)).toBe(false);
        expect(oRDescriptorSingleElementMatch(ms("alice"), atav(descFullEl), undefined, modeFlag)).toBe(true);
        expect(oRDescriptorSingleElementMatch(ms("nobody"), atav(descFullEl), undefined, modeFlag)).toBe(false);

        const rsFullEl = _encode_RecipientSpecifier(new RecipientSpecifier(descFull), DER);
        const rsSubsetEl = _encode_RecipientSpecifier(new RecipientSpecifier(descSubset), DER);
        const rsSubEl = _encode_RecipientSpecifier(new RecipientSpecifier(descSub), DER);
        const rsOtherEl = _encode_RecipientSpecifier(new RecipientSpecifier(descOther), DER);

        expect(recipientSpecifierMatch(rsFullEl, atav(rsFullEl), undefined, modeFlag)).toBe(true);
        expect(recipientSpecifierMatch(rsFullEl, atav(rsOtherEl), undefined, modeFlag)).toBe(false);
        expect(recipientSpecifierElementsMatch(rsSubsetEl, atav(rsFullEl), undefined, modeFlag)).toBe(true);
        expect(recipientSpecifierElementsMatch(rsSubsetEl, atav(rsOtherEl), undefined, modeFlag)).toBe(false);
        expect(recipientSpecifierSubstringElementsMatch(rsSubEl, atav(rsFullEl), undefined, modeFlag)).toBe(true);
        expect(recipientSpecifierSubstringElementsMatch(rsSubEl, atav(rsOtherEl), undefined, modeFlag)).toBe(false);
        expect(recipientSpecifierSingleElementMatch(ms("+1 555 0100"), atav(rsFullEl), undefined, modeFlag)).toBe(true);
        expect(recipientSpecifierSingleElementMatch(ms("nobody"), atav(rsFullEl), undefined, modeFlag)).toBe(false);

        const cmCheckedEl = _encode_CirculationMember(
            new CirculationMember(new RecipientSpecifier(descFull), { simple: null }),
            DER,
        );
        const cmUncheckedEl = _encode_CirculationMember(new CirculationMember(new RecipientSpecifier(descFull)), DER);
        const cmSubsetEl = _encode_CirculationMember(new CirculationMember(new RecipientSpecifier(descSubset)), DER);
        const cmSubEl = _encode_CirculationMember(new CirculationMember(new RecipientSpecifier(descSub)), DER);
        const cmOtherEl = _encode_CirculationMember(new CirculationMember(new RecipientSpecifier(descOther)), DER);

        expect(circulationMemberMatch(cmUncheckedEl, atav(cmCheckedEl), undefined, modeFlag)).toBe(true);
        expect(circulationMemberMatch(cmUncheckedEl, atav(cmOtherEl), undefined, modeFlag)).toBe(false);
        expect(circulationMemberElementsMatch(cmSubsetEl, atav(cmCheckedEl), undefined, modeFlag)).toBe(true);
        expect(circulationMemberElementsMatch(cmSubsetEl, atav(cmOtherEl), undefined, modeFlag)).toBe(false);
        expect(circulationMemberSubstringElementsMatch(cmSubEl, atav(cmCheckedEl), undefined, modeFlag)).toBe(true);
        expect(circulationMemberSubstringElementsMatch(cmSubEl, atav(cmOtherEl), undefined, modeFlag)).toBe(false);
        expect(circulationMemberSingleElementMatch(ms("alice"), atav(cmCheckedEl), undefined, modeFlag)).toBe(true);
        expect(circulationMemberSingleElementMatch(ms("nobody"), atav(cmCheckedEl), undefined, modeFlag)).toBe(false);
        expect(circulationMemberCheckmarkMatch(cmUncheckedEl, atav(cmCheckedEl), undefined, modeFlag)).toBe(true);
        expect(circulationMemberCheckmarkMatch(cmUncheckedEl, atav(cmUncheckedEl), undefined, modeFlag)).toBe(false);

        expect(
            contentIdentifierMatch(
                _encode_ContentIdentifier("  id  1 ", DER),
                atav(_encode_ContentIdentifier("id 1", DER)),
                undefined,
                modeFlag,
            ),
        ).toBe(true);
        expect(
            contentCorrelatorMatch(
                _encode_ContentCorrelator({ octets: new Uint8Array([1, 2, 3]) }, DER),
                atav(_encode_ContentCorrelator({ octets: new Uint8Array([1, 2, 3]) }, DER)),
                undefined,
                modeFlag,
            ),
        ).toBe(true);
        expect(
            contentCorrelatorMatch(
                _encode_ContentCorrelator({ octets: new Uint8Array([1, 2, 3]) }, DER),
                atav(_encode_ContentCorrelator({ ia5text: "123" }, DER)),
                undefined,
                modeFlag,
            ),
        ).toBe(false);

        const mts1 = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier({ iso_3166_alpha2_code: "US" }, { printable: "ATT" }, { numeric: "12" }),
                "msg-01",
            ),
            DER,
        );
        const mts2 = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier({ x121_dcc_code: "310" }, { printable: "att" }, { printable: "1 2" }),
                "MSG-01",
            ),
            DER,
        );
        expect(mTSIdentifierMatch(mts1, atav(mts2), undefined, modeFlag)).toBe(true);

        const ipm1 = _encode_IPMIdentifier(new IPMIdentifier(aliceName, "ipm-1"), DER);
        const ipm2 = _encode_IPMIdentifier(new IPMIdentifier(bobName, "ipm-1"), DER);
        expect(iPMIdentifierMatch(ipm1, atav(ipm1), undefined, modeFlag)).toBe(true);
        expect(iPMIdentifierMatch(ipm1, atav(ipm2), undefined, modeFlag)).toBe(false);

        const locStored = _encode_IPMLocation({ stored: [1, 5, 9] }, DER);
        const locAbsent = _encode_IPMLocation({ absent: null }, DER);
        expect(iPMLocationMatch(_encode_SequenceNumber(5, DER), atav(locStored), undefined, modeFlag)).toBe(true);
        expect(iPMLocationMatch(_encode_SequenceNumber(2, DER), atav(locStored), undefined, modeFlag)).toBe(false);
        expect(iPMLocationMatch(_encode_SequenceNumber(5, DER), atav(locAbsent), undefined, modeFlag)).toBe(false);

        const dcBoth = _encode_DistributionCode(
            new DistributionCode(type_, new UniversalOrBMPString({ two_octets: "alpha" })),
            DER,
        );
        const dcOidOnly = _encode_DistributionCode(new DistributionCode(type_), DER);
        const dcAlphaOnly = _encode_DistributionCode(
            new DistributionCode(undefined, new UniversalOrBMPString({ two_octets: "ALPHA" })),
            DER,
        );
        expect(distributionCodeMatch(dcBoth, atav(dcBoth), undefined, modeFlag)).toBe(true);
        expect(distributionCodeMatch(dcAlphaOnly, atav(dcOidOnly), undefined, modeFlag)).toBe(false);

        const icBoth = _encode_InformationCategory(
            new InformationCategory(type_, new UniversalOrBMPString({ two_octets: "cat" })),
            DER,
        );
        const icRefOnly = _encode_InformationCategory(new InformationCategory(type_), DER);
        expect(informationCategoryMatch(icBoth, atav(icRefOnly), undefined, modeFlag)).toBe(true);
        expect(informationCategoryMatch(icBoth, atav(_encode_InformationCategory(new InformationCategory(ObjectIdentifier.fromString("2.5.4.4")), DER)), undefined, modeFlag)).toBe(false);

        const cap1 = new Capability([ [1, 2], [3, 4] ], 1024, undefined, [new SecurityLabel(undefined, 2, "secret")]);
        const cap2 = new Capability([ [3, 4], [1, 2] ], 1024, undefined, [new SecurityLabel(undefined, 2, "  SECRET ")]);
        expect(capabilityMatch(_encode_Capability(cap1, DER), atav(_encode_Capability(cap2, DER)), undefined, modeFlag)).toBe(true);

        const ac1 = _encode_AddressCapabilities(new AddressCapabilities("desc", aliceAddr, [cap1]), DER);
        const ac2 = _encode_AddressCapabilities(new AddressCapabilities("  DESC ", aliceAddr, [cap2]), DER);
        expect(addressCapabilitiesMatch(ac1, atav(ac2), undefined, modeFlag)).toBe(true);

        const multiAttr = new Attribute(type_, [ms("a"), ms("b")]);
        expect(valueCountMatch($._encodeInteger(2, DER), multiAttr, undefined, modeFlag)).toBe(true);
        expect(valueCountMatch($._encodeInteger(1, DER), multiAttr, undefined, modeFlag)).toBe(false);
    });
});

describe("MATCH_FLAG_USED_FOR_NAME, MATCH_FLAG_ASSERTION_NORMALIZED, and MATCH_FLAG_VALUE_NORMALIZED (Issue 4.2)", () => {
    it("refuses name matching on heterogeneous-syntax rules and allows exact homogeneous rules", () => {
        const dummy = DERElement.fromSequence([]);
        const heterogeneousRules: readonly [string, Matcher, ASN1Element, ASN1Element][] = [
            ["mSSingleSubstringMatch", mSSingleSubstringMatch, ms("A"), ms("A")],
            [
                "mSSubstringsMatch",
                mSSubstringsMatch,
                _encode_SubstringAssertion([{ any_: { printable: "A" } }], DER),
                ms("A"),
            ],
            ["mSStringListElementsMatch", mSStringListElementsMatch, encodeSeq([ms("A")], DER), encodeSeq([ms("A")], DER)],
            ["mSSingleSubstringListMatch", mSSingleSubstringListMatch, encodeSeq([ms("A")], DER), encodeSeq([ms("A")], DER)],
            [
                "mSSingleSubstringListElementsMatch",
                mSSingleSubstringListElementsMatch,
                encodeSeq([ms("A")], DER),
                encodeSeq([ms("A")], DER),
            ],
            ["oRNameSingleElementMatch", oRNameSingleElementMatch, ms("A"), dummy],
            ["oRDescriptorSingleElementMatch", oRDescriptorSingleElementMatch, ms("A"), dummy],
            ["recipientSpecifierSingleElementMatch", recipientSpecifierSingleElementMatch, ms("A"), dummy],
            ["circulationMemberSingleElementMatch", circulationMemberSingleElementMatch, ms("A"), dummy],
            [
                "redirectionOrDLExpansionMatch",
                redirectionOrDLExpansionMatch,
                _encode_ORName(new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" })), DER),
                dummy,
            ],
            [
                "redirectionOrDLExpansionElementsMatch",
                redirectionOrDLExpansionElementsMatch,
                _encode_ORName(new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" })), DER),
                dummy,
            ],
            [
                "redirectionOrDLExpansionSubstringElementsMatch",
                redirectionOrDLExpansionSubstringElementsMatch,
                _encode_ORName(new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" })), DER),
                dummy,
            ],
            ["redirectionOrDLExpansionSingleElementMatch", redirectionOrDLExpansionSingleElementMatch, ms("US"), dummy],
            [
                "redirectionReasonMatch",
                redirectionReasonMatch,
                _encode_RedirectionReason(RedirectionReason_recipient_assigned_alternate_recipient, DER),
                dummy,
            ],
            ["iPMLocationMatch", iPMLocationMatch, _encode_SequenceNumber(1, DER), dummy],
            ["valueCountMatch", valueCountMatch, $._encodeInteger(1, DER), ms("A")],
        ];

        for (const [name, matcher, assertion, val] of heterogeneousRules) {
            expect(matcher(assertion, atav(val), undefined, MATCH_FLAG_USED_FOR_NAME), name).toBeUndefined();
        }
    });

    it("honors MATCH_FLAG_ASSERTION_NORMALIZED and MATCH_FLAG_VALUE_NORMALIZED on string, MTS, capability, and heading matchers", () => {
        expect(mSStringMatch(ms("hello"), atav(ms("HELLO")), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(mSStringMatch(ms("HELLO"), atav(ms("hello")), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);

        expect(mSStringCaseSensitiveMatch(ms("  Hello "), atav(ms("Hello")), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(mSStringCaseSensitiveMatch(ms("Hello"), atav(ms("  Hello ")), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);

        const mtsLower = _encode_MTSIdentifier(
            new MTSIdentifier(new GlobalDomainIdentifier({ iso_3166_alpha2_code: "US" }, { printable: "ATT" }), "local"),
            DER,
        );
        const mtsUpper = _encode_MTSIdentifier(
            new MTSIdentifier(new GlobalDomainIdentifier({ iso_3166_alpha2_code: "US" }, { printable: "ATT" }), "LOCAL"),
            DER,
        );
        expect(mTSIdentifierMatch(mtsLower, atav(mtsUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(mTSIdentifierMatch(mtsUpper, atav(mtsLower), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);
        expect(
            mTSIdentifierMatch(mtsUpper, atav(mtsUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED | MATCH_FLAG_VALUE_NORMALIZED),
        ).toBe(true);

        const dcLower = _encode_DistributionCode(
            new DistributionCode(undefined, new UniversalOrBMPString({ two_octets: "code" })),
            DER,
        );
        const dcUpper = _encode_DistributionCode(
            new DistributionCode(undefined, new UniversalOrBMPString({ two_octets: "CODE" })),
            DER,
        );
        expect(distributionCodeMatch(dcLower, atav(dcUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(distributionCodeMatch(dcUpper, atav(dcLower), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);

        const icLower = _encode_InformationCategory(
            new InformationCategory(undefined, new UniversalOrBMPString({ two_octets: "info" })),
            DER,
        );
        const icUpper = _encode_InformationCategory(
            new InformationCategory(undefined, new UniversalOrBMPString({ two_octets: "INFO" })),
            DER,
        );
        expect(informationCategoryMatch(icLower, atav(icUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(informationCategoryMatch(icUpper, atav(icLower), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);
    });
});
