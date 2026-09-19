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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";


/**
 * @summary SpecificallyIdentified
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecificallyIdentified ::= SEQUENCE {
 *   name    GeneralName,
 *   issuer  GeneralName OPTIONAL,
 *   serial  CertificateSerialNumber OPTIONAL }
 *   (WITH COMPONENTS { ..., issuer PRESENT, serial PRESENT } |
 *   (WITH COMPONENTS { ..., issuer ABSENT, serial ABSENT }))
 * ```
 * 
 * @class
 */
export
class SpecificallyIdentified {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: GeneralName,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralName>,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: OPTIONAL<CertificateSerialNumber>
    ) {}

    /**
     * @summary Restructures an object into a SpecificallyIdentified
     * @description
     * 
     * This takes an `object` and converts it to a `SpecificallyIdentified`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecificallyIdentified`.
     * @returns {SpecificallyIdentified}
     */
    public static _from_object (_o: { [_K in keyof (SpecificallyIdentified)]: (SpecificallyIdentified)[_K] }): SpecificallyIdentified {
        return new SpecificallyIdentified(_o.name, _o.issuer, _o.serial);
    }


}

/**
 * @summary The Leading Root Component Types of SpecificallyIdentified
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasAnyTag),
    new $.ComponentSpec("issuer", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2), $.hasAnyTag, $.hasAnyTag, $.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7), $.hasTag(_TagClass.context, 8))),
    new $.ComponentSpec("serial", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of SpecificallyIdentified
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpecificallyIdentified
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpecificallyIdentified: $.ASN1Decoder<SpecificallyIdentified> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecificallyIdentified
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpecificallyIdentified (el: _Element): SpecificallyIdentified {
    if (!_cached_decoder_for_SpecificallyIdentified) { _cached_decoder_for_SpecificallyIdentified = function (el: _Element): SpecificallyIdentified {
    let name!: GeneralName;
    let issuer: OPTIONAL<GeneralName>;
    let serial: OPTIONAL<CertificateSerialNumber>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_GeneralName(_el); },
        "issuer": (_el: _Element): void => { issuer = _decode_GeneralName(_el); },
        "serial": (_el: _Element): void => { serial = _decode_CertificateSerialNumber(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpecificallyIdentified,
        _extension_additions_list_spec_for_SpecificallyIdentified,
        _root_component_type_list_2_spec_for_SpecificallyIdentified,
        undefined,
    );
    return new SpecificallyIdentified(
        name,
        issuer,
        serial
    );
}; }
    return _cached_decoder_for_SpecificallyIdentified(el);
}

let _cached_encoder_for_SpecificallyIdentified: $.ASN1Encoder<SpecificallyIdentified> | null = null;

/**
 * @summary Encodes a(n) SpecificallyIdentified into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificallyIdentified, encoded as an ASN.1 Element.
 */
export
function _encode_SpecificallyIdentified (value: SpecificallyIdentified, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpecificallyIdentified) { _cached_encoder_for_SpecificallyIdentified = function (value: SpecificallyIdentified, elGetter: $.ASN1Encoder<SpecificallyIdentified>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeneralName(value.name, $.BER),
            /* IF_ABSENT  */ ((value.issuer === undefined) ? undefined : _encode_GeneralName(value.issuer, $.BER)),
            /* IF_ABSENT  */ ((value.serial === undefined) ? undefined : _encode_CertificateSerialNumber(value.serial, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpecificallyIdentified(value, elGetter);
}


/* eslint-enable */
