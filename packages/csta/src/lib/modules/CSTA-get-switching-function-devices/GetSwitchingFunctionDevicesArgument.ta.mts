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
import { ReqDeviceCategory, _enum_for_ReqDeviceCategory, ReqDeviceCategory_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, acd /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_dtmfIV /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_genericIV /* IMPORTED_LONG_ENUMERATION_ITEM */, genericIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupACD /* IMPORTED_LONG_ENUMERATION_ITEM */, groupACD /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupHunt /* IMPORTED_LONG_ENUMERATION_ITEM */, groupHunt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupPick /* IMPORTED_LONG_ENUMERATION_ITEM */, groupPick /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupOther /* IMPORTED_LONG_ENUMERATION_ITEM */, groupOther /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupUser /* IMPORTED_LONG_ENUMERATION_ITEM */, groupUser /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_listenerIV /* IMPORTED_LONG_ENUMERATION_ITEM */, listenerIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_messageIV /* IMPORTED_LONG_ENUMERATION_ITEM */, messageIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_networkInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_promptIV /* IMPORTED_LONG_ENUMERATION_ITEM */, promptIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_promptQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, promptQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_routeingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, routeingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_station /* IMPORTED_LONG_ENUMERATION_ITEM */, station /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_voiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReqDeviceCategory, _encode_ReqDeviceCategory } from "../CSTA-get-switching-function-devices/ReqDeviceCategory.ta.mjs";
// export { ReqDeviceCategory, _enum_for_ReqDeviceCategory, ReqDeviceCategory_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, acd /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_dtmfIV /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_genericIV /* IMPORTED_LONG_ENUMERATION_ITEM */, genericIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupACD /* IMPORTED_LONG_ENUMERATION_ITEM */, groupACD /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupHunt /* IMPORTED_LONG_ENUMERATION_ITEM */, groupHunt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupPick /* IMPORTED_LONG_ENUMERATION_ITEM */, groupPick /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupOther /* IMPORTED_LONG_ENUMERATION_ITEM */, groupOther /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_groupUser /* IMPORTED_LONG_ENUMERATION_ITEM */, groupUser /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_listenerIV /* IMPORTED_LONG_ENUMERATION_ITEM */, listenerIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_messageIV /* IMPORTED_LONG_ENUMERATION_ITEM */, messageIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_networkInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_promptIV /* IMPORTED_LONG_ENUMERATION_ITEM */, promptIV /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_promptQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, promptQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_routeingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, routeingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_station /* IMPORTED_LONG_ENUMERATION_ITEM */, station /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_voiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqDeviceCategory_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReqDeviceCategory, _encode_ReqDeviceCategory } from "../CSTA-get-switching-function-devices/ReqDeviceCategory.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetSwitchingFunctionDevicesArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionDevicesArgument ::= SEQUENCE
 * {     requestedDeviceID         DeviceID             OPTIONAL,
 *     requestedDeviceCategory     ReqDeviceCategory         OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSwitchingFunctionDevicesArgument {
    constructor (
        /**
         * @summary `requestedDeviceID`.
         * @public
         * @readonly
         */
        readonly requestedDeviceID: OPTIONAL<DeviceID>,
        /**
         * @summary `requestedDeviceCategory`.
         * @public
         * @readonly
         */
        readonly requestedDeviceCategory: OPTIONAL<ReqDeviceCategory>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetSwitchingFunctionDevicesArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetSwitchingFunctionDevicesArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSwitchingFunctionDevicesArgument`.
     * @returns {GetSwitchingFunctionDevicesArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetSwitchingFunctionDevicesArgument)]: (GetSwitchingFunctionDevicesArgument)[_K] }): GetSwitchingFunctionDevicesArgument {
        return new GetSwitchingFunctionDevicesArgument(_o.requestedDeviceID, _o.requestedDeviceCategory, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `requestedDeviceCategory`
         * @public
         * @static
         */

    public static _enum_for_requestedDeviceCategory = _enum_for_ReqDeviceCategory;
}

/**
 * @summary The Leading Root Component Types of GetSwitchingFunctionDevicesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSwitchingFunctionDevicesArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedDeviceID", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("requestedDeviceCategory", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetSwitchingFunctionDevicesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSwitchingFunctionDevicesArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSwitchingFunctionDevicesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSwitchingFunctionDevicesArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSwitchingFunctionDevicesArgument: $.ASN1Decoder<GetSwitchingFunctionDevicesArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionDevicesArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionDevicesArgument (el: _Element): GetSwitchingFunctionDevicesArgument {
    if (!_cached_decoder_for_GetSwitchingFunctionDevicesArgument) { _cached_decoder_for_GetSwitchingFunctionDevicesArgument = function (el: _Element): GetSwitchingFunctionDevicesArgument {
    let requestedDeviceID: OPTIONAL<DeviceID>;
    let requestedDeviceCategory: OPTIONAL<ReqDeviceCategory>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "requestedDeviceID": (_el: _Element): void => { requestedDeviceID = _decode_DeviceID(_el); },
        "requestedDeviceCategory": (_el: _Element): void => { requestedDeviceCategory = _decode_ReqDeviceCategory(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSwitchingFunctionDevicesArgument,
        _extension_additions_list_spec_for_GetSwitchingFunctionDevicesArgument,
        _root_component_type_list_2_spec_for_GetSwitchingFunctionDevicesArgument,
        undefined,
    );
    return new GetSwitchingFunctionDevicesArgument(
        requestedDeviceID,
        requestedDeviceCategory,
        extensions
    );
}; }
    return _cached_decoder_for_GetSwitchingFunctionDevicesArgument(el);
}

let _cached_encoder_for_GetSwitchingFunctionDevicesArgument: $.ASN1Encoder<GetSwitchingFunctionDevicesArgument> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionDevicesArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionDevicesArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionDevicesArgument (value: GetSwitchingFunctionDevicesArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionDevicesArgument) { _cached_encoder_for_GetSwitchingFunctionDevicesArgument = function (value: GetSwitchingFunctionDevicesArgument, elGetter: $.ASN1Encoder<GetSwitchingFunctionDevicesArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestedDeviceID === undefined) ? undefined : _encode_DeviceID(value.requestedDeviceID, $.BER)),
            /* IF_ABSENT  */ ((value.requestedDeviceCategory === undefined) ? undefined : _encode_ReqDeviceCategory(value.requestedDeviceCategory, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSwitchingFunctionDevicesArgument(value, elGetter);
}


/* eslint-enable */
