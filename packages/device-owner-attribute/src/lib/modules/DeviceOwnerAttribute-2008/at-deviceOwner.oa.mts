/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { objectIdentifierMatch } from "@wildboar/x500/InformationFramework";
import { id_deviceOwner } from "../DeviceOwnerAttribute-2008/id-deviceOwner.va.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

/**
 * @summary at_deviceOwner
 * @description
 *
 * Device Owner attribute ([RFC 5916 §2](https://datatracker.ietf.org/doc/html/rfc5916#section-2)):
 * the entity (e.g., company, organization, department, agency) that owns
 * the device with which this attribute is associated. The value is an
 * `OBJECT IDENTIFIER`; equality uses `objectIdentifierMatch`.
 *
 * Intended for public key certificates ([RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280))
 * and attribute certificates ([RFC 5755](https://datatracker.ietf.org/doc/html/rfc5755)).
 * May drive automated authorization (e.g., peers check that the
 * counterpart's Device Owner is on an "approved" list), in addition to
 * certification path validation. Managing that list is out of scope.
 *
 * > There MUST only be one value of Device Owner associated with a
 * > device. Distinct owners MUST be represented in separate
 * > certificates.
 * >
 * > — [RFC 5916 §2](https://datatracker.ietf.org/doc/html/rfc5916#section-2)
 *
 * No LDAP schema is defined here; that is left to a future
 * specification ([RFC 5916 §1](https://datatracker.ietf.org/doc/html/rfc5916#section-1)).
 *
 * If used for authorization, the assigning entity's procedures must
 * ensure the correct value is applied; carrying it in a certificate
 * provides integrity protection
 * ([RFC 5916 §3](https://datatracker.ietf.org/doc/html/rfc5916#section-3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * at-deviceOwner ATTRIBUTE ::= {
 *     TYPE                     OBJECT IDENTIFIER
 *     EQUALITY MATCHING RULE   objectIdentifierMatch
 *     IDENTIFIED BY            id-deviceOwner
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export
const at_deviceOwner: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_deviceOwner /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    // "&minCount": 1 /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
