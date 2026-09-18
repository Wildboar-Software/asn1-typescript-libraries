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
import { CorpusComposition, _decode_CorpusComposition, _encode_CorpusComposition } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusComposition.ta.mjs";
// export { CorpusComposition, _decode_CorpusComposition, _encode_CorpusComposition } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusComposition.ta.mjs";
import { EnvironmentalInformation, _decode_EnvironmentalInformation, _encode_EnvironmentalInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/EnvironmentalInformation.ta.mjs";
// export { EnvironmentalInformation, _decode_EnvironmentalInformation, _encode_EnvironmentalInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/EnvironmentalInformation.ta.mjs";


/**
 * @summary CorpusInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorpusInformation ::= SEQUENCE {
 *     composition CorpusComposition,
 *     environInfo EnvironmentalInformation
 * }
 * ```
 * 
 * @class
 */
export
class CorpusInformation {
    constructor (
        /**
         * @summary `composition`.
         * @public
         * @readonly
         */
        readonly composition: CorpusComposition,
        /**
         * @summary `environInfo`.
         * @public
         * @readonly
         */
        readonly environInfo: EnvironmentalInformation
    ) {}

    /**
     * @summary Restructures an object into a CorpusInformation
     * @description
     * 
     * This takes an `object` and converts it to a `CorpusInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorpusInformation`.
     * @returns {CorpusInformation}
     */
    public static _from_object (_o: { [_K in keyof (CorpusInformation)]: (CorpusInformation)[_K] }): CorpusInformation {
        return new CorpusInformation(_o.composition, _o.environInfo);
    }


}

/**
 * @summary The Leading Root Component Types of CorpusInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorpusInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("composition", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("environInfo", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CorpusInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorpusInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CorpusInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CorpusInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CorpusInformation: $.ASN1Decoder<CorpusInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorpusInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorpusInformation (el: _Element): CorpusInformation {
    if (!_cached_decoder_for_CorpusInformation) { _cached_decoder_for_CorpusInformation = function (el: _Element): CorpusInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CorpusInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "composition";
    sequence[1].name = "environInfo";
    let composition!: CorpusComposition;
    let environInfo!: EnvironmentalInformation;
    composition = _decode_CorpusComposition(sequence[0]);
    environInfo = _decode_EnvironmentalInformation(sequence[1]);
    return new CorpusInformation(
        composition,
        environInfo,

    );
}; }
    return _cached_decoder_for_CorpusInformation(el);
}

let _cached_encoder_for_CorpusInformation: $.ASN1Encoder<CorpusInformation> | null = null;

/**
 * @summary Encodes a(n) CorpusInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorpusInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CorpusInformation (value: CorpusInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorpusInformation) { _cached_encoder_for_CorpusInformation = function (value: CorpusInformation, elGetter: $.ASN1Encoder<CorpusInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CorpusComposition, $.BER)(value.composition, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_EnvironmentalInformation, $.BER)(value.environInfo, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorpusInformation(value, elGetter);
}


/* eslint-enable */
