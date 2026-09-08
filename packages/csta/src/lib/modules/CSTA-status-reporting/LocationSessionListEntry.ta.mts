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
import { LocCrossRefID, _decode_LocCrossRefID, _encode_LocCrossRefID } from "../CSTA-device-feature-types/LocCrossRefID.ta.mjs";
// export { LocCrossRefID, _decode_LocCrossRefID, _encode_LocCrossRefID } from "../CSTA-device-feature-types/LocCrossRefID.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";


/**
 * @summary LocationSessionListEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationSessionListEntry ::= SEQUENCE
 * {    locCrossRefID            LocCrossRefID,
 *     locDevice            DeviceID }
 * ```
 * 
 * @class
 */
export
class LocationSessionListEntry {
    constructor (
        /**
         * @summary `locCrossRefID`.
         * @public
         * @readonly
         */
        readonly locCrossRefID: LocCrossRefID,
        /**
         * @summary `locDevice`.
         * @public
         * @readonly
         */
        readonly locDevice: DeviceID
    ) {}

    /**
     * @summary Restructures an object into a LocationSessionListEntry
     * @description
     * 
     * This takes an `object` and converts it to a `LocationSessionListEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationSessionListEntry`.
     * @returns {LocationSessionListEntry}
     */
    public static _from_object (_o: { [_K in keyof (LocationSessionListEntry)]: (LocationSessionListEntry)[_K] }): LocationSessionListEntry {
        return new LocationSessionListEntry(_o.locCrossRefID, _o.locDevice);
    }


}

/**
 * @summary The Leading Root Component Types of LocationSessionListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationSessionListEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("locCrossRefID", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("locDevice", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LocationSessionListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationSessionListEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationSessionListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationSessionListEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationSessionListEntry: $.ASN1Decoder<LocationSessionListEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationSessionListEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationSessionListEntry (el: _Element): LocationSessionListEntry {
    if (!_cached_decoder_for_LocationSessionListEntry) { _cached_decoder_for_LocationSessionListEntry = function (el: _Element): LocationSessionListEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LocationSessionListEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "locCrossRefID";
    sequence[1].name = "locDevice";
    let locCrossRefID!: LocCrossRefID;
    let locDevice!: DeviceID;
    locCrossRefID = _decode_LocCrossRefID(sequence[0]);
    locDevice = _decode_DeviceID(sequence[1]);
    return new LocationSessionListEntry(
        locCrossRefID,
        locDevice,

    );
}; }
    return _cached_decoder_for_LocationSessionListEntry(el);
}

let _cached_encoder_for_LocationSessionListEntry: $.ASN1Encoder<LocationSessionListEntry> | null = null;

/**
 * @summary Encodes a(n) LocationSessionListEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationSessionListEntry, encoded as an ASN.1 Element.
 */
export
function _encode_LocationSessionListEntry (value: LocationSessionListEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationSessionListEntry) { _cached_encoder_for_LocationSessionListEntry = function (value: LocationSessionListEntry, elGetter: $.ASN1Encoder<LocationSessionListEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocCrossRefID(value.locCrossRefID, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.locDevice, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationSessionListEntry(value, elGetter);
}


/* eslint-enable */
