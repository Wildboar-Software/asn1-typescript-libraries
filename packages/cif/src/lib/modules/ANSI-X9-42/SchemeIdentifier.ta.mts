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
import { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
// export { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
import { Schemes } from "../ANSI-X9-42/Schemes.osa.mjs";
// export { Schemes } from "../ANSI-X9-42/Schemes.osa.mjs";


/**
 * @summary SchemeIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemeIdentifier ::= SEQUENCE {
 * scheme    KEY-AGREEMENT.&id({Schemes}),
 * parameters     KEY-AGREEMENT.&Type({Schemes}{@scheme}) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SchemeIdentifier {
    constructor (
        /**
         * @summary `scheme`.
         * @public
         * @readonly
         */
        readonly scheme: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a SchemeIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `SchemeIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchemeIdentifier`.
     * @returns {SchemeIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (SchemeIdentifier)]: (SchemeIdentifier)[_K] }): SchemeIdentifier {
        return new SchemeIdentifier(_o.scheme, _o.parameters);
    }


}

/**
 * @summary The Leading Root Component Types of SchemeIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SchemeIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("scheme", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("parameters", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SchemeIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SchemeIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SchemeIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SchemeIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SchemeIdentifier: $.ASN1Decoder<SchemeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchemeIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchemeIdentifier (el: _Element): SchemeIdentifier {
    if (!_cached_decoder_for_SchemeIdentifier) { _cached_decoder_for_SchemeIdentifier = function (el: _Element): SchemeIdentifier {
    let scheme!: OBJECT_IDENTIFIER;
    let parameters: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "scheme": (_el: _Element): void => { scheme = $._decodeObjectIdentifier(_el); },
        "parameters": (_el: _Element): void => { parameters = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SchemeIdentifier,
        _extension_additions_list_spec_for_SchemeIdentifier,
        _root_component_type_list_2_spec_for_SchemeIdentifier,
        undefined,
    );
    return new SchemeIdentifier(
        scheme,
        parameters
    );
}; }
    return _cached_decoder_for_SchemeIdentifier(el);
}

let _cached_encoder_for_SchemeIdentifier: $.ASN1Encoder<SchemeIdentifier> | null = null;

/**
 * @summary Encodes a(n) SchemeIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SchemeIdentifier (value: SchemeIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchemeIdentifier) { _cached_encoder_for_SchemeIdentifier = function (value: SchemeIdentifier, elGetter: $.ASN1Encoder<SchemeIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.scheme, $.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : $._encodeAny(value.parameters, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SchemeIdentifier(value, elGetter);
}


/* eslint-enable */
