import { DERElement, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    type Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    id_ce_subjectKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-subjectKeyIdentifier.va.mjs";
import {
    id_ce_authorityKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
import {
    id_ce_privateKeyUsagePeriod,
} from "../../modules/CertificateExtensions/id-ce-privateKeyUsagePeriod.va.mjs";
import {
    id_ce_subjectAltName,
} from "../../modules/CertificateExtensions/id-ce-subjectAltName.va.mjs";
import {
    id_ce_certificatePolicies,
} from "../../modules/CertificateExtensions/id-ce-certificatePolicies.va.mjs";
import {
    id_ce_nameConstraints,
} from "../../modules/CertificateExtensions/id-ce-nameConstraints.va.mjs";
import {
    id_ce_keyUsage,
} from "../../modules/CertificateExtensions/id-ce-keyUsage.va.mjs";
import {
    type AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
} from "../../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import {
    type PrivateKeyUsagePeriod,
    _decode_PrivateKeyUsagePeriod,
} from "../../modules/CertificateExtensions/PrivateKeyUsagePeriod.ta.mjs";
import {
    type KeyUsage,
    _decode_KeyUsage,
} from "../../modules/CertificateExtensions/KeyUsage.ta.mjs";
import {
    type GeneralNames,
    _decode_GeneralNames,
} from "../../modules/CertificateExtensions/GeneralNames.ta.mjs";
import {
    type CertificatePoliciesSyntax,
    _decode_CertificatePoliciesSyntax,
} from "../../modules/CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import {
    type NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    anyPolicy,
} from "../../modules/CertificateExtensions/anyPolicy.va.mjs";

// Vite's module runner turns imported bindings into getters. Locals keep
// that per-call overhead out of the matching hot path.
const SKI_ID = id_ce_subjectKeyIdentifier;
const AKI_ID = id_ce_authorityKeyIdentifier;
const PKUP_ID = id_ce_privateKeyUsagePeriod;
const KU_ID = id_ce_keyUsage;
const SAN_ID = id_ce_subjectAltName;
const CP_ID = id_ce_certificatePolicies;
const NC_ID = id_ce_nameConstraints;
const ANY_POLICY = anyPolicy;
const decodeAKI = _decode_AuthorityKeyIdentifier;
const decodePKUP = _decode_PrivateKeyUsagePeriod;
const decodeKU = _decode_KeyUsage;
const decodeSAN = _decode_GeneralNames;
const decodeCP = _decode_CertificatePoliciesSyntax;
const decodeNC = _decode_NameConstraintsSyntax;

const UNSET: unique symbol = Symbol("unset");
type Lazy<T> = T | typeof UNSET;

function decodeExtension<T> (
    ext: Extension | undefined,
    decoder: (el: DERElement) => T,
): T | undefined {
    if (!ext) {
        return undefined;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    return decoder(el);
}

/**
 * One pass over a certificate's extensions, with each well-known
 * extension decoded at most once.
 *
 * `certificateMatch` and `enhancedCertificateMatch` used to `.find`
 * and re-decode the same extension for every asserted component
 * (subjectAltName was decoded twice when `nameConstraints` was also
 * present). Policy OIDs were compared via `toString()`.
 *
 * @author Cursor Grok 4.6
 */
export
class CertificateExtensionIndex {
    private readonly skiExt: Extension | undefined;
    private readonly akiExt: Extension | undefined;
    private readonly pkupExt: Extension | undefined;
    private readonly kuExt: Extension | undefined;
    private readonly sanExt: Extension | undefined;
    private readonly cpExt: Extension | undefined;
    private readonly ncExt: Extension | undefined;

    private ski: Lazy<Uint8Array | undefined> = UNSET;
    private aki: Lazy<AuthorityKeyIdentifier | undefined> = UNSET;
    private pkup: Lazy<PrivateKeyUsagePeriod | undefined> = UNSET;
    private ku: Lazy<KeyUsage | undefined> = UNSET;
    private san: Lazy<GeneralNames | undefined> = UNSET;
    private cp: Lazy<CertificatePoliciesSyntax | undefined> = UNSET;
    private nc: Lazy<NameConstraintsSyntax | undefined> = UNSET;

    constructor (extensions: Extension[] | undefined) {
        let skiExt: Extension | undefined;
        let akiExt: Extension | undefined;
        let pkupExt: Extension | undefined;
        let kuExt: Extension | undefined;
        let sanExt: Extension | undefined;
        let cpExt: Extension | undefined;
        let ncExt: Extension | undefined;
        if (extensions) {
            for (const ext of extensions) {
                const id = ext.extnId;
                if (id.isEqualTo(SKI_ID)) {
                    skiExt = ext;
                } else if (id.isEqualTo(AKI_ID)) {
                    akiExt = ext;
                } else if (id.isEqualTo(PKUP_ID)) {
                    pkupExt = ext;
                } else if (id.isEqualTo(KU_ID)) {
                    kuExt = ext;
                } else if (id.isEqualTo(SAN_ID)) {
                    sanExt = ext;
                } else if (id.isEqualTo(CP_ID)) {
                    cpExt = ext;
                } else if (id.isEqualTo(NC_ID)) {
                    ncExt = ext;
                }
            }
        }
        this.skiExt = skiExt;
        this.akiExt = akiExt;
        this.pkupExt = pkupExt;
        this.kuExt = kuExt;
        this.sanExt = sanExt;
        this.cpExt = cpExt;
        this.ncExt = ncExt;
    }

    get subjectKeyIdentifier (): Uint8Array | undefined {
        if (this.ski === UNSET) {
            if (!this.skiExt) {
                this.ski = undefined;
            } else {
                const el: DERElement = new DERElement();
                el.fromBytes(this.skiExt.extnValue);
                this.ski = el.octetString;
            }
        }
        return this.ski;
    }

    get authorityKeyIdentifier (): AuthorityKeyIdentifier | undefined {
        if (this.aki === UNSET) {
            this.aki = decodeExtension(this.akiExt, decodeAKI);
        }
        return this.aki;
    }

    get privateKeyUsagePeriod (): PrivateKeyUsagePeriod | undefined {
        if (this.pkup === UNSET) {
            this.pkup = decodeExtension(this.pkupExt, decodePKUP);
        }
        return this.pkup;
    }

    get keyUsage (): KeyUsage | undefined {
        if (this.ku === UNSET) {
            this.ku = decodeExtension(this.kuExt, decodeKU);
        }
        return this.ku;
    }

    get subjectAltName (): GeneralNames | undefined {
        if (this.san === UNSET) {
            this.san = decodeExtension(this.sanExt, decodeSAN);
        }
        return this.san;
    }

    get certificatePolicies (): CertificatePoliciesSyntax | undefined {
        if (this.cp === UNSET) {
            this.cp = decodeExtension(this.cpExt, decodeCP);
        }
        return this.cp;
    }

    get nameConstraints (): NameConstraintsSyntax | undefined {
        if (this.nc === UNSET) {
            this.nc = decodeExtension(this.ncExt, decodeNC);
        }
        return this.nc;
    }
}

/**
 * X.509 clause 13.3.2 `policy`: TRUE if either side contains
 * `anyPolicy`, or if the asserted and stored policy OIDs intersect.
 *
 * Compared with `OBJECT_IDENTIFIER.isEqualTo`, not dotted-decimal
 * strings.
 *
 * @param asserted Presented `CertPolicySet`.
 * @param stored Decoded `certificatePolicies` extension.
 * @returns `true` iff the policy component matches.
 * @function
 * @author Cursor Grok 4.6
 */
export
function certificatePoliciesIntersect (
    asserted: OBJECT_IDENTIFIER[],
    stored: CertificatePoliciesSyntax,
): boolean {
    for (const policy of stored) {
        if (policy.policyIdentifier.isEqualTo(ANY_POLICY)) {
            return true;
        }
    }
    for (const oid of asserted) {
        if (oid.isEqualTo(ANY_POLICY)) {
            return true;
        }
    }
    for (const oid of asserted) {
        for (const policy of stored) {
            if (oid.isEqualTo(policy.policyIdentifier)) {
                return true;
            }
        }
    }
    return false;
}
