import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    GeneralName,
} from "../modules/CertificateExtensions/GeneralName.ta.mjs";
import directoryStringToString from "../stringifiers/directoryStringToString.mjs";;
import compareName from "./compareName.mjs";
import compareElements from "./compareElements.mjs";
import {
    _encode_ORAddress,
} from "../modules/PkiPmiExternalDataTypes/ORAddress.ta.mjs";
import {
    ASN1Element,
    DERElement,
    OBJECT_IDENTIFIER,
} from "asn1-ts";

export
function compareGeneralName (
    a: GeneralName,
    b: GeneralName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if ("otherName" in a) {
        if (!("otherName" in b)) {
            return false;
        }

        if (a.otherName.directReference.toString() !== b.otherName.directReference.toString()) {
            return false;
        }

        if (a.otherName.indirectReference !== b.otherName.indirectReference) {
            return false;
        }

        const enca = a.otherName.encoding;
        const encb = b.otherName.encoding;

        if (enca instanceof Uint8Array) {
            if (!(encb instanceof Uint8Array)) {
                return false;
            }
            return !Buffer.compare(enca, encb);
        } else if (enca instanceof Uint8ClampedArray) {
            if (!(encb instanceof Uint8ClampedArray)) {
                return false;
            }
            return !Buffer.compare(Buffer.from(enca), Buffer.from(encb));
        } else { // Some ASN.1 Element
            if ((encb instanceof Uint8Array) || (encb instanceof Uint8ClampedArray)) {
                return false;
            }
            return compareElements(enca, encb);
        }
    }
    else if ("rfc822Name" in a) {
        if (!("rfc822Name" in b)) {
            return false;
        }
        return (a.rfc822Name.toLowerCase() === b.rfc822Name.toLowerCase());
    }
    else if ("dNSName" in a) {
        if (!("dNSName" in b)) {
            return false;
        }
        return (a.dNSName.toLowerCase() === b.dNSName.toLowerCase());
    }
    else if ("x400Address" in a) {
        if (!("x400Address" in b)) {
            return false;
        }
        const ora: ASN1Element = _encode_ORAddress(a.x400Address, () => new DERElement());
        const orb: ASN1Element = _encode_ORAddress(b.x400Address, () => new DERElement());
        return compareElements(ora, orb);
    }
    else if ("directoryName" in a) {
        if (!("directoryName" in b)) {
            return false;
        }
        return compareName(a.directoryName, b.directoryName, getEqualityMatcher ?? (() => undefined));
    }
    else if ("ediPartyName" in a) {
        if (!("ediPartyName" in b)) {
            return false;
        }
        const ana: string | undefined = a.ediPartyName.nameAssigner
            ? directoryStringToString(a.ediPartyName.nameAssigner)
            : undefined;
        const apn: string = directoryStringToString(a.ediPartyName.partyName);
        const bna: string | undefined = b.ediPartyName.nameAssigner
            ? directoryStringToString(b.ediPartyName.nameAssigner)
            : undefined;
        const bpn: string = directoryStringToString(b.ediPartyName.partyName);
        return (
            (ana === bna)
            && (apn === bpn)
        );
    }
    else if ("uniformResourceIdentifier" in a) {
        if (!("uniformResourceIdentifier" in b)) {
            return false;
        }
        return (a.uniformResourceIdentifier.toLowerCase() === b.uniformResourceIdentifier.toLowerCase());
    }
    else if ("iPAddress" in a) {
        if (!("iPAddress" in b)) {
            return false;
        }
        return !Buffer.compare(a.iPAddress, b.iPAddress);
    }
    else if ("registeredID" in a) {
        if (!("registeredID" in b)) {
            return false;
        }
        return (a.registeredID.isEqualTo(b.registeredID));
    } else {
        if (!("tagClass" in b)) {
            return false;
        }
        return compareElements(a, b);
    }
}

export default compareGeneralName;
