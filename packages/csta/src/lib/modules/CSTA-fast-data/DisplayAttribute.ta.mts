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
import { DisplayID, _decode_DisplayID, _encode_DisplayID } from "../CSTA-physical-device-feature/DisplayID.ta.mjs";
// export { DisplayID, _decode_DisplayID, _encode_DisplayID } from "../CSTA-physical-device-feature/DisplayID.ta.mjs";


/**
 * @summary DisplayAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayAttribute ::= SEQUENCE
 * {    displayID            DisplayID                 OPTIONAL,
 *     physicalBaseRowNumber        [0] IMPLICIT INTEGER            OPTIONAL,
 *     physicalBaseColumnNumber    [1] IMPLICIT INTEGER            OPTIONAL,
 *     offset                [2] IMPLICIT INTEGER            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DisplayAttribute {
    constructor (
        /**
         * @summary `displayID`.
         * @public
         * @readonly
         */
        readonly displayID: OPTIONAL<DisplayID>,
        /**
         * @summary `physicalBaseRowNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseRowNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalBaseColumnNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseColumnNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `offset`.
         * @public
         * @readonly
         */
        readonly offset: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DisplayAttribute
     * @description
     * 
     * This takes an `object` and converts it to a `DisplayAttribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisplayAttribute`.
     * @returns {DisplayAttribute}
     */
    public static _from_object (_o: { [_K in keyof (DisplayAttribute)]: (DisplayAttribute)[_K] }): DisplayAttribute {
        return new DisplayAttribute(_o.displayID, _o.physicalBaseRowNumber, _o.physicalBaseColumnNumber, _o.offset);
    }


}

/**
 * @summary The Leading Root Component Types of DisplayAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisplayAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec("displayID", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("physicalBaseRowNumber", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("physicalBaseColumnNumber", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("offset", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DisplayAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisplayAttribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisplayAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisplayAttribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisplayAttribute: $.ASN1Decoder<DisplayAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayAttribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayAttribute (el: _Element): DisplayAttribute {
    if (!_cached_decoder_for_DisplayAttribute) { _cached_decoder_for_DisplayAttribute = function (el: _Element): DisplayAttribute {
    let displayID: OPTIONAL<DisplayID>;
    let physicalBaseRowNumber: OPTIONAL<INTEGER>;
    let physicalBaseColumnNumber: OPTIONAL<INTEGER>;
    let offset: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "displayID": (_el: _Element): void => { displayID = _decode_DisplayID(_el); },
        "physicalBaseRowNumber": (_el: _Element): void => { physicalBaseRowNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalBaseColumnNumber": (_el: _Element): void => { physicalBaseColumnNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "offset": (_el: _Element): void => { offset = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisplayAttribute,
        _extension_additions_list_spec_for_DisplayAttribute,
        _root_component_type_list_2_spec_for_DisplayAttribute,
        undefined,
    );
    return new DisplayAttribute(
        displayID,
        physicalBaseRowNumber,
        physicalBaseColumnNumber,
        offset
    );
}; }
    return _cached_decoder_for_DisplayAttribute(el);
}

let _cached_encoder_for_DisplayAttribute: $.ASN1Encoder<DisplayAttribute> | null = null;

/**
 * @summary Encodes a(n) DisplayAttribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayAttribute (value: DisplayAttribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayAttribute) { _cached_encoder_for_DisplayAttribute = function (value: DisplayAttribute, elGetter: $.ASN1Encoder<DisplayAttribute>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.displayID === undefined) ? undefined : _encode_DisplayID(value.displayID, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseRowNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.physicalBaseRowNumber, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseColumnNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.physicalBaseColumnNumber, $.BER)),
            /* IF_ABSENT  */ ((value.offset === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.offset, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DisplayAttribute(value, elGetter);
}


/* eslint-enable */
