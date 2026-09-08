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
import { CallOrigination, CallOrigination_internal /* IMPORTED_LONG_NAMED_BIT */, internal /* IMPORTED_SHORT_NAMED_BIT */, CallOrigination_external /* IMPORTED_LONG_NAMED_BIT */, external /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallOrigination, _encode_CallOrigination } from "../CSTA-device-feature-types/CallOrigination.ta.mjs";
// export { CallOrigination, CallOrigination_internal /* IMPORTED_LONG_NAMED_BIT */, internal /* IMPORTED_SHORT_NAMED_BIT */, CallOrigination_external /* IMPORTED_LONG_NAMED_BIT */, external /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallOrigination, _encode_CallOrigination } from "../CSTA-device-feature-types/CallOrigination.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SetDoNotDisturbArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDoNotDisturbArgument ::= SEQUENCE
 * {    device                DeviceID,
 *     doNotDisturbOn            BOOLEAN,
 *     callOrigination            CallOrigination                OPTIONAL,
 *     callingDeviceList        SEQUENCE OF DeviceID            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetDoNotDisturbArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `doNotDisturbOn`.
         * @public
         * @readonly
         */
        readonly doNotDisturbOn: BOOLEAN,
        /**
         * @summary `callOrigination`.
         * @public
         * @readonly
         */
        readonly callOrigination: OPTIONAL<CallOrigination>,
        /**
         * @summary `callingDeviceList`.
         * @public
         * @readonly
         */
        readonly callingDeviceList: OPTIONAL<DeviceID[]>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetDoNotDisturbArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetDoNotDisturbArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetDoNotDisturbArgument`.
     * @returns {SetDoNotDisturbArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetDoNotDisturbArgument)]: (SetDoNotDisturbArgument)[_K] }): SetDoNotDisturbArgument {
        return new SetDoNotDisturbArgument(_o.device, _o.doNotDisturbOn, _o.callOrigination, _o.callingDeviceList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetDoNotDisturbArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetDoNotDisturbArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("doNotDisturbOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("callOrigination", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("callingDeviceList", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SetDoNotDisturbArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetDoNotDisturbArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetDoNotDisturbArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetDoNotDisturbArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetDoNotDisturbArgument: $.ASN1Decoder<SetDoNotDisturbArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDoNotDisturbArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDoNotDisturbArgument (el: _Element): SetDoNotDisturbArgument {
    if (!_cached_decoder_for_SetDoNotDisturbArgument) { _cached_decoder_for_SetDoNotDisturbArgument = function (el: _Element): SetDoNotDisturbArgument {
    let device!: DeviceID;
    let doNotDisturbOn!: BOOLEAN;
    let callOrigination: OPTIONAL<CallOrigination>;
    let callingDeviceList: OPTIONAL<DeviceID[]>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "doNotDisturbOn": (_el: _Element): void => { doNotDisturbOn = $._decodeBoolean(_el); },
        "callOrigination": (_el: _Element): void => { callOrigination = _decode_CallOrigination(_el); },
        "callingDeviceList": (_el: _Element): void => { callingDeviceList = $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetDoNotDisturbArgument,
        _extension_additions_list_spec_for_SetDoNotDisturbArgument,
        _root_component_type_list_2_spec_for_SetDoNotDisturbArgument,
        undefined,
    );
    return new SetDoNotDisturbArgument(
        device,
        doNotDisturbOn,
        callOrigination,
        callingDeviceList,
        extensions
    );
}; }
    return _cached_decoder_for_SetDoNotDisturbArgument(el);
}

let _cached_encoder_for_SetDoNotDisturbArgument: $.ASN1Encoder<SetDoNotDisturbArgument> | null = null;

/**
 * @summary Encodes a(n) SetDoNotDisturbArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDoNotDisturbArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetDoNotDisturbArgument (value: SetDoNotDisturbArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDoNotDisturbArgument) { _cached_encoder_for_SetDoNotDisturbArgument = function (value: SetDoNotDisturbArgument, elGetter: $.ASN1Encoder<SetDoNotDisturbArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.doNotDisturbOn, $.BER),
            /* IF_ABSENT  */ ((value.callOrigination === undefined) ? undefined : _encode_CallOrigination(value.callOrigination, $.BER)),
            /* IF_ABSENT  */ ((value.callingDeviceList === undefined) ? undefined : $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER)(value.callingDeviceList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetDoNotDisturbArgument(value, elGetter);
}


/* eslint-enable */
