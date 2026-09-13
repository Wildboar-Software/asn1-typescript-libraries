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
 * @summary Local_reference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Local-reference ::= SEQUENCE {
 *   application         [0]  OCTET STRING OPTIONAL,
 *   specific-reference  [1]  OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class Local_reference {
    constructor (
        /**
         * @summary `application`.
         * @public
         * @readonly
         */
        readonly application: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `specific_reference`.
         * @public
         * @readonly
         */
        readonly specific_reference: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a Local_reference
     * @description
     * 
     * This takes an `object` and converts it to a `Local_reference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Local_reference`.
     * @returns {Local_reference}
     */
    public static _from_object (_o: { [_K in keyof (Local_reference)]: (Local_reference)[_K] }): Local_reference {
        return new Local_reference(_o.application, _o.specific_reference);
    }


}

/**
 * @summary The Leading Root Component Types of Local_reference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Local_reference: $.ComponentSpec[] = [
    new $.ComponentSpec("application", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("specific-reference", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Local_reference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Local_reference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Local_reference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Local_reference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Local_reference: $.ASN1Decoder<Local_reference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Local_reference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Local_reference (el: _Element): Local_reference {
    if (!_cached_decoder_for_Local_reference) { _cached_decoder_for_Local_reference = function (el: _Element): Local_reference {
    let application: OPTIONAL<OCTET_STRING>;
    let specific_reference!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "application": (_el: _Element): void => { application = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "specific-reference": (_el: _Element): void => { specific_reference = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Local_reference,
        _extension_additions_list_spec_for_Local_reference,
        _root_component_type_list_2_spec_for_Local_reference,
        undefined,
    );
    return new Local_reference(
        application,
        specific_reference
    );
}; }
    return _cached_decoder_for_Local_reference(el);
}

let _cached_encoder_for_Local_reference: $.ASN1Encoder<Local_reference> | null = null;

/**
 * @summary Encodes a(n) Local_reference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Local_reference, encoded as an ASN.1 Element.
 */
export
function _encode_Local_reference (value: Local_reference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Local_reference) { _cached_encoder_for_Local_reference = function (value: Local_reference, elGetter: $.ASN1Encoder<Local_reference>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.application === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.application, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.specific_reference, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Local_reference(value, elGetter);
}


/* eslint-enable */
