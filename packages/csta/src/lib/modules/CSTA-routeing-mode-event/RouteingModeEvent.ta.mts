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
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
// export { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary RouteingModeEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingModeEvent ::= SEQUENCE
 * {    device                 SubjectDeviceID,
 *     routeingMode            BOOLEAN,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteingModeEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `routeingMode`.
         * @public
         * @readonly
         */
        readonly routeingMode: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteingModeEvent
     * @description
     * 
     * This takes an `object` and converts it to a `RouteingModeEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteingModeEvent`.
     * @returns {RouteingModeEvent}
     */
    public static _from_object (_o: { [_K in keyof (RouteingModeEvent)]: (RouteingModeEvent)[_K] }): RouteingModeEvent {
        return new RouteingModeEvent(_o.device, _o.routeingMode, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteingModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteingModeEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("routeingMode", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RouteingModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteingModeEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteingModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteingModeEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteingModeEvent: $.ASN1Decoder<RouteingModeEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingModeEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingModeEvent (el: _Element): RouteingModeEvent {
    if (!_cached_decoder_for_RouteingModeEvent) { _cached_decoder_for_RouteingModeEvent = function (el: _Element): RouteingModeEvent {
    let device!: SubjectDeviceID;
    let routeingMode!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "routeingMode": (_el: _Element): void => { routeingMode = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteingModeEvent,
        _extension_additions_list_spec_for_RouteingModeEvent,
        _root_component_type_list_2_spec_for_RouteingModeEvent,
        undefined,
    );
    return new RouteingModeEvent(
        device,
        routeingMode,
        extensions
    );
}; }
    return _cached_decoder_for_RouteingModeEvent(el);
}

let _cached_encoder_for_RouteingModeEvent: $.ASN1Encoder<RouteingModeEvent> | null = null;

/**
 * @summary Encodes a(n) RouteingModeEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingModeEvent, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingModeEvent (value: RouteingModeEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingModeEvent) { _cached_encoder_for_RouteingModeEvent = function (value: RouteingModeEvent, elGetter: $.ASN1Encoder<RouteingModeEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.routeingMode, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteingModeEvent(value, elGetter);
}


/* eslint-enable */
