/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import type {
    ATTRIBUTE,
} from "@wildboar/x500/InformationFramework";
import {
    id_clearanceSponsor,
} from "./id-clearanceSponsor.va.mjs";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";
import {
    caseIgnoreMatch,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary at_clearanceSponsor
 * @description
 *
 * Clearance Sponsor attribute ([RFC 5917 §2](https://datatracker.ietf.org/doc/html/rfc5917#section-2)):
 * the entity (e.g., agency, department, or organization) that sponsored
 * (i.e., granted) the clearance of the subject with which this attribute
 * is associated. Only meaningful when the clearance attribute
 * ([RFC 5755](https://datatracker.ietf.org/doc/html/rfc5755),
 * [RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)) is also
 * present.
 *
 * The value is a `DirectoryString` with size bound
 * `ub-clearance-sponsor`, which MUST use the `utf8String` CHOICE
 * (minimum 1 character, maximum 64). Equality uses `caseIgnoreMatch`.
 *
 * Intended for public key certificates ([RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280))
 * and attribute certificates ([RFC 5755](https://datatracker.ietf.org/doc/html/rfc5755)).
 * May drive automated authorization (e.g., a server checks that the
 * clearance sponsor in the user's certificate is on an "approved" list),
 * in addition to certification path validation. Managing that list is
 * out of scope.
 *
 * > There MUST only be one value of clearanceSponsor associated with a
 * > particular certificate. Distinct sponsors MUST be represented in
 * > separate certificates.
 * >
 * > When an environment uses the Clearance Sponsor attribute, it is
 * > important that the same representation of the sponsor be used
 * > throughout the environment (e.g., using the same acronym). Further,
 * > the value in this attribute is not meant to be globally unique.
 * > When included in certificates, it is unique within the scope of the
 * > issuer.
 * >
 * > — [RFC 5917 §2](https://datatracker.ietf.org/doc/html/rfc5917#section-2)
 *
 * No LDAP schema is defined here; that is left to a future
 * specification ([RFC 5917 §1](https://datatracker.ietf.org/doc/html/rfc5917#section-1)).
 *
 * If used for authorization, the assigning entity's procedures must
 * ensure the correct value is applied; carrying it in a certificate
 * provides integrity protection. The certificate issuer and clearance
 * sponsor are not necessarily the same entity
 * ([RFC 5917 §3](https://datatracker.ietf.org/doc/html/rfc5917#section-3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * at-clearanceSponsor ATTRIBUTE ::= {
 *     TYPE                   DirectoryString { ub-clearance-sponsor }
 *                         ( WITH COMPONENTS { utf8String PRESENT } )
 *     EQUALITY MATCHING RULE caseIgnoreMatch
 *     IDENTIFIED BY          id-clearanceSponsor
 * }
 * ```
 */
export
const at_clearanceSponsor: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&id": id_clearanceSponsor,
    "&Type": 0 as never,
    "&equality-match": caseIgnoreMatch,
};

/* eslint-enable */
