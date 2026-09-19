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
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";


/**
 * @summary Label
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Label ::= [APPLICATION 18] IMPLICIT
 *         SEQUENCE {
 *             basePath    [0] RELATIVE-OID,
 *             description [1] EmberString
 *         }
 * ```
 * 
 * @class
 */
export
class Label {
    constructor (
        /**
         * @summary `basePath`.
         * @public
         * @readonly
         */
        readonly basePath: RELATIVE_OID,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: EmberString
    ) {}

    /**
     * @summary Restructures an object into a Label
     * @description
     * 
     * This takes an `object` and converts it to a `Label`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Label`.
     * @returns {Label}
     */
    public static _from_object (_o: { [_K in keyof (Label)]: (Label)[_K] }): Label {
        return new Label(_o.basePath, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of Label
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Label: $.ComponentSpec[] = [
    new $.ComponentSpec("basePath", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Label
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Label: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Label
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Label: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Label: $.ASN1Decoder<Label> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Label
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Label (el: _Element): Label {
    if (!_cached_decoder_for_Label) { _cached_decoder_for_Label = $._decode_implicit<Label>(() => function (el: _Element): Label {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Label contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "basePath";
    sequence[1].name = "description";
    let basePath!: RELATIVE_OID;
    let description!: EmberString;
    basePath = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    description = $._decode_explicit<EmberString>(() => _decode_EmberString)(sequence[1]);
    return new Label(
        basePath,
        description,

    );
}); }
    return _cached_decoder_for_Label(el);
}

let _cached_encoder_for_Label: $.ASN1Encoder<Label> | null = null;

/**
 * @summary Encodes a(n) Label into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Label, encoded as an ASN.1 Element.
 */
export
function _encode_Label (value: Label, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Label) { _cached_encoder_for_Label = $._encode_implicit(_TagClass.application, 18, () => function (value: Label, elGetter: $.ASN1Encoder<Label>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.basePath, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_EmberString, $.BER)(value.description, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Label(value, elGetter);
}


/* eslint-enable */
