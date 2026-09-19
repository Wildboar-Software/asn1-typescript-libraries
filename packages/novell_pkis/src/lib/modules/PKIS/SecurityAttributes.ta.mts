/* eslint-disable */
import {
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
// export { GLBExtensions, _decode_GLBExtensions, _encode_GLBExtensions } from "../PKIS/GLBExtensions.ta.mjs";


/**
 * @summary SecurityAttributes
 * @description
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
         * @public
         * @readonly
         */
        readonly versionNumber: OCTET_STRING,
        /**
         * @summary `nSI`.
         * @public
         * @readonly
         */
        readonly nSI: BOOLEAN,
        /**
         * @summary `securityTM`.
         * @public
         * @readonly
         */
        readonly securityTM: PrintableString,
        /**
         * @summary `uriReference`.
         * @public
         * @readonly
         */
        readonly uriReference: IA5String,
        /**
         * @summary `gLBExtensions`.
         * @public
         * @readonly
         */
        readonly gLBExtensions: GLBExtensions
    ) {}

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
    if (!_cached_encoder_for_SecurityAttributes) { _cached_encoder_for_SecurityAttributes = function (value: SecurityAttributes, elGetter: $.ASN1Encoder<SecurityAttributes>): _Element {
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
