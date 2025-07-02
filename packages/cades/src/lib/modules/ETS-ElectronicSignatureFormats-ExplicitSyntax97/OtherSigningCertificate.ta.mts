/* eslint-disable */
import {
    OPTIONAL,
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
import { OtherCertID, _decode_OtherCertID, _encode_OtherCertID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherCertID.ta.mjs";
import {
    PolicyInformation, _decode_PolicyInformation, _encode_PolicyInformation
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/PolicyInformation.ta.mjs";


/**
 * @summary OtherSigningCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherSigningCertificate ::= SEQUENCE {
 *     certs       SEQUENCE OF OtherCertID,
 *     policies    SEQUENCE OF PolicyInformation OPTIONAL
 *     -- NOT USED IN THE PRESENT DOCUMENT
 *     }
 * ```
 *
 */
export
class OtherSigningCertificate {
    constructor (
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: OtherCertID[],
        /**
         * @summary `policies`.
         * @public
         * @readonly
         */
        readonly policies: OPTIONAL<PolicyInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a OtherSigningCertificate
     * @description
     *
     * This takes an `object` and converts it to a `OtherSigningCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherSigningCertificate`.
     * @returns {OtherSigningCertificate}
     */
    public static _from_object (_o: { [_K in keyof (OtherSigningCertificate)]: (OtherSigningCertificate)[_K] }): OtherSigningCertificate {
        return new OtherSigningCertificate(_o.certs, _o.policies);
    }


}

/**
 * @summary The Leading Root Component Types of OtherSigningCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherSigningCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec("certs", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("policies", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of OtherSigningCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherSigningCertificate: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of OtherSigningCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherSigningCertificate: $.ComponentSpec[] = [

];

let _cached_decoder_for_OtherSigningCertificate: $.ASN1Decoder<OtherSigningCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherSigningCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherSigningCertificate} The decoded data structure.
 */
export
function _decode_OtherSigningCertificate (el: _Element): OtherSigningCertificate {
    if (!_cached_decoder_for_OtherSigningCertificate) { _cached_decoder_for_OtherSigningCertificate = function (el: _Element): OtherSigningCertificate {
    let certs!: OtherCertID[];
    let policies: OPTIONAL<PolicyInformation[]>;
    const callbacks: $.DecodingMap = {
        "certs": (_el: _Element): void => { certs = $._decodeSequenceOf<OtherCertID>(() => _decode_OtherCertID)(_el); },
        "policies": (_el: _Element): void => { policies = $._decodeSequenceOf<PolicyInformation>(() => _decode_PolicyInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherSigningCertificate,
        _extension_additions_list_spec_for_OtherSigningCertificate,
        _root_component_type_list_2_spec_for_OtherSigningCertificate,
        undefined,
    );
    return new OtherSigningCertificate( 
        certs,
        policies
    );
}; }
    return _cached_decoder_for_OtherSigningCertificate(el);
}

let _cached_encoder_for_OtherSigningCertificate: $.ASN1Encoder<OtherSigningCertificate> | null = null;

/**
 * @summary Encodes a(n) OtherSigningCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherSigningCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_OtherSigningCertificate (value: OtherSigningCertificate, elGetter: $.ASN1Encoder<OtherSigningCertificate>): _Element {
    if (!_cached_encoder_for_OtherSigningCertificate) { _cached_encoder_for_OtherSigningCertificate = function (value: OtherSigningCertificate): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<OtherCertID>(() => _encode_OtherCertID, $.DER)(value.certs, $.DER),
            /* IF_ABSENT  */ ((value.policies === undefined) ? undefined : $._encodeSequenceOf<PolicyInformation>(() => _encode_PolicyInformation, $.DER)(value.policies, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_OtherSigningCertificate(value, elGetter);
}


/* eslint-enable */
