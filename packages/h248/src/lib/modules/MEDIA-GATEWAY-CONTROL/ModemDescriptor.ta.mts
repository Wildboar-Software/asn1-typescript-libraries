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
import { ModemType, _enum_for_ModemType, ModemType_v18 /* IMPORTED_LONG_ENUMERATION_ITEM */, v18 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v22 /* IMPORTED_LONG_ENUMERATION_ITEM */, v22 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v22bis /* IMPORTED_LONG_ENUMERATION_ITEM */, v22bis /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v32 /* IMPORTED_LONG_ENUMERATION_ITEM */, v32 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v32bis /* IMPORTED_LONG_ENUMERATION_ITEM */, v32bis /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v34 /* IMPORTED_LONG_ENUMERATION_ITEM */, v34 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v90 /* IMPORTED_LONG_ENUMERATION_ITEM */, v90 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v91 /* IMPORTED_LONG_ENUMERATION_ITEM */, v91 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_synchISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, synchISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModemType, _encode_ModemType } from "../MEDIA-GATEWAY-CONTROL/ModemType.ta.mjs";
// export { ModemType, _enum_for_ModemType, ModemType_v18 /* IMPORTED_LONG_ENUMERATION_ITEM */, v18 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v22 /* IMPORTED_LONG_ENUMERATION_ITEM */, v22 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v22bis /* IMPORTED_LONG_ENUMERATION_ITEM */, v22bis /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v32 /* IMPORTED_LONG_ENUMERATION_ITEM */, v32 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v32bis /* IMPORTED_LONG_ENUMERATION_ITEM */, v32bis /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v34 /* IMPORTED_LONG_ENUMERATION_ITEM */, v34 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v90 /* IMPORTED_LONG_ENUMERATION_ITEM */, v90 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_v91 /* IMPORTED_LONG_ENUMERATION_ITEM */, v91 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModemType_synchISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, synchISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModemType, _encode_ModemType } from "../MEDIA-GATEWAY-CONTROL/ModemType.ta.mjs";
import { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
// export { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
import { NonStandardData, _decode_NonStandardData, _encode_NonStandardData } from "../MEDIA-GATEWAY-CONTROL/NonStandardData.ta.mjs";
// export { NonStandardData, _decode_NonStandardData, _encode_NonStandardData } from "../MEDIA-GATEWAY-CONTROL/NonStandardData.ta.mjs";


/**
 * @summary ModemDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemDescriptor ::= SEQUENCE
 *     {
 *         mtl                    [0] SEQUENCE OF ModemType,
 *         mpl                    [1] SEQUENCE OF PropertyParm,
 *         nonStandardData        [2] NonStandardData OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ModemDescriptor {
    constructor (
        /**
         * @summary `mtl`.
         * @public
         * @readonly
         */
        readonly mtl: ModemType[],
        /**
         * @summary `mpl`.
         * @public
         * @readonly
         */
        readonly mpl: PropertyParm[],
        /**
         * @summary `nonStandardData`.
         * @public
         * @readonly
         */
        readonly nonStandardData: OPTIONAL<NonStandardData>
    ) {}

    /**
     * @summary Restructures an object into a ModemDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `ModemDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModemDescriptor`.
     * @returns {ModemDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (ModemDescriptor)]: (ModemDescriptor)[_K] }): ModemDescriptor {
        return new ModemDescriptor(_o.mtl, _o.mpl, _o.nonStandardData);
    }


}

/**
 * @summary The Leading Root Component Types of ModemDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModemDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("mtl", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mpl", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nonStandardData", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ModemDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModemDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModemDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModemDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModemDescriptor: $.ASN1Decoder<ModemDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModemDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModemDescriptor (el: _Element): ModemDescriptor {
    if (!_cached_decoder_for_ModemDescriptor) { _cached_decoder_for_ModemDescriptor = function (el: _Element): ModemDescriptor {
    let mtl!: ModemType[];
    let mpl!: PropertyParm[];
    let nonStandardData: OPTIONAL<NonStandardData>;
    const callbacks: $.DecodingMap = {
        "mtl": (_el: _Element): void => { mtl = $._decode_implicit<ModemType[]>(() => $._decodeSequenceOf<ModemType>(() => _decode_ModemType))(_el); },
        "mpl": (_el: _Element): void => { mpl = $._decode_implicit<PropertyParm[]>(() => $._decodeSequenceOf<PropertyParm>(() => _decode_PropertyParm))(_el); },
        "nonStandardData": (_el: _Element): void => { nonStandardData = $._decode_implicit<NonStandardData>(() => _decode_NonStandardData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModemDescriptor,
        _extension_additions_list_spec_for_ModemDescriptor,
        _root_component_type_list_2_spec_for_ModemDescriptor,
        undefined,
    );
    return new ModemDescriptor(
        mtl,
        mpl,
        nonStandardData
    );
}; }
    return _cached_decoder_for_ModemDescriptor(el);
}

let _cached_encoder_for_ModemDescriptor: $.ASN1Encoder<ModemDescriptor> | null = null;

/**
 * @summary Encodes a(n) ModemDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModemDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_ModemDescriptor (value: ModemDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModemDescriptor) { _cached_encoder_for_ModemDescriptor = function (value: ModemDescriptor, elGetter: $.ASN1Encoder<ModemDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ModemType>(() => _encode_ModemType, $.BER), $.BER)(value.mtl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PropertyParm>(() => _encode_PropertyParm, $.BER), $.BER)(value.mpl, $.BER),
            /* IF_ABSENT  */ ((value.nonStandardData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NonStandardData, $.BER)(value.nonStandardData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModemDescriptor(value, elGetter);
}


/* eslint-enable */
