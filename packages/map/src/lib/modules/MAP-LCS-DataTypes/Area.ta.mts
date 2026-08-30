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
import { AreaType, _enum_for_AreaType, AreaType_countryCode /* IMPORTED_LONG_ENUMERATION_ITEM */, countryCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_plmnId /* IMPORTED_LONG_ENUMERATION_ITEM */, plmnId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_locationAreaId /* IMPORTED_LONG_ENUMERATION_ITEM */, locationAreaId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_routingAreaId /* IMPORTED_LONG_ENUMERATION_ITEM */, routingAreaId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_cellGlobalId /* IMPORTED_LONG_ENUMERATION_ITEM */, cellGlobalId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_utranCellId /* IMPORTED_LONG_ENUMERATION_ITEM */, utranCellId /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AreaType, _encode_AreaType } from "../MAP-LCS-DataTypes/AreaType.ta.mjs";
// export { AreaType, _enum_for_AreaType, AreaType_countryCode /* IMPORTED_LONG_ENUMERATION_ITEM */, countryCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_plmnId /* IMPORTED_LONG_ENUMERATION_ITEM */, plmnId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_locationAreaId /* IMPORTED_LONG_ENUMERATION_ITEM */, locationAreaId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_routingAreaId /* IMPORTED_LONG_ENUMERATION_ITEM */, routingAreaId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_cellGlobalId /* IMPORTED_LONG_ENUMERATION_ITEM */, cellGlobalId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AreaType_utranCellId /* IMPORTED_LONG_ENUMERATION_ITEM */, utranCellId /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AreaType, _encode_AreaType } from "../MAP-LCS-DataTypes/AreaType.ta.mjs";
import { AreaIdentification, _decode_AreaIdentification, _encode_AreaIdentification } from "../MAP-LCS-DataTypes/AreaIdentification.ta.mjs";
// export { AreaIdentification, _decode_AreaIdentification, _encode_AreaIdentification } from "../MAP-LCS-DataTypes/AreaIdentification.ta.mjs";


/**
 * @summary Area
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Area ::= SEQUENCE {
 *     areaType    [0]    AreaType,
 *     areaIdentification    [1]    AreaIdentification,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Area {
    constructor (
        /**
         * @summary `areaType`.
         * @public
         * @readonly
         */
        readonly areaType: AreaType,
        /**
         * @summary `areaIdentification`.
         * @public
         * @readonly
         */
        readonly areaIdentification: AreaIdentification,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Area
     * @description
     * 
     * This takes an `object` and converts it to a `Area`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Area`.
     * @returns {Area}
     */
    public static _from_object (_o: { [_K in keyof (Area)]: (Area)[_K] }): Area {
        return new Area(_o.areaType, _o.areaIdentification, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `areaType`
         * @public
         * @static
         */

    public static _enum_for_areaType = _enum_for_AreaType;
}

/**
 * @summary The Leading Root Component Types of Area
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Area: $.ComponentSpec[] = [
    new $.ComponentSpec("areaType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("areaIdentification", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Area
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Area: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Area
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Area: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Area: $.ASN1Decoder<Area> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Area
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Area (el: _Element): Area {
    if (!_cached_decoder_for_Area) { _cached_decoder_for_Area = function (el: _Element): Area {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Area contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "areaType";
    sequence[1].name = "areaIdentification";
    let areaType!: AreaType;
    let areaIdentification!: AreaIdentification;
    areaType = $._decode_implicit<AreaType>(() => _decode_AreaType)(sequence[0]);
    areaIdentification = $._decode_implicit<AreaIdentification>(() => _decode_AreaIdentification)(sequence[1]);
    return new Area(
        areaType,
        areaIdentification,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_Area(el);
}

let _cached_encoder_for_Area: $.ASN1Encoder<Area> | null = null;

/**
 * @summary Encodes a(n) Area into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Area, encoded as an ASN.1 Element.
 */
export
function _encode_Area (value: Area, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Area) { _cached_encoder_for_Area = function (value: Area, elGetter: $.ASN1Encoder<Area>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AreaType, $.BER)(value.areaType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AreaIdentification, $.BER)(value.areaIdentification, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Area(value, elGetter);
}


/* eslint-enable */
