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
import { DeviceCategory, _enum_for_DeviceCategory, DeviceCategory_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_group /* IMPORTED_LONG_ENUMERATION_ITEM */, group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_networkInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_routeingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_station /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_voiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_genericInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, genericInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_listenerInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, listenerInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_dtmfInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptQueueInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptQueueInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_messageInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, messageInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_DeviceCategory, _encode_DeviceCategory } from "../CSTA-capability-exchange/DeviceCategory.ta.mjs";
// export { DeviceCategory, _enum_for_DeviceCategory, DeviceCategory_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_group /* IMPORTED_LONG_ENUMERATION_ITEM */, group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_networkInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_routeingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_station /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_voiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_genericInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, genericInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_listenerInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, listenerInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_dtmfInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptQueueInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptQueueInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_messageInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, messageInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_DeviceCategory, _encode_DeviceCategory } from "../CSTA-capability-exchange/DeviceCategory.ta.mjs";
import { NamedDeviceTypes, _enum_for_NamedDeviceTypes, NamedDeviceTypes_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_acdGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, acdGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_button /* IMPORTED_LONG_ENUMERATION_ITEM */, button /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_buttonGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, buttonGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_conferenceBridge /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceBridge /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_line /* IMPORTED_LONG_ENUMERATION_ITEM */, line /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_lineGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, lineGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operator /* IMPORTED_LONG_ENUMERATION_ITEM */, operator /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operatorGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_parkingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, parkingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_station /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_stationGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, stationGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunk /* IMPORTED_LONG_ENUMERATION_ITEM */, trunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunkGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, trunkGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_other /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_otherGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, otherGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NamedDeviceTypes, _encode_NamedDeviceTypes } from "../CSTA-capability-exchange/NamedDeviceTypes.ta.mjs";
// export { NamedDeviceTypes, _enum_for_NamedDeviceTypes, NamedDeviceTypes_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_acdGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, acdGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_button /* IMPORTED_LONG_ENUMERATION_ITEM */, button /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_buttonGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, buttonGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_conferenceBridge /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceBridge /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_line /* IMPORTED_LONG_ENUMERATION_ITEM */, line /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_lineGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, lineGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operator /* IMPORTED_LONG_ENUMERATION_ITEM */, operator /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operatorGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_parkingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, parkingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_station /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_stationGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, stationGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunk /* IMPORTED_LONG_ENUMERATION_ITEM */, trunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunkGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, trunkGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_other /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_otherGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, otherGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NamedDeviceTypes, _encode_NamedDeviceTypes } from "../CSTA-capability-exchange/NamedDeviceTypes.ta.mjs";
import { DeviceAttributes, DeviceAttributes_mediaAccessDevice /* IMPORTED_LONG_NAMED_BIT */, mediaAccessDevice /* IMPORTED_SHORT_NAMED_BIT */, DeviceAttributes_routeingDevice /* IMPORTED_LONG_NAMED_BIT */, DeviceAttributes_groupACD /* IMPORTED_LONG_NAMED_BIT */, groupACD /* IMPORTED_SHORT_NAMED_BIT */, DeviceAttributes_groupHunt /* IMPORTED_LONG_NAMED_BIT */, groupHunt /* IMPORTED_SHORT_NAMED_BIT */, DeviceAttributes_groupPick /* IMPORTED_LONG_NAMED_BIT */, groupPick /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeviceAttributes, _encode_DeviceAttributes } from "../CSTA-switching-function-devices/DeviceAttributes.ta.mjs";
// export { DeviceAttributes, DeviceAttributes_mediaAccessDevice /* IMPORTED_LONG_NAMED_BIT */, mediaAccessDevice /* IMPORTED_SHORT_NAMED_BIT */, DeviceAttributes_routeingDevice /* IMPORTED_LONG_NAMED_BIT */, DeviceAttributes_groupACD /* IMPORTED_LONG_NAMED_BIT */, groupACD /* IMPORTED_SHORT_NAMED_BIT */, DeviceAttributes_groupHunt /* IMPORTED_LONG_NAMED_BIT */, groupHunt /* IMPORTED_SHORT_NAMED_BIT */, DeviceAttributes_groupPick /* IMPORTED_LONG_NAMED_BIT */, groupPick /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeviceAttributes, _encode_DeviceAttributes } from "../CSTA-switching-function-devices/DeviceAttributes.ta.mjs";


/**
 * @summary DeviceList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DeviceList_Item {
    constructor (
        /**
         * @summary `deviceID`.
         * @public
         * @readonly
         */
        readonly deviceID: DeviceID,
        /**
         * @summary `deviceCategory`.
         * @public
         * @readonly
         */
        readonly deviceCategory: OPTIONAL<DeviceCategory>,
        /**
         * @summary `namedDeviceTypes`.
         * @public
         * @readonly
         */
        readonly namedDeviceTypes: OPTIONAL<NamedDeviceTypes>,
        /**
         * @summary `deviceAttributes`.
         * @public
         * @readonly
         */
        readonly deviceAttributes: OPTIONAL<DeviceAttributes>,
        /**
         * @summary `deviceModelName`.
         * @public
         * @readonly
         */
        readonly deviceModelName: OPTIONAL<IA5String>,
        /**
         * @summary `nidGroup`.
         * @public
         * @readonly
         */
        readonly nidGroup: OPTIONAL<DeviceID>
    ) {}

    /**
     * @summary Restructures an object into a DeviceList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceList_Item`.
     * @returns {DeviceList_Item}
     */
    public static _from_object (_o: { [_K in keyof (DeviceList_Item)]: (DeviceList_Item)[_K] }): DeviceList_Item {
        return new DeviceList_Item(_o.deviceID, _o.deviceCategory, _o.namedDeviceTypes, _o.deviceAttributes, _o.deviceModelName, _o.nidGroup);
    }

    /**
     * @summary Getter that returns the default value for `deviceCategory`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_deviceCategory () { return station; }        /**
         * @summary The enum used as the type of the component `deviceCategory`
         * @public
         * @static
         */

    public static _enum_for_deviceCategory = _enum_for_DeviceCategory;        /**
         * @summary The enum used as the type of the component `namedDeviceTypes`
         * @public
         * @static
         */

    public static _enum_for_namedDeviceTypes = _enum_for_NamedDeviceTypes;
}

/**
 * @summary The Leading Root Component Types of DeviceList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceID", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("deviceCategory", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("namedDeviceTypes", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("deviceAttributes", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("deviceModelName", true, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("nidGroup", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DeviceList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceList_Item: $.ASN1Decoder<DeviceList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceList_Item (el: _Element): DeviceList_Item {
    if (!_cached_decoder_for_DeviceList_Item) { _cached_decoder_for_DeviceList_Item = function (el: _Element): DeviceList_Item {
    let deviceID!: DeviceID;
    let deviceCategory: OPTIONAL<DeviceCategory> = DeviceList_Item._default_value_for_deviceCategory;
    let namedDeviceTypes: OPTIONAL<NamedDeviceTypes>;
    let deviceAttributes: OPTIONAL<DeviceAttributes>;
    let deviceModelName: OPTIONAL<IA5String>;
    let nidGroup: OPTIONAL<DeviceID>;
    const callbacks: $.DecodingMap = {
        "deviceID": (_el: _Element): void => { deviceID = _decode_DeviceID(_el); },
        "deviceCategory": (_el: _Element): void => { deviceCategory = $._decode_implicit<DeviceCategory>(() => _decode_DeviceCategory)(_el); },
        "namedDeviceTypes": (_el: _Element): void => { namedDeviceTypes = $._decode_implicit<NamedDeviceTypes>(() => _decode_NamedDeviceTypes)(_el); },
        "deviceAttributes": (_el: _Element): void => { deviceAttributes = _decode_DeviceAttributes(_el); },
        "deviceModelName": (_el: _Element): void => { deviceModelName = $._decodeIA5String(_el); },
        "nidGroup": (_el: _Element): void => { nidGroup = _decode_DeviceID(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceList_Item,
        _extension_additions_list_spec_for_DeviceList_Item,
        _root_component_type_list_2_spec_for_DeviceList_Item,
        undefined,
    );
    return new DeviceList_Item(
        deviceID,
        deviceCategory,
        namedDeviceTypes,
        deviceAttributes,
        deviceModelName,
        nidGroup
    );
}; }
    return _cached_decoder_for_DeviceList_Item(el);
}

let _cached_encoder_for_DeviceList_Item: $.ASN1Encoder<DeviceList_Item> | null = null;

/**
 * @summary Encodes a(n) DeviceList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceList_Item (value: DeviceList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceList_Item) { _cached_encoder_for_DeviceList_Item = function (value: DeviceList_Item, elGetter: $.ASN1Encoder<DeviceList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.deviceID, $.BER),
            /* IF_DEFAULT */ (value.deviceCategory === undefined || $.deepEq(value.deviceCategory, DeviceList_Item._default_value_for_deviceCategory) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DeviceCategory, $.BER)(value.deviceCategory, $.BER)),
            /* IF_ABSENT  */ ((value.namedDeviceTypes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_NamedDeviceTypes, $.BER)(value.namedDeviceTypes, $.BER)),
            /* IF_ABSENT  */ ((value.deviceAttributes === undefined) ? undefined : _encode_DeviceAttributes(value.deviceAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.deviceModelName === undefined) ? undefined : $._encodeIA5String(value.deviceModelName, $.BER)),
            /* IF_ABSENT  */ ((value.nidGroup === undefined) ? undefined : _encode_DeviceID(value.nidGroup, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceList_Item(value, elGetter);
}


/* eslint-enable */
