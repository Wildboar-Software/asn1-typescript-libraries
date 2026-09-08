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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { MediaClass, MediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_other /* IMPORTED_LONG_NAMED_BIT */, other /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaClass, _encode_MediaClass } from "../CSTA-media-services/MediaClass.ta.mjs";
// export { MediaClass, MediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_other /* IMPORTED_LONG_NAMED_BIT */, other /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaClass, _encode_MediaClass } from "../CSTA-media-services/MediaClass.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary RouteRegisterArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterArgument ::= SEQUENCE
 * {    routeingDevice            DeviceID                OPTIONAL,
 *     requestedRouteingMediaClass    MediaClass                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteRegisterArgument {
    constructor (
        /**
         * @summary `routeingDevice`.
         * @public
         * @readonly
         */
        readonly routeingDevice: OPTIONAL<DeviceID>,
        /**
         * @summary `requestedRouteingMediaClass`.
         * @public
         * @readonly
         */
        readonly requestedRouteingMediaClass: OPTIONAL<MediaClass>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteRegisterArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteRegisterArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteRegisterArgument`.
     * @returns {RouteRegisterArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteRegisterArgument)]: (RouteRegisterArgument)[_K] }): RouteRegisterArgument {
        return new RouteRegisterArgument(_o.routeingDevice, _o.requestedRouteingMediaClass, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteRegisterArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("routeingDevice", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("requestedRouteingMediaClass", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RouteRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteRegisterArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteRegisterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteRegisterArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteRegisterArgument: $.ASN1Decoder<RouteRegisterArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterArgument (el: _Element): RouteRegisterArgument {
    if (!_cached_decoder_for_RouteRegisterArgument) { _cached_decoder_for_RouteRegisterArgument = function (el: _Element): RouteRegisterArgument {
    let routeingDevice: OPTIONAL<DeviceID>;
    let requestedRouteingMediaClass: OPTIONAL<MediaClass>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "routeingDevice": (_el: _Element): void => { routeingDevice = _decode_DeviceID(_el); },
        "requestedRouteingMediaClass": (_el: _Element): void => { requestedRouteingMediaClass = _decode_MediaClass(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteRegisterArgument,
        _extension_additions_list_spec_for_RouteRegisterArgument,
        _root_component_type_list_2_spec_for_RouteRegisterArgument,
        undefined,
    );
    return new RouteRegisterArgument(
        routeingDevice,
        requestedRouteingMediaClass,
        extensions
    );
}; }
    return _cached_decoder_for_RouteRegisterArgument(el);
}

let _cached_encoder_for_RouteRegisterArgument: $.ASN1Encoder<RouteRegisterArgument> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterArgument (value: RouteRegisterArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterArgument) { _cached_encoder_for_RouteRegisterArgument = function (value: RouteRegisterArgument, elGetter: $.ASN1Encoder<RouteRegisterArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.routeingDevice === undefined) ? undefined : _encode_DeviceID(value.routeingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.requestedRouteingMediaClass === undefined) ? undefined : _encode_MediaClass(value.requestedRouteingMediaClass, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteRegisterArgument(value, elGetter);
}


/* eslint-enable */
