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
import { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
// export { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";


/**
 * @summary DeviceAdditionalFeatureSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceAdditionalFeatureSupport ::= SEQUENCE {
 *     naiSupport VersionType OPTIONAL, -- Device supports Network Access Identifier
 *     groupOfDeviceManufacturerOid OBJECT IDENTIFIER OPTIONAL -- the OID of Device Manufacturer or the Group of Device Manufacturers as defined in SGP.29
 * }
 * ```
 * 
 * @class
 */
export
class DeviceAdditionalFeatureSupport {
    constructor (
        /**
         * @summary `naiSupport`.
         * @public
         * @readonly
         */
        readonly naiSupport: OPTIONAL<VersionType>,
        /**
         * @summary `groupOfDeviceManufacturerOid`.
         * @public
         * @readonly
         */
        readonly groupOfDeviceManufacturerOid: OPTIONAL<OBJECT_IDENTIFIER>
    ) {}

    /**
     * @summary Restructures an object into a DeviceAdditionalFeatureSupport
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceAdditionalFeatureSupport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceAdditionalFeatureSupport`.
     * @returns {DeviceAdditionalFeatureSupport}
     */
    public static _from_object (_o: { [_K in keyof (DeviceAdditionalFeatureSupport)]: (DeviceAdditionalFeatureSupport)[_K] }): DeviceAdditionalFeatureSupport {
        return new DeviceAdditionalFeatureSupport(_o.naiSupport, _o.groupOfDeviceManufacturerOid);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceAdditionalFeatureSupport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceAdditionalFeatureSupport: $.ComponentSpec[] = [
    new $.ComponentSpec("naiSupport", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("groupOfDeviceManufacturerOid", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DeviceAdditionalFeatureSupport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceAdditionalFeatureSupport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceAdditionalFeatureSupport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceAdditionalFeatureSupport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceAdditionalFeatureSupport: $.ASN1Decoder<DeviceAdditionalFeatureSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceAdditionalFeatureSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceAdditionalFeatureSupport (el: _Element): DeviceAdditionalFeatureSupport {
    if (!_cached_decoder_for_DeviceAdditionalFeatureSupport) { _cached_decoder_for_DeviceAdditionalFeatureSupport = function (el: _Element): DeviceAdditionalFeatureSupport {
    let naiSupport: OPTIONAL<VersionType>;
    let groupOfDeviceManufacturerOid: OPTIONAL<OBJECT_IDENTIFIER>;
    const callbacks: $.DecodingMap = {
        "naiSupport": (_el: _Element): void => { naiSupport = _decode_VersionType(_el); },
        "groupOfDeviceManufacturerOid": (_el: _Element): void => { groupOfDeviceManufacturerOid = $._decodeObjectIdentifier(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceAdditionalFeatureSupport,
        _extension_additions_list_spec_for_DeviceAdditionalFeatureSupport,
        _root_component_type_list_2_spec_for_DeviceAdditionalFeatureSupport,
        undefined,
    );
    return new DeviceAdditionalFeatureSupport(
        naiSupport,
        groupOfDeviceManufacturerOid
    );
}; }
    return _cached_decoder_for_DeviceAdditionalFeatureSupport(el);
}

let _cached_encoder_for_DeviceAdditionalFeatureSupport: $.ASN1Encoder<DeviceAdditionalFeatureSupport> | null = null;

/**
 * @summary Encodes a(n) DeviceAdditionalFeatureSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceAdditionalFeatureSupport, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceAdditionalFeatureSupport (value: DeviceAdditionalFeatureSupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceAdditionalFeatureSupport) { _cached_encoder_for_DeviceAdditionalFeatureSupport = function (value: DeviceAdditionalFeatureSupport, elGetter: $.ASN1Encoder<DeviceAdditionalFeatureSupport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.naiSupport === undefined) ? undefined : _encode_VersionType(value.naiSupport, $.BER)),
            /* IF_ABSENT  */ ((value.groupOfDeviceManufacturerOid === undefined) ? undefined : $._encodeObjectIdentifier(value.groupOfDeviceManufacturerOid, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceAdditionalFeatureSupport(value, elGetter);
}


/* eslint-enable */
