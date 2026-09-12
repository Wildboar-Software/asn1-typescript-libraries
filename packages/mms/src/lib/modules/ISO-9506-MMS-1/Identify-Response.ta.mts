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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary Identify_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identify-Response ::= SEQUENCE {
 *    vendorName             [0] IMPLICIT MMSString,
 *        modelName           [1] IMPLICIT MMSString,
 *    revision               [2] IMPLICIT MMSString,
 *    listOfAbstractSyntaxes [3] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class Identify_Response {
    constructor (
        /**
         * @summary `vendorName`.
         * @public
         * @readonly
         */
        readonly vendorName: MMSString,
        /**
         * @summary `modelName`.
         * @public
         * @readonly
         */
        readonly modelName: MMSString,
        /**
         * @summary `revision`.
         * @public
         * @readonly
         */
        readonly revision: MMSString,
        /**
         * @summary `listOfAbstractSyntaxes`.
         * @public
         * @readonly
         */
        readonly listOfAbstractSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {}

    /**
     * @summary Restructures an object into a Identify_Response
     * @description
     * 
     * This takes an `object` and converts it to a `Identify_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Identify_Response`.
     * @returns {Identify_Response}
     */
    public static _from_object (_o: { [_K in keyof (Identify_Response)]: (Identify_Response)[_K] }): Identify_Response {
        return new Identify_Response(_o.vendorName, _o.modelName, _o.revision, _o.listOfAbstractSyntaxes);
    }


}

/**
 * @summary The Leading Root Component Types of Identify_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Identify_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("vendorName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("modelName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("revision", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("listOfAbstractSyntaxes", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Identify_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Identify_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Identify_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Identify_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Identify_Response: $.ASN1Decoder<Identify_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Identify_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Identify_Response (el: _Element): Identify_Response {
    if (!_cached_decoder_for_Identify_Response) { _cached_decoder_for_Identify_Response = function (el: _Element): Identify_Response {
    let vendorName!: MMSString;
    let modelName!: MMSString;
    let revision!: MMSString;
    let listOfAbstractSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>;
    const callbacks: $.DecodingMap = {
        "vendorName": (_el: _Element): void => { vendorName = $._decode_explicit<MMSString>(() => _decode_MMSString)(_el); },
        "modelName": (_el: _Element): void => { modelName = $._decode_explicit<MMSString>(() => _decode_MMSString)(_el); },
        "revision": (_el: _Element): void => { revision = $._decode_explicit<MMSString>(() => _decode_MMSString)(_el); },
        "listOfAbstractSyntaxes": (_el: _Element): void => { listOfAbstractSyntaxes = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Identify_Response,
        _extension_additions_list_spec_for_Identify_Response,
        _root_component_type_list_2_spec_for_Identify_Response,
        undefined,
    );
    return new Identify_Response(
        vendorName,
        modelName,
        revision,
        listOfAbstractSyntaxes
    );
}; }
    return _cached_decoder_for_Identify_Response(el);
}

let _cached_encoder_for_Identify_Response: $.ASN1Encoder<Identify_Response> | null = null;

/**
 * @summary Encodes a(n) Identify_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identify_Response, encoded as an ASN.1 Element.
 */
export
function _encode_Identify_Response (value: Identify_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Identify_Response) { _cached_encoder_for_Identify_Response = function (value: Identify_Response, elGetter: $.ASN1Encoder<Identify_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSString, $.BER)(value.vendorName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MMSString, $.BER)(value.modelName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_MMSString, $.BER)(value.revision, $.BER),
            /* IF_ABSENT  */ ((value.listOfAbstractSyntaxes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.listOfAbstractSyntaxes, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Identify_Response(value, elGetter);
}


/* eslint-enable */
