/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityLabelType1, _decode_SecurityLabelType1, _encode_SecurityLabelType1 } from "../PKIS/SecurityLabelType1.ta.mjs";


/**
 * @summary EnterpriseId
 * @description
 *
 * Globally unambiguous mandatory-access-control label. Display name:
 * "Enterprise Identifier". Three labels: a root, a registry the root
 * enables, and an enterprise the registry enables. Rights are carried
 * here so they do not depend on name subordination or on a shared
 * distinguished name. §6.
 *
 * The root names registries by secrecy and integrity singletons, and
 * sets the categories and levels the registry may use. The registry
 * names enterprises the same way, and sets what the enterprise may
 * use. The enterprise then issues certificates within that allotment.
 * A category or singleton that is FALSE anywhere in the chain is FALSE
 * in the greatest lower bound, so a lower tier cannot assert a right
 * a higher tier did not enable. A registry normally enables every
 * category and system-high levels unless the root has reserved some
 * of them. §6.3.
 *
 * Until a liability-assuming global root exists, Novell acts as both
 * root and registry and assigns an enterprise id from each NICI
 * license. §7. The initial release displays each label in hexadecimal.
 * §6.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnterpriseId ::= SEQUENCE {
 *  rootLabel [0] IMPLICIT SecurityLabelType1,
 *  registryLabel [1] IMPLICIT SecurityLabelType1,
 *  enterpriseLabel [2] IMPLICIT SEQUENCE SIZE (1..1) OF SecurityLabelType1
 * }
 * ```
 * 
 * @class
 */
export
class EnterpriseId {
    constructor (
        /**
         * @summary `rootLabel`.
         * @description
         *
         * Top of the label. A root names a registry by matching secrecy
         * and integrity singletons, qualified by category bits that say
         * which naming scheme was used, and sets the maximum levels
         * and the categories that registry may control. §6.2, §6.3.
         *
         * Novell root (§7.1): category bit 0, in both secrecy and
         * integrity, selects the joint-iso-ccitt / country /
         * organization singleton form
         * `organizationId * 1024 + countryCode`, with the ISO 3166:1993
         * country code in the low 10 bits and 53 bits for the
         * organization id. A government registry that assigns itself
         * organization id 0 is just the country code. Novell's
         * singleton is `113719 * 1024 + 840` = 116449096. Every other
         * category bit and singleton is FALSE. Initialize the singleton
         * range to FALSE, then set the singletons that are on.
         *
         * @public
         * @readonly
         */
        readonly rootLabel: SecurityLabelType1,
        /**
         * @summary `registryLabel`.
         * @description
         *
         * Second tier. The root sets the secrecy and integrity levels
         * this registry may claim, and which categories and singletons
         * it may control. The registry names an enterprise by matching
         * singletons here. §6.3.
         *
         * On a Novell registry label the secrecy and integrity levels
         * are inter-enterprise sensitivity labels. They are advisory,
         * and have a guaranteed meaning only inside one enterprise,
         * unless a category bit gives them a shared meaning. §7.2.1.
         * Table 6 (§7.2.2) is that combined scale. Category bit 11
         * says the levels are age controls.
         *
         * | Secrecy | Table 6 |
         * | --- | --- |
         * | 0–20 | Age N of the subject, actual or desired, for age-related access. |
         * | 21 | Age 21 or older. As an integrity control, capacity to sign a legally binding contract. |
         * | 25 | Age 25 or older. As an integrity control, car rental and similar. |
         * | 100 | Restricted. Official need to know, or a minimal clearance. |
         * | 125 | Confidential. Disclosure could damage national interests. |
         * | 150 | Secret. Disclosure could seriously damage national interests. |
         * | 200 | Top Secret. Disclosure could gravely damage national interests. |
         *
         * Other secrecy values are reserved. Integrity is encoded as
         * `255 - secrecy` (§3.1). A secrecy level of 25 is integrity
         * 230; a car-rental check accepts an integrity level numerically
         * less than or equal to 230. Age in the certificate is not
         * normally above the subject's real age, except by parental
         * consent or emancipation, and may be lower if the subject
         * wants material of that age withheld.
         *
         * Novell registry category bits, 0-origin, secrecy and
         * integrity together unless noted (§7.2.3, §7.2.4):
         *
         * | Bit | Meaning |
         * | ---: | --- |
         * | 0 | Nationally registered organization. Singleton uses the same `organizationId * 1024 + countryCode` form. §7.2.3.1 puts the organization number in the high-order 21 bits. Novell itself is 116449096. |
         * | 1 | NICI license-number enterprise. The singleton is the Novell Operations license number, also stored in the Licensed CA `commonName`. |
         * | 2 | Novell-registered enterprise, independent of the license number. FALSE on the NICI Licensed CA in this version. |
         * | 3 | Integrity: MABLE, authenticating a cryptography provider. The check runs to the Root Certifier and requires root integrity category bit 0 and integrity singleton 116449096. Secrecy bit 3 is reserved, FALSE, with no semantics. |
         * | 4–7 | Reserved for lower-layer authentication (XLIB to XMGR, XMGR to XENG, XENG to XSUP, and one spare). Semantics undefined. FALSE. |
         * | 8 | Module Signature Authority. Individual module signers are categories on the Novell code-signing enterprise label (§7.3.2). |
         * | 9 | NICI key archive. |
         * | 10 | Third-party escrow root. Enterprise-label singletons name the escrow CA as a nationally registered organization, because the registry singletons already name the customer. |
         * | 11 | Age-related reading of the registry levels (Table 6). FALSE on PKIS 1.0 certificates. Enabled on the higher Novell hierarchy certificates. At the time of writing, not yet on the Machine-Unique CA. |
         *
         * Every other registry category bit, and every unused
         * singleton, is reserved and FALSE.
         *
         * §7.3.2 also says code signing requires "bit 1 (Nationally
         * Registered Organization)". §7.2.3.1 and §7.2.4.1 assign
         * nationally registered organizations to bit 0, and NICI
         * license enterprises to bit 1.
         *
         * @public
         * @readonly
         */
        readonly registryLabel: SecurityLabelType1,
        /**
         * @summary `enterpriseLabel`.
         * @description
         *
         * Enterprise tier. This version carries exactly one label. The
         * enterprise assigns secrecy and integrity levels, categories,
         * and singletons inside the allotment the registry enabled.
         * Display name: "Enterprise Label". §6.2, §6.3.
         *
         * For a NICI customer (§7.3.1.4), eight categories are reserved
         * for key generation, archive, and recovery. Bits 0 through 5
         * are those controls; 6 and 7 are reserved and FALSE. Novell
         * and NICI set every other enterprise category TRUE down
         * through the Tree CA, so a later PKIS application can use
         * them. Server certificates set those other categories FALSE
         * until specific rights are assigned.
         *
         * | Bit | NICI customer enterprise |
         * | ---: | --- |
         * | 0 | Novell is the TTP for business recovery of encryption keys, not signature keys. Present in the Foundation Key Set. Archive and recovery are not fully supported in NICI 1.0. |
         * | 1 | Customer declines Novell disaster recovery and accepts that consequence. 196 bits of local entropy, or the regulatory maximum, are added to the foundation seeds, so Novell cannot rebuild the keys without the archive. May be combined with bits 0, 2, 3, 4, and 5. Not supported in NICI 1.0. |
         * | 2 | Customer runs its own key recovery. The chain bound must include this enterprise's id in the registry label, this bit, and registry category bit 9. Not supported in NICI 1.0. |
         * | 3–5 | Independent TTPs. Integrity singletons name them with the joint-iso-ccitt organization numbering. Up to three, for split-key recovery. Not supported in NICI 1.0. |
         *
         * When registry category bit 8 (Module Signature Authority) is
         * enabled, the same enterprise-label bits are Novell code-
         * signing categories instead (§7.3.2). That use also requires
         * the Novell singleton 116449096. An absent signer singleton
         * means Novell; a singleton names a third-party developer.
         * Policy (bit 6) is combined with the bit of the module type
         * the policy controls. Secrecy level 255 and integrity level 0.
         * Categories 12 through 15 are spare and FALSE on Module
         * Signature Authority certificates. Other categories are FALSE.
         *
         * | Bit | Code-signing enterprise |
         * | ---: | --- |
         * | 0 | Novell code signer. Non-NICI NLMs, excluding security-relevant code. |
         * | 1 | XIM signer. Cryptographic interface module. |
         * | 2 | XENG signer. Cryptographic engines. |
         * | 3 | XMGR signer. Cryptographic managers. |
         * | 4 | XLIB signer. Cryptographic libraries. |
         * | 5 | XSUP signer. Cryptographic support modules. |
         * | 6 | Policy signer. Combined with the module-type bit. |
         * | 7 | Policy-set signer. |
         * | 8 | Foundation-key signer. |
         * | 9 | XMGR-assistant signer. |
         * | 10 | XINIT signer. Cryptographic initialization. |
         * | 11 | Security signer. Security-relevant code that is not itself cryptographic. |
         *
         * If bit 8 of the registry label is off, this label is the
         * customer enterprise, and the key-recovery meanings apply,
         * including when the subject is Novell itself.
         *
         * @public
         * @readonly
         */
        readonly enterpriseLabel: SecurityLabelType1[]
    ) {
        if (enterpriseLabel.length !== 1) {
            throw new ASN1SizeError("EnterpriseId.enterpriseLabel violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EnterpriseId
     * @description
     * 
     * This takes an `object` and converts it to a `EnterpriseId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnterpriseId`.
     * @returns {EnterpriseId}
     */
    public static _from_object (_o: { [_K in keyof (EnterpriseId)]: (EnterpriseId)[_K] }): EnterpriseId {
        return new EnterpriseId(_o.rootLabel, _o.registryLabel, _o.enterpriseLabel);
    }


}

/**
 * @summary The Leading Root Component Types of EnterpriseId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnterpriseId: $.ComponentSpec[] = [
    new $.ComponentSpec("rootLabel", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("registryLabel", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("enterpriseLabel", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EnterpriseId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnterpriseId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnterpriseId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnterpriseId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnterpriseId: $.ASN1Decoder<EnterpriseId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnterpriseId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnterpriseId (el: _Element): EnterpriseId {
    if (!_cached_decoder_for_EnterpriseId) { _cached_decoder_for_EnterpriseId = function (el: _Element): EnterpriseId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EnterpriseId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rootLabel";
    sequence[1].name = "registryLabel";
    sequence[2].name = "enterpriseLabel";
    let rootLabel!: SecurityLabelType1;
    let registryLabel!: SecurityLabelType1;
    let enterpriseLabel!: SecurityLabelType1[];
    rootLabel = $._decode_implicit<SecurityLabelType1>(() => _decode_SecurityLabelType1)(sequence[0]);
    registryLabel = $._decode_implicit<SecurityLabelType1>(() => _decode_SecurityLabelType1)(sequence[1]);
    enterpriseLabel = $._decode_implicit<SecurityLabelType1[]>(() => $._decodeSequenceOf<SecurityLabelType1>(() => _decode_SecurityLabelType1))(sequence[2]);
    return new EnterpriseId(
        rootLabel,
        registryLabel,
        enterpriseLabel,

    );
}; }
    return _cached_decoder_for_EnterpriseId(el);
}

let _cached_encoder_for_EnterpriseId: $.ASN1Encoder<EnterpriseId> | null = null;

/**
 * @summary Encodes a(n) EnterpriseId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnterpriseId, encoded as an ASN.1 Element.
 */
export
function _encode_EnterpriseId (value: EnterpriseId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnterpriseId) { _cached_encoder_for_EnterpriseId = function (value: EnterpriseId): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SecurityLabelType1, $.BER)(value.rootLabel, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityLabelType1, $.BER)(value.registryLabel, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SecurityLabelType1>(() => _encode_SecurityLabelType1, $.BER), $.BER)(value.enterpriseLabel, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EnterpriseId(value, elGetter);
}


/* eslint-enable */
