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
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
import { PropertyID, _decode_PropertyID, _encode_PropertyID } from "../MEDIA-GATEWAY-CONTROL/PropertyID.ta.mjs";
// export { PropertyID, _decode_PropertyID, _encode_PropertyID } from "../MEDIA-GATEWAY-CONTROL/PropertyID.ta.mjs";
import { PropertyParm_extraInfo, _decode_PropertyParm_extraInfo, _encode_PropertyParm_extraInfo } from "../MEDIA-GATEWAY-CONTROL/PropertyParm-extraInfo.ta.mjs";
// export { PropertyParm_extraInfo, _decode_PropertyParm_extraInfo, _encode_PropertyParm_extraInfo } from "../MEDIA-GATEWAY-CONTROL/PropertyParm-extraInfo.ta.mjs";


/**
 * @summary PropertyParm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PropertyParm ::= SEQUENCE
 *     {
 * --        name                [0] PkgdName,
 *         propertyName        [0] PkgdName,
 * --        value                [1] SEQUENCE OF OCTET STRING,
 *         value                [1] SEQUENCE OF PropertyID,
 *         extraInfo            [2] CHOICE
 *         {
 *             relation    [0] Relation,
 *             range        [1] BOOLEAN,
 *             sublist        [2] BOOLEAN
 *         } OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class PropertyParm {
    constructor (
        /**
         * @summary `propertyName`.
         * @public
         * @readonly
         */
        readonly propertyName: PkgdName,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: PropertyID[],
        /**
         * @summary `extraInfo`.
         * @public
         * @readonly
         */
        readonly extraInfo: OPTIONAL<PropertyParm_extraInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PropertyParm
     * @description
     * 
     * This takes an `object` and converts it to a `PropertyParm`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PropertyParm`.
     * @returns {PropertyParm}
     */
    public static _from_object (_o: { [_K in keyof (PropertyParm)]: (PropertyParm)[_K] }): PropertyParm {
        return new PropertyParm(_o.propertyName, _o.value, _o.extraInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PropertyParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PropertyParm: $.ComponentSpec[] = [
    new $.ComponentSpec("propertyName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extraInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PropertyParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PropertyParm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PropertyParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PropertyParm: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PropertyParm: $.ASN1Decoder<PropertyParm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PropertyParm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PropertyParm (el: _Element): PropertyParm {
    if (!_cached_decoder_for_PropertyParm) { _cached_decoder_for_PropertyParm = function (el: _Element): PropertyParm {
    let propertyName!: PkgdName;
    let value!: PropertyID[];
    let extraInfo: OPTIONAL<PropertyParm_extraInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "propertyName": (_el: _Element): void => { propertyName = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<PropertyID[]>(() => $._decodeSequenceOf<PropertyID>(() => _decode_PropertyID))(_el); },
        "extraInfo": (_el: _Element): void => { extraInfo = $._decode_explicit<PropertyParm_extraInfo>(() => _decode_PropertyParm_extraInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PropertyParm,
        _extension_additions_list_spec_for_PropertyParm,
        _root_component_type_list_2_spec_for_PropertyParm,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PropertyParm(
        propertyName,
        value,
        extraInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PropertyParm(el);
}

let _cached_encoder_for_PropertyParm: $.ASN1Encoder<PropertyParm> | null = null;

/**
 * @summary Encodes a(n) PropertyParm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PropertyParm, encoded as an ASN.1 Element.
 */
export
function _encode_PropertyParm (value: PropertyParm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PropertyParm) { _cached_encoder_for_PropertyParm = function (value: PropertyParm, elGetter: $.ASN1Encoder<PropertyParm>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PkgdName, $.BER)(value.propertyName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PropertyID>(() => _encode_PropertyID, $.BER), $.BER)(value.value, $.BER),
            /* IF_ABSENT  */ ((value.extraInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PropertyParm_extraInfo, $.BER)(value.extraInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PropertyParm(value, elGetter);
}


/* eslint-enable */
