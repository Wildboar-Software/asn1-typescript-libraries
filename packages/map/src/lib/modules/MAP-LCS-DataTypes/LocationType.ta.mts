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
import { LocationEstimateType, _enum_for_LocationEstimateType, LocationEstimateType_currentLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, currentLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEstimateType_currentOrLastKnownLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, currentOrLastKnownLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEstimateType_initialLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, initialLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEstimateType_activateDeferredLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, activateDeferredLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEstimateType_cancelDeferredLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelDeferredLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEstimateType_notificationVerificationOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, notificationVerificationOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LocationEstimateType, _encode_LocationEstimateType } from "../MAP-LCS-DataTypes/LocationEstimateType.ta.mjs";
import { DeferredLocationEventType, DeferredLocationEventType_msAvailable /* IMPORTED_LONG_NAMED_BIT */, msAvailable /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_enteringIntoArea /* IMPORTED_LONG_NAMED_BIT */, enteringIntoArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_leavingFromArea /* IMPORTED_LONG_NAMED_BIT */, leavingFromArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_beingInsideArea /* IMPORTED_LONG_NAMED_BIT */, beingInsideArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_periodicLDR /* IMPORTED_LONG_NAMED_BIT */, periodicLDR /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeferredLocationEventType, _encode_DeferredLocationEventType } from "../MAP-LCS-DataTypes/DeferredLocationEventType.ta.mjs";


/**
 * @summary LocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType ::= SEQUENCE {
 *     locationEstimateType    [0] LocationEstimateType,
 *     ...,
 *     deferredLocationEventType    [1] DeferredLocationEventType    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationType {
    constructor (
        /**
         * @summary `locationEstimateType`.
         * @public
         * @readonly
         */
        readonly locationEstimateType: LocationEstimateType,
        /**
         * @summary `deferredLocationEventType`.
         * @public
         * @readonly
         */
        readonly deferredLocationEventType: OPTIONAL<DeferredLocationEventType>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocationType
     * @description
     * 
     * This takes an `object` and converts it to a `LocationType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationType`.
     * @returns {LocationType}
     */
    public static _from_object (_o: { [_K in keyof (LocationType)]: (LocationType)[_K] }): LocationType {
        return new LocationType(_o.locationEstimateType, _o.deferredLocationEventType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `locationEstimateType`
         * @public
         * @static
         */

    public static _enum_for_locationEstimateType = _enum_for_LocationEstimateType;
}

/**
 * @summary The Leading Root Component Types of LocationType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationType: $.ComponentSpec[] = [
    new $.ComponentSpec("locationEstimateType", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of LocationType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationType: $.ComponentSpec[] = [
    new $.ComponentSpec("deferredLocationEventType", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_LocationType: $.ASN1Decoder<LocationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationType (el: _Element): LocationType {
    if (!_cached_decoder_for_LocationType) { _cached_decoder_for_LocationType = function (el: _Element): LocationType {
    let locationEstimateType!: LocationEstimateType;
    let deferredLocationEventType: OPTIONAL<DeferredLocationEventType> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationEstimateType": (_el: _Element): void => { locationEstimateType = $._decode_implicit<LocationEstimateType>(() => _decode_LocationEstimateType)(_el); },
        "deferredLocationEventType": (_el: _Element): void => { deferredLocationEventType = $._decode_implicit<DeferredLocationEventType>(() => _decode_DeferredLocationEventType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationType,
        _extension_additions_list_spec_for_LocationType,
        _root_component_type_list_2_spec_for_LocationType,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationType(
        locationEstimateType,
        deferredLocationEventType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationType(el);
}

let _cached_encoder_for_LocationType: $.ASN1Encoder<LocationType> | null = null;

/**
 * @summary Encodes a(n) LocationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationType, encoded as an ASN.1 Element.
 */
export
function _encode_LocationType (value: LocationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationType) { _cached_encoder_for_LocationType = function (value: LocationType, elGetter: $.ASN1Encoder<LocationType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_LocationEstimateType, $.BER)(value.locationEstimateType, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.deferredLocationEventType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DeferredLocationEventType, $.BER)(value.deferredLocationEventType, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationType(value, elGetter);
}


/* eslint-enable */
