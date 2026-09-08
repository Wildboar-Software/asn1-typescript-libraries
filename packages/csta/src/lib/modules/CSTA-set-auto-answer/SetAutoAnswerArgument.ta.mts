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
 * @summary SetAutoAnswerArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAutoAnswerArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     autoAnswerOn            BOOLEAN,
 *     numberOfRings            INTEGER                    OPTIONAL,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetAutoAnswerArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `autoAnswerOn`.
         * @public
         * @readonly
         */
        readonly autoAnswerOn: BOOLEAN,
        /**
         * @summary `numberOfRings`.
         * @public
         * @readonly
         */
        readonly numberOfRings: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetAutoAnswerArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetAutoAnswerArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetAutoAnswerArgument`.
     * @returns {SetAutoAnswerArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetAutoAnswerArgument)]: (SetAutoAnswerArgument)[_K] }): SetAutoAnswerArgument {
        return new SetAutoAnswerArgument(_o.device, _o.autoAnswerOn, _o.numberOfRings, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetAutoAnswerArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetAutoAnswerArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("autoAnswerOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("numberOfRings", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SetAutoAnswerArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetAutoAnswerArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetAutoAnswerArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetAutoAnswerArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetAutoAnswerArgument: $.ASN1Decoder<SetAutoAnswerArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAutoAnswerArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAutoAnswerArgument (el: _Element): SetAutoAnswerArgument {
    if (!_cached_decoder_for_SetAutoAnswerArgument) { _cached_decoder_for_SetAutoAnswerArgument = function (el: _Element): SetAutoAnswerArgument {
    let device!: DeviceID;
    let autoAnswerOn!: BOOLEAN;
    let numberOfRings: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "autoAnswerOn": (_el: _Element): void => { autoAnswerOn = $._decodeBoolean(_el); },
        "numberOfRings": (_el: _Element): void => { numberOfRings = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetAutoAnswerArgument,
        _extension_additions_list_spec_for_SetAutoAnswerArgument,
        _root_component_type_list_2_spec_for_SetAutoAnswerArgument,
        undefined,
    );
    return new SetAutoAnswerArgument(
        device,
        autoAnswerOn,
        numberOfRings,
        extensions
    );
}; }
    return _cached_decoder_for_SetAutoAnswerArgument(el);
}

let _cached_encoder_for_SetAutoAnswerArgument: $.ASN1Encoder<SetAutoAnswerArgument> | null = null;

/**
 * @summary Encodes a(n) SetAutoAnswerArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAutoAnswerArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetAutoAnswerArgument (value: SetAutoAnswerArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAutoAnswerArgument) { _cached_encoder_for_SetAutoAnswerArgument = function (value: SetAutoAnswerArgument, elGetter: $.ASN1Encoder<SetAutoAnswerArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.autoAnswerOn, $.BER),
            /* IF_ABSENT  */ ((value.numberOfRings === undefined) ? undefined : $._encodeInteger(value.numberOfRings, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetAutoAnswerArgument(value, elGetter);
}


/* eslint-enable */
