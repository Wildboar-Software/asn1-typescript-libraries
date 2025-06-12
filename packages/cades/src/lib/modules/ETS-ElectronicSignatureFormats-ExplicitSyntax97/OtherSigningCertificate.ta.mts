/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { OtherCertID, _decode_OtherCertID, _encode_OtherCertID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherCertID.ta.mjs";
export { OtherCertID, _decode_OtherCertID, _encode_OtherCertID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherCertID.ta.mjs";
import {
    PolicyInformation, _decode_PolicyInformation, _encode_PolicyInformation
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/PolicyInformation.ta.mjs";


/* START_OF_SYMBOL_DEFINITION OtherSigningCertificate */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION OtherSigningCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherSigningCertificate */
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
    new $.ComponentSpec("certs", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("policies", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherSigningCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherSigningCertificate */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherSigningCertificate */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherSigningCertificate */
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
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherSigningCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherSigningCertificate */
let _cached_decoder_for_OtherSigningCertificate: $.ASN1Decoder<OtherSigningCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherSigningCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_OtherSigningCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherSigningCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherSigningCertificate} The decoded data structure.
 */
export
function _decode_OtherSigningCertificate (el: _Element) {
    if (!_cached_decoder_for_OtherSigningCertificate) { _cached_decoder_for_OtherSigningCertificate = function (el: _Element): OtherSigningCertificate {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certs!: OtherCertID[];
    let policies: OPTIONAL<PolicyInformation[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "certs": (_el: _Element): void => { certs = $._decodeSequenceOf<OtherCertID>(() => _decode_OtherCertID)(_el); },
        "policies": (_el: _Element): void => { policies = $._decodeSequenceOf<PolicyInformation>(() => _decode_PolicyInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherSigningCertificate,
        _extension_additions_list_spec_for_OtherSigningCertificate,
        _root_component_type_list_2_spec_for_OtherSigningCertificate,
        undefined,
    );
    return new OtherSigningCertificate( /* SEQUENCE_CONSTRUCTOR_CALL */
        certs,
        policies
    );
}; }
    return _cached_decoder_for_OtherSigningCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherSigningCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherSigningCertificate */
let _cached_encoder_for_OtherSigningCertificate: $.ASN1Encoder<OtherSigningCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherSigningCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_OtherSigningCertificate */
/**
 * @summary Encodes a(n) OtherSigningCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherSigningCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_OtherSigningCertificate (value: OtherSigningCertificate, elGetter: $.ASN1Encoder<OtherSigningCertificate>) {
    if (!_cached_encoder_for_OtherSigningCertificate) { _cached_encoder_for_OtherSigningCertificate = function (value: OtherSigningCertificate, elGetter: $.ASN1Encoder<OtherSigningCertificate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<OtherCertID>(() => _encode_OtherCertID, $.BER)(value.certs, $.BER),
            /* IF_ABSENT  */ ((value.policies === undefined) ? undefined : $._encodeSequenceOf<PolicyInformation>(() => _encode_PolicyInformation, $.BER)(value.policies, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherSigningCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherSigningCertificate */

/* eslint-enable */
