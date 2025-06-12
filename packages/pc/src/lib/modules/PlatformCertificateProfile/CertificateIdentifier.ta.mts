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
import { AttributeCertificateIdentifier, _decode_AttributeCertificateIdentifier, _encode_AttributeCertificateIdentifier } from "../PlatformCertificateProfile/AttributeCertificateIdentifier.ta.mjs";
export { AttributeCertificateIdentifier, _decode_AttributeCertificateIdentifier, _encode_AttributeCertificateIdentifier } from "../PlatformCertificateProfile/AttributeCertificateIdentifier.ta.mjs";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";


/* START_OF_SYMBOL_DEFINITION CertificateIdentifier */
/**
 * @summary CertificateIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateIdentifier ::= SEQUENCE {
 *     attributeCertIdentifier     [0] IMPLICIT AttributeCertificateIdentifier OPTIONAL,
 *     genericCertIdentifier       [1] IMPLICIT IssuerSerial OPTIONAL }
 * ```
 *
 * @class
 */
export
class CertificateIdentifier {
    constructor (
        /**
         * @summary `attributeCertIdentifier`.
         * @public
         * @readonly
         */
        readonly attributeCertIdentifier: OPTIONAL<AttributeCertificateIdentifier>,
        /**
         * @summary `genericCertIdentifier`.
         * @public
         * @readonly
         */
        readonly genericCertIdentifier: OPTIONAL<IssuerSerial>
    ) {}

    /**
     * @summary Restructures an object into a CertificateIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `CertificateIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateIdentifier`.
     * @returns {CertificateIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (CertificateIdentifier)]: (CertificateIdentifier)[_K] }): CertificateIdentifier {
        return new CertificateIdentifier(_o.attributeCertIdentifier, _o.genericCertIdentifier);
    }


}
/* END_OF_SYMBOL_DEFINITION CertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateIdentifier */
/**
 * @summary The Leading Root Component Types of CertificateIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeCertIdentifier", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    /* FIXME: genericCertIdentifier COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateIdentifier */
/**
 * @summary The Trailing Root Component Types of CertificateIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateIdentifier: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateIdentifier */
/**
 * @summary The Extension Addition Component Types of CertificateIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateIdentifier: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateIdentifier */
let _cached_decoder_for_CertificateIdentifier: $.ASN1Decoder<CertificateIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateIdentifier} The decoded data structure.
 */
export
function _decode_CertificateIdentifier (el: _Element) {
    if (!_cached_decoder_for_CertificateIdentifier) { _cached_decoder_for_CertificateIdentifier = function (el: _Element): CertificateIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeCertIdentifier: OPTIONAL<AttributeCertificateIdentifier>;
    let genericCertIdentifier: OPTIONAL<IssuerSerial>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "attributeCertIdentifier": (_el: _Element): void => { attributeCertIdentifier = $._decode_implicit<AttributeCertificateIdentifier>(() => _decode_AttributeCertificateIdentifier)(_el); },
        "genericCertIdentifier": (_el: _Element): void => { genericCertIdentifier = $._decode_implicit<IssuerSerial>(() => _decode_IssuerSerial)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificateIdentifier,
        _extension_additions_list_spec_for_CertificateIdentifier,
        _root_component_type_list_2_spec_for_CertificateIdentifier,
        undefined,
    );
    return new CertificateIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        attributeCertIdentifier,
        genericCertIdentifier
    );
}; }
    return _cached_decoder_for_CertificateIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateIdentifier */
let _cached_encoder_for_CertificateIdentifier: $.ASN1Encoder<CertificateIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateIdentifier */
/**
 * @summary Encodes a(n) CertificateIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateIdentifier (value: CertificateIdentifier, elGetter: $.ASN1Encoder<CertificateIdentifier>) {
    if (!_cached_encoder_for_CertificateIdentifier) { _cached_encoder_for_CertificateIdentifier = function (value: CertificateIdentifier, elGetter: $.ASN1Encoder<CertificateIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.attributeCertIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeCertificateIdentifier, $.BER)(value.attributeCertIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.genericCertIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IssuerSerial, $.BER)(value.genericCertIdentifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificateIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateIdentifier */

/* eslint-enable */
