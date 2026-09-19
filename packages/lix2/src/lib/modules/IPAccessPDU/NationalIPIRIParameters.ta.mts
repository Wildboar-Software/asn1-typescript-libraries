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



/**
 * @summary NationalIPIRIParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NationalIPIRIParameters ::= SEQUENCE
 * {
 *     countryCode     [1] PrintableString (SIZE (2)),
 *         -- Country Code according to ISO 3166-1 [16],
 *         -- the country to which the parameters inserted after the extension marker apply.
 *     ...
 *     -- In case a given country wants to use additional national parameters according to its law,
 *     -- these national parameters should be defined using the ASN.1 syntax and added after the
 *     -- extension marker (...).
 *     -- It is recommended that "version parameter" and "vendor identification parameter" are
 *     -- included in the national parameters definition. Vendor identifications can be
 *     -- retrieved from the IANA web site (see Annex E Bibliography). Besides, it is recommended
 *     -- to avoid using tags from 240 to 255 in a formal type definition.
 * }
 * ```
 * 
 * @class
 */
export
class NationalIPIRIParameters {
    constructor (
        /**
         * @summary `countryCode`.
         * @public
         * @readonly
         */
        readonly countryCode: PrintableString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NationalIPIRIParameters
     * @description
     * 
     * This takes an `object` and converts it to a `NationalIPIRIParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NationalIPIRIParameters`.
     * @returns {NationalIPIRIParameters}
     */
    public static _from_object (_o: { [_K in keyof (NationalIPIRIParameters)]: (NationalIPIRIParameters)[_K] }): NationalIPIRIParameters {
        return new NationalIPIRIParameters(_o.countryCode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NationalIPIRIParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NationalIPIRIParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("countryCode", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NationalIPIRIParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NationalIPIRIParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NationalIPIRIParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NationalIPIRIParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NationalIPIRIParameters: $.ASN1Decoder<NationalIPIRIParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NationalIPIRIParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NationalIPIRIParameters (el: _Element): NationalIPIRIParameters {
    if (!_cached_decoder_for_NationalIPIRIParameters) { _cached_decoder_for_NationalIPIRIParameters = function (el: _Element): NationalIPIRIParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("NationalIPIRIParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "countryCode";
    let countryCode!: PrintableString;
    countryCode = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(sequence[0]);
    return new NationalIPIRIParameters(
        countryCode,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_NationalIPIRIParameters(el);
}

let _cached_encoder_for_NationalIPIRIParameters: $.ASN1Encoder<NationalIPIRIParameters> | null = null;

/**
 * @summary Encodes a(n) NationalIPIRIParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NationalIPIRIParameters, encoded as an ASN.1 Element.
 */
export
function _encode_NationalIPIRIParameters (value: NationalIPIRIParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NationalIPIRIParameters) { _cached_encoder_for_NationalIPIRIParameters = function (value: NationalIPIRIParameters, elGetter: $.ASN1Encoder<NationalIPIRIParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER)(value.countryCode, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NationalIPIRIParameters(value, elGetter);
}


/* eslint-enable */
