/* eslint-disable */
import {
    ASN1Error,
    ASN1SizeError,
    BOOLEAN,
    IA5String,
    OCTET_STRING,
    PrintableString,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GLBExtensions, _decode_GLBExtensions, _encode_GLBExtensions } from "../PKIS/GLBExtensions.ta.mjs";


/**
 * @summary SecurityAttributes
 * @description
 *
 * Value of the Novell Security Attributes extension (`pa_sa`). It
 * carries a version, a nonverified-subscriber flag, the trademark
 * string, a URL for this definition, and the four attributes over
 * which NICI computes a greatest lower bound (`gLBExtensions`).
 *
 * Licensed software compares those four attributes across the whole
 * chain, from the end entity up to the self-signed Root Certifier, and
 * exposes the bound to the application. A relying party that does not
 * implement the extension can be misled if the Novell root is imported,
 * which is why the NICI Licensed CA certificate marks this extension
 * critical. §1, §3, §3.2.
 *
 * If the definitions of any coded values change, `versionNumber` is
 * updated and `uriReference` is revised to the matching document. §4.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityAttributes ::= SEQUENCE {
 *  versionNumber OCTET STRING (SIZE (2)),
 *   -- The initial value should be (01 00)
 *   -- The first octet is the major version,
 *   -- the second octet is the minor version number.
 *  nSI BOOLEAN (TRUE),
 *   -- NSI = “Nonverified Subscriber Information”
 *   -- If FALSE, it means that the CA issuing
 *   -- a certificate HAS verified the validity
 *   -- of ALL of the values contained
 *   -- within the Novell Security Attributes
 *   -- using appropriate means as defined
 *   -- for example in their Certificate Policy
 *   -- and/or Certificate Practice Statement
 *   -- If TRUE, it means that the subscriber
 *   -- requesting the certificate has represented
 *   -- to the CA that the extension defined
 *   -- is valid and correct, but that the CA
 *   -- has not independently validated the accuracy
 *   -- of the attribute. Note that in no case may
 *   -- the CA issue a certificate containing an
 *   -- extension which it has reason to
 *   -- believe is not accurate at the time of
 *   -- issuance, except for test certificates
 *   -- which are identified as such in the
 *   -- Certificate class attribute (by setting
 *   -- the certificateValid flag to FALSE.)
 *  securityTM PrintableString ("Novell Security Attribute(tm)"),
 *   -- Note: Since the “Novell Security
 *   -- Attribute(tm)” string is trademarked, if
 *   -- it is displayed visually to the user it
 *   -- must be presented exactly as shown,
 *   -- in English, even in non-English
 *   -- implementations. A translation of the
 *   -- phrase may be displayed to the user
 *   -- in addition, if desired.
 *   -- Vendors who license the use of the term
 *   -- must agree to check for the presence of
 *   -- this string in any attribute defined (by its
 *   -- OID) as a Novell Security attribute
 *  uriReference IA5String,
 *   -- The initial value should be set to (“http://developer.novell.com/repository/attributes/certattrs_v10.htm”),
 *   -- This attribute will be included in all
 *   -- NICI and PKIS certificates.
 *   -- Novell will maintain a copy of this
 *   -- document or other suitable definition
 *   -- at that location.
 *  gLBExtensions GLBExtensions
 * }
 * ```
 * 
 * @class
 */
export
class SecurityAttributes {
    constructor (
        /**
         * @summary `versionNumber`.
         * @description
         *
         * Two octets: major version, then minor version. The initial
         * value is `01 00`. A later document that changes the meaning
         * of a coded value uses a new version and a revised URL. §4.5,
         * Appendix F.
         *
         * @public
         * @readonly
         */
        readonly versionNumber: OCTET_STRING,
        /**
         * @summary `nSI`.
         * @description
         *
         * Nonverified Subscriber Information, applying to every value
         * in the extension. TRUE means the subscriber represented the
         * values as correct and the CA did not independently validate
         * them. FALSE means the issuing CA verified all of them by the
         * means in its certificate policy or practice statement. The
         * CA still must not issue a certificate it has reason to
         * believe is inaccurate, except a test certificate
         * (`certificateValid` FALSE). Most certificates are expected
         * to set this TRUE, because several of the values cannot be
         * confirmed without knowing how NICI was installed, or without
         * predicting future process quality. §3.2.
         *
         * The ASN.1 constrains the field to TRUE, so this module
         * rejects FALSE.
         *
         * @public
         * @readonly
         */
        readonly nSI: BOOLEAN,
        /**
         * @summary `securityTM`.
         * @description
         *
         * Must be exactly `Novell Security Attribute(tm)`, in English,
         * whenever it is shown to a user. A translation may be shown
         * in addition. Licensees check for this string in any attribute
         * whose OID identifies it as a Novell Security attribute.
         * Some PKIS 1.0 display code still shows the earlier name
         * "Novell Registered Attributes(tm)". §3.2 and the terminology
         * footnote in §1.
         *
         * @public
         * @readonly
         */
        readonly securityTM: PrintableString,
        /**
         * @summary `uriReference`.
         * @description
         *
         * Location of the syntax and semantics. The initial value in
         * Appendix F is
         * `http://developer.novell.com/repository/attributes/certattrs_v10.htm`.
         * Included in all NICI and PKIS certificates. §3.2's prose
         * example differs (a space in the host path, and `PKISv10`).
         * IA5String, because the URL may contain an underscore.
         *
         * @public
         * @readonly
         */
        readonly uriReference: IA5String,
        /**
         * @summary `gLBExtensions`.
         * @description
         *
         * The four attributes whose greatest lower bound is computed
         * over the certificate chain. §3.1.
         *
         * @public
         * @readonly
         */
        readonly gLBExtensions: GLBExtensions
    ) {
        if (versionNumber.length !== 2) {
            throw new ASN1SizeError("SecurityAttributes.versionNumber violates SIZE constraint");
        }
        if (nSI !== true) {
            throw new ASN1Error("SecurityAttributes.nSI violates BOOLEAN (TRUE) constraint");
        }
        if (securityTM !== "Novell Security Attribute(tm)") {
            throw new ASN1Error("SecurityAttributes.securityTM violates single-value constraint");
        }
    }

    /**
     * @summary Restructures an object into a SecurityAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityAttributes`.
     * @returns {SecurityAttributes}
     */
    public static _from_object (_o: { [_K in keyof (SecurityAttributes)]: (SecurityAttributes)[_K] }): SecurityAttributes {
        return new SecurityAttributes(_o.versionNumber, _o.nSI, _o.securityTM, _o.uriReference, _o.gLBExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("versionNumber", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("nSI", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("securityTM", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("uriReference", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("gLBExtensions", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SecurityAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityAttributes: $.ASN1Decoder<SecurityAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityAttributes (el: _Element): SecurityAttributes {
    if (!_cached_decoder_for_SecurityAttributes) { _cached_decoder_for_SecurityAttributes = function (el: _Element): SecurityAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("SecurityAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "versionNumber";
    sequence[1].name = "nSI";
    sequence[2].name = "securityTM";
    sequence[3].name = "uriReference";
    sequence[4].name = "gLBExtensions";
    let versionNumber!: OCTET_STRING;
    let nSI!: BOOLEAN;
    let securityTM!: PrintableString;
    let uriReference!: IA5String;
    let gLBExtensions!: GLBExtensions;
    versionNumber = $._decodeOctetString(sequence[0]);
    nSI = $._decodeBoolean(sequence[1]);
    securityTM = $._decodePrintableString(sequence[2]);
    uriReference = $._decodeIA5String(sequence[3]);
    gLBExtensions = _decode_GLBExtensions(sequence[4]);
    return new SecurityAttributes(
        versionNumber,
        nSI,
        securityTM,
        uriReference,
        gLBExtensions,

    );
}; }
    return _cached_decoder_for_SecurityAttributes(el);
}

let _cached_encoder_for_SecurityAttributes: $.ASN1Encoder<SecurityAttributes> | null = null;

/**
 * @summary Encodes a(n) SecurityAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityAttributes (value: SecurityAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityAttributes) { _cached_encoder_for_SecurityAttributes = function (value: SecurityAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.versionNumber, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.nSI, $.BER),
            /* REQUIRED   */ $._encodePrintableString(value.securityTM, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.uriReference, $.BER),
            /* REQUIRED   */ _encode_GLBExtensions(value.gLBExtensions, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityAttributes(value, elGetter);
}


/* eslint-enable */
