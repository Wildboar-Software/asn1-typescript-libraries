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
import { ExternalASNReference, _decode_ExternalASNReference, _encode_ExternalASNReference } from "../TS33128Payloads/ExternalASNReference.ta.mjs";
// export { ExternalASNReference, _decode_ExternalASNReference, _encode_ExternalASNReference } from "../TS33128Payloads/ExternalASNReference.ta.mjs";
import { ExternalASNValue, _decode_ExternalASNValue, _encode_ExternalASNValue } from "../TS33128Payloads/ExternalASNValue.ta.mjs";
// export { ExternalASNValue, _decode_ExternalASNValue, _encode_ExternalASNValue } from "../TS33128Payloads/ExternalASNValue.ta.mjs";


/**
 * @summary ExternalASNType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalASNType ::= SEQUENCE
 * {
 *     moduleIdentifier [1] OBJECT IDENTIFIER,
 *     aSNReference     [2] ExternalASNReference OPTIONAL,
 *     encodedASNValue  [3] ExternalASNValue
 * }
 * ```
 * 
 * @class
 */
export
class ExternalASNType {
    constructor (
        /**
         * @summary `moduleIdentifier`.
         * @public
         * @readonly
         */
        readonly moduleIdentifier: OBJECT_IDENTIFIER,
        /**
         * @summary `aSNReference`.
         * @public
         * @readonly
         */
        readonly aSNReference: OPTIONAL<ExternalASNReference>,
        /**
         * @summary `encodedASNValue`.
         * @public
         * @readonly
         */
        readonly encodedASNValue: ExternalASNValue
    ) {}

    /**
     * @summary Restructures an object into a ExternalASNType
     * @description
     * 
     * This takes an `object` and converts it to a `ExternalASNType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExternalASNType`.
     * @returns {ExternalASNType}
     */
    public static _from_object (_o: { [_K in keyof (ExternalASNType)]: (ExternalASNType)[_K] }): ExternalASNType {
        return new ExternalASNType(_o.moduleIdentifier, _o.aSNReference, _o.encodedASNValue);
    }


}

/**
 * @summary The Leading Root Component Types of ExternalASNType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExternalASNType: $.ComponentSpec[] = [
    new $.ComponentSpec("moduleIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aSNReference", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("encodedASNValue", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ExternalASNType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExternalASNType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExternalASNType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExternalASNType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExternalASNType: $.ASN1Decoder<ExternalASNType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalASNType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalASNType (el: _Element): ExternalASNType {
    if (!_cached_decoder_for_ExternalASNType) { _cached_decoder_for_ExternalASNType = function (el: _Element): ExternalASNType {
    let moduleIdentifier!: OBJECT_IDENTIFIER;
    let aSNReference: OPTIONAL<ExternalASNReference>;
    let encodedASNValue!: ExternalASNValue;
    const callbacks: $.DecodingMap = {
        "moduleIdentifier": (_el: _Element): void => { moduleIdentifier = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "aSNReference": (_el: _Element): void => { aSNReference = $._decode_implicit<ExternalASNReference>(() => _decode_ExternalASNReference)(_el); },
        "encodedASNValue": (_el: _Element): void => { encodedASNValue = $._decode_explicit<ExternalASNValue>(() => _decode_ExternalASNValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExternalASNType,
        _extension_additions_list_spec_for_ExternalASNType,
        _root_component_type_list_2_spec_for_ExternalASNType,
        undefined,
    );
    return new ExternalASNType(
        moduleIdentifier,
        aSNReference,
        encodedASNValue
    );
}; }
    return _cached_decoder_for_ExternalASNType(el);
}

let _cached_encoder_for_ExternalASNType: $.ASN1Encoder<ExternalASNType> | null = null;

/**
 * @summary Encodes a(n) ExternalASNType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalASNType, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalASNType (value: ExternalASNType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalASNType) { _cached_encoder_for_ExternalASNType = function (value: ExternalASNType, elGetter: $.ASN1Encoder<ExternalASNType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.moduleIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.aSNReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExternalASNReference, $.BER)(value.aSNReference, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_ExternalASNValue, $.BER)(value.encodedASNValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExternalASNType(value, elGetter);
}


/* eslint-enable */
