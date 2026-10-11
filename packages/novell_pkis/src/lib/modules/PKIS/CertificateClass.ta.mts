/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../assertIntegerRange.mjs";



/**
 * @summary CertificateClass
 * @description
 *
 * Due diligence the CA applied to the subject name and the other
 * attributes. Display names: "Certificate Class" and "Certificate
 * Valid". There was no industry encoding for certificate class; four
 * public-CA classes were treated as too coarse, so this is a 0..255
 * scale. The first PKIS release displays the number only. §5.
 *
 * The ASN.1 comment and §5 say the class values are in Attachment C.
 * Appendix C is key-storage quality. The class table is Appendix D.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateClass ::= SEQUENCE {
 *  classValue       INTEGER (0..255),
 *   -- Defined class values are contained in Appendix C
 *  certificateValid       BOOLEAN
 *   -- The default should be true, but DEFAULT is OPTIONAL
 *   -- which would make the GLB computation awkward.
 *   -- See Section 5 and the footnote for a discussion.
 * }
 * ```
 * 
 * @class
 */
export
class CertificateClass {
    constructor (
        /**
         * @summary `classValue`.
         * @description
         *
         * Due-diligence class. Higher is stronger. The chain's greatest
         * lower bound is the lowest class in the chain. Several classes
         * say that if that bound is below the class, the certificate
         * is effectively the matching local class (60→20, 65→21,
         * 70→23), so a local toolkit can later be re-rooted at a
         * due-diligence CA without reissuing subscribers. Appendix D.
         *
         * | Value | Class |
         * | ---: | --- |
         * | 0 | Anonymous. Real name not necessarily known. Issuer not necessarily reliable. |
         * | 5 | Locally unambiguous anonymous name. Issuer may be only locally known. |
         * | 10 | Locally known pseudonym. Self-claimed name and address not reliably verified. |
         * | 15 | Locally known electronic pseudonym (email, telephone, or fax), confirmed automatically. Name is nonverified subscriber information. |
         * | 20 | Locally known organizational person. Out-of-the-box intranet use. |
         * | 21 | Locally known organizational role, including delegated agency. |
         * | 23 | Locally known entity (for example a DNS name). No legal determination of the right to the name. Used for an SSL server in the §3.2 chain example. |
         * | 24 | Locally known organizational CA (the customer Tree CA in the §3.2 example). |
         * | 25 | Subordinated globally unambiguous name. Issuer of the naming CA is class 27 or higher, and that CA is class 150 or higher. NICI Machine-Unique CA. |
         * | 27 | Globally unambiguous name. Issuing CA is class 150 or higher. Real name not required. NICI Licensed CA. |
         * | 30 | Unambiguous pseudonym. Self-claimed name unverified. Issuing CA class 150 or higher. |
         * | 35 | Electronic pseudonym, confirmed by the CA. Roughly a VeriSign class 1. Issuing CA class 150 or higher. |
         * | 38 | Subordinated licensed entity. Name constraints; usually only `commonName` differs. Issuer confirmed by a class 40 certificate. |
         * | 40 | Licensed entity. Name, address, and license number from a registration card. Name not validated and not guaranteed unambiguous. |
         * | 50 | Disambiguated individual name. No rank, title, role, or credential. Confirmed by business records or in person, not under felony penalty. Roughly VeriSign class 2. Issuing CA class 150 or higher. |
         * | 60 | Organizational person, name subordination. Issuing CA class 150 or higher. Bound below 60 is effectively class 20. |
         * | 65 | Organizational role. Issuing CA class 150 or higher. Bound below 65 is effectively class 21. |
         * | 70 | Organizational entity (server or process). Organization name confirmed; entity name not necessarily by legal means. Bound below 70 is effectively class 23. |
         * | 75 | Authenticated organization. Bona fide business. Roughly VeriSign class 3. Issuing CA class 150 or higher. |
         * | 80 | Registered pseudonym, dba, or trading name, confirmed by official registration. Legal name known to the CA and confirmed by legal means, and omitted from the certificate. |
         * | 90 | Registered electronic name, confirmed automatically. Legal name confirmed by legal means. |
         * | 100 | Enterprise name. Right to the name confirmed automatically, and membership confirmed by the sponsoring organization or its delegate. |
         * | 125 | Authenticated legal name, no postal address in the certificate. Legal name confirmed by legal means. |
         * | 130 | Registered name and postal address, unless a national or state registration makes the address unnecessary. |
         * | 140 | Registered legal name, plus rank, title, office, license, or other credential, confirmed by due diligence. |
         * | 145 | Enterprise registered name, plus confirmed closed-user-group membership. |
         * | 150 | Registered CA name, with an address for legal process unless nationally or state-registered. |
         * | 160 | Publically audited enterprise. At least yearly published audit. |
         * | 170 | Notarially registered name. Identity-to-key binding confirmed by a civil-law notary or equivalent, plus a yearly audit. |
         * | 175 | Publically traded enterprise, reporting to the SEC or an equivalent. Novell CA Root and NICI CA in the §3.2 example. |
         * | 180 | Regulated enterprise (for example a bank). |
         * | 185 | Local government agency, inside one state, commonwealth, or territory. |
         * | 190 | Chartered institution. Governing body at least partly appointed by a head of government. |
         * | 200 | Quasi-governmental organization. |
         * | 205 | Tribal authority recognized by treaty. |
         * | 210 | Federal or state agency. |
         * | 220 | Accredited CA, endorsed by a certified body or an industry consortium. |
         * | 225 | CA licensed or chartered by a UN-recognized sovereign or a UN agency. Includes a civil-law notary operating a CA, where the law allows it. |
         * | 240 | Authoritative declaration by a governmental CA. |
         * | 250 | Embedded root, resistant to replacement, used to certify that vendor's certificates and to distribute class 150 or higher certificates. No liability implied for unaffiliated roots it distributes. Novell Root Certifier in the §3.2 example. |
         * | 252 | Installed by the relying party from out-of-band information, without a further security procedure. |
         * | 253 | Cross-certified by a certificate issued under a class 255 certificate. |
         * | 255 | Relying party's own top-level root, verified out of band by a procedure resistant to tampering. |
         *
         * Other values are not defined. Appendix D.
         *
         * @public
         * @readonly
         */
        readonly classValue: INTEGER,
        /**
         * @summary `certificateValid`.
         * @description
         *
         * FALSE marks a test certificate of whatever `classValue` is
         * set, so operational tests do not have to use the weakest
         * class. TRUE is the ordinary value. The field is named this
         * way, rather than `testCertificate`, because a boolean
         * greatest lower bound is TRUE only when every certificate is
         * TRUE: one test certificate then makes the chain bound FALSE.
         * The opposite polarity would have made one valid certificate
         * force the bound FALSE. §5, footnote 4.
         *
         * When this is FALSE, the Novell Security Attributes extension
         * should be critical, unless that would defeat the test. A CA
         * may issue a certificate it believes inaccurate only when this
         * flag is FALSE. Appendix D says the field is optional with
         * default TRUE and is omitted from the initial NICI and PKIS
         * production certificates; the ASN.1 in Appendix F has no
         * DEFAULT, because an omitted value would make the bound
         * awkward, so this module always encodes it.
         *
         * @public
         * @readonly
         */
        readonly certificateValid: BOOLEAN
    ) {
        assertIntegerRange(classValue, 0n, 255n, "CertificateClass.classValue");
    }

    /**
     * @summary Restructures an object into a CertificateClass
     * @description
     * 
     * This takes an `object` and converts it to a `CertificateClass`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateClass`.
     * @returns {CertificateClass}
     */
    public static _from_object (_o: { [_K in keyof (CertificateClass)]: (CertificateClass)[_K] }): CertificateClass {
        return new CertificateClass(_o.classValue, _o.certificateValid);
    }


}

/**
 * @summary The Leading Root Component Types of CertificateClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateClass: $.ComponentSpec[] = [
    new $.ComponentSpec("classValue", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("certificateValid", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of CertificateClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateClass: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificateClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateClass: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificateClass: $.ASN1Decoder<CertificateClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateClass (el: _Element): CertificateClass {
    if (!_cached_decoder_for_CertificateClass) { _cached_decoder_for_CertificateClass = function (el: _Element): CertificateClass {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CertificateClass contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "classValue";
    sequence[1].name = "certificateValid";
    let classValue!: INTEGER;
    let certificateValid!: BOOLEAN;
    classValue = $._decodeInteger(sequence[0]);
    certificateValid = $._decodeBoolean(sequence[1]);
    return new CertificateClass(
        classValue,
        certificateValid,

    );
}; }
    return _cached_decoder_for_CertificateClass(el);
}

let _cached_encoder_for_CertificateClass: $.ASN1Encoder<CertificateClass> | null = null;

/**
 * @summary Encodes a(n) CertificateClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateClass, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateClass (value: CertificateClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateClass) { _cached_encoder_for_CertificateClass = function (value: CertificateClass): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.classValue, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.certificateValid, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificateClass(value, elGetter);
}


/* eslint-enable */
