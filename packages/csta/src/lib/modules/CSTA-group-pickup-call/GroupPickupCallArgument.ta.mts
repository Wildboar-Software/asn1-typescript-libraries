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
import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
// export { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";
// export { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GroupPickupCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupPickupCallArgument ::= SEQUENCE
 * {     newDestination             DeviceID,
 *     pickGroup             DeviceID             OPTIONAL,
 *     correlatorData             CorrelatorData             OPTIONAL,
 *     userData             UserData             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GroupPickupCallArgument {
    constructor (
        /**
         * @summary `newDestination`.
         * @public
         * @readonly
         */
        readonly newDestination: DeviceID,
        /**
         * @summary `pickGroup`.
         * @public
         * @readonly
         */
        readonly pickGroup: OPTIONAL<DeviceID>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GroupPickupCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GroupPickupCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GroupPickupCallArgument`.
     * @returns {GroupPickupCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (GroupPickupCallArgument)]: (GroupPickupCallArgument)[_K] }): GroupPickupCallArgument {
        return new GroupPickupCallArgument(_o.newDestination, _o.pickGroup, _o.correlatorData, _o.userData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GroupPickupCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GroupPickupCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("newDestination", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("pickGroup", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GroupPickupCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GroupPickupCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GroupPickupCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GroupPickupCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GroupPickupCallArgument: $.ASN1Decoder<GroupPickupCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupPickupCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupPickupCallArgument (el: _Element): GroupPickupCallArgument {
    if (!_cached_decoder_for_GroupPickupCallArgument) { _cached_decoder_for_GroupPickupCallArgument = function (el: _Element): GroupPickupCallArgument {
    let newDestination!: DeviceID;
    let pickGroup: OPTIONAL<DeviceID>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "newDestination": (_el: _Element): void => { newDestination = _decode_DeviceID(_el); },
        "pickGroup": (_el: _Element): void => { pickGroup = _decode_DeviceID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = _decode_CorrelatorData(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GroupPickupCallArgument,
        _extension_additions_list_spec_for_GroupPickupCallArgument,
        _root_component_type_list_2_spec_for_GroupPickupCallArgument,
        undefined,
    );
    return new GroupPickupCallArgument(
        newDestination,
        pickGroup,
        correlatorData,
        userData,
        extensions
    );
}; }
    return _cached_decoder_for_GroupPickupCallArgument(el);
}

let _cached_encoder_for_GroupPickupCallArgument: $.ASN1Encoder<GroupPickupCallArgument> | null = null;

/**
 * @summary Encodes a(n) GroupPickupCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupPickupCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GroupPickupCallArgument (value: GroupPickupCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupPickupCallArgument) { _cached_encoder_for_GroupPickupCallArgument = function (value: GroupPickupCallArgument, elGetter: $.ASN1Encoder<GroupPickupCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.newDestination, $.BER),
            /* IF_ABSENT  */ ((value.pickGroup === undefined) ? undefined : _encode_DeviceID(value.pickGroup, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : _encode_CorrelatorData(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GroupPickupCallArgument(value, elGetter);
}


/* eslint-enable */
