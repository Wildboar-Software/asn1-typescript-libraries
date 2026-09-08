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
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetLocationTrackingCapabilitiesArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesArgument ::= SEQUENCE
 * {    device                    DeviceID,    
 *     extensions                CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetLocationTrackingCapabilitiesArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetLocationTrackingCapabilitiesArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetLocationTrackingCapabilitiesArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetLocationTrackingCapabilitiesArgument`.
     * @returns {GetLocationTrackingCapabilitiesArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetLocationTrackingCapabilitiesArgument)]: (GetLocationTrackingCapabilitiesArgument)[_K] }): GetLocationTrackingCapabilitiesArgument {
        return new GetLocationTrackingCapabilitiesArgument(_o.device, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetLocationTrackingCapabilitiesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetLocationTrackingCapabilitiesArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetLocationTrackingCapabilitiesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetLocationTrackingCapabilitiesArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetLocationTrackingCapabilitiesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetLocationTrackingCapabilitiesArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetLocationTrackingCapabilitiesArgument: $.ASN1Decoder<GetLocationTrackingCapabilitiesArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilitiesArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilitiesArgument (el: _Element): GetLocationTrackingCapabilitiesArgument {
    if (!_cached_decoder_for_GetLocationTrackingCapabilitiesArgument) { _cached_decoder_for_GetLocationTrackingCapabilitiesArgument = function (el: _Element): GetLocationTrackingCapabilitiesArgument {
    let device!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetLocationTrackingCapabilitiesArgument,
        _extension_additions_list_spec_for_GetLocationTrackingCapabilitiesArgument,
        _root_component_type_list_2_spec_for_GetLocationTrackingCapabilitiesArgument,
        undefined,
    );
    return new GetLocationTrackingCapabilitiesArgument(
        device,
        extensions
    );
}; }
    return _cached_decoder_for_GetLocationTrackingCapabilitiesArgument(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilitiesArgument: $.ASN1Encoder<GetLocationTrackingCapabilitiesArgument> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilitiesArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilitiesArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilitiesArgument (value: GetLocationTrackingCapabilitiesArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilitiesArgument) { _cached_encoder_for_GetLocationTrackingCapabilitiesArgument = function (value: GetLocationTrackingCapabilitiesArgument, elGetter: $.ASN1Encoder<GetLocationTrackingCapabilitiesArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetLocationTrackingCapabilitiesArgument(value, elGetter);
}


/* eslint-enable */
