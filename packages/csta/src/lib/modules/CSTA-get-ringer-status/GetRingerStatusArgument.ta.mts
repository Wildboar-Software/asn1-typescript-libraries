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
import { RingerID, _decode_RingerID, _encode_RingerID } from "../CSTA-physical-device-feature/RingerID.ta.mjs";
// export { RingerID, _decode_RingerID, _encode_RingerID } from "../CSTA-physical-device-feature/RingerID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetRingerStatusArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRingerStatusArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     ringer                RingerID                OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetRingerStatusArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `ringer`.
         * @public
         * @readonly
         */
        readonly ringer: OPTIONAL<RingerID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetRingerStatusArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetRingerStatusArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRingerStatusArgument`.
     * @returns {GetRingerStatusArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetRingerStatusArgument)]: (GetRingerStatusArgument)[_K] }): GetRingerStatusArgument {
        return new GetRingerStatusArgument(_o.device, _o.ringer, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetRingerStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRingerStatusArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("ringer", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetRingerStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRingerStatusArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRingerStatusArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRingerStatusArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRingerStatusArgument: $.ASN1Decoder<GetRingerStatusArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRingerStatusArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRingerStatusArgument (el: _Element): GetRingerStatusArgument {
    if (!_cached_decoder_for_GetRingerStatusArgument) { _cached_decoder_for_GetRingerStatusArgument = function (el: _Element): GetRingerStatusArgument {
    let device!: DeviceID;
    let ringer: OPTIONAL<RingerID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "ringer": (_el: _Element): void => { ringer = _decode_RingerID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetRingerStatusArgument,
        _extension_additions_list_spec_for_GetRingerStatusArgument,
        _root_component_type_list_2_spec_for_GetRingerStatusArgument,
        undefined,
    );
    return new GetRingerStatusArgument(
        device,
        ringer,
        extensions
    );
}; }
    return _cached_decoder_for_GetRingerStatusArgument(el);
}

let _cached_encoder_for_GetRingerStatusArgument: $.ASN1Encoder<GetRingerStatusArgument> | null = null;

/**
 * @summary Encodes a(n) GetRingerStatusArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRingerStatusArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetRingerStatusArgument (value: GetRingerStatusArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRingerStatusArgument) { _cached_encoder_for_GetRingerStatusArgument = function (value: GetRingerStatusArgument, elGetter: $.ASN1Encoder<GetRingerStatusArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.ringer === undefined) ? undefined : _encode_RingerID(value.ringer, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetRingerStatusArgument(value, elGetter);
}


/* eslint-enable */
